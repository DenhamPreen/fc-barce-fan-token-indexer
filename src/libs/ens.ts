import axios from "axios";

export const fetchEnsHandle = async (address: string): Promise<string> => {
  try {
    const response = await axios.get(`https://ensdata.net/${address}`);
    return response.data.ens;
  } catch (e) {
    // doesn't have an ens handle
    return address;
  }
};
