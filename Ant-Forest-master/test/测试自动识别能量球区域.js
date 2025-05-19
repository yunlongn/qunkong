/*
 * @Author: TonyJiangWJ
 * @Date: 2020-08-17 22:14:39
 * @Last Modified by: TonyJiangWJ
 * @Last Modified time: 2023-07-08 17:47:52
 * @Description: 
 */

let { config } = require('../config.js')(runtime, global)
let offset = config.bang_offset
let singletonRequire = require('../lib/SingletonRequirer.js')(runtime, global)
let { debugInfo, errorInfo, warnInfo, logInfo, infoLog } = singletonRequire('LogUtils')
let WidgetUtil = singletonRequire('WidgetUtils')
let WarningFloaty = singletonRequire('WarningFloaty')
let CanvasDrawer = require('../lib/CanvasDrawer.js')

var window = floaty.rawWindow(
  <canvas id="canvas" layout_weight="1" />
);

window.setSize(config.device_width, config.device_height)
window.setTouchable(false)

function exitAndClean () {
  running = false
  if (window !== null) {
    window.canvas.removeAllListeners()
    toastLog('close in 1 seconds')
    sleep(1000)
    window.close()
  }
  exit()
}

function boundsToRegion (bd) {
  return [bd.left, bd.top, bd.right - bd.left, (bd.bottom - bd.top)]
}

function showWarningText (text, position) {
  WarningFloaty.addText(text, position)
}

let detectRegion = null
let running = true

threads.start(function () {
  while (running) {
    WarningFloaty.addText('准备查找 证书 控件', { x: config.device_width / 2, y: config.device_height / 2 })
    let licenseWidget = WidgetUtil.widgetGetOne(/^\s*证书\s*$/, 1000)
    if (licenseWidget) {
      WarningFloaty.addRectangle('找到了证书控件', boundsToRegion(licenseWidget.bounds()))
      let anchorLeft = licenseWidget.bounds().left
      let anchorBottom = licenseWidget.parent().bounds().bottom
      let anchorHeight = licenseWidget.parent().bounds().height()
      let tree_collect_left = anchorLeft
      let tree_collect_top = anchorBottom + anchorHeight
      let tree_collect_width = config.device_width - (anchorLeft * 2)
      let tree_collect_height = anchorHeight * 2.5
      detectRegion = [tree_collect_left, tree_collect_top, tree_collect_width, tree_collect_height]
      log('自动识别能量球区域：' + JSON.stringify(detectRegion))
      break
    } else {
      WarningFloaty.addText('未找到证书控件', { x: config.device_width / 2, y: config.device_height / 2 + 100 })
      log('自动识别能量球识别区域失败，未识别到对象：证书')
    }
    sleep(2000)
    WarningFloaty.clearAll()
  }
})


let converted = false
let startTime = new Date().getTime()
// 两分钟后自动关闭
let targetEndTime = startTime + 120000
let passwindow = 0
let showAxis = false


let canvasDrawer = null
window.canvas.on("draw", function (canvas) {
  try {
    // 清空内容
    canvas.drawColor(0xFFFFFF, android.graphics.PorterDuff.Mode.CLEAR);
    let width = canvas.getWidth()
    let height = canvas.getHeight()
    if (!converted) {
      toastLog('画布大小：' + width + ', ' + height)
    }

    if (canvasDrawer == null) {
      canvasDrawer = new CanvasDrawer(canvas, null, config.bang_offset)
    }

    let countdown = (targetEndTime - new Date().getTime()) / 1000
    canvasDrawer.drawText('关闭倒计时：' + countdown.toFixed(0) + 's', { x: 100, y: 300 }, null, 30)

    passwindow = new Date().getTime() - startTime

    if (passwindow > 1000) {
      startTime = new Date().getTime()
      console.verbose('关闭倒计时：' + countdown.toFixed(2))
    }




    if (detectRegion && detectRegion.length === 4) {
      canvasDrawer.drawRectAndText('能量球判断区域', detectRegion, '#FF00FF')
      let configRegion = [config.tree_collect_left, config.tree_collect_top, config.tree_collect_width, config.tree_collect_height]
      canvasDrawer.drawRectAndText('已配置的能量球判断区域', configRegion, '#00ff00')
    }
    if (showAxis) {
      canvasDrawer.drawCoordinateAxis()
    }
    converted = true
  } catch (e) {
    toastLog(e)
    exitAndClean()
  }
});

let lastChangedTime = new Date().getTime()
threads.start(function () {
  toastLog('按音量上键关闭，音量下切换')
  events.observeKey()
  events.on("key_down", function (keyCode, event) {
    if (keyCode === 24) {
      exitAndClean()
    } else if (keyCode === 25) {
      // 设置最低间隔200毫秒，避免修改太快
      if (new Date().getTime() - lastChangedTime > 200) {
        lastChangedTime = new Date().getTime()
        showAxis = !showAxis
      }
    }
  })
})

setTimeout(function () { exitAndClean() }, 120000)