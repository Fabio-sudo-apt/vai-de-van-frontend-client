import axios from "axios";

class CityService {
  constructor() {}

  async getCities() {
    return axios.get(`http://localhost:4000/city`);
  }
}

export default new CityService();
