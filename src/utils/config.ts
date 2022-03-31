const config = () => {
  return {
    API_KEY: import.meta.env.VITE_API_KEY,
    BASE_URL: "https://www.omdbapi.com",
  };
};

export default config();
