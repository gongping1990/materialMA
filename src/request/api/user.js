import request from "../index";

const user = {
  // 微信登录
  wxUserLogin(params) {
    return request.post("/user/loginWithWxMa", params);
  },
  updateUserWxMa(params) {
    return request.post("/user/updateUserWxMa", params);
  }
};

export default user;
