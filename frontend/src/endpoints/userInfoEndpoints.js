import { getToken } from "../utils/helper";

export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
