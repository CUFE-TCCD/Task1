export const userCount = async () => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/users/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI3ODAyMCwiZXhwIjoxNzI3MjgxNjIwfQ.H4j5VnwVCMRHY5CJNW39SWM7AolVVt3Gq7nlnjvFzCU",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NWNjZTgzLWQyZDQtNDllMi04YjcxLTcxZTJmYzdmNmY2OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzI5MjU5MCwiZXhwIjoxNzI3Mjk2MTkwfQ.Ss8pM-ZP965wlfluqCDavk91_DLZAJEIUnrJMw3K3zw",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
