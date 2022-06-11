const rippleButton = document.querySelector(".ripple-btn");

function mousePositionToCustomProps(e, el) {
  let posX = e.offsetX;
  let posY = e.offsetY;

  el.style.setProperty("--x", posX + "px");
  el.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", e => {
  mousePositionToCustomProps(e, rippleButton);
  rippleButton.classList.add("pulse");
  rippleButton.addEventListener("animationend", () => {
    rippleButton.classList.remove("pulse");
  })
});