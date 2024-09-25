export const getUsers = async () => {
  try {
    //test token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI3ODAyMCwiZXhwIjoxNzI3MjgxNjIwfQ.H4j5VnwVCMRHY5CJNW39SWM7AolVVt3Gq7nlnjvFzCU";
    const encodedToken = new TextEncoder().encode(token);

    const response = await fetch("http://localhost:5300/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
