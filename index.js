var button = document.querySelector("#dark");
var body = document.querySelector(".body");
var status = dark;

function lightMode() {
  if (status == dark) {
    lightMode.setAttribute("id", ".body");
    status = "light";
  } else {
    lightMode.setAttribute("id", "body");
    status = "dark";
  }
}
