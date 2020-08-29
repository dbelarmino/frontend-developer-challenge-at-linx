function handleToggleAccordion() {
  if (window.innerWidth >= 1025) return;

  document
    .getElementById("accordion-content")
    .classList.toggle("show-accordion-content");
  document.getElementById("arrow-icon").classList.toggle("arrow-icon-rotate");
}

function handleSubmit(event) {
  event.preventDefault();

  alert("Formulário enviado com sucesso!");
}

document.getElementById("helpForm").addEventListener("submit", handleSubmit);

document.getElementById("newsForm").addEventListener("submit", handleSubmit);
