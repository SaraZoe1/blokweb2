let deButton = document.querySelector("header button");

deButton.onclick = toggleMenu;

function toggleMenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.toggle("active");
}

console.log('hallo')
