import {isArray, isEmpty, isNumber, isObjectLike} from "lodash";

const emailRegex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?)$/;
const phoneCnRegex = /^[1-9]\d{10}$/;
const captchaRegex = /^[A-Za-z0-9]{4,6}$/;

export class MyAssets {
    static isArray(obj: any): boolean {
        return isArray(obj);
    }

    /**
     * 是否为数字 3, Number.MIN_VALUE, Infinity => true
     * @param data {any} 待检测的数据
     */
    static isNumber(data: any): boolean {
        return isNumber(data);
    }

    // https://stackoverflow.com/questions/4994201/is-object-empty
    /**
     * 判断值是否为空
     * @param {any} data 待判断的数
     * @returns {boolean}
     */
    static isEmpty(data: any) {
        if (data === null || data === undefined) {
            return true
        }
        switch (typeof data) {
            case 'undefined':
                return true;
            case 'number':
                return data === 0;
            case 'string':
                return data === '0' ||
                    data === 'null' ||
                    data === '' ||
                    data === 'undefined' ||
                    data === '0001-01-01T00:00:00Z' ||
                    data === '0001-01-01 00:00:00' ||
                    data.trim() === '';
            default:
                return isEmpty(data);
        }
    }

    /**
     * 是否是类对象，{}|[]|new student() => true, null => false
     * @param data
     */
    static isObjectLike(data: any): boolean {
        return isObjectLike(data)
    }


    /**
     * 是否为中国大陆手机号
     * @param phone
     */
    static isPhoneCn(phone: string): boolean {
        return phoneCnRegex.test(phone);
    }

    /**
     * 是否是电子邮箱地址
     * @param email
     */
    static isEmail(email: string): boolean {
        return emailRegex.test(email);
    }

    /**
     * 是否为4~6位的验证码
     * @param data
     */
    static isCaptcha(data: string): boolean {
        return captchaRegex.test(data);
    }

    static isPassword(pwd: string): boolean {
        return !!pwd && pwd.length >= 7;
    }

    /**
     * 判断是否为账号
     * @param {string} account 账号
     * @returns {boolean}
     */
    static isAccount(account: string) {
        return this.isPhoneCn(account) || this.isEmail(account);
    }
}