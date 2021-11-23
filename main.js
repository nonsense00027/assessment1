console.log("script imported test");

var panels = document.getElementsByClassName("panel");
var accordions = document.getElementsByClassName("accordion__button");
console.log(accordions);
var i;
for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingTop = "0";
      panel.style.paddingBottom = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 20 + "px";
      panel.style.paddingTop = "10px";
      panel.style.paddingBottom = "10px";
    }
  });
}
