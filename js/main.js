const $ = (selector) => document.querySelector(selector);
//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav")
console.log($createJobNav)
const $formCreateJobs = $("#create-job");
const $createJob = $(".jobsRegister")
console.log($createJob)
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
const openJobsModal = () =>{
  $createJob.classList.add("is-active");
}

// ************************* events **********************************
// $formCreateJobs.addEventListener("submit", (e) => {
//   e.preventDefault();
//   registerJobs();
// });

$createJobNav.addEventListener("click", openJobsModal);

$modalClose.addEventListener("click", () => {
  $createJob.classList.remove("is-active");
});
