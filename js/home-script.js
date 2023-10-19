document.addEventListener("DOMContentLoaded", function () {
  // Get all interactive widgets
  var interactiveWidgets = document.querySelectorAll(".interactive-widget");

  interactiveWidgets.forEach(function (widget) {
    var widgetFront = widget.querySelector(".widget-front");
    var widgetBack = widget.querySelector(".widget-back");

    // Add a mouseenter event to flip the widget on hover
    widget.addEventListener("mouseenter", function () {
      widgetFront.style.transform = "rotateY(-180deg)";
      widgetBack.style.transform = "rotateY(0deg)";
      widget.style.transform = "scale(1.1)"; // Enlarge on hover
    });

    // Add a mouseleave event to flip the widget back
    widget.addEventListener("mouseleave", function () {
      widgetFront.style.transform = "rotateY(0deg)";
      widgetBack.style.transform = "rotateY(180deg)";
      widget.style.transform = "scale(1)"; // Restore size
    });
  });
});
