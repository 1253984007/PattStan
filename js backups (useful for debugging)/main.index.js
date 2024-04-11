window.__require = function t(e, o, n) {
function r(i, a) {
if (!o[i]) {
if (!e[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var d = o[i] = {
exports: {}
};
e[i][0].call(d.exports, function(t) {
return r(e[i][1][t] || t);
}, d, d.exports, t, e, o, n);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
AIAddCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ebebydY7lDUoUvR5mpCr1M", "AIAddCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.cards_ = [ "A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", "M1" ];
return e;
}
e.prototype.start = function() {
this.add();
};
e.prototype.add = function() {
for (var t = 0; t < this.cards_.length; t++) {
console.log(this.cards_[t]);
var e = cc.instantiate(this.card);
null != e.getComponent("CardText").str && (e.getComponent("CardText").str = this.cards_[t]);
e.setParent(this.node);
e.y = 0;
e.x = 50 * t - 275;
}
};
c([ s(cc.Prefab) ], e.prototype, "card", void 0);
c([ s ], e.prototype, "cards_", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
AddCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7df71pie99OeLiDKSaoomSL", "AddCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.cards_ = [ "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2", "K2", "L2", "M2" ];
return e;
}
e.prototype.start = function() {
this.add();
};
e.prototype.add = function() {
for (var t = 0; t < this.cards_.length; t++) {
console.log(this.cards_[t]);
var e = cc.instantiate(this.card);
e.getComponent("CardText").str = this.cards_[t];
e.setParent(this.node);
e.y = 0;
e.x = 50 * t - 275;
}
};
c([ s(cc.Prefab) ], e.prototype, "card", void 0);
c([ s ], e.prototype, "cards_", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
AddMyCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "789fbyKKOBFN4UReuMkZW61", "AddMyCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node1 = null;
e.num = null;
e.cardList = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.cardList = [];
for (var e = 0; e < this.node.children.length; e++) {
this.node.children[e].getComponent("CardText").str = this.node1.getComponent("MyCards1").cards[0];
this.cardList.push(this.node1.getComponent("MyCards1").cards[0]);
this.node1.getComponent("MyCards1").cards.shift();
}
this.node.children[0].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 260;
t.node.children[1].y = t.node.y + 240;
t.node.children[2].y = t.node.y + 240;
t.num = 0;
}, this);
this.node.children[1].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 240;
t.node.children[1].y = t.node.y + 260;
t.node.children[2].y = t.node.y + 240;
t.num = 1;
}, this);
this.node.children[2].on(cc.Node.EventType.TOUCH_END, function() {
t.node.children[0].y = t.node.y + 240;
t.node.children[1].y = t.node.y + 240;
t.node.children[2].y = t.node.y + 260;
t.num = 2;
}, this);
};
c([ s(cc.Node) ], e.prototype, "node1", void 0);
c([ s ], e.prototype, "num", void 0);
c([ s ], e.prototype, "cardList", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
AddOther: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1164f3aMPdBXLfmfRtuAu0d", "AddOther");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.bg = null;
e.cards = [ "A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2", "G1", "G2", "H1", "H2", "I1", "I2", "J1", "J2", "K1", "K2", "L1", "L2" ];
e.numss = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ];
return e;
}
e.prototype.start = function() {
var t = this;
this.cards = this.shuffleArray(this.cards);
console.log("中央数组：" + this.cards);
for (var e = function(e) {
var n = cc.instantiate(o.card), r = cc.instantiate(o.bg);
n.getComponent("CardText").str = o.cards[e];
n.setParent(o.node);
r.setParent(o.node);
n.on(cc.Node.EventType.TOUCH_END, function() {
console.log("我方点击的牌：" + n.getComponent("CardText").str);
r.active = !1;
console.log("我方点击的牌序号：" + e);
t.numss.includes(t.numss.indexOf(e)) && (t.numss = t.numss.filter(function(o) {
return o !== t.numss.indexOf(e);
}));
console.log("数组：" + t.numss);
if ("2" === n.getComponent("CardText").str.charAt(1)) {
var o = cc.moveTo(.5, cc.v2(t.node.x + 440, t.node.y));
n.runAction(cc.sequence(o, cc.callFunc(function() {
setTimeout(function() {
n.active = !1;
t.aiflip();
}, 300);
})));
} else t.aiflip();
}, o);
if (e < 4) {
n.y = 110;
n.x = 80 * e - 275;
r.y = 110;
r.x = 80 * e - 275;
} else if (e < 8) {
n.y = 110;
n.x = 325 - 80 * (e - 4);
r.y = 110;
r.x = 325 - 80 * (e - 4);
} else if (e < 12) {
n.y = 0;
n.x = 80 * (e - 8) - 275;
r.y = 0;
r.x = 80 * (e - 8) - 275;
} else if (e < 16) {
n.y = 0;
n.x = 325 - 80 * (e - 12);
r.y = 0;
r.x = 325 - 80 * (e - 12);
} else if (e < 20) {
n.y = -110;
n.x = 80 * (e - 16) - 275;
r.y = -110;
r.x = 80 * (e - 16) - 275;
} else {
n.y = -110;
n.x = 325 - 80 * (e - 20);
r.y = -110;
r.x = 325 - 80 * (e - 20);
}
}, o = this, n = 0; n < this.cards.length; n++) e(n);
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.slice(), n = o.length - 1; n > 0; n--) {
var r = Math.floor(Math.random() * (n + 1));
e = [ o[r], o[n] ], o[n] = e[0], o[r] = e[1];
}
return o;
};
e.prototype.aiflip = function() {
var t = this.numss[Math.floor(Math.random() * this.numss.length)];
console.log("敌方点击的牌：" + this.node.children[2 * t].getComponent("CardText").str);
console.log("敌方点击的牌序号：" + t);
this.numss.splice(this.numss.indexOf(t), 1);
console.log("数组：" + this.numss);
var e = this.node.children[2 * t];
this.node.children[2 * t + 1].active = !1;
if ("1" === e.getComponent("CardText").str.charAt(1)) {
var o = cc.moveTo(.5, cc.v2(this.node.x + 440, this.node.y));
e.runAction(cc.sequence(o, cc.callFunc(function() {
setTimeout(function() {
e.active = !1;
}, 300);
})));
}
};
c([ s(cc.Prefab) ], e.prototype, "card", void 0);
c([ s(cc.Prefab) ], e.prototype, "bg", void 0);
c([ s ], e.prototype, "cards", void 0);
c([ s ], e.prototype, "numss", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Back: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "46cb1uNsOlJnY1f0YHCEQ4D", "Back");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.loadScene("home");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
CardText: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c3d94sYDf1Kfq344zTXtHFo", "CardText");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.textNode = null;
e.str = "";
return e;
}
e.prototype.start = function() {
null === this.str ? this.addDate("N5") : this.addDate(this.str);
};
e.prototype.addDate = function(t) {
var e = this;
console.log("======>" + t);
var o, n = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
"A" === t.charAt(0) ? this.label.string = n[0] : "B" === t.charAt(0) ? this.label.string = n[1] : "C" === t.charAt(0) ? this.label.string = n[2] : "D" === t.charAt(0) ? this.label.string = n[3] : "E" === t.charAt(0) ? this.label.string = n[4] : "F" === t.charAt(0) ? this.label.string = n[5] : "G" === t.charAt(0) ? this.label.string = n[6] : "H" === t.charAt(0) ? this.label.string = n[7] : "I" === t.charAt(0) ? this.label.string = n[8] : "J" === t.charAt(0) ? this.label.string = n[9] : "K" === t.charAt(0) ? this.label.string = n[10] : "L" === t.charAt(0) ? this.label.string = n[11] : "M" === t.charAt(0) ? this.label.string = n[12] : this.label.string = "";
o = "1" === t.charAt(1) ? 0 : "2" === t.charAt(1) ? 1 : "3" === t.charAt(1) ? 2 : "4" === t.charAt(1) ? 3 : 4;
cc.loader.loadRes([ "1.png", "2.png", "3.png", "4.png", "5.png" ][o], cc.SpriteFrame, function(t, o) {
t && console.error("Failed to Load sprite frame:", t);
e.node.getComponent(cc.Sprite).spriteFrame = o;
});
this.textNode.color = cc.color(66, 66, 66);
};
c([ s(cc.Label) ], e.prototype, "label", void 0);
c([ s(cc.Node) ], e.prototype, "textNode", void 0);
c([ s ], e.prototype, "str", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
CardVenueTS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "647cbAeVvNAHaoZ+H85Eu9/", "CardVenueTS");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.num = 0;
e.cards_ = [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4", "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4", "L1", "L2", "L3", "L4", "M1", "M2", "M3", "M4" ];
e.node1 = null;
e.node2 = null;
e.node3 = null;
e.node4 = null;
e.popup = null;
e.handCard = null;
return e;
}
e.prototype.onLoad = function() {
this.cards_ = this.shuffleArray(this.cards_);
console.log("数组:" + this.cards_);
this.node1.getComponent("MyCards1").cards = this.cards_.slice(0, 26);
this.node2.getComponent("MyCards1").cards = this.cards_.slice(26, 52);
this.node2.getComponent("MyCards1").string = "2";
this.node3.getComponent("MyCards1").cards = [];
this.node4.getComponent("MyCards1").cards = [];
};
e.prototype.start = function() {};
e.prototype.add = function() {
var t = this, e = cc.instantiate(this.card), o = this.handCard.getComponent("AddMyCard");
if (null != o.num) {
e.getComponent("CardText").str = o.cardList[o.num];
e.setParent(this.node);
0 == o.num ? e.x = -90 : 1 == o.num ? e.x = 0 : 2 == o.num && (e.x = 90);
e.y = -225;
var n = cc.moveTo(.5, cc.v2(this.node.children[this.node.children.length - 2].x + 50, this.node.children[this.node.children.length - 2].y));
this.handCard.children[o.num].active = !1;
e.runAction(cc.sequence(n, cc.callFunc(function() {
if (0 == t.node1.getComponent("MyCards1").cards.length && 0 != t.node3.getComponent("MyCards1").cards.length) {
t.node1.getComponent("MyCards1").cards = t.shuffleArray(t.node3.getComponent("MyCards1").cards);
t.node3.getComponent("MyCards1").cards = [];
t.node1.getComponent("MyCards1").updateLabel();
t.node3.getComponent("MyCards1").updateLabel();
} else if (0 == t.node1.getComponent("MyCards1").cards.length && 0 == t.node3.getComponent("MyCards1").cards.length) {
t.popup.getComponent("PopupTS").showPopup("0");
t.num = null;
return;
}
t.handCard.children[t.handCard.getComponent("AddMyCard").num].y = t.handCard.y + 240;
t.handCard.children[t.handCard.getComponent("AddMyCard").num].getComponent("CardText").str = t.node1.getComponent("MyCards1").cards[0];
t.handCard.children[t.handCard.getComponent("AddMyCard").num].getComponent("CardText").addDate(t.node1.getComponent("MyCards1").cards[0]);
t.handCard.getComponent("AddMyCard").cardList[t.handCard.getComponent("AddMyCard").num] = t.node1.getComponent("MyCards1").cards[0];
t.node1.getComponent("MyCards1").cards.shift();
t.node1.getComponent("MyCards1").updateLabel();
t.handCard.children[o.num].active = !0;
t.handCard.getComponent("AddMyCard").num = null;
setTimeout(function() {
console.log("添加1:" + e.getComponent("CardText").label.string);
for (var o = 0; o < t.node.children.length - 1; o++) if (e.getComponent("CardText").label.string === t.node.children[o].getComponent("CardText").label.string) {
for (var n = t.node.children.length - 1; n >= o; n--) {
t.node3.getComponent("MyCards1").cards.push(t.node.children[n].getComponent("CardText").str);
t.node3.getComponent("MyCards1").updateLabel();
t.collectCard("1", t.node.children[n]);
}
setTimeout(function() {
t.num = 0;
}, 800);
return;
}
t.enemyAdd();
}, 300);
})));
} else this.num = 0;
};
e.prototype.enemyAdd = function() {
var t = this;
if (this.node2.getComponent("MyCards1").cards.length <= 3 && this.node4.getComponent("MyCards1").cards.length > 0) {
this.node2.getComponent("MyCards1").cards = this.shuffleArray(this.node2.getComponent("MyCards1").cards.concat(this.node4.getComponent("MyCards1").cards));
this.node4.getComponent("MyCards1").cards = [];
this.node2.getComponent("MyCards1").updateLabel1();
this.node4.getComponent("MyCards1").updateLabel();
}
var e = cc.instantiate(this.card);
e.getComponent("CardText").str = this.node2.getComponent("MyCards1").cards[0];
console.log("牌组2:" + this.node2.getComponent("MyCards1").cards);
this.node2.getComponent("MyCards1").cards.shift();
this.node2.getComponent("MyCards1").updateLabel1();
e.setParent(this.node);
e.x = -90;
e.y = 225;
var o = cc.moveTo(.5, cc.v2(this.node.children[this.node.children.length - 2].x + 50, this.node.children[this.node.children.length - 2].y));
e.runAction(cc.sequence(o, cc.callFunc(function() {
setTimeout(function() {
console.log("添加2:" + e.getComponent("CardText").label.string);
for (var o = 0; o < t.node.children.length - 1; o++) {
console.log("场地2:" + t.node.children[o].getComponent("CardText").label.string);
if (e.getComponent("CardText").label.string === t.node.children[o].getComponent("CardText").label.string) {
for (var n = t.node.children.length - 1; n >= o; n--) {
t.node4.getComponent("MyCards1").cards.push(t.node.children[n].getComponent("CardText").str);
t.node4.getComponent("MyCards1").updateLabel();
t.collectCard("2", t.node.children[n]);
}
setTimeout(function() {
t.enemyAdd();
}, 800);
return;
}
}
t.num = 0;
if (t.node2.getComponent("MyCards1").cards.length <= 3 && 0 == t.node4.getComponent("MyCards1").cards.length) {
t.popup.getComponent("PopupTS").showPopup("1");
t.num = null;
}
}, 300);
})));
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.slice(), n = o.length - 1; n > 0; n--) {
var r = Math.floor(Math.random() * (n + 1));
e = [ o[r], o[n] ], o[n] = e[0], o[r] = e[1];
}
return o;
};
e.prototype.collectCard = function(t, e) {
if ("1" == t) {
var o = cc.moveTo(.5, cc.v2(-310, -240));
e.runAction(cc.sequence(o, cc.callFunc(function() {
e.destroy;
e.removeFromParent();
})));
} else if ("2" == t) {
o = cc.moveTo(.5, cc.v2(400, 240));
e.runAction(cc.sequence(o, cc.callFunc(function() {
e.destroy;
e.removeFromParent();
})));
}
};
e.prototype.update = function() {};
c([ s(cc.Prefab) ], e.prototype, "card", void 0);
c([ s ], e.prototype, "num", void 0);
c([ s ], e.prototype, "cards_", void 0);
c([ s(cc.Node) ], e.prototype, "node1", void 0);
c([ s(cc.Node) ], e.prototype, "node2", void 0);
c([ s(cc.Node) ], e.prototype, "node3", void 0);
c([ s(cc.Node) ], e.prototype, "node4", void 0);
c([ s(cc.Node) ], e.prototype, "popup", void 0);
c([ s(cc.Node) ], e.prototype, "handCard", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Cards: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c9ebdojdsJCJK06/RH39Csf", "Cards");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
jsb.reflection.callStaticMethod("GameStart", "cards");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
MyCards1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bb17bZNzjVLHYKJ3W1ky3gw", "MyCards1");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cards = null;
e.label = null;
e.string = "1";
return e;
}
e.prototype.start = function() {
console.log("数组1:" + this.cards);
"1" === this.string ? this.updateLabel() : this.updateLabel1();
};
e.prototype.updateLabel = function() {
this.label.string = this.cards.length.toString();
};
e.prototype.updateLabel1 = function() {
this.label.string = (this.cards.length - 3).toString();
};
e.prototype.update = function() {};
c([ s ], e.prototype, "cards", void 0);
c([ s(cc.Label) ], e.prototype, "label", void 0);
c([ s ], e.prototype, "string", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
OpenGame1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5bac80u6GlI2ZilvTLMM+3I", "OpenGame1");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("main");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
OpenGame2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "12aaatnEjFH7pnOw5jUXEwQ", "OpenGame2");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("game2");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
OpenGame3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "619272uw2BCVIYk5uf9omwH", "OpenGame3");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("main");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
PopupTS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1ebb6VPya5Ci53R9b4Rf9Bf", "PopupTS");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.popupPrefab = null;
return e;
}
e.prototype.showPopup = function(t) {
var e, o = this, n = cc.instantiate(this.popupPrefab);
n.y = 40;
e = "1" === t ? "win.png" : "lose.png";
cc.loader.loadRes(e, cc.SpriteFrame, function(t, e) {
t && console.error("Failed to Load sprite frame:", t);
n.children[0].getComponent(cc.Sprite).spriteFrame = e;
});
n.parent = this.node;
n.children[1].on(cc.Node.EventType.TOUCH_END, function() {
o.closePopup();
cc.director.loadScene("home");
}, this);
};
e.prototype.closePopup = function() {
this.node.removeAllChildren();
};
c([ s(cc.Prefab) ], e.prototype, "popupPrefab", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ResetBt: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a689c5uEN9B/4ql6XpfORIs", "ResetBt");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mNode1 = null;
e.mNode3 = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
if (0 != t.mNode3.getComponent("MyCards1").cards.length) {
t.mNode1.getComponent("MyCards1").cards = t.shuffleArray(t.mNode1.getComponent("MyCards1").cards.concat(t.mNode3.getComponent("MyCards1").cards));
t.mNode3.getComponent("MyCards1").cards = [];
t.mNode1.getComponent("MyCards1").updateLabel();
t.mNode3.getComponent("MyCards1").updateLabel();
console.log("牌组:" + t.mNode1.getComponent("MyCards1").cards);
console.log("牌库:" + t.mNode3.getComponent("MyCards1").cards);
}
}, this);
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.slice(), n = o.length - 1; n > 0; n--) {
var r = Math.floor(Math.random() * (n + 1));
e = [ o[r], o[n] ], o[n] = e[0], o[r] = e[1];
}
return o;
};
c([ s(cc.Node) ], e.prototype, "mNode1", void 0);
c([ s(cc.Node) ], e.prototype, "mNode3", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
StartGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "913e889ZldCoonxoeZmY2tE", "StartGame");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.loadScene("main");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
addCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "24304h9nPJANohOPWKpx8D6", "addCard");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.cards = [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4", "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4", "L1", "L2", "L3", "L4", "M1", "M2", "M3", "M4" ];
return e;
}
e.prototype.start = function() {
for (var t = 0; t < this.cards.length; t++) {
var e = cc.instantiate(this.card);
e.getComponent("CardText").str = this.cards[t];
e.setParent(this.node);
if (t < 13) {
e.x = 70 * t - 490;
e.y = 90;
} else if (t < 26) {
e.x = 70 * (t - 13) - 490;
e.y = 0;
} else if (t < 39) {
e.x = 70 * (t - 26) - 490;
e.y = -90;
} else {
e.x = 70 * (t - 39) - 490;
e.y = -180;
}
}
};
c([ s(cc.Prefab) ], e.prototype, "card", void 0);
c([ s ], e.prototype, "cards", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
clear: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6abf9n0hgFO7pHVGobeaayn", "clear");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
jsb.reflection.callStaticMethod("GameStart", "clear");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
gameOut: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e00ffBxLKpBtJ9c5Qub2dfY", "gameOut");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
jsb.reflection.callStaticMethod("GameStart", "end");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
gameplay: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a81b2KW2nJJZITvsAXnEGLL", "gameplay");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
jsb.reflection.callStaticMethod("GameStart", "introdution");
}, this);
};
return c([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
palyBt: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "acdd2ra9tdE+6Yf97ziPp6o", "palyBt");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cardVenue = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
if (0 == t.cardVenue.getComponent("CardVenueTS").num) {
t.cardVenue.getComponent("CardVenueTS").num = 1;
t.cardVenue.getComponent("CardVenueTS").add();
}
}, this);
};
c([ s(cc.Node) ], e.prototype, "cardVenue", void 0);
return c([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "addCard", "AIAddCard", "AddCard", "AddOther", "Cards", "StartGame", "clear", "gameOut", "gameplay", "AddMyCard", "Back", "CardText", "CardVenueTS", "MyCards1", "PopupTS", "ResetBt", "palyBt", "OpenGame1", "OpenGame2", "OpenGame3" ]);