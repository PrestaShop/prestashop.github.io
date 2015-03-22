module Jekyll
  class AlertBlock < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @type = text
    end

    require "kramdown"

    def render(context)
      if tag_contents = determine_arguments(@markup.strip)
        content = super
        alert_type, hide_title = tag_contents[0], tag_contents[1]
        alert_tag(content, alert_type, hide_title)
      else
        raise ArgumentError.new <<-eos
Syntax error in tag 'alert' while parsing the following markup:
  #{@markup}
Valid syntax:
  opening: {% alert note|info %}
  closing: {% endalert %}
eos
      end

    end
    
    private 

    def determine_arguments(input)
      matched = input.match(/\A(\S+) ?(\S+)?\Z/)
      [matched[1].to_s.strip, matched[2].to_s.strip] if matched && matched.length >= 3
    end

    def alert_tag(content, alert_type, hide_title = nil)
      str = "<div class='alert alert-#{alert_type}' role='alert'>"
      
      if hide_title.empty?
        if (alert_type == 'note')
          str << "<h4><i class='fa fa-file-text-o'></i> Note</h4>"
        elsif (alert_type == 'info')
          str << "<h4><i class='fa fa-info-circle'></i> Info</h4>"
        end
      end

      str << "#{Kramdown::Document.new(content).to_html}"
      str << "</div>"
    end

  end
end
Liquid::Template.register_tag('alert', Jekyll::AlertBlock)