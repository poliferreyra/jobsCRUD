const $ = (selector) => document.querySelector(selector);
//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav");
const $formCreateJobs = $("#create-job");
const $createJob = $(".jobsRegister");
const $modalClose = $(".modal-close");
const $jobPositions = $("#container-job-positions");

const BASE_URL = "https://63d14061120b32bbe8f47c04.mockapi.io/api/";

const newJob = {
  jobName: "FrontEnd",
  description: "Escribir la descripcion",
  location: "EEUU",
  category: "categoria",
  seniority: "Senior",
};
// ************************** functions ****************************
const openJobsModal = () => {
  $createJob.classList.add("is-active");
};

const renderJobsCards = (jobs) => {
  for (const { jobName, description, location, category, seniority } of jobs) {
    $jobPositions.innerHTML += `
    <div class="card has-background-warning m-5 p-4">
      <h3 class="is-size-4">${jobName}</h3>
      <p class="content">${description}</p>
      <span class="tag is-primary">${location}</span>
      <span class="tag is-primary">${category}</span>
      <span class="tag is-primary">${seniority}</span>
      <div>
        <button class="button is-small is-primary mt-3">See Details</button>
      </div>
    </div>
    `;
  }
};

// ************************* events **********************************
// $formCreateJobs.addEventListener("submit", (e) => {
//   e.preventDefault();
//   registerJobs();
// });

$createJobNav.addEventListener("click", openJobsModal);

$modalClose.addEventListener("click", () => {
  $createJob.classList.remove("is-active");
});
