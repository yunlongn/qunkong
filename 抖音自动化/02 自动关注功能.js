


//查找关注控件
// var 关注 = desc('关注').visibleToUser().findOne().click();
// log(关注);


//var 关注 = desc('关注').visibleToUser().findOne().bounds();
//log('关注按钮的中心坐标:',关注.centerX(),关注.centerY());//关注按钮的中心坐标: 996 883


//菜单项的切换
// 菜单_关注项 = text('关注').visibleToUser().findOne();
// log(菜单_关注项);
// 菜单_关注项.click();


// var 头像 = id('com.ss.android.ugc.aweme:id/user_avatar').visibleToUser().findOne();
// log(头像.desc()); // 爱画画的子衿
// 头像.click();


var 关注按钮 = textEndWith('关注').visibleToUser().findOne();
log(关注按钮);



