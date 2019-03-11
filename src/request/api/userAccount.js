import request from "../index";

const userAccount = {
  // 我的账户信息
  accountInfo(params) {
    return request.get("/userAccount/accountInfo", params);
  },
  // 收支详情
  getUserAccountIncomeList(params) {
    return request.get("/userAccount/getUserAccountIncomeList", params);
  }
};

export default userAccount;
