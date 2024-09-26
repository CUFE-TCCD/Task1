import { getToken } from "../utils/helper";

export const userCount = async () => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/users/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
    },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
