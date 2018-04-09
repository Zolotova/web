
function open() {

}

$(document).ready(function() {
  var hash = window.location.hash.substr(1);
  var href = $('#menubar_list li a').each(function() {
    var href = $(this).attr('href');
    if (hash == href.substr(0, href.length - 5)) {
      this.parentNode.classList.add('selected');
      var toLoad = hash + '.html';
      $('#content').load(toLoad, '', setAction);
    } else if (hash == '' && href == 'first.html') {
      this.parentNode.classList.add('selected');
      var toLoad = href;
      $('#content').load(toLoad, '', setAction);
    }
    function setAction() {
    $(':button').click(function(event) {
      var toLoad = 'news.html #content .' + event.target.className;
      $('#content').hide('fast', loadContent);

      function loadContent() {
        $('#content').load(toLoad, '', showNewContent);

      }

      function showNewContent() {
        $('#content').show('normal');
      }
      return false;
    });
  }
  });
  $('#menubar_list li a').click(function(event) {
    var toLoad = $(this).attr('href');
    $('#menubar_list li').each(function() {
      this.classList.remove('selected');
    });
    event.target.parentNode.classList.add('selected');
    $('#content').hide('fast', loadContent);

    window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);

    function loadContent() {
      $('#content').load(toLoad, '', showNewContent);

    }

    function showNewContent() {
      $('#content').show('normal');
    }
    return false;
  })

});
