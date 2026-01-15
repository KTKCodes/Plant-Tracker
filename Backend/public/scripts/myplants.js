document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const cardsContainer = document.querySelector(".dashboard-layout__grid");
  const addPlantCard = document.querySelector(".add-card");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeModalBtn = document.querySelector("#close_modal_btn");

  // Helper function to handle both UI and Scroll Lock
  const toggleModal = (isOpen) => {
    if (!modalOverlay) return; // Safety check
    document.body.classList.toggle("modal-open", isOpen);
  };

  // Open
  addPlantCard?.addEventListener("click", () => toggleModal(true));

  // Close via Button
  closeModalBtn?.addEventListener("click", () => toggleModal(false));

  // Close via Clicking Background
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) toggleModal(false);
  });

  // Close via Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleModal(false);
  });
});
