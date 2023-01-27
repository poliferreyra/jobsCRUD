const deleteJob = (id)=>{
    fetch(`${BASE_URL}/jobs/${id}`, {
        method: "DELETE"
    })
};