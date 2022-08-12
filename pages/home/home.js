// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[],
        gridList:[{id:1, name: "美食", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:2, name: "洗浴足疗", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:3, name: "结婚啦", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:4, name: "卡拉OK", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:5, name: "找工作", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:6, name: "辅导班", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:7, name: "汽车保养", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:8, name: "租房", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"},
        {id:9, name: "装修", icon: "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"}
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList()
    },

    getSwiperList(){
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
            method: 'GET',
            success: (res) => {
                this.setData({
                    swiperList: res.data.message
                })
                console.log(res)
            }
        })
    },

    gotoMessage(){
        wx.switchTab({
          url: '/pages/message/message',
        })
    },

    gotoInfo(){
        wx.navigateTo({
          url: '/pages/info/info?name=ls&gender=男',
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