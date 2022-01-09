
// 抖音版本: 18.9.0

/*
// 关注功能
//var weight = id("com.ss.android.ugc.aweme:id/ck8").findOne().bounds()
var weight = id("com.ss.android.ugc.aweme:id/ck8").waitFor()

click(996,2588)

// log(weight.centerX(),weight.centerY())
// 初始化坐标: 996 2588
// 之后的坐标: 996 -391
*/

function DY_自动点赞1() {
    var i = 0;
    while (i < 20) {
        i += 1;
        console.log("===============", i, "==================");
        var weight = desc("关注").findOne().bounds();
        log(weight.centerX(), weight.centerY());
        sleep(3000);
        // if(i == 100){
        //     console.log("==============>结束<===============")
        //     break;
        // }
    }
}

function DY_抖音自动关注(){
    //获取左下角的控件
    var widget = id("com.ss.android.ugc.aweme:id/dwp").findOne();
    //获取其中心位置并点击,返回true
    var res = click(widget.bounds().centerX(), widget.bounds().centerY());
    console.log("评论按钮点击是否成功===============>>>>" + res);
    
}
DY_抖音自动关注()

function DY_抖音自动点赞(){
    //获取左下角的控件
    var widget = id("com.ss.android.ugc.aweme:id/cl4").findOne();
    //获取其中心位置并点击,返回true
    var res = click(widget.bounds().centerX(), widget.bounds().centerY());
    console.log("评论按钮点击是否成功===============>>>>" + res);
    
}
// DY_抖音自动点赞()


function DY_抖音自动收藏(){
    //获取左下角的控件
    var widget = id("com.ss.android.ugc.aweme:id/br9").findOne();
    //获取其中心位置并点击,返回true
    var res = click(widget.bounds().centerX(), widget.bounds().centerY());
    console.log("评论按钮点击是否成功===============>>>>" + res);
    
}
// DY_抖音自动收藏()
// click(996,989)
// 初始化坐标: 996 2397\989
// 之后的坐标: 996 -398



