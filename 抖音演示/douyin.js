
/****************************************************************
 * ************模拟人操作_随机标准*********************************
 * *点击随机:点击坐标随机生成
 * *滑动轨迹随机:直线滑动,曲线滑动(起始点都随机生成)
 * *滑动时间长度随机:间隔时间随机
 * *观看视频时间随机:时间随机可长可短
 * *触屏时间长短随机:手指按下时间随机
 * 
 * *模拟人随机操作:目的是避免目的性强,被后台的算法识别为违规操作
 ***************************************************************/

function 开始前测试(){
    home();
    sleep(random(1200,2000));
    click('抖音');
    toast("这是Auto.js~~~~~~~~~");
    console.log("这是自动化操作脚本++++++++++");
    sleep(random(2500,3000));
}

function 点击抖音APP(){
    //var 抖音 = id('com.miui.home:id/icon_folder_creation_bg').visibleToUser().findOne().bounds();
    //console.log(抖音);
    //click(抖音.centerX(),抖音.centerY());
    //sleep(random(2200,3000));

    home();
    sleep(random(1200,2000));
    click('抖音');
    toast("正在模拟人工随机操作");
    sleep(random(6000,10000));
}


function 滑动短视频(num){
    for(var i=0;i<num;i++){
        MaintenanceAccount(i)
    }

    function MaintenanceAccount(i) {
        var time = random(4000, 10000);
        toastLog("第" + (i + 1) + "个视频，请等待" + time / 1000 + "秒");
        sleep(time);
        //开始滑动视频
        var x1 = random(device.width / 4, (device.width / 4) * 3);
        var y1 = random((device.height / 4) * 3.1, (device.height / 4) * 3.3);
        var x2 = random(device.width / 4, (device.width / 4) * 3);
        var y2 = random((device.height / 4) * 0.7, (device.height / 4) * 0.5);
        var s = random(35, 80);
        RandomSwipe(x1, y1, x2, y2, s);
    }

    //-------------------------曲线滑动-----------------------------//
    /**
     * 仿真随机带曲线滑动（视频/小说）
     * @param {起点x} qx 
     * @param {起点y} qy 
     * @param {终点x} zx 
     * @param {终点y} zy 
     * @param {过程耗时单位毫秒} time 
     */
    function RandomSwipe(qx, qy, zx, zy, time) {
        var xxy = [time];
        var point = [];
        var dx0 = {
            "x": qx,
            "y": qy
        };
        var dx1 = {
            "x": random(qx - (device.width / 4) * 0.25, qx + (device.width / 4) * 0.25),
            "y": random(qy, qy + 50)
        };
        var dx2 = {
            "x": random(zx - (device.width / 4) * 0.25, zx + (device.width / 4) * 0.25),
            "y": random(zy, zy + 50)
        };
        var dx3 = {
            "x": zx,
            "y": zy
        };
        for (var i = 0; i < 4; i++) {
            eval("point.push(dx" + i + ")");
        };
        for (let i = 0; i < 1; i += 0.08) {
            xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
            xxy.push(xxyy);
        }
        gesture.apply(null, xxy);
    };

    function bezier_curves(cp, t) {
        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;

        tSquared = t * t;
        tCubed = tSquared * t;
        result = {
            "x": 0,
            "y": 0
        };
        result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        return result;
    };
    //-------------------------曲线滑动----------------------------//

    id("f3i").findOne().click()
}

function 抖音短视频点赞(){
    var 是否为短视频 = descStartsWith('未选中，喜欢');
    if(是否为短视频 != ''){
        log('执行------------------');
        var like = descStartsWith('未选中，喜欢').visibleToUser().findOne().bounds();
        click(like.centerX(),like.centerY());
    }else{
        var num = 1;
        滑动短视频(num);
    }
}

function 抖音短视频评论(content){
    var 评论按钮 = descStartsWith('评论').visibleToUser().findOne();
    log(评论按钮)

    sleep(random(3500,7000))

    var 评论点击 = descStartsWith('评论').visibleToUser().findOne().click();
    log(评论点击)
    sleep(random(4390,6230))

    // 获取文本输入框焦
    var input = text('留下你的精彩评论吧').findOne();
    var coordinate = input.bounds();// 输入框的坐标:  Rect(33, 1984 - 711, 2094)
    log('输入框的坐标: ',coordinate);
    click(coordinate.centerX(),coordinate.centerY());

    setText(content);
    sleep(random(1000,2500));   
    var 评论点击 = descStartsWith('评论').visibleToUser().findOne();
    var sendBtnCor = sendBtn.bounds();
    log(sendBtnCor.centerX(),sendBtnCor.centerY());
    click(sendBtnCor.centerX(),sendBtnCor.centerY()); 

    //第一种返回方式
    back()
}

// var content = '短视频要一键三联呃!!!';
// 抖音短视频评论(content);


function 抖音短视频转发(){
    var bound = descStartsWith('分享').visibleToUser().findOne().bounds();
    click(bound.centerX(),bound.centerY());

    text('微信好友').waitFor();
    sleep(random(1000,2400));

    click('微信好友');
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

}

// 目标:给某个视频点赞、收藏、评论、转发(达到目标即可,过程操作随机)
// 开始前测试——》点击抖音——》滑动抖音短视频——》进入短视频

//=============================运行=================================//
//开始前测试();
main();

function main(){
    点击抖音APP();

    // 曲线随机滑动3个短视频
    var num = 3;
    滑动短视频(num);

    // // 抖音短视频点赞
    // 抖音短视频点赞();

    // 曲线随机滑动3个短视频
    var num = 2;
    滑动短视频(num);

    // // 抖音短视频评论发布
    // 抖音短视频评论()

}




