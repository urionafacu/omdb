const config = () => {
  if (import.meta.env.DEV) {
    return {
      API_KEY: import.meta.env.VITE_API_KEY_DEV,
      BASE_URL: "http://www.omdbapi.com",
    };
  }
  return {
    API_KEY: import.meta.env.VITE_API_KEY_PROD,
    BASE_URL: "https://www.omdbapi.com",
  };
};

export default config();
