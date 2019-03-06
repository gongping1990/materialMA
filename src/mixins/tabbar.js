import wepy from 'wepy';

export default class tabberMixin extends wepy.mixin {
  methods = {
    onChangeTabbar(event) {
      switch (event.detail) {
        case 0:
          wx.navigateTo({ url: '/pages/index/index' });
          break;
        case 1:
          wx.navigateTo({ url: '/pages/task/task' });
          break;
        case 2:
          wx.navigateTo({ url: '/pages/ranking/ranking' });
          break;
        case 3:
          wx.navigateTo({ url: '/pages/user/user' });
          break;
      }
    }
  };
}
