const menuLinks = document.querySelectorAll('.menu-item a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    const menuItems = document.querySelectorAll('.menu-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('show'); 
        });
    });
});


window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const contatoSection = document.getElementById('contato');
  const footer = document.querySelector('footer');

    const contatoPosition = contatoSection.getBoundingClientRect().top;
    const footerPosition = footer.getBoundingClientRect().top;

  if (contatoPosition <= window.innerHeight || footerPosition <= window.innerHeight) {
    header.style.position = 'static'; // Remove o position: fixed
  } else {
    header.style.position = 'fixed'; // Restaura o position: fixed
  }
});
