define("#widget/0.9.12/auto-render",["$","./daparser"],function(a,b){var c=a("$"),d=a("./daparser");b.autoRender=function(a,b,d){delete b.widget;var e=c.extend({element:a,dataset:d},b);(new this(e)).render()},b.autoRenderAll=function(b){b=c(b||document.body);var e=[],f=[];b.find("[data-widget]").each(function(a,b){e.push(b.getAttribute("data-widget").toLowerCase()),f.push(b)}),e.length&&a.async(e,function(){for(var a=0;a<arguments.length;a++){var b=arguments[a],c=f[a];b.autoRender&&b.autoRender(c,d.parseElement(c),d.parseBlock(c))}})}});