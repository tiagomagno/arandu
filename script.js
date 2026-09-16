const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const teamModal = document.getElementById('team-modal');

if (teamModal) {
  const modalPhoto = document.getElementById('team-modal-photo');
  const modalContent = document.getElementById('team-modal-content');
  const modalClose = teamModal.querySelector('.modal-close');
  let lastFocused = null;

  function openTeamModal(card) {
    const template = card.querySelector('template');
    const photo = card.querySelector('.team-photo img');
    if (!template || !photo) return;

    modalPhoto.src = photo.src;
    modalPhoto.alt = photo.alt;
    modalContent.innerHTML = '';
    modalContent.appendChild(template.content.cloneNode(true));

    lastFocused = document.activeElement;
    teamModal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeTeamModal() {
    teamModal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.team-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => openTeamModal(card));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTeamModal(card);
      }
    });
  });

  modalClose.addEventListener('click', closeTeamModal);
  teamModal.addEventListener('click', event => {
    if (event.target === teamModal) closeTeamModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !teamModal.hidden) closeTeamModal();
  });
}
