var $firstBox = $(".first-box");
var $secondBox = $(".second-box");
var $firstBoxToRight = $(".first-box--to-left");

let b = event => {
  let mouseData = event.deltaY;
  if (mouseData > 0) {
    $firstBox.addClass("zoomOut");
    setTimeout(() => $secondBox.addClass("fadeInUp"), 1500);
    $firstBoxToRight.addClass("right");
  } else if (mouseData < 0) {
    setTimeout(() => $firstBoxToRight.removeClass("right"), 2000);
    setTimeout(() => $secondBox.removeClass("fadeInUp"), 2000);
    setTimeout(() => $firstBox.removeClass("zoomOut"), 2000);
    $secondBox.addClass("zoomOut");
    $firstBox.addClass("zoomIn");
    setTimeout(() => $secondBox.removeClass("zoomOut"), 2000);
  }
};

window.addEventListener("wheel", b);
