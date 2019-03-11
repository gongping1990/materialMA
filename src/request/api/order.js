import request from "../index";

const order = {
  // 微信登录
  orderAndPay(params) {
    return request.post("/order/orderAndPay", params);
  },
  myOrderPage() {
    return request.get('/order/myOrderPage', params)
  },
  orderDetails() {
    return request.get('/order/orderDetails', params)
  }
};

export default order;
