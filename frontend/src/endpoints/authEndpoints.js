export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (sign_up_form) => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sign_up_form),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
