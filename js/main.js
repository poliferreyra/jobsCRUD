const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//**************************** DOM *********************************
const $createJobNav = $(".create-job-nav");
const $formCreateJobs = $("#create-job");
const $createJob = $(".jobsRegister");
const $modalClose = $(".modal-close");
const $jobPositions = $("#container-job-positions");
const $seeDetail = $(".see-detail");

// ************************** functions ****************************
// open form register jobs
const openJobsModal = () => {
  $createJob.classList.add("is-active");
};
// render all active jobs
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
    <div class="card has-background-primary-light m-5 p-4">
      <h3 class="is-size-4">${jobName}</h3>
      <p class="content">${description}</p>
      <span class="tag is-info">${location}</span>
      <span class="tag is-info">${category}</span>
      <span class="tag is-info">${seniority}</span>
    <div>
      <button class="button is-small is-responsive is-primary mt-3" onclick="openEditDelete(${id})">See Details</button>
    </div>
    </div>
    `;
  }
};
// open job card a editar o eliminar
const openEditDelete = (id) => {
  $jobPositions.classList.add("is-hidden");
  $seeDetail.innerHTML += `
<div class="card has-background-warning-light p-3">
  <h3 class="is-size-4">JobName</h3>
  <p class="content">
    Lorem ipsum dolor sit, amet consectetur adipisicingelit. Maxime, cumque?
  </p>
  <span class="tag is-info">Location</span>
  <span class="tag is-info">Categoria</span>
  <span class="tag is-info">Seniority</span>
    <div>
      <button class="button is-small is-responsive is-primary mt-3 btn-edit" data-id="${id}">Edit Job</button>
      <button class="button is-small is-responsive is-danger mt-3 btn-delete" data-id="${id}" onclick="openNotification(${id})">Delete Job</button>
    </div>
</div>
`;
// delete select job
$(".btn-confirm-delete").addEventListener("click", ()=>{
  // toma el id por el atributo que le dimos al button
deleteJob(($(".btn-delete").getAttribute("data-id")))
$(".container-notification").classList.add("is-hidden");
$seeDetail.classList.add("is-hidden")
$jobPositions.classList.remove("is-hidden");

})

};
// confirm delete notification
const openNotification =()=>{
  $(".container-notification").classList.remove("is-hidden");
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
