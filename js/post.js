const registerJobs = async () => {
  const newJob = {
    jobName: $("#registerJobName").value,
    description: $("#registerDescription").value,
    location: $("#registerLocation").value,
    category: $("#registerCategory").value,
    seniority: $("#registerSeniority").value,
  };
  try {
    const response = await fetch(`${BASE_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newJob),
    });
    const job = await response.json();
  } catch (error) {
    console.log(error);
  }
};
