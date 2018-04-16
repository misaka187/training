//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    firstArray: [{
      id: 0,
      value: 'Swords',
      subItem:[]
    }, {
      id: 1,
      value: 'Fist Weapons',
      subItem: []
    }, {
      id: 2,
      value: 'Greataxes',
      subItem: []
    }, {
      id: 3,
      value: 'Polearms',
      subItem: []
    }, {
      id: 4,
      value: 'Bows',
      subItem: []
    }, {
      id: 5,
      value: 'Daggers',
      subItem: [],
    },{
      id: 4,
      value: 'Bows',
      subItem: []
    }, {
      id: 5,
      value: 'Daggers',
      subItem: [],
    }, {
      id: 4,
      value: 'Bows',
      subItem: []
    }, {
      id: 5,
      value: 'Daggers',
      subItem: [],
    }, {
      id: 4,
      value: 'Bows',
      subItem: []
    }, {
      id: 5,
      value: 'Daggers',
      subItem: [],
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  setSubMenu: function (target){
    //request 后台来的data,不清楚你这具体咋实现的
    const { firstArray}=this.data;
    firstArray[target].subItem = [{
      id:1,
      value:'akb'
    }]
    this.setData({
      'currentTab': target,
      'firstArray': firstArray
    })
  },

  onFirstMenuHandle: function (event) {
    this.setSubMenu(event.target.id)
  },

  onGoToNaviagePageHandle:function(){
    wx.navigateTo({
      url: '../navigate/navigate',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  onLoad: function () {
    //初始化拿二级菜单
    this.setSubMenu(0)
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
