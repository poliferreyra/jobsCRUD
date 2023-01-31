const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

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
// ************************** functions ****************************
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
          onclick="openEditDelete(${id})">
          See Details
        </button>
      </div>
    </div>
    `;
  }
};
// open job card to edit or delete
const openEditDelete = (id) => {
  $jobPositions.classList.add("is-hidden");
  $seeDetail.innerHTML += `
  <div class="card has-background-warning-light p-3">
  <h3 class="is-size-4">titulo</h3>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicingelit. Maxime, cumque?
  </p>
  <span class="tag is-info">Location</span>
  <span class="tag is-info">Categoria</span>
  <span class="tag is-info">Seniority</span>
  <div>
    <button
      class="button is-small is-responsive is-primary mt-3 btn-edit"
      data-id="${id}">
      Edit Job
    </button>
    <button
      class="button is-small is-responsive is-danger mt-3 btn-delete"
      data-id="${id}"
      onclick="openNotification(${id})">
      Delete Job
    </button>
  </div>
</div>
`;
// delete select job
$(".btn-confirm-delete").addEventListener("click", ()=>{
  // toma el id por el atributo (data-id) que le dimos al button
deleteJob(($(".btn-delete").getAttribute("data-id")));
$(".container-notification").classList.add("is-hidden");
$seeDetail.classList.add("is-hidden");
$jobPositions.classList.remove("is-hidden");
})
};
// confirm delete notification
const openNotification =()=>{
  $(".container-notification").classList.remove("is-hidden");
}
// options search form
const optionsSearchForm = async (jobs)=>{
  // category without duplicates
  const filterCategory = jobs.map((category)=>category.category)
  const setFilterCategory = new Set(filterCategory)
  console.log(setFilterCategory)
  // location without duplicates
  const filterLocation = jobs.map((location)=>location.location)
  const setFilterLocation = new Set(filterLocation)
  console.log(setFilterLocation)
  // seniority without duplicates
  const filterSeniority = jobs.map((seniority)=>seniority.seniority)
  const setFilterSeniority = new Set(filterSeniority)
  console.log(setFilterSeniority)
  // options select
}



// ************************* events **********************************
$formCreateJobs.addEventListener("submit", (e) => {
  e.preventDefault();
  registerJobs();
});
$createJobNav.addEventListener("click", openJobsModal);

$modalClose.addEventListener("click", () => {
  $createJob.classList.remove("is-active");
});
