var urlList = new Array();

//for h5
urlList['h5'] = new Array();
//检查手机是否注册
urlList['h5']['check_mobile'] = 'http://passport.sw.xtche.com/passport/h5/checkMobile';
//获取验证码
urlList['h5']['get_sms_verify_code'] = 'http://passport.sw.xtche.com/passport/h5/getSmsVerifyCode';
//注册用户
urlList['h5']['register_mobile'] = 'http://passport.sw.xtche.com/passport/h5/registerMobile';


//正则
//手机号码正则
var mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;