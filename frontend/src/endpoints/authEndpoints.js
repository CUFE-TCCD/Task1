export const login = async (email, password) => {
  try {
    const response = await fetch("endpoint url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.parse({ email, password }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
