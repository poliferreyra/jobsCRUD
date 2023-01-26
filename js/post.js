const registerJobs = async () => {
    try {
        const response = await fetch(`${BASE_URL}/jobs`, {
            method: "POST",
            headers: {
                "Content-Type":"Aplication/json",
            },
            body:JSON.stringify(newJob)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};
