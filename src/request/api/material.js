import request from "../index";

const material = {
  subjectList() {
    return request.get("/material//subject/list");
  },
  catalogList(params) {
    return request.get('/material/catalog/list', params)
  },
  listMaterial(params) {
    return request.get('/material/listMaterial', params)
  }
};

export default material;
