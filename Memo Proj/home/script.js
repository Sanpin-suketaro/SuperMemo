const button = document.getElementById("useButton");
const resizeFont = () => {
  const height = button.offsetHeight;
  button.style.fontSize = `${height * 0.4}px`; // 高さの40%をフォントサイズに
};

resizeFont();
window.addEventListener("resize", resizeFont);