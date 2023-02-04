const $ = (selector) => document.querySelector(selector);

//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav");
const $formCreateJobs = $("#create-job");
const $createJob = $(".jobsRegister");
const $modalClose = $(".modal-close");
const $jobPositions = $("#container-job-positions");
const $seeDetail = $(".see-detail");
const $filterSeniority = $("#filterSeniority");
const $filterCategory = $("#filterCategory");
const $filterLocation = $("#filterLocation");
const $btnCreateJob = $(".btn-create-job");
const $btnEditJob = $(".btn-edit-job");
const $searchForm = $(".searchForm");
const $btnClear = $(".btn-clear");
const $registerJobName = $("#registerJobName");
const $registerDescription = $("#registerDescription");
const $registerLocation = $("#registerLocation");
const $registerCategory = $("#registerCategory");
const $registerSeniority = $("#registerSeniority");
const $errorValidation = $("#error-validation");
const $okValidation = $("#ok-validation");
const $btnSearch = $(".btn-search");

// ************************** functions ****************************
// to know if is Editing or not
let isEditing = false;
// open form register jobs
const openJobsModal = () => {
  $createJob.classList.add("is-active");
};
// render active jobs
const renderJobsCards = (jobs) => {
  for (const {
    jobName,
    description,
    location,
    category,
    seniority,
    id,
  } of jobs) {
    $jobPositions.innerHTML += `
    <div
      class="card column is-one-quarter is-size-7 has-background-primary-light m-2 p-5">
      <h3 class="is-size-6 has-text-weight-semibold">${jobName}</h3>
      <p>${description}</p>
      <div class="columns">
        <div class="column">
          <span class="tag is-info my-1">${location}</span>
          <span class="tag is-info my-1">${category}</span>
          <span class="tag is-info my-1">${seniority}</span>
        </div>
      </div>
      <div>
        <button
          class="button is-small is-responsive is-primary"
          onclick="onclickBtnSeeDetail(${id})">
          See Details
        </button>
      </div>
    </div>
    `;
  }
};
// fetch and show modal edit/delete
const onclickBtnSeeDetail = async (id) => {
  const job = await getJob(id);
  modalEditDelete(job);
};
// open edit or delete job
const modalEditDelete = (data) => {
  $searchForm.classList.add("is-hidden");
  $jobPositions.classList.add("is-hidden");
  $seeDetail.innerHTML += `
  <div class="card has-background-warning-light p-4">
  <h3 class="is-size-4">${data.jobName}</h3>
  <p>${data.description}</p>
  <span class="tag is-info mt-4">${data.location}</span>
  <span class="tag is-info mt-4">${data.category}</span>
  <span class="tag is-info mt-4">${data.seniority}</span>
  <div>
  <button
  class="button is-small is-responsive is-primary mt-3 btn-edit" data-id=${data.id}
  onclick="editJob(${data.id})">
  Edit Job
  </button>
  <button
  class="button is-small is-responsive is-danger mt-3 btn-delete"
  data-id=${data.id}
  onclick="openNotification()">
  Delete Job
  </button>
  </div>
  </div>
  `;
  // delete select job
  $(".btn-confirm-delete").addEventListener("click", () => {
    // toma el id por el atributo (data-id) que le dimos al button
    deleteJob($(".btn-delete").getAttribute("data-id"));
    $(".container-notification").classList.add("is-hidden");
    $seeDetail.classList.add("is-hidden");
    $jobPositions.classList.remove("is-hidden");
  });
};
// delete notification
const openNotification = () => {
  $(".container-notification").classList.remove("is-hidden");
};

// edit select job
const editJob = async (id) => {
  const job = await getJob(id);
  const { jobName, description, location, category, seniority } = job;
  isEditing = true;
  $createJob.classList.add("is-active");
  $btnCreateJob.textContent = "Edit";
  $registerJobName.value = jobName;
  $registerDescription.value = description;
  $registerLocation.value = location;
  $registerCategory.value = category;
  $registerSeniority.value = seniority;
  $btnCreateJob.setAttribute("data-id", id);
};
// options search form
const optionsSearchForm = (jobs) => {
  // category without duplicates
  const filterCategory = jobs.map((category) => category.category);
  const setFilterCategory = new Set(filterCategory);
  // location without duplicates
  const filterLocation = jobs.map((location) => location.location);
  const setFilterLocation = new Set(filterLocation);
  // seniority without duplicates
  const filterSeniority = jobs.map((seniority) => seniority.seniority);
  const setFilterSeniority = new Set(filterSeniority);
  // options select category
  for (const category of setFilterCategory) {
    $filterCategory.innerHTML += `
    <option value="${category}">${category}</option>
    `;
  }
  // options select location
  for (const location of setFilterLocation) {
    $filterLocation.innerHTML += `
    <option value ="${location}">${location}</option>
    `;
  }
  // options select seniority
  for (const seniority of setFilterSeniority) {
    $filterSeniority.innerHTML += `
    <option value="${seniority}">${seniority}</option>
    `;
  }
};
// search form
const searchJobs = async () => {
  let filterJobs = await getJobs();
  if ($filterLocation.value !== "location")
    filterJobs = filterJobs.filter(
      (job) => job.location === $filterLocation.value
    );
  if ($filterSeniority.value !== "seniority") {
    filterJobs = filterJobs.filter(
      (job) => job.seniority === $filterSeniority.value
    );
  }
  if ($filterCategory.value !== "category") {
    filterJobs = filterJobs.filter(
      (job) => job.category === $filterCategory.value
    );
  }
  // render filterJobs
  $jobPositions.innerHTML = "";
  renderJobsCards(filterJobs);
};

const mainView = () => {
  window.location.href = "index.html";
};
// validation ❌
const formValidation = () => {
  const expression = /\w+?\s?\w+?/i;

  return expression.test($registerJobName.value) 
  && expression.test($registerDescription.value)
  && expression.test($registerCategory.value)
  && expression.test($registerSeniority.value)
  && expression.test($registerLocation.value);
};

// ************************* events **********************************
$formCreateJobs.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formValidation()) {
    alert("You must complete all field");
    return;
  }
  if (isEditing) {
    const jobId = $btnCreateJob.getAttribute("data-id");
    updateJob(jobId);
  } else {
    registerJobs();
  }
});
$createJobNav.addEventListener("click", openJobsModal);

$modalClose.addEventListener("click", () => {
  $createJob.classList.remove("is-active");
});
$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchJobs();
});
$btnClear.addEventListener("click", () => {
  $searchForm.reset();
  searchJobs();
});
