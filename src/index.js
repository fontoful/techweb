// fetching the Dom string

document.getElementById("text").style.visibility = "hidden";

let myTitle = document.getElementById("title");

myTitle.addEventListener("mouseover", function() {
  document.getElementById("text").style.visibility = "visible";
});
