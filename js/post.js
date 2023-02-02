const registerJobs = async () => {
  const newJob = registerJobForm();
  try {
    const response = await fetch(`${BASE_URL}jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    const job = await response.json();
    console.log(job)
  } catch (error) {
    alert(error);
  } finally {
     window.location.href = "index.html";
  }
};
const registerJobForm = () => {
  const newJob = {
    jobName: $("#registerJobName").value,
    description: $("#registerDescription").value,
    location: $("#registerLocation").value,
    category: $("#registerCategory").value,
    seniority: $("#registerSeniority").value
  };
  return newJob;
};
