const updateJob = async (id) => {
    const job = registerJobForm();
    try {
        const response = await fetch(`${BASE_URL}jobs/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(job),
        });
        const jobUpdate = await response.json();
      } catch (error) {
        alert(error);
      } finally {
         window.location.href = "index.html";
      }
};
