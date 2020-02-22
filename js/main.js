// Animate navbar into view on page load
var scrollPromptTrig = setTimeout(scrollPrompt, 3000);

function scrollPrompt() {
  document.getElementById("navBar").classList.add("scroll-prompt")
}

// Scroll events
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("nav").outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, remove class .scroll-prompt from #navBar.
  if ($(window).scrollTop() > navbarHeight) {
    // Scroll Down
    $("#navBar").removeClass("scroll-prompt");
  } else {
    // Scroll Up
    if ($(window).scrollTop() < navbarHeight) {
      $("#navBar").addClass("scroll-prompt");
    }
  }

  lastScrollTop = st;
}
