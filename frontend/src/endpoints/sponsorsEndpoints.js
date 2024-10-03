import { getToken } from "../utils/helper";

export const fetchSponsors = async () => {
  try {
    const response = await fetch("http://localhost:5300/api/v1/sponsors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Error details:", errorDetails);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    throw error;
  }
};
