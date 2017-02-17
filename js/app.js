function getHtaccessContent() {
  var path = document.getElementById('admin_abs_path').value;

  var content = '';
  content += 'AuthUserFile ' + path + '/.htpasswd'+'\r\n';
  content += 'AuthName "Dave\'s Login Area"'+'\r\n';
  content += 'AuthType Basic'+'\r\n';

  return content;
}

function getHtpasswdContent() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var hashedpwd = CryptoJS.MD5(password);

  return username+':'+hashedpwd;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


$(document).ready(function() {

  $('.site-header .menu-button').click(function() {
    $('#search').hide();
    $('#navigation').toggle();
  });
  $('.site-header .search-button').click(function() {
    $('#navigation').hide();
    $('#algolia-container').toggle();
  });



  // Tools

  $('#generate-htaccess').click(function(e){
    e.preventDefault();
    download('.htaccess', getHtaccessContent());
  })

  $('#generate-htpasswd').click(function(e){
    e.preventDefault();
    download('.htpasswd', getHtpasswdContent());
  })
});
