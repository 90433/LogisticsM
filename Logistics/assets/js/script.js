let burgerMenuBtn = document.querySelector(".burger-menu-icon");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenuBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    burgerMenu.style.transform = "translateX(0)";
  }
  else {
    burgerMenu.style.transform = "translateX(-100%)";
  };
  burgerMenu.style.transition = "0.4s";
})

document.getElementById('search-icon').addEventListener('click', function() {
  const container = document.getElementById('search-container');
  container.style.display = container.style.display === 'block' ? 'none' : 'block';
});


document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-input').value;
  alert('Searching for: ' + query);
});


window.addEventListener('click', function(event) {
  const container = document.getElementById('search-container');
  const icon = document.getElementById('search-icon');
  if (!container.contains(event.target) && event.target !== icon) {
      container.style.display = 'none';
  }
});
