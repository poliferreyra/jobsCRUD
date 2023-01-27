const registerJobs = async () => {
    const newJob = {
        jobName: $inputRegisterJobName.value,
        description: $inputRegisterDescription.value,
        location: $inputRegisterLocation.value,
        category: $inputRegisterCategory.value,
        seniority: $inputRegisterSeniority.value
      };
    try {
        const response = await fetch(`${BASE_URL}/jobs`, {
            method: "POST",
            headers: {
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(newJob)
        })
        const job = await response.json()
 
    } catch (error) {
        console.log(error)
    }
};
