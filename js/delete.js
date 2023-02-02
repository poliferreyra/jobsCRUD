const deleteJob = async (id) => {
  try {
    await fetch(`${BASE_URL}jobs/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    alert(`Error al eliminar puesto de trabajo ${id}`);
  } finally {
    window.location.href = "index.html";
  }
};
