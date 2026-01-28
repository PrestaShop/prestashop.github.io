// DOM element IDs for tools
const TOOL_ELEMENT_IDS = {
  adminAbsPath: 'admin_abs_path',
  username: 'username',
  password: 'password'
};

function getHtaccessContent() {
  const path = document.getElementById(TOOL_ELEMENT_IDS.adminAbsPath)?.value || '';

  return [
    `AuthUserFile ${path}/.htpasswd`,
    'AuthName "Dave\'s Login Area"',
    'AuthType Basic',
    ''
  ].join('\r\n');
}

function getHtpasswdContent() {
  const username = document.getElementById(TOOL_ELEMENT_IDS.username)?.value || '';
  const password = document.getElementById(TOOL_ELEMENT_IDS.password)?.value || '';
  const hashedpwd = CryptoJS.MD5(password);

  return `${username}:${hashedpwd}`;
}

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


$(document).ready(() => {
  // Constants
  const MOBILE_BREAKPOINT = 989;
  const SEARCH_OVERLAY_FOCUS_DELAY = 300;

  // Selector map
  const SELECTORS = {
    navigation: '#navigation',
    menuToggle: '#menu-toggle',
    dropdownToggle: '.dropdown-toggle',
    dropdownItem: 'li.dropdown',
    dropdownMenu: '> .dropdown-menu > li > a',
    mobileNavBack: '.mobile-nav-back',
    mobileNavSubmenu: '.mobile-nav-submenu',
    mobileNavSubmenuTitle: '.mobile-nav-submenu-title',
    mobileNavSubmenuList: '.mobile-nav-submenu-list',
    searchToggle: '#search-toggle',
    searchClose: '#search-close',
    searchOverlay: '#search-overlay',
    searchInput: '#aa-search-input',
    generateHtaccess: '#generate-htaccess',
    generateHtpasswd: '#generate-htpasswd'
  };

  // Utility functions
  const isMobileNav = () => {
    return window.matchMedia && window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  };

  const resetMobileSubmenu = () => {
    const $nav = $(SELECTORS.navigation);
    $nav.removeClass('is-submenu');
    $nav.find(SELECTORS.mobileNavSubmenuTitle).text('');
    $nav.find(SELECTORS.mobileNavSubmenuList).empty();
    $nav.find(SELECTORS.mobileNavSubmenu).attr('aria-hidden', 'true');
  };

  // Mobile menu toggle
  $(document).on('click', SELECTORS.menuToggle, function() {
    const $nav = $(SELECTORS.navigation);
    const isOpen = $(this).attr('aria-expanded') === 'true';

    $nav.toggle(!isOpen);
    resetMobileSubmenu();
    $(this).attr('aria-expanded', String(!isOpen));
  });

  // Mobile drilldown submenu (slide-through)
  $(SELECTORS.navigation).on('click', SELECTORS.dropdownToggle, function(e) {
    if (!isMobileNav()) return;

    e.preventDefault();
    e.stopPropagation();

    const $nav = $(SELECTORS.navigation);
    const $li = $(this).closest(SELECTORS.dropdownItem);
    const $submenuLinks = $li.find(SELECTORS.dropdownMenu);

    if ($submenuLinks.length === 0) return;

    const title = $(this).clone().children().remove().end().text().trim();
    const $list = $nav.find(SELECTORS.mobileNavSubmenuList);

    $list.empty();
    $submenuLinks.each(function() {
      const $link = $(this).clone();
      $list.append($('<li />').append($link));
    });

    $nav.find(SELECTORS.mobileNavSubmenuTitle).text(title);
    $nav.find(SELECTORS.mobileNavSubmenu).attr('aria-hidden', 'false');
    $nav.addClass('is-submenu');
  });

  $(SELECTORS.navigation).on('click', SELECTORS.mobileNavBack, function() {
    if (!isMobileNav()) return;
    resetMobileSubmenu();
  });

  // Search overlay
  $(document).on('click', SELECTORS.searchToggle, () => {
    $(SELECTORS.searchOverlay).addClass('active');
    setTimeout(() => {
      $(SELECTORS.searchInput).focus();
    }, SEARCH_OVERLAY_FOCUS_DELAY);
  });

  $(document).on('click', SELECTORS.searchClose, () => {
    $(SELECTORS.searchOverlay).removeClass('active');
  });

  // Close overlay on Escape key
  $(document).on('keyup', (e) => {
    if (e.key === 'Escape') {
      $(SELECTORS.searchOverlay).removeClass('active');
    }
  });

  // Close overlay when clicking outside the search box
  $(document).on('click', SELECTORS.searchOverlay, function(e) {
    if (e.target === this) {
      $(this).removeClass('active');
    }
  });

  // Tools
  $(document).on('click', SELECTORS.generateHtaccess, (e) => {
    e.preventDefault();
    download('.htaccess', getHtaccessContent());
  });

  $(document).on('click', SELECTORS.generateHtpasswd, (e) => {
    e.preventDefault();
    download('.htpasswd', getHtpasswdContent());
  });
});
