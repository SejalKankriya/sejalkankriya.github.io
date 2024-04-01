$(document).ready(function () {
  
  /**
   * Toggle the menu icon and navbar classes when the menu icon is clicked.
   * Also toggle the "no-scroll" class on the body to control scrolling.
   */
  $("#menu").click(function () {
    // console.log('clicked');
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
    $("body").toggleClass("no-scroll"); // Toggle the body class to control scrolling
  });

  /**
   * On scroll load event, this function toggles the "fa-times" class
   * on the menu icon and removes the "nav-toggle" class from the navbar.
   * It also removes the "no-scroll" class from the body to control scrolling.
   * Additionally, it iterates over each section and checks if the current
   * scroll position is within the bounds of that section. If it is,
   * it removes the "active" class from all navbar links and adds the
   * "active" class to the link corresponding to the current section.
   */
  $(window).on("scroll load", function () {
    // if ($('.navbar').hasClass('nav-toggle')) {
    //     return;
    // }
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    if ($(".navbar").hasClass("nav-toggle")) {
      $(".navbar").removeClass("nav-toggle");
      $("body").removeClass("no-scroll");
      $("#menu").removeClass("fa-times");
      return;
    }

    // Prevent the default anchor behavior
    e.preventDefault();

    // Animate the scroll to the section
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

/**
 * This event listener is triggered when the document's visibility
 * state changes. It sets the document title to "your name" and
 * updates the href attribute of the favicon element to
 * "assets/img/favicon/favicon.png" when the document becomes visible.
 */
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Sejal Kankriya";
    $("#favicon").attr("href", "assets/img/favicon/favicon.png");
  }
});

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/**
 * Initialize ScrollReveal with configuration options.
 *
 * This function initializes ScrollReveal with the specified configuration
 * options. The options define the behavior of ScrollReveal, such as the
 * origin of the reveal animation (top in this case), the distance the
 * element should move when it is revealed, the duration of the animation,
 * and whether the animation should be reset when the page is scrolled.
 *
 * @return {void} This function does not return a value.
 */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/**
 * This event listener is triggered when the DOM content is loaded.
 * It initializes the Lottie animation by passing the necessary parameters.
 *
 * @return {void} This function does not return a value.
 */
document.addEventListener("DOMContentLoaded", function () {
  var params = {
    container: document.getElementById("lottie-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/animation/home-animation.json",
  };

  lottie.loadAnimation(params);
});
