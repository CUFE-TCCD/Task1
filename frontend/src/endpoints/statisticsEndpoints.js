
export const userCount = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5300/users/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

