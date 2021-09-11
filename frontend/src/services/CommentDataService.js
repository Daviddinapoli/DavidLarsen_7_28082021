import  { httpClient } from "../../http-common";

class CommentDataService {
  create(data) {
    return httpClient.post("/comments", data);
  }

  delete(id) {
    return httpClient.delete(`/comments/${id}`);
  }
}

export default new CommentDataService();

