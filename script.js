document.getElementById("downloadLink").addEventListener("click", function () {
  var link = document.createElement("a");
  link.href = "assets/TileTalks.pdf";
  link.download = "TileTalks.pdf";
  link.click();
});
//<script src="script.js"></script>
