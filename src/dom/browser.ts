export class MyBrowser {
// 检查是否为检测浏览器
    static isWeiXin(): boolean {
        // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        const ua = window.navigator.userAgent.toLowerCase();
        // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
        return ua.indexOf('micromessenger') > -1 || ua.indexOf('wechat') > -1;
    }

    static isMobile(): boolean {
        const ua = navigator.userAgent;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|micro|wechat/i.test(ua)) {
            return true;
        } else if (/Chrome/i.test(ua)) {
            return false;
        } else {
            return false;
        }
    }
}