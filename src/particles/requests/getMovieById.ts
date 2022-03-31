import axios from "axios";
import config from "utils/config";

const getMoiveById = async (id: string) => {
  const { data } = await axios.get(`/?&apikey=${config.API_KEY}&i=${id}`);
  return data;
};

export default getMoiveById;
