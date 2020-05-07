(function(para) {
  if(typeof(window['BaizeAnalyticsV20202005']) !== 'undefined') {
    return false;
  }
  window['BaizeAnalyticsV20202005'] = para.name;
  window[para.name] = {
    para: para
  };
})({
  app_id: '3',
  sdk_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/1.15.2/baizedata.min.js',
  heatmap_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/1.15.2/heatmap.min.js',
  name: 'baize',
  server_url: 'http://localhost:8432/logger/webbz'
});
