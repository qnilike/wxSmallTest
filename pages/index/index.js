//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '这是小程序课程',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    console.log("这是我自己的小程序");
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindToNewpage:function(){
    wx.navigateTo({
      url: '../newpage/newpage'
    })
  }
})
