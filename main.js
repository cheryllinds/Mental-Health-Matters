function toggleDarkMode(){
  const bodyElement = document.getElementById("main-background")
  const buttonLabel = document.getElementById("dark-mode")
//   if (bodyElement.style.background == "rgb(56, 48, 95)") {
//     bodyElement.style.background = "white";
//     buttonLabel.innerText = "Dark Mode";
//     buttonLabel.style.background = "white";
//     buttonLabel.style.color = "black";
//     buttonLabel.style.borderColor = "rgb(56, 48, 95)";
//     buttonLabel.style.borderColor = "white";
//   }
//   else {
//     bodyElement.style.background = "rgb(56, 48, 95)";
//     buttonLabel.innerText = "Light Mode";
//     buttonLabel.style.background = "black";
//     buttonLabel.style.color = "white";
//   }
// }
  if (bodyElement.style.background == "white") {
    bodyElement.style.background = "#38305F"
    buttonLabel.innerText = "Light Mode"
    buttonLabel.style.background = "#38305F"
    buttonLabel.style.color = "white"
    buttonLabel.style.borderColor = "white"
    console.log (bodyElement.style.background)
  }
  else {
    bodyElement.style.background = "white"
    buttonLabel.innerText = "Dark Mode"
    buttonLabel.style.background = "white"
    buttonLabel.style.color = "#38305F"
    buttonLabel.style.borderColor = "#38305F"
    console.log (bodyElement.style.background)
  }

}

// function hoverNavLink() {
//   const navLink = document.getElementsByClassName("no-underline")
//   if (navLink.style.color == "white") {
//     navLink.style.color = "black"
//   }
//   else {
//     navLink.style.color = "white"
//   }
// }
