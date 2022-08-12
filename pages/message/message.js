// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text: "pages/message/message.wxml",
        userName: "zs",
        country: "CHINA"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    backToHome(){
        wx.navigateBack({
          delta: 1,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.setData({
            text: "刷新后text"
        })
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})