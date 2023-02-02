const BASE_URL = "https://63d14061120b32bbe8f47c04.mockapi.io/api/";

const getJobPositions = async () => {
  try {
    const response = await fetch(`${BASE_URL}jobs`);
    const jobs = await response.json();
    renderJobsCards(jobs);
    optionsSearchForm(jobs);
  } catch (error) {
    console.log(error);
  }
};
getJobPositions();

const getJob = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}jobs/${id}`);
    const job = await response.json();
    return job;
  } catch (error) {
    console.log(error);
  }
};
