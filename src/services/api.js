const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
