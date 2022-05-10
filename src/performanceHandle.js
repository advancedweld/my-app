window.PAGE_PERFORMANCE_HASH_MAP = [];

window.onload = function () {
  setImmediate(() => {
    const { timing } = window.performance;
    const obj = {
      url: location.href,
      dnsTime: timing.domainLookupEnd - timing.domainLookupStart,
      tcpLinkTime: timing.connectEnd - timing.connectStart,
      requestTime: timing.responseEnd - timing.requestStart,
      domTime: timing.domComplete - timing.domInteractive,
      whiteTime: timing.responseStart - timing.navigationStart,
      domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
      onload: timing.loadEventEnd - timing.navigationStart,
      connectEnd: timing.connectEnd,
      connectStart: timing.connectStart,
      domComplete: timing.domComplete,
      domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
      domContentLoadedEventStart: timing.domContentLoadedEventStart,
      domInteractive: timing.domInteractive,
      domLoading: timing.domLoading,
      domainLookupEnd: timing.domainLookupEnd,
      domainLookupStart: timing.domainLookupStart,
      fetchStart: timing.fetchStart,
      loadEventEnd: timing.loadEventEnd,
      loadEventStart: timing.loadEventStart,
      navigationStart: timing.navigationStart,
      redirectEnd: timing.redirectEnd,
      redirectStart: timing.redirectStart,
      requestStart: timing.requestStart,
      responseEnd: timing.responseEnd,
      responseStart: timing.responseStart,
      secureConnectionStart: timing.secureConnectionStart,
      unloadEventEnd: timing.unloadEventEnd,
      unloadEventStart: timing.unloadEventStart,
    };
    window.PAGE_PERFORMANCE_HASH_MAP.push(obj);
    console.log("首屏渲染数据--------", window.PAGE_PERFORMANCE_HASH_MAP);
  });
};
