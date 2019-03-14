import wepy from 'wepy';

export default class tabberMixin extends wepy.mixin {
  methods = {
    onChangeTabbar(event) {
      switch (event.detail) {
        case 0:
          wx.redirectTo({ url: '/pages/index/index' });
          break;
        case 1:
          wx.redirectTo({ url: '/pages/task/task' });
          break;
        case 2:
          wx.redirectTo({ url: '/pages/ranking/ranking' });
          break;
        case 3:
          wx.redirectTo({ url: '/pages/user/user' });
          break;
      }
    }
  }
}
