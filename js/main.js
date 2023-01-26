const $ = (selector) => document.querySelector(selector);
//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav")
const $formCreateJobs = $("#create-job");
const $jobsFormModal = $(".modal")
const $modalClose = $(".modal-close");

const BASE_URL = "https://63d14061120b32bbe8f47c04.mockapi.io/api";

const newJob = {
  jobName: "FrontEnd",
  description: "Escribir la descripcion",
  location: "EEUU",
  category: "categoria",
  seniority: "Senior",
};
// ************************** functions ****************************


// ************************* events **********************************
// $formCreateJobs.addEventListener("submit", (e) => {
//   e.preventDefault();
//   registerJobs();
// });

$modalClose.addEventListener("click", () => {
  $jobsFormModal.classList.remove("is-active");
});