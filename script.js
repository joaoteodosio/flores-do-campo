// ===== MENU HAMBÚRGUER =====
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

// ===== DESTACAR LINK ATIVO AO ROLAR =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ===== MUDA FUNDO DO NAVBAR AO ROLAR =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});


// QUEM SOMOS//

// ===== ANIMAÇÃO DE ENTRADA "QUEM SOMOS" =====
const quemSomosSection = document.querySelector('.quem-somos-container');

window.addEventListener('scroll', () => {
  const sectionTop = quemSomosSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    quemSomosSection.classList.add('show');
  }
});

// PRODUTOS//

// ===== ANIMAÇÃO DE ENTRADA PRODUTOS =====
const produtosGrid = document.querySelector('.grid-produtos');

window.addEventListener('scroll', () => {
  const gridTop = produtosGrid.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (gridTop < windowHeight - 100) {
    produtosGrid.classList.add('show');
  }
});

// ===== ANIMAÇÃO DE ENTRADA DEPOIMENTOS =====
const depoimentosGrid = document.querySelector('.grid-depoimentos');

window.addEventListener('scroll', () => {
  const gridTop = depoimentosGrid.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (gridTop < windowHeight - 100) {
    depoimentosGrid.classList.add('show');
  }
});

// contato //
// ===== FEEDBACK DE ENVIO DO FORMULÁRIO =====
const form = document.querySelector('.contato-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const action = form.getAttribute('action');

  fetch(action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset();
      alert('✅ Mensagem enviada com sucesso! Em breve entraremos em contato.');
    } else {
      alert('❌ Ocorreu um erro. Tente novamente.');
    }
  });
});
