
// // 获取该组件的父组件
// log(descStartsWith('分享').visibleToUser().findOne().parent());


// descStartsWith('分享').visibleToUser().findOne().click();

// // waitFor(): 等待该控件出现
// text('微信好友').waitFor();

// sleep(1000)

// click('微信好友');




var bound = descStartsWith('分享').visibleToUser().findOne().bounds();

click(bound.centerX(),bound.centerY());


text('微信好友').waitFor();

sleep(1000)

click('微信好友');

// text('发送视频到微信').waitFor();

// sleep(1000)

// click('发送视频到微信');

if(text('发送视频到微信').findOne(5000)){
    sleep(1500)
    click('发送视频到微信');
}else{
    back()
}

text('微信').waitFor();
sleep(1000)

click('微信',0)


text('通讯录').waitFor();
sleep(1000)

//返回获取剪切板内容

home();
text('Auto.js').waitFor();
sleep(1000)

click('Auto.js');

sleep(1000)
var txt = getClip();
log(txt)

home();
text('微信').waitFor();
sleep(1000)
click('微信')

text('通讯录').waitFor();
sleep(1000)

click('aaa')

id('com.tencent.mm:id/g78').waitFor()
sleep(1000)
setText(txt)
sleep(1000)
click('发送')

descStartsWith('更多功能按钮').findOne().click();
text('相册').waitFor();
sleep(1000)
click('相册');

id('com.tencent.mm:id/dm0').waitFor();
sleep(1000)
id('com.tencent.mm:id/dm0').findOne().click()

var 发送按钮 = textStartsWith('发送(').findOne();
sleep(1000)
click(发送按钮.text());

id('com.tencent.mm:id/g78').waitFor()

toast('已经转发完成');









