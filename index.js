function openNav() {
  var width = window.innerWidth;

  if (width < 600) {
    document.getElementById("mySidebar").style.width = "100vw";
  } else {
    document.getElementById("mySidebar").style.width = "250px";
  }

  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
