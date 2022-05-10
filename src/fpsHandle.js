let lastFrameTime = performance.now();

window.FPS_DATA_COLLECT = [];

let lastTime = new Date().getTime();
const checkFPS = function () {
  const now = performance.now();
  if (now === lastFrameTime) {
    window.requestAnimationFrame(checkFPS);
    return;
  }
  const fps = Math.round(1000 / (now - lastFrameTime));

  // 根据要求：C端用户要求的标准应为24，普适标准12即可
  const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } =
    window.performance.memory;
  const nTime = new Date().getTime();
  const item = {
    time: nTime,
    url: location.href,
    fps,
    jsHeapSizeLimit,
    totalJSHeapSize,
    usedJSHeapSize,
    browserVersion: window.navigator.appVersion,
    platform: window.navigator.platform,
    deviceInfo: window.navigator.userAgent,
  };
  if (fps < 12 || nTime - lastTime > 5000) {
    window.FPS_DATA_COLLECT.push({ ...item });
    console.log("fps监测------", item.fps);
  }
  lastFrameTime = now;
  lastTime = nTime;
  window.requestAnimationFrame(checkFPS);
};

checkFPS();
