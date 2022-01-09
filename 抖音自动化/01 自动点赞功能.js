/*
    FuncName: func01_脚本Logo打印()
*/
function func01_脚本Logo打印(){
    var str = "**************************************************"
    console.log(str)
    console.log(str)
    console.log(str)
    console.log(str)
    console.log(str)
}
// func01_脚本Logo打印()


toast('run~~~~~~~~~~');
/*
    遇到问题:
    1、控件不可点击: clickable: false;
    2、获取控件的坐标存在负值
    3、以字符串进行匹配,存在多个的问题
    4、以字符串进行匹配,需要注意中文字体中的逗号


//获取左下角的控件
var btn = id("com.ss.android.ugc.aweme:id/cl4").findOne();
// 获取控件的左上角,右下角坐标
log('获取控件的左上角,右下角坐标：',btn.bounds());
// 获取控件的中心坐标
log('获取控件的中心坐标:',btn.bounds().centerX(), btn.bounds().centerY());
//获取其中心位置并点击,返回true
var res = click(btn.bounds().centerX(), btn.bounds().centerY());
console.log("评论按钮点击是否成功===============>>>>" + res);



// find():找到所有该id控件,size():数量
var load_btn_num = id("com.ss.android.ugc.aweme:id/cl4").find().size();
log('加载短视频的数量: ',load_btn_num); // 加载短视频的数量:  2\3\3


// visibleToUser():用户可以看见的
var visual_btn_num = id("com.ss.android.ugc.aweme:id/cl4").
visibleToUser().find().size();
log('用户可以看见的视频数量:',visual_btn_num); // 用户可以看见的视频数量: 1



var visual_btn = id("com.ss.android.ugc.aweme:id/cl4").visibleToUser().findOne();
log(visual_btn); // clickable: false;
var res = click(visual_btn.bounds().centerX(), visual_btn.bounds().centerY());
console.log("评论按钮点击是否成功===============>>>>" + res);

*/

//通过布局去分析控件位置从而避免id的不断修改
// descStartsWith('未选中'):匹配以'未选中'开头的控件
// var like = descStartsWith('未选中').visibleToUser().findOne().click();
// log(like);

var like = descStartsWith('未选中，喜欢').visibleToUser().findOne().click();
log(like);





