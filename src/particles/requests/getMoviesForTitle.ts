import axios from "axios";

const API_KEY = "56096ee8";

const getMovie = async (title: string) => {
  const { data } = await axios.get(`/?&apikey=${API_KEY}&page=1&s=${title}`);
  return data;
};

export default getMovie;
