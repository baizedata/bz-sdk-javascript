(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  if(typeof(w['BaizeAnalyticsV20202005']) !== 'undefined') {
      return false;
  }
  w['BaizeAnalyticsV20202005'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup','setProfile','setOnceProfile','identify','login','logout','clearAllRegister','getAppStatus'];
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
  app_id: '3',
  sdk_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/1.15.2/baizedata.min.js',
  heatmap_url: 'http://harness.oss-cn-hangzhou.aliyuncs.com/1.15.2/heatmap.min.js',
  name: 'baize',
  server_url: 'http://localhost:8432/logger/webbz'
});
