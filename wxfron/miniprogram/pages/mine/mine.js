//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showPopup: false

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showRecent: function() {
    wx.navigateTo({
      url: '../collected/collected?gotoType=recent'
    })
  },
  showCollected: function() {
    wx.navigateTo({
      url: '../collected/collected?gotoType=collected'
    })
  },
  showAboutMe: function() {
    wx.navigateTo({
      url: '../about/about_me'
    })
  },
  showAboutWechat: function() {
    wx.navigateTo({
      url: '../about/about_wechat'
    })
  },

  onLoad: function() {
    let that = this;
    app.checkUserInfo(function(userInfo, isLogin) {
      if (!isLogin) {
        that.setData({
          showPopup: true
        })
      } else {
        that.setData({
          userInfo: userInfo
        });
      }
    });


  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo

      //设置openId
      app.setLoginInfo()

      console.log(1111)
      this.setData({
        showPopup: !this.data.showPopup,
        userInfo: e.detail.userInfo
      });
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  },

  /**
   * 返回
   */
  navigateBack: function(e) {
    //界面切换到某个tab
    wx.switchTab({
      url: '../index/index'
    })
  },
})