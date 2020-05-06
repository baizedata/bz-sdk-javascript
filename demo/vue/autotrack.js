(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  if(typeof(w['BaizeAnalyticsV20202005']) !== 'undefined') {
      return false;
  }
  w['BaizeAnalyticsV20202005'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup','setProfile','setOnceProfile','identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    x.setAttribute('charset','UTF-8');
    w[n].para = para;
    y.parentNode.insertBefore(x, y);
  }
})({
  // sdk_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.13.10/sensorsdata.min.js',
  sdk_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/sensorsdata.min.js',
  // heatmap_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.13.10/heatmap.min.js',
  heatmap_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/heatmap.min.js',
  name: 'sensors',
  server_url: 'https://test-syg.datasink.sensorsdata.cn/sa?token=27f1e21b78daf376&project=lixiang',
  heatmap: {}
});
