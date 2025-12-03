window.addEventListener('load', () => { document.getElementById('loader').style.display = 'none'; });
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => { e.preventDefault(); form.querySelector('.success').style.display = 'block'; form.reset(); });