document.getElementById("q").addEventListener("click", function () {
  console.log("cli");
  document.getElementById("lu").classList.toggle("showmodal");
});
document.getElementById("q2").addEventListener("click", function () {
  console.log("cli");
  document.getElementById("lu").classList.remove("showmodal");
});
