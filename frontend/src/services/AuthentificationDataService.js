import { httpClient } from "../../http-common";

class AuthenticationDataService {
  createUser(data) {
    return httpClient.post("/users/signup", data);
  }
  connectUser(data) {
    return httpClient.post("/users/login", data);
  }
  getProfilUser(id) {
    return httpClient.get(`/users/${id}`);
  }
  deleteUser(id) {
    return httpClient.delete(`/users/${id}`);
  }
}

export default new AuthenticationDataService();


// this is where im defining the endpoints and creating the full api.