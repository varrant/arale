define("#switchable/0.9.2/extra/utils",["jquery","underscore"],function(a,b,c){var d=c.exports,e=a("jquery"),f=a("underscore"),g=Object.prototype.toString,h=Object.prototype,g=h.toString,i=!1,j=d.later=function(a,b,c,d,g){b=b||0;var h=a,i=e.makeArray(g),j,k;return f.isString(a)&&(h=d[a]),h||console.error("method undefined"),j=function(){h.apply(d,i)},k=c?setInterval(j,b):setTimeout(j,b),{id:k,interval:c,cancel:function(){this.interval?clearInterval(k):clearTimeout(k)}}};d.buffer=function(a,b,c){function e(){e.stop(),d=j(a,b,i,c||this,arguments)}b=b||150;if(b===-1)return function(){a.apply(c||this,arguments)};var d=null;return e.stop=function(){d&&(d.cancel(),d=0)},e}});