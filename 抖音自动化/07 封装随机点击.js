







// var like = descStartsWith('未选中').visibleToUser().findOne().bounds();

// var left = like.left;

// var right = like.right;

// var top = like.top;

// var bottom = like.bottom;

// log(left,right,top,bottom)

// // 928 1065 1205 1420

// var 控件宽度 = right - left;

// log(控件宽度)
// // 137

// var 控件高度 = bottom - top;
// log(控件高度)
// // 215

// var centerX = left + 控件宽度 / 2

// log(parseInt(centerX))

// // 996.5
// var centerY = top + 控件高度 / 2

// log(parseInt(centerY))
// // 1312.5

// log(like.centerX(),like.centerY())


// var 随机宽度 = random(1,控件宽度)

// var 随机高度 = random(1,控件高度)

// log(随机宽度,随机高度)

// var 随机X = left + 随机宽度;

// var 随机Y = top + 随机高度;

// log(随机X,随机Y)

// click(随机X,随机Y)


//============================================================//

var like = descStartsWith('未选中').visibleToUser().findOne();

randomClick(like);

function randomClick(控件对象)
{
    var bound = 控件对象.bounds();

    var randX = bound.left + random(1,bound.right - bound.left);

    var randY = bound.top + random(1,bound.bottom - bound.top);

    click(randX,randY)
}
