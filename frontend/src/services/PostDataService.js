import  { httpClient, httpClientMulti } from "../../http-common";

class PostDataService {
  getAll(page) {
    return httpClient.get(`/posts?page=${page}`);
  }

  getById(id) {
    return httpClient.get(`/posts/${id}`);
  }

  create(data) {
    return httpClientMulti.post("/posts", data);
  }

  update(id, data) {
    return httpClient.put(`/posts/${id}`, data);
  }

  delete(id) {
    return httpClient.delete(`/posts/${id}`);
  }
}

export default new PostDataService();