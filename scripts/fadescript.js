$(window).ready(function() {
  console.log("jQuery is loaded and ready");

  function applyFading() {
    var windowHeight = $(window).height();
    var windowCenter = $(window).scrollTop() + (windowHeight / 2);

    $(".animated-text").each(function() {
      var $this = $(this);
      var elementTop = $this.offset().top;
      var elementHeight = $this.outerHeight();
      var elementCenter = elementTop + (elementHeight / 2);

      var distanceToCenter = Math.abs(windowCenter - elementCenter);
      var maxDistance = windowHeight / 2;

      var opacity = 1 - (distanceToCenter / maxDistance);
      opacity = Math.max(0, Math.min(1, opacity));

      $this.css("opacity", opacity);
    });
  }

  $(window).on('scroll resize', function() {
    applyFading();
  });

  applyFading(); // Initial check
});