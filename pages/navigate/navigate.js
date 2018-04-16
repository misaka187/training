import Api from '../../utils/api.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseData:{
      "id": "1",
      "pid": "1",
      "typeName": "头痛",
      "typeDes": "头痛的原因很多，有的是由感冒引起，有的则由脑卒中等脑部疾病引起，什么部位，怎样疼痛，都要仔细观察。尤其是伴有发热和呕吐要引起注意。",
      "problem": "是否有药物或酒精摄入史？"
    },
    subProblemData:[],
    answerData: {
      "answer": ""
    }
  },

  initHandle: function () {
    Api.post('rest',{
      data:'ko'
    })
  },

  checkProblemHandle(event){
    this.requestNextData(event.target.id);
  },

  requestNextData: function () {
    const {id,pid} = this.data.caseData;
    Api.post('rest', {
      data: {
        'id': id,
        'pid': pid
      }
    })
    //request请求成功后调用这个
    this.setNextProblemBox({
      "answer": "是否伴有发热？",
      "isSub": "01"
    });
  },

  setNextProblemBox(problemData){
    const { answer, isSub} = problemData;
    const { subProblemData } = this.data;
    if(!isSub){
      this.setData({
        answerData: {
          "answer": "多喝热水"
        }
      })
      return;
    }
    subProblemData.push({
      "answer": "是否伴有发热？"
    });
    this.setData({
      'subProblemData': subProblemData
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initHandle();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})