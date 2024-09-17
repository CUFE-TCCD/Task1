export const getUsers = async () => {
  try {
    const response = await fetch("http://loclhost:5300/admin/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};
