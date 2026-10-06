document.addEventListener('DOMContentLoaded', () => {
  const galleryRoot = document.getElementById('gallery');
  const detailTitle = document.getElementById('detail-title');
  const detailImage = document.getElementById('detail-image');
  const detailMeta = document.getElementById('detail-meta');
  const detailModal = document.getElementById('detail-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModalBtn = document.getElementById('close-modal');

  const characters = window.characters || [];

  function renderGallery() {
    if (!galleryRoot) return;

    galleryRoot.innerHTML = characters.map((character) => `
      <a class="character-card" href="personaje.html?id=${character.id}" aria-label="Ver ${character.name}">
        <img src="${character.image}" alt="${character.name}">
        <div class="card-copy">
          <h2>${character.name}</h2>
          <p>${character.series}</p>
        </div>
      </a>
    `).join('');
  }

  function renderDetail() {
    if (!detailTitle || !detailImage || !detailMeta) return;

    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get('id');
    const character = characters.find((item) => item.id === selectedId) || characters[0];

    if (!character) return;

    detailTitle.textContent = character.name;
    detailImage.src = character.image;
    detailImage.alt = character.name;
    detailMeta.textContent = `${character.series}`;

    if (modalImage) modalImage.src = character.image;
  }

  if (galleryRoot) renderGallery();
  if (detailTitle) renderDetail();

  const zoomButton = document.querySelector('.zoom-button');

  if (detailImage) {
    detailImage.addEventListener('click', () => {
      if (!detailModal || !modalImage) return;
      modalImage.src = detailImage.src;
      detailModal.classList.add('show');
    });
  }

  if (zoomButton) {
    zoomButton.addEventListener('click', () => {
      if (!detailModal || !modalImage) return;
      modalImage.src = detailImage.src;
      detailModal.classList.add('show');
    });
  }

  if (closeModalBtn && detailModal) {
    closeModalBtn.addEventListener('click', () => detailModal.classList.remove('show'));
  }

  if (detailModal) {
    detailModal.addEventListener('click', (event) => {
      if (event.target === detailModal) {
        detailModal.classList.remove('show');
      }
    });
  }
});
