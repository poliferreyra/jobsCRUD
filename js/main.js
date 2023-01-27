const $ = (selector) => document.querySelector(selector);
//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav");
const $formCreateJobs = $("#create-job");
const $createJob = $(".jobsRegister");
const $modalClose = $(".modal-close");
const $jobPositions = $("#container-job-positions");
const $seeDetailModal = $(".see-detail-modal");

const $inputRegisterJobName = $("#registerJobName")
const $inputRegisterDescription = $("#registerDescription")
const $inputRegisterLocation = $("#registerLocation")
const $inputRegisterCategory = $("#registerCategory")
const $inputRegisterSeniority = $("#registerSeniority")

// ************************** functions ****************************
const openJobsModal = () => {
  $createJob.classList.add("is-active");
};

const renderJobsCards = (jobs) => {
  for (const { jobName, description, location, category, seniority, id } of jobs) {
    $jobPositions.innerHTML += `
    <div class="card has-background-primary-light m-5 p-4">
      <h3 class="is-size-4">${jobName}</h3>
      <p class="content">${description}</p>
      <span class="tag is-info">${location}</span>
      <span class="tag is-info">${category}</span>
      <span class="tag is-info">${seniority}</span>
      <div>
        <button class="button is-small is-responsive is-primary mt-3" onclick="openEditModal()">See Details</button>
      </div>
    </div>
    `;
  }
};




// ************************* events **********************************
$formCreateJobs.addEventListener("submit", (e) => {
  e.preventDefault();
  registerJobs();
});

$createJobNav.addEventListener("click", openJobsModal);

$modalClose.addEventListener("click", () => {
  $createJob.classList.remove("is-active");
});


