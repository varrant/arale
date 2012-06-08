define("#widget/0.9.13/widget",["base","$","./daparser","./auto-render"],function(a,b,c){function m(){return"widget-"+l++}function n(a){return k.call(a)==="[object String]"}function o(a){return k.call(a)==="[object Function]"}function p(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function q(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")}function s(a){return r(document.documentElement,a)}function t(a){return a.charAt(0).toUpperCase()+a.substring(1)}function w(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];if(!n(c))continue;u.test(c)?(c=c.replace(/'/g,'"'),a[b]=w(v(c))):a[b]=x(c)}return a}function x(a){if(a.toLowerCase()==="false")a=!1;else if(a.toLowerCase()==="true")a=!0;else if(/\d/.test(a)&&/[^a-z]/i.test(a)){var b=parseFloat(a);b+""===a&&(a=b)}return a}function y(a,b){for(var c in a){if(!a.hasOwnProperty(c))continue;var d=q(c).split(/\s*,\s*/),e=a[c];while(c=d.shift()){var f=c.split(/\s+/),g=f[0],h=f[1];h||(h=g,g="click"),b[g+" "+e]=h}}}function z(a){return a==null||(n(a)||e.isArray(a))&&a.length===0||e.isPlainObject(a)&&p(a)}function D(a){return o(a.events)&&(a.events=a.events()),a.events}function E(a,b){var c=a.match(A),d=c[1]+h+b.cid,e=c[2]||undefined;return e&&e.indexOf("{{")>-1&&(e=F(e,b)),{type:d,selector:e}}function F(a,b){return a.replace(B,function(a,c){var d=c.split("."),g=b,h;while(h=d.shift())g===b.attrs?g=b.get(h):g=g[h];if(n(g))return g;var i=e(g)[0];return i&&i.nodeType===1?"."+f.stamp(i):C})}var d=a("base"),e=a("$"),f=a("./daparser"),g=a("./auto-render"),h=".delegate-events-",i="_onRender",j=d.extend({propsInAttrs:["element","template","model","events"],element:null,template:"<div></div>",model:null,events:null,attrs:{parentNode:document.body},initialize:function(a){this.cid=m();var b=this._parseDataAttrsConfig(a);this.initAttrs(a,b),this.parseElement(),this._parseDataset(),this.initProps(),this.delegateEvents(),this.setup()},_parseDataAttrsConfig:function(a){var b;if(a)var c=e(a.element);return c&&c[0]&&!g.isDataApiOff(c)&&(b=f.parseElement(c),w(b)),b},parseElement:function(){var a=this.element;a?this.element=e(a):this.get("template")&&this.parseElementFromTemplate();if(!this.element||!this.element[0])throw"element is invalid"},parseElementFromTemplate:function(){this.element=e(this.get("template"))},_parseDataset:function(){if(g.isDataApiOff(this.element))return;this.dataset=f.parseBlock(this.element);var a=this.dataset.action;if(a){var b=D(this)||(this.events={});y(a,b)}},initProps:function(){},delegateEvents:function(a,b){a||(a=D(this));if(!a)return;if(n(a)&&o(b)){var c={};c[a]=b,a=c}for(var d in a){if(!a.hasOwnProperty(d))continue;var e=E(d,this),f=e.type,g=e.selector;(function(a,b){var c=function(c){o(a)?a.call(b,c):b[a](c)};g?b.element.on(f,g,c):b.element.on(f,c)})(a[d],this)}return this},undelegateEvents:function(a){var b={};return arguments.length===0?b.type=h+this.cid:b=E(a,this),this.element.off(b.type,b.selector),this},setup:function(){},render:function(){this.rendered||(this._renderAndBindAttrs(),this.rendered=!0);var a=this.get("parentNode");return a&&!s(this.element[0])&&this.element.appendTo(a),this},_renderAndBindAttrs:function(){var a=this,b=a.attrs;for(var c in b){if(!b.hasOwnProperty(c))continue;var d=i+t(c);if(this[d]){var e=this.get(c);z(e)||this[d](this.get(c),undefined,c),function(b){a.on("change:"+c,function(c,d,e){a[b](c,d,e)})}(d)}}},$:function(a){return this.element.find(a)},destroy:function(){this.undelegateEvents(),j.superclass.destroy.call(this)}});j.autoRender=g.autoRender,j.autoRenderAll=g.autoRenderAll,j.StaticsWhiteList=["autoRender"],c.exports=j;var k=Object.prototype.toString,l=0,r=e.contains||function(a,b){return!!(a.compareDocumentPosition(b)&16)},u=/^\s*[\[{].*[\]}]\s*$/,v=this.JSON?JSON.parse:e.parseJSON,A=/^(\S+)\s*(.*)$/,B=/{{([^}]+)}}/g,C="INVALID_SELECTOR"});