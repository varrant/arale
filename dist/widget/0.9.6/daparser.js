define("#widget/0.9.6/daparser",[],function(a,b){function e(a){var b=[];for(var c=0,d=a.length;c<d;c++){var e=a[c];e.nodeType===1&&b.push(e)}return b}function f(a){if(a.dataset)return a.dataset;var b={},c=a.attributes;for(var d=0,e=c.length;d<e;d++){var f=c[d],g=f.name;g.indexOf("data-")===0&&(g=i(g.substring(5)),b[g]=f.value)}return b}function g(a){var b=a.outerHTML;if(b)return b.indexOf(" data-")!==-1;var c=a.innerHTML;if(c&&c.indexOf(" data-")!==-1)return!0;var d=f(a);for(var e in d)return!0;return!1}function i(a){return a.toLowerCase().replace(h,function(a,b){return(b+"").toUpperCase()})}function k(){return"daparser-"+j++}var c="data-daparser-cid",d=b;d.parse=function(a){var b={};if(!g(a))return b;var h=e(a.getElementsByTagName("*"));h.unshift(a);for(var i=0,j=h.length;i<j;i++){var k=h[i],l=f(k),m=k.getAttribute(c);for(var n in l){m||(m=d.stamp(k));var o=l[n],p=b[n]||(b[n]={});p[o]||(p[o]=""),p[o]+=(p[o]?",":"")+"."+m}}return b},d.stamp=function(a){var b=a.getAttribute(c);return b||(b=k(),a.setAttribute(c,b),a.className+=" "+b),b};var h=/-([a-z])/g,j=0});