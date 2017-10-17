$(function() {
  $("#hello").click(function() {
    $("ul.user").prepend("<li>Hello!</li>");
    $("ul.webpage").prepend("<li>Hey!</li>");
    $("ul.user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul.webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#goodbye").click(function() {
    $("ul.user").prepend("<li>Bill Nye bye!</li>");
    $("ul.webpage").prepend("<li>C-ya</li>");
    $("ul.user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul.webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#stop").click(function() {
    $("ul.user").prepend("<li>Halt and catch fire!</li>");
    $("ul.webpage").prepend("<li>Stoppit!</li>");
    $("ul.user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul.webpage").children("li").first().click(function() {
      $(this).remove();
      });
    });

});
