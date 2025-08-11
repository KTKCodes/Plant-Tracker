document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('plant-form');
    const cardsContainer = document.getElementById('card_grid');
    const addPlantCard = document.getElementById('add_card');
    const modalOverlay = document.getElementById('form-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');

// Function to open the modal
addPlantCard.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close modal when clicking outside the content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
});