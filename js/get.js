const getJobPositions = async () => {
  try {
    const response = await fetch(`${BASE_URL}jobs`);
    const jobs = await response.json();
    renderJobsCards(jobs);
  } catch (error) {
    console.log(error);
  }
};
getJobPositions();
