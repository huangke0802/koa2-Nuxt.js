export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return "127.0.0.1"
    },
    get hort() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return 'xxxxxx@qq.com'
    },
    get pass() {
      //qq邮箱的授权码
      return 'xxxxxx'
    }
  },
  //验证码
  get code() {
    return () => {
      return Math.random().toString(16).slice(2, 6).toUpperCase();
    }
  },
  //过期时间
  get expire() {
    return () => {
      //一分钟
      return new Date().getTime() + 60 * 60 * 1000
    }
  }
}