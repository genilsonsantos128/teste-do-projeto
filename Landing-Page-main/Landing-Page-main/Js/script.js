document.addEventListener('DOMContentLoaded', function () {
  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const menu = document.querySelector('nav ul');

  menuHamburguer.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuHamburguer.textContent = menu.classList.contains('show') ? '✖' : '☰';
  });

  const foneImg = document.getElementById('fone-img');

  foneImg.addEventListener('mousemove', (e) => {
    const rect = foneImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) / 20;
    const moveY = (y - rect.height / 2) / 20;

    foneImg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
  });

  foneImg.addEventListener('mouseleave', () => {
    foneImg.style.transform = 'scale(1)';
  });

  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showNextTestimonial() {
    testimonials.forEach((testimonial, index) => {
      testimonial.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  setInterval(showNextTestimonial, 5000); // Muda a cada 5 segundos

  // Inicializa a posição dos depoimentos
  showNextTestimonial();

  // Modal
  const modal = document.getElementById('modal');
  const buyButton = document.getElementById('compra');
  const closeModalButton = document.querySelector('.close');
  const purchaseForm = document.getElementById('purchase-form');
  const confirmation = document.querySelector('.confirmation');

  buyButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);
  purchaseForm.addEventListener('submit', handleFormSubmit);

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    purchaseForm.style.display = 'none';
    confirmation.style.display = 'flex';
    setTimeout(() => {
      confirmation.style.display = 'none';
      closeModal();
      purchaseForm.reset();
      purchaseForm.style.display = 'block';
    }, 3000);
  }
});
