import request from "../index";

const task = {
  // 微信登录
  getTodaySignInRecord() {
    return request.get("/task/getTodaySignInRecord");
  },
  getUserAccountMsg(params) {
    return request.get("/task/getUserAccountMsg", params);
  },
  invitedRecord(params) {
    return request.get("/task/invitedRecord", params)
  },
  rankingList(params) {
    return request.get("/task/rankingList", params);
  },
  todaySignIn() {
    return request.get("/task/todaySignIn");
  },
  getShareInfoDetails() {
    return request.get("/task/getShareInfoDetails");
  }
};

export default task;
