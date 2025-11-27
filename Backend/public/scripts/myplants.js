document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('plant-form');
    const cardsContainer = document.getElementById('card_grid');
    const addPlantCard = document.getElementById('add_card');
    const modalOverlay = document.getElementById('form_modal_overlay');
    const closeModalBtn = document.getElementById('close_modal_btn');

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