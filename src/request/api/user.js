import request from "../index";

const user = {
  // 微信登录
  wxUserLogin(params) {
    return request.post("/user/loginWithWxMa", params);
  },
  updateUserWxMa(params) {
    return request.post("/user/updateUserWxMa", params);
  },
  updateGrade(params) {
    return request.post("/user/updateGrade", params)
  },
  addZan(params) {
    return request.get("/user/zan", params)
  },
  addCollect(params) {
    return request.get("/user/collect", params)
  }
};

export default user;
