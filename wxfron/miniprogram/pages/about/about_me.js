
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'314237418@qq.com',
    selfwechat:'314237418',
    github:'https://github.com/111wuchao111'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  copyDataTap:function(e){
    var data = e.target.dataset.index
    wx.setClipboardData({
      data: data,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) 
          }
        })
      }
    })
  }
})