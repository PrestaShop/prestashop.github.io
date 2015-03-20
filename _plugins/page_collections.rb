module Jekyll
  module PageCollections
    VERSION = "1.0.0"

    class PageCollectionConfiguration
      attr_reader :name

      def initialize(site, name)
        @site_config = site.config
        @name = name
        @config = (@site_config['page_collections'].find { |c|
          name = if c.is_a?(Hash)
                     c.keys.first
                 else
                     c.to_s
                 end
          name == @name
        }[@name]) || {}
      end

      def permalink_style
        (@config['permalink'] || @site_config['permalink']).to_sym
      end

      def containing_dir
        @config['source'] || "_#{@name}"
      end
    end

    # A collection of CollectionPages
    class PageCollection
      ATTRIBUTES_FOR_LIQUID = %w[
        name
        pages
        categories
        tags
      ]

      attr_accessor :name, :pages, :categories, :tags

      def initialize(name)
        @name = name
        @pages = []
        @categories = Hash.new { |hash, key| hash[key] = [] }
        @tags = Hash.new { |hash, key| hash[key] = [] }
      end

      def add_page(page)
        @pages << page
        page.categories.each { |c| @categories[c] << page }
        page.tags.each { |c| @tags[c] << page }
      end

      def add_pages(pages)
        pages.each { |page| self.add_page(page) }
      end

      def to_liquid(attrs = nil)
        Hash[(attrs || self.class::ATTRIBUTES_FOR_LIQUID).map { |attribute|
          [attribute, send(attribute)]
        }]
      end
    end

    class CollectionPage < Post
      def initialize(site, source, dir, name, config)
        @config = config
        super(site, source, dir, name)
      end

      def containing_dir(source, dir)
        return File.join(source, dir, @config.containing_dir)
      end

      def relative_path
        File.join(@dir, @config.containing_dir, @name)
      end

      def inspect
        "<CollectionPage: #{self.id}"
      end

      def template
        style = case @config.permalink_style
                when :pretty
                  "/:categories/:year/:month/:day/:title/"
                when :none
                  "/:categories/:title.html"
                when :date
                  "/:categories/:year/:month/:day/:title.html"
                when :ordinal
                  "/:categories/:year/:y_day/:title.html"
                else
                  @config.permalink_style.to_s
                end
        "/#{@config.name}#{style}"
      end

      def next
        pages = self.site.data['page_collections'][@config.name].pages
        pos = pages.index(self)

        if pos && pos < pages.length-1
          pages[pos+1]
        else
          nil
        end
      end

      def previous
        pages = self.site.data['page_collections'][@config.name].pages
        pos = pages.index(self)
        if pos && pos > 0
          pages[pos-1]
        else
          nil
        end
      end

      # Methods from Page

      def uses_relative_permalinks
        false
      end

      def html?
        output_ext == '.html'
      end
    end

    class PageCollectionGenerator < Generator
      def generate(site)
        collections = site.config['page_collections'] || []
        site.data['page_collections'] = {}
        collections.each do |collection|
          name = if collection.is_a?(Hash)
                     collection.keys.first
                 else
                     collection.to_s
                 end
          config = PageCollectionConfiguration.new(site, name)
          pages = read_content(site, config, CollectionPage).sort
          page_collection = PageCollection.new(name)
          page_collection.add_pages(pages)
          site.pages.concat(pages)
          site.data['page_collections'][name] = page_collection
        end
      end

      private

      def read_content(site, config, klass)
        dir = ''
        site.get_entries(dir, config.containing_dir).map do |entry|
          klass.new(site, site.source, dir, entry, config) if klass.valid?(entry)
        end.reject do |entry|
          entry.nil?
        end
      end
    end

    class PageUrl < Jekyll::Tags::PostUrl
      TagName = 'page_url'
      Syntax = /^([\w-]+)\s+((?:.+\/)*\d+-\d+-\d+-.*)$/

      def initialize(tag_name, markup, tokens)
        if markup && markup.strip =~ Syntax
          @collection = $1
          post_name   = $2
        else
          raise SyntaxError.new("Syntax Error in '#{TagName}' - Valid syntax: #{TagName} <collection> <page>")
        end

        super(tag_name, post_name, tokens)
      end

      def render(context)
        site = context.registers[:site]

        if site.data['page_collections'] && site.data['page_collections'][@collection]
          site.data['page_collections'][@collection].pages.each do |p|
            if @post == p
              return p.url
            end
          end

          raise ArgumentError.new <<-eos
Could not find page "#{@orig_post}" in collection "#{@collection}" in tag '#{TagName}'.

Make sure the page exists and the name is correct.
eos
        else
          raise ArgumentError.new <<-eos
Could not find page collection "#{@collection}" in tag '#{TagName}'

Make sure the collection exists and the name is correct.
eos
        end
      end
    end
  end
end

Liquid::Template.register_tag(Jekyll::PageCollections::PageUrl::TagName, Jekyll::PageCollections::PageUrl)
