
/*
    =========================【微信直播自动化操作】=============================
*/

function Wx_直播点赞(dj_num){
    /*
      func: 微信直播点赞
      args: 
        arg1: dj_num int 点赞次数
      return: null
    */
    num = 0
    for (let i = 0; i < dj_num; i++) {
        //获取这个控件
        var widget = id("com.tencent.mm:id/cs6").findOne();
        //获取其中心位置并点击
        var res = click(widget.bounds().centerX(), widget.bounds().centerY());
        console.log("=======================>>>>" + res)
    }
}
Wx_直播点赞(1000)

function Wx_直播自动评论(){
    /*
      func: 微信直播自动评论
      args: null
      return: null
    */

    //获取左下角的控件
    var widget = id("com.tencent.mm:id/cz8").findOne();
    //获取其中心位置并点击,返回true
    var res = click(widget.bounds().centerX(), widget.bounds().centerY());
    console.log("评论按钮点击是否成功===============>>>>" + res);

    if(res != true){
        return;
    }

    var text = "抢buff拿大龙推塔";

    
    //获取评论发送按钮控件
    var pl_widget = id("com.tencent.mm:id/eli").findOne();
    //获取其中心位置并点击
    var res = click(pl_widget.bounds().centerX(), pl_widget.bounds().centerY());
    console.log("评论发送按钮点击是否成功===============>>>>" + res);

}

// Wx_直播自动评论()

