$(document).ready(function() {
  var $body = $('html, body');
  var $tags = $('#goto-mission, #goto-facts, #goto-programs, #goto-exec, #goto-resources');

  $tags.click(function(e) {
    var elementName = e.target.id.substr(5);
    $body.animate({
      scrollTop: $('#'+elementName).offset().top - 60
    }, 800);
  });
});

