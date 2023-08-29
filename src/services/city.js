import instance from "../core/createAxios";

class CityService {
  // constructor() {}

  async getCities() {
    return instance.get(`/route`);
  }
}

export default CityService();
