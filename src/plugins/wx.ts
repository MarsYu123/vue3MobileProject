import axios from '@/apis/http'
export default () => {
  // 判断是否微信环境
  if (!/micromessenger/.test(navigator.userAgent.toLowerCase())) return
  // 因为固定分享首页，为避免页面url过长导致失效，取消掉参数，正常为location.href.split('#')[0]
  const href = location.href.split('?')[0]
  axios.get(`asset/getTicketSign?url=${href}`).then(({ data }) => {
    wx.config({
      debug: false, // 开启调试模式
      appId: data.appid, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.noncestr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名
      jsApiList: [
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareQZone'
      ] // 必填，需要使用的 JS 接口列表
    })

    wx.error(function (res: Error){
      console.error(res, 'wxSdkError')
    })
    wx.ready(function () {
      // 转发朋友及qq
      wx.updateAppMessageShareData({
        title: '持仓基金', // 分享标题
        desc: '跟跑牛股，一网打尽', // 分享描述
        link: 'https://glink.genius.com.cn/h5-fundStock/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: 'https://glink.genius.com.cn/h5-fundDiagnosis/logo.png' // 分享图标
      })

      // 转发朋友圈或qq空间
      wx.updateTimelineShareData({
        title: '持仓基金', // 分享标题
        link: 'https://glink.genius.com.cn/h5-fundStock/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: 'https://glink.genius.com.cn/h5-fundDiagnosis/logo.png' // 分享图标
      })
    })
  })
}