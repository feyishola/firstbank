document.addEventListener("DOMContentLoaded", function () {
  const individualRadio = document.querySelector('input[value="individual"]');
  const bulkRadio = document.querySelector('input[value="bulk"]');
  const individualFormSection = document.getElementById(
    "individualFormSection"
  );
  const bulkUploadSection = document.getElementById("bulkUploadSection");
  const createUserButton = document.getElementById("createUserButton");

  individualRadio.addEventListener("change", toggleSection);
  bulkRadio.addEventListener("change", toggleSection);

  function toggleSection() {
    if (bulkRadio.checked) {
      bulkUploadSection.classList.remove("hidden");
      individualFormSection.classList.add("hidden");
      createUserButton.classList.add("hidden");
    } else {
      bulkUploadSection.classList.add("hidden");
      individualFormSection.classList.remove("hidden");
      createUserButton.classList.remove("hidden");
    }
  }
});

function openModal() {
  document.getElementById("modal").classList.add("modal-open");
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.remove("modal-open");
  document.getElementById("modal").classList.add("hidden");
}
