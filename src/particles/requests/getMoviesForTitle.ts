import axios from "axios";
import config from "../../utils/config";

const getMovie = async (title: string) => {
  const { data } = await axios.get(
    `/?&apikey=${config.API_KEY}&page=1&s=${title}`
  );
  return data;
};

export default getMovie;
