import { unref as oe, getCurrentScope as fo, onScopeDispose as oo, ref as Be, readonly as lo, getCurrentInstance as E0, onMounted as Sn, nextTick as uo, watch as Cn, openBlock as ve, createElementBlock as Pe, createElementVNode as Se, warn as ho, inject as Qt, computed as Ae, isRef as xo, provide as Jn, defineComponent as Cr, renderSlot as Ua, mergeProps as po, normalizeClass as Tr, createVNode as be, Transition as T0, withCtx as Me, withDirectives as Aa, toDisplayString as Ft, vShow as on, shallowReactive as vo, createBlock as Qe, normalizeStyle as Zn, createCommentVNode as Fr, resolveDynamicComponent as Di, Fragment as wt, withModifiers as Ii, isVNode as Sa, render as ln, resolveComponent as pr, renderList as w0, createTextVNode as Wt, resolveDirective as go, pushScopeId as mo, popScopeId as _o } from "vue";
const un = (e, t) => {
  const r = Object.prototype.toString.call(e);
  if (r === "[object String]")
    e = e.trim();
  else if (r === "[object Array]")
    e = e.map((a) => un(a, t));
  else if (r === "[object Object]")
    for (let a in e)
      t && typeof a == "string" && a !== a.trim() && (e[a.trim()] = e[a], delete e[a], a = a.trim()), e[a] = un(e[a], t);
  return e;
};
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Ri = 1252, Eo = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], k0 = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
}, y0 = function(e) {
  Eo.indexOf(e) != -1 && (Ri = k0[0] = e);
};
function To() {
  y0(1252);
}
var Ur = function(e) {
  y0(e);
};
function Ni() {
  Ur(1200), To();
}
function cs(e) {
  for (var t = [], r = 0, a = e.length; r < a; ++r)
    t[r] = e.charCodeAt(r);
  return t;
}
function wo(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return t.join("");
}
function bi(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var ua = function(e) {
  var t = e.charCodeAt(0), r = e.charCodeAt(1);
  return t == 255 && r == 254 ? wo(e.slice(2)) : t == 254 && r == 255 ? bi(e.slice(2)) : t == 65279 ? e.slice(1) : e;
}, Ya = function(t) {
  return String.fromCharCode(t);
}, fs = function(t) {
  return String.fromCharCode(t);
}, ft, lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function os(e) {
  for (var t = "", r = 0, a = 0, n = 0, s = 0, i = 0, c = 0, f = 0, l = 0; l < e.length; )
    r = e.charCodeAt(l++), s = r >> 2, a = e.charCodeAt(l++), i = (r & 3) << 4 | a >> 4, n = e.charCodeAt(l++), c = (a & 15) << 2 | n >> 6, f = n & 63, isNaN(a) ? c = f = 64 : isNaN(n) && (f = 64), t += lt.charAt(s) + lt.charAt(i) + lt.charAt(c) + lt.charAt(f);
  return t;
}
function Sr(e) {
  var t = "", r = 0, a = 0, n = 0, s = 0, i = 0, c = 0, f = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; )
    s = lt.indexOf(e.charAt(l++)), i = lt.indexOf(e.charAt(l++)), r = s << 2 | i >> 4, t += String.fromCharCode(r), c = lt.indexOf(e.charAt(l++)), a = (i & 15) << 4 | c >> 2, c !== 64 && (t += String.fromCharCode(a)), f = lt.indexOf(e.charAt(l++)), n = (c & 3) << 6 | f, f !== 64 && (t += String.fromCharCode(n));
  return t;
}
var Ee = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Dt = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function xt(e) {
  return Ee ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function ls(e) {
  return Ee ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Br = function(t) {
  return Ee ? Dt(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function It(e) {
  if (Array.isArray(e))
    return e.map(function(a) {
      return String.fromCharCode(a);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function F0(e) {
  if (typeof ArrayBuffer > "u")
    throw new Error("Unsupported");
  if (e instanceof ArrayBuffer)
    return F0(new Uint8Array(e));
  for (var t = new Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}
var ot = Ee ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Dt(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var a = new Uint8Array(r), n = 0;
    for (t = 0, r = 0; t < e.length; r += n, ++t)
      if (n = e[t].length, e[t] instanceof Uint8Array)
        a.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        a.set(new Uint8Array(e[t]), r);
      }
    return a;
  }
  return [].concat.apply([], e.map(function(s) {
    return Array.isArray(s) ? s : [].slice.call(s);
  }));
};
function ko(e) {
  for (var t = [], r = 0, a = e.length + 250, n = xt(e.length + 255), s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i < 128)
      n[r++] = i;
    else if (i < 2048)
      n[r++] = 192 | i >> 6 & 31, n[r++] = 128 | i & 63;
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var c = e.charCodeAt(++s) & 1023;
      n[r++] = 240 | i >> 8 & 7, n[r++] = 128 | i >> 2 & 63, n[r++] = 128 | c >> 6 & 15 | (i & 3) << 4, n[r++] = 128 | c & 63;
    } else
      n[r++] = 224 | i >> 12 & 15, n[r++] = 128 | i >> 6 & 63, n[r++] = 128 | i & 63;
    r > a && (t.push(n.slice(0, r)), r = 0, n = xt(65535), a = 65530);
  }
  return t.push(n.slice(0, r)), ot(t);
}
var gr = /\u0000/g, ha = /[\u0001-\u0006]/g;
function Gt(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function Hr(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Le("0", t - r.length) + r;
}
function A0(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Le(" ", t - r.length) + r;
}
function hn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + Le(" ", t - r.length);
}
function yo(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : Le("0", t - r.length) + r;
}
function Fo(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Le("0", t - r.length) + r;
}
var us = /* @__PURE__ */ Math.pow(2, 32);
function Bt(e, t) {
  if (e > us || e < -us)
    return yo(e, t);
  var r = Math.round(e);
  return Fo(r, t);
}
function xn(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var hs = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Un = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Ao(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var pe = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, xs = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, So = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function dn(e, t, r) {
  for (var a = e < 0 ? -1 : 1, n = e * a, s = 0, i = 1, c = 0, f = 1, l = 0, o = 0, h = Math.floor(n); l < t && (h = Math.floor(n), c = h * i + s, o = h * l + f, !(n - h < 5e-8)); )
    n = 1 / (n - h), s = i, i = c, f = l, l = o;
  if (o > t && (l > t ? (o = f, c = s) : (o = l, c = i)), !r)
    return [0, a * c, o];
  var x = Math.floor(a * c / o);
  return [x, a * c - x * o, o];
}
function Et(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var a = e | 0, n = Math.floor(86400 * (e - a)), s = 0, i = [], c = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(c.u) < 1e-6 && (c.u = 0), t && t.date1904 && (a += 1462), c.u > 0.9999 && (c.u = 0, ++n == 86400 && (c.T = n = 0, ++a, ++c.D)), a === 60)
    i = r ? [1317, 10, 29] : [1900, 2, 29], s = 3;
  else if (a === 0)
    i = r ? [1317, 8, 29] : [1900, 1, 0], s = 6;
  else {
    a > 60 && --a;
    var f = new Date(1900, 0, 1);
    f.setDate(f.getDate() + a - 1), i = [f.getFullYear(), f.getMonth() + 1, f.getDate()], s = f.getDay(), a < 60 && (s = (s + 6) % 7), r && (s = No(f, i));
  }
  return c.y = i[0], c.m = i[1], c.d = i[2], c.S = n % 60, n = Math.floor(n / 60), c.M = n % 60, n = Math.floor(n / 60), c.H = n, c.q = s, c;
}
var Pi = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Co = /* @__PURE__ */ Pi.getTime(), Oo = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Li(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Oo && (r += 24 * 60 * 60 * 1e3), (r - (Co + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Pi.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function S0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Do(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Io(e) {
  var t = e < 0 ? 12 : 11, r = S0(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function Ro(e) {
  var t = S0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function Ca(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = Io(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = Ro(e), S0(Do(r.toUpperCase()));
}
function At(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Ca(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return br(14, Li(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function No(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function bo(e, t, r, a) {
  var n = "", s = 0, i = 0, c = r.y, f, l = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          f = c % 100, l = 2;
          break;
        default:
          f = c % 1e4, l = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          f = r.m, l = t.length;
          break;
        case 3:
          return Un[r.m - 1][1];
        case 5:
          return Un[r.m - 1][0];
        default:
          return Un[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          f = r.d, l = t.length;
          break;
        case 3:
          return hs[r.q][0];
        default:
          return hs[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          f = 1 + (r.H + 11) % 12, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          f = r.H, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          f = r.M, l = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? Hr(r.S, t.length) : (a >= 2 ? i = a === 3 ? 1e3 : 100 : i = a === 1 ? 10 : 1, s = Math.round(i * (r.S + r.u)), s >= 60 * i && (s = 0), t === "s" ? s === 0 ? "0" : "" + s / i : (n = Hr(s, 2 + a), t === "ss" ? n.substr(0, 2) : "." + n.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          f = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          f = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          f = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      l = t.length === 3 ? 1 : 2;
      break;
    case 101:
      f = c, l = 1;
      break;
  }
  var o = l > 0 ? Hr(f, l) : "";
  return o;
}
function ut(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, a = e.substr(0, r); r != e.length; r += t)
    a += (a.length > 0 ? "," : "") + e.substr(r, t);
  return a;
}
var Mi = /%/g;
function Po(e, t, r) {
  var a = t.replace(Mi, ""), n = t.length - a.length;
  return rt(e, a, r * Math.pow(10, 2 * n)) + Le("%", n);
}
function Lo(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return rt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function Bi(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Bi(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0 && (s += n), r = (t / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n), r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, o) {
      return f + l + o.substr(0, (n + s) % n) + "." + o.substr(s) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Ui = /# (\?+)( ?)\/( ?)(\d+)/;
function Mo(e, t, r) {
  var a = parseInt(e[4], 10), n = Math.round(t * a), s = Math.floor(n / a), i = n - s * a, c = a;
  return r + (s === 0 ? "" : "" + s) + " " + (i === 0 ? Le(" ", e[1].length + 1 + e[4].length) : A0(i, e[1].length) + e[2] + "/" + e[3] + Hr(c, e[4].length));
}
function Bo(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + Le(" ", e[1].length + 2 + e[4].length);
}
var Hi = /^#*0*\.([0#]+)/, Vi = /\).*[0#]/, $i = /\(###\) ###\\?-####/;
function xr(e) {
  for (var t = "", r, a = 0; a != e.length; ++a)
    switch (r = e.charCodeAt(a)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function ds(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function ps(e, t) {
  var r = e - Math.floor(e), a = Math.pow(10, t);
  return t < ("" + Math.round(r * a)).length ? 0 : Math.round(r * a);
}
function Uo(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function Ho(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function Rr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Vi)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Rr("n", a, r) : "(" + Rr("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return Lo(e, t, r);
  if (t.indexOf("%") !== -1)
    return Po(e, t, r);
  if (t.indexOf("E") !== -1)
    return Bi(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Rr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, s, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return l + Bt(f, t.length);
  if (t.match(/^[#?]+$/))
    return n = Bt(r, 0), n === "0" && (n = ""), n.length > t.length ? n : xr(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(Ui))
    return Mo(s, f, l);
  if (t.match(/^#+0+$/))
    return l + Bt(f, t.length - t.indexOf("0"));
  if (s = t.match(Hi))
    return n = ds(r, s[1].length).replace(/^([^\.]+)$/, "$1." + xr(s[1])).replace(/\.$/, "." + xr(s[1])).replace(/\.(\d*)$/, function(p, u) {
      return "." + u + Le("0", xr(
        /*::(*/
        s[1]
      ).length - u.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), s = t.match(/^(0*)\.(#*)$/))
    return l + ds(f, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = t.match(/^#{1,3},##0(\.?)$/))
    return l + ut(Bt(f, 0));
  if (s = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Rr(e, t, -r) : ut("" + (Math.floor(r) + Uo(r, s[1].length))) + "." + Hr(ps(r, s[1].length), s[1].length);
  if (s = t.match(/^#,#*,#0/))
    return Rr(e, t.replace(/^#,#*,/, ""), r);
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Gt(Rr(e, t.replace(/[\\-]/g, ""), r)), i = 0, Gt(Gt(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return i < n.length ? n.charAt(i++) : p === "0" ? "0" : "";
    }));
  if (t.match($i))
    return n = Rr(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var o = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = dn(f, Math.pow(10, i) - 1, !1), n = "" + l, o = rt(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), n += o + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], o = hn(c[2], i), o.length < s[4].length && (o = xr(s[4].substr(s[4].length - o.length)) + o), n += o, n;
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = dn(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? A0(c[1], i) + s[2] + "/" + s[3] + hn(c[2], i) : Le(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = t.match(/^[#0?]+$/))
    return n = Bt(r, 0), t.length <= n.length ? n : xr(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = n.indexOf(".");
    var h = t.indexOf(".") - i, x = t.length - n.length - h;
    return xr(t.substr(0, h) + n + t.substr(t.length - x));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/))
    return i = ps(r, s[1].length), r < 0 ? "-" + Rr(e, t, -r) : ut(Ho(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Hr(0, 3 - p.length) : "") + p;
    }) + "." + Hr(i, s[1].length);
  switch (t) {
    case "###,##0.00":
      return Rr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ut(Bt(f, 0));
      return d !== "0" ? l + d : "";
    case "###,###.00":
      return Rr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Rr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function Vo(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return rt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function $o(e, t, r) {
  var a = t.replace(Mi, ""), n = t.length - a.length;
  return rt(e, a, r * Math.pow(10, 2 * n)) + Le("%", n);
}
function Wi(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Wi(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0 && (s += n), r = (t / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n), !r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, o) {
      return f + l + o.substr(0, (n + s) % n) + "." + o.substr(s) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function jr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Vi)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? jr("n", a, r) : "(" + jr("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return Vo(e, t, r);
  if (t.indexOf("%") !== -1)
    return $o(e, t, r);
  if (t.indexOf("E") !== -1)
    return Wi(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + jr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, s, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return l + Hr(f, t.length);
  if (t.match(/^[#?]+$/))
    return n = "" + r, r === 0 && (n = ""), n.length > t.length ? n : xr(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(Ui))
    return Bo(s, f, l);
  if (t.match(/^#+0+$/))
    return l + Hr(f, t.length - t.indexOf("0"));
  if (s = t.match(Hi))
    return n = ("" + r).replace(/^([^\.]+)$/, "$1." + xr(s[1])).replace(/\.$/, "." + xr(s[1])), n = n.replace(/\.(\d*)$/, function(p, u) {
      return "." + u + Le("0", xr(s[1]).length - u.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), s = t.match(/^(0*)\.(#*)$/))
    return l + ("" + f).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = t.match(/^#{1,3},##0(\.?)$/))
    return l + ut("" + f);
  if (s = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + jr(e, t, -r) : ut("" + r) + "." + Le("0", s[1].length);
  if (s = t.match(/^#,#*,#0/))
    return jr(e, t.replace(/^#,#*,/, ""), r);
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Gt(jr(e, t.replace(/[\\-]/g, ""), r)), i = 0, Gt(Gt(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return i < n.length ? n.charAt(i++) : p === "0" ? "0" : "";
    }));
  if (t.match($i))
    return n = jr(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var o = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = dn(f, Math.pow(10, i) - 1, !1), n = "" + l, o = rt(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), n += o + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], o = hn(c[2], i), o.length < s[4].length && (o = xr(s[4].substr(s[4].length - o.length)) + o), n += o, n;
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = dn(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? A0(c[1], i) + s[2] + "/" + s[3] + hn(c[2], i) : Le(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = t.match(/^[#0?]+$/))
    return n = "" + r, t.length <= n.length ? n : xr(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = n.indexOf(".");
    var h = t.indexOf(".") - i, x = t.length - n.length - h;
    return xr(t.substr(0, h) + n + t.substr(t.length - x));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + jr(e, t, -r) : ut("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Hr(0, 3 - p.length) : "") + p;
    }) + "." + Hr(0, s[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ut("" + f);
      return d !== "0" ? l + d : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return jr(e, t.slice(0, t.lastIndexOf(".")), r) + xr(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function rt(e, t, r) {
  return (r | 0) === r ? jr(e, t, r) : Rr(e, t, r);
}
function Wo(e) {
  for (var t = [], r = !1, a = 0, n = 0; a < e.length; ++a)
    switch (
      /*cc=*/
      e.charCodeAt(a)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++a;
        break;
      case 59:
        t[t.length] = e.substr(n, a - n), n = a + 1;
    }
  if (t[t.length] = e.substr(n), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var Gi = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ea(e) {
  for (var t = 0, r = "", a = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        xn(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午")
          return !0;
        ++t;
        break;
      case "[":
        for (a = r; e.charAt(t++) !== "]" && t < e.length; )
          a += e.charAt(t);
        if (a.match(Gi))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function Go(e, t, r, a) {
  for (var n = [], s = "", i = 0, c = "", f = "t", l, o, h, x = "H"; i < e.length; )
    switch (c = e.charAt(i)) {
      case "G":
        if (!xn(e, i))
          throw new Error("unrecognized character " + c + " in " + e);
        n[n.length] = { t: "G", v: "General" }, i += 7;
        break;
      case '"':
        for (s = ""; (h = e.charCodeAt(++i)) !== 34 && i < e.length; )
          s += String.fromCharCode(h);
        n[n.length] = { t: "t", v: s }, ++i;
        break;
      case "\\":
        var d = e.charAt(++i), p = d === "(" || d === ")" ? d : "t";
        n[n.length] = { t: p, v: d }, ++i;
        break;
      case "_":
        n[n.length] = { t: "t", v: " " }, i += 2;
        break;
      case "@":
        n[n.length] = { t: "T", v: t }, ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (l == null && (l = Et(t, r, e.charAt(i + 1) === "2"), l == null))
            return "";
          n[n.length] = { t: "X", v: e.substr(i, 2) }, f = c, i += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || l == null && (l = Et(t, r), l == null))
          return "";
        for (s = c; ++i < e.length && e.charAt(i).toLowerCase() === c; )
          s += c;
        c === "m" && f.toLowerCase() === "h" && (c = "M"), c === "h" && (c = x), n[n.length] = { t: c, v: s }, f = c;
        break;
      case "A":
      case "a":
      case "上":
        var u = { t: c, v: c };
        if (l == null && (l = Et(t, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (l != null && (u.v = l.H >= 12 ? "P" : "A"), u.t = "T", x = "h", i += 3) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (l != null && (u.v = l.H >= 12 ? "PM" : "AM"), u.t = "T", i += 5, x = "h") : e.substr(i, 5).toUpperCase() === "上午/下午" ? (l != null && (u.v = l.H >= 12 ? "下午" : "上午"), u.t = "T", i += 5, x = "h") : (u.t = "t", ++i), l == null && u.t === "T")
          return "";
        n[n.length] = u, f = c;
        break;
      case "[":
        for (s = c; e.charAt(i++) !== "]" && i < e.length; )
          s += e.charAt(i);
        if (s.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + s + "|";
        if (s.match(Gi)) {
          if (l == null && (l = Et(t, r), l == null))
            return "";
          n[n.length] = { t: "Z", v: s.toLowerCase() }, f = s.charAt(1);
        } else
          s.indexOf("$") > -1 && (s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$", ea(e) || (n[n.length] = { t: "t", v: s }));
        break;
      case ".":
        if (l != null) {
          for (s = c; ++i < e.length && (c = e.charAt(i)) === "0"; )
            s += c;
          n[n.length] = { t: "s", v: s };
          break;
        }
      case "0":
      case "#":
        for (s = c; ++i < e.length && "0#?.,E+-%".indexOf(c = e.charAt(i)) > -1; )
          s += c;
        n[n.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = c; e.charAt(++i) === c; )
          s += c;
        n[n.length] = { t: c, v: s }, f = c;
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      case "(":
      case ")":
        n[n.length] = { t: a === 1 ? "t" : c, v: c }, ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = c; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; )
          s += e.charAt(i);
        n[n.length] = { t: "D", v: s };
        break;
      case " ":
        n[n.length] = { t: c, v: c }, ++i;
        break;
      case "$":
        n[n.length] = { t: "t", v: "$" }, ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1)
          throw new Error("unrecognized character " + c + " in " + e);
        n[n.length] = { t: "t", v: c }, ++i;
        break;
    }
  var v = 0, _ = 0, C;
  for (i = n.length - 1, f = "t"; i >= 0; --i)
    switch (n[i].t) {
      case "h":
      case "H":
        n[i].t = x, f = "h", v < 1 && (v = 1);
        break;
      case "s":
        (C = n[i].v.match(/\.0+$/)) && (_ = Math.max(_, C[0].length - 1)), v < 3 && (v = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        f = n[i].t;
        break;
      case "m":
        f === "s" && (n[i].t = "M", v < 2 && (v = 2));
        break;
      case "X":
        break;
      case "Z":
        v < 1 && n[i].v.match(/[Hh]/) && (v = 1), v < 2 && n[i].v.match(/[Mm]/) && (v = 2), v < 3 && n[i].v.match(/[Ss]/) && (v = 3);
    }
  switch (v) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H);
      break;
    case 2:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M);
      break;
  }
  var m = "", O;
  for (i = 0; i < n.length; ++i)
    switch (n[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[i].v = "", n[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[i].v = bo(n[i].t.charCodeAt(0), n[i].v, l, _), n[i].t = "t";
        break;
      case "n":
      case "?":
        for (O = i + 1; n[O] != null && ((c = n[O].t) === "?" || c === "D" || (c === " " || c === "t") && n[O + 1] != null && (n[O + 1].t === "?" || n[O + 1].t === "t" && n[O + 1].v === "/") || n[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (n[O].v === "/" || n[O].v === " " && n[O + 1] != null && n[O + 1].t == "?")); )
          n[i].v += n[O].v, n[O] = { v: "", t: ";" }, ++O;
        m += n[i].v, i = O - 1;
        break;
      case "G":
        n[i].t = "t", n[i].v = At(t, r);
        break;
    }
  var b = "", D, w;
  if (m.length > 0) {
    m.charCodeAt(0) == 40 ? (D = t < 0 && m.charCodeAt(0) === 45 ? -t : t, w = rt("n", m, D)) : (D = t < 0 && a > 1 ? -t : t, w = rt("n", m, D), D < 0 && n[0] && n[0].t == "t" && (w = w.substr(1), n[0].v = "-" + n[0].v)), O = w.length - 1;
    var L = n.length;
    for (i = 0; i < n.length; ++i)
      if (n[i] != null && n[i].t != "t" && n[i].v.indexOf(".") > -1) {
        L = i;
        break;
      }
    var I = n.length;
    if (L === n.length && w.indexOf("E") === -1) {
      for (i = n.length - 1; i >= 0; --i)
        n[i] == null || "n?".indexOf(n[i].t) === -1 || (O >= n[i].v.length - 1 ? (O -= n[i].v.length, n[i].v = w.substr(O + 1, n[i].v.length)) : O < 0 ? n[i].v = "" : (n[i].v = w.substr(0, O + 1), O = -1), n[i].t = "t", I = i);
      O >= 0 && I < n.length && (n[I].v = w.substr(0, O + 1) + n[I].v);
    } else if (L !== n.length && w.indexOf("E") === -1) {
      for (O = w.indexOf(".") - 1, i = L; i >= 0; --i)
        if (!(n[i] == null || "n?".indexOf(n[i].t) === -1)) {
          for (o = n[i].v.indexOf(".") > -1 && i === L ? n[i].v.indexOf(".") - 1 : n[i].v.length - 1, b = n[i].v.substr(o + 1); o >= 0; --o)
            O >= 0 && (n[i].v.charAt(o) === "0" || n[i].v.charAt(o) === "#") && (b = w.charAt(O--) + b);
          n[i].v = b, n[i].t = "t", I = i;
        }
      for (O >= 0 && I < n.length && (n[I].v = w.substr(0, O + 1) + n[I].v), O = w.indexOf(".") + 1, i = L; i < n.length; ++i)
        if (!(n[i] == null || "n?(".indexOf(n[i].t) === -1 && i !== L)) {
          for (o = n[i].v.indexOf(".") > -1 && i === L ? n[i].v.indexOf(".") + 1 : 0, b = n[i].v.substr(0, o); o < n[i].v.length; ++o)
            O < w.length && (b += w.charAt(O++));
          n[i].v = b, n[i].t = "t", I = i;
        }
    }
  }
  for (i = 0; i < n.length; ++i)
    n[i] != null && "n?".indexOf(n[i].t) > -1 && (D = a > 1 && t < 0 && i > 0 && n[i - 1].v === "-" ? -t : t, n[i].v = rt(n[i].t, n[i].v, D), n[i].t = "t");
  var z = "";
  for (i = 0; i !== n.length; ++i)
    n[i] != null && (z += n[i].v);
  return z;
}
var vs = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function gs(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function zo(e, t) {
  var r = Wo(e), a = r.length, n = r[a - 1].indexOf("@");
  if (a < 4 && n > -1 && --a, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || n > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var s = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [a, s];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(vs), c = r[1].match(vs);
    return gs(t, i) ? [a, r[0]] : gs(t, c) ? [a, r[1]] : [a, r[i != null && c != null ? 2 : 1]];
  }
  return [a, s];
}
function br(e, t, r) {
  r == null && (r = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? a = r.dateNF : a = e;
      break;
    case "number":
      e == 14 && r.dateNF ? a = r.dateNF : a = (r.table != null ? r.table : pe)[e], a == null && (a = r.table && r.table[xs[e]] || pe[xs[e]]), a == null && (a = So[e] || "General");
      break;
  }
  if (xn(a, 0))
    return At(t, r);
  t instanceof Date && (t = Li(t, r.date1904));
  var n = zo(a, t);
  if (xn(n[1]))
    return At(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return Go(n[1], t, r, n[0]);
}
function kt(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (pe[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (pe[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return pe[t] = e, t;
}
function zi() {
  pe = Ao();
}
var Xo = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, Xi = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function jo(e) {
  var t = typeof e == "number" ? pe[e] : e;
  return t = t.replace(Xi, "(\\d+)"), new RegExp("^" + t + "$");
}
function Ko(e, t, r) {
  var a = -1, n = -1, s = -1, i = -1, c = -1, f = -1;
  (t.match(Xi) || []).forEach(function(h, x) {
    var d = parseInt(r[x + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case "y":
        a = d;
        break;
      case "d":
        s = d;
        break;
      case "h":
        i = d;
        break;
      case "s":
        f = d;
        break;
      case "m":
        i >= 0 ? c = d : n = d;
        break;
    }
  }), f >= 0 && c == -1 && n >= 0 && (c = n, n = -1);
  var l = ("" + (a >= 0 ? a : new Date().getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var o = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
  return i == -1 && c == -1 && f == -1 ? l : a == -1 && n == -1 && s == -1 ? o : l + "T" + o;
}
var Yo = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var w = 0, L = new Array(256), I = 0; I != 256; ++I)
      w = I, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, w = w & 1 ? -306674912 ^ w >>> 1 : w >>> 1, L[I] = w;
    return typeof Int32Array < "u" ? new Int32Array(L) : L;
  }
  var r = t();
  function a(w) {
    var L = 0, I = 0, z = 0, W = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (z = 0; z != 256; ++z)
      W[z] = w[z];
    for (z = 0; z != 256; ++z)
      for (I = w[z], L = 256 + z; L < 4096; L += 256)
        I = W[L] = I >>> 8 ^ w[I & 255];
    var P = [];
    for (z = 1; z != 16; ++z)
      P[z - 1] = typeof Int32Array < "u" ? W.subarray(z * 256, z * 256 + 256) : W.slice(z * 256, z * 256 + 256);
    return P;
  }
  var n = a(r), s = n[0], i = n[1], c = n[2], f = n[3], l = n[4], o = n[5], h = n[6], x = n[7], d = n[8], p = n[9], u = n[10], v = n[11], _ = n[12], C = n[13], m = n[14];
  function O(w, L) {
    for (var I = L ^ -1, z = 0, W = w.length; z < W; )
      I = I >>> 8 ^ r[(I ^ w.charCodeAt(z++)) & 255];
    return ~I;
  }
  function b(w, L) {
    for (var I = L ^ -1, z = w.length - 15, W = 0; W < z; )
      I = m[w[W++] ^ I & 255] ^ C[w[W++] ^ I >> 8 & 255] ^ _[w[W++] ^ I >> 16 & 255] ^ v[w[W++] ^ I >>> 24] ^ u[w[W++]] ^ p[w[W++]] ^ d[w[W++]] ^ x[w[W++]] ^ h[w[W++]] ^ o[w[W++]] ^ l[w[W++]] ^ f[w[W++]] ^ c[w[W++]] ^ i[w[W++]] ^ s[w[W++]] ^ r[w[W++]];
    for (z += 15; W < z; )
      I = I >>> 8 ^ r[(I ^ w[W++]) & 255];
    return ~I;
  }
  function D(w, L) {
    for (var I = L ^ -1, z = 0, W = w.length, P = 0, K = 0; z < W; )
      P = w.charCodeAt(z++), P < 128 ? I = I >>> 8 ^ r[(I ^ P) & 255] : P < 2048 ? (I = I >>> 8 ^ r[(I ^ (192 | P >> 6 & 31)) & 255], I = I >>> 8 ^ r[(I ^ (128 | P & 63)) & 255]) : P >= 55296 && P < 57344 ? (P = (P & 1023) + 64, K = w.charCodeAt(z++) & 1023, I = I >>> 8 ^ r[(I ^ (240 | P >> 8 & 7)) & 255], I = I >>> 8 ^ r[(I ^ (128 | P >> 2 & 63)) & 255], I = I >>> 8 ^ r[(I ^ (128 | K >> 6 & 15 | (P & 3) << 4)) & 255], I = I >>> 8 ^ r[(I ^ (128 | K & 63)) & 255]) : (I = I >>> 8 ^ r[(I ^ (224 | P >> 12 & 15)) & 255], I = I >>> 8 ^ r[(I ^ (128 | P >> 6 & 63)) & 255], I = I >>> 8 ^ r[(I ^ (128 | P & 63)) & 255]);
    return ~I;
  }
  return e.table = r, e.bstr = O, e.buf = b, e.str = D, e;
}(), Te = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(g, k) {
    for (var E = g.split("/"), T = k.split("/"), y = 0, F = 0, B = Math.min(E.length, T.length); y < B; ++y) {
      if (F = E[y].length - T[y].length)
        return F;
      if (E[y] != T[y])
        return E[y] < T[y] ? -1 : 1;
    }
    return E.length - T.length;
  }
  function a(g) {
    if (g.charAt(g.length - 1) == "/")
      return g.slice(0, -1).indexOf("/") === -1 ? g : a(g.slice(0, -1));
    var k = g.lastIndexOf("/");
    return k === -1 ? g : g.slice(0, k + 1);
  }
  function n(g) {
    if (g.charAt(g.length - 1) == "/")
      return n(g.slice(0, -1));
    var k = g.lastIndexOf("/");
    return k === -1 ? g : g.slice(k + 1);
  }
  function s(g, k) {
    typeof k == "string" && (k = new Date(k));
    var E = k.getHours();
    E = E << 6 | k.getMinutes(), E = E << 5 | k.getSeconds() >>> 1, g.write_shift(2, E);
    var T = k.getFullYear() - 1980;
    T = T << 4 | k.getMonth() + 1, T = T << 5 | k.getDate(), g.write_shift(2, T);
  }
  function i(g) {
    var k = g.read_shift(2) & 65535, E = g.read_shift(2) & 65535, T = new Date(), y = E & 31;
    E >>>= 5;
    var F = E & 15;
    E >>>= 4, T.setMilliseconds(0), T.setFullYear(E + 1980), T.setMonth(F - 1), T.setDate(y);
    var B = k & 31;
    k >>>= 5;
    var X = k & 63;
    return k >>>= 6, T.setHours(k), T.setMinutes(X), T.setSeconds(B << 1), T;
  }
  function c(g) {
    rr(g, 0);
    for (var k = (
      /*::(*/
      {}
    ), E = 0; g.l <= g.length - 4; ) {
      var T = g.read_shift(2), y = g.read_shift(2), F = g.l + y, B = {};
      switch (T) {
        case 21589:
          E = g.read_shift(1), E & 1 && (B.mtime = g.read_shift(4)), y > 5 && (E & 2 && (B.atime = g.read_shift(4)), E & 4 && (B.ctime = g.read_shift(4))), B.mtime && (B.mt = new Date(B.mtime * 1e3));
          break;
      }
      g.l = F, k[T] = B;
    }
    return k;
  }
  var f;
  function l() {
    return f || (f = {});
  }
  function o(g, k) {
    if (g[0] == 80 && g[1] == 75)
      return is(g, k);
    if ((g[0] | 32) == 109 && (g[1] | 32) == 105)
      return to(g, k);
    if (g.length < 512)
      throw new Error("CFB file size " + g.length + " < 512");
    var E = 3, T = 512, y = 0, F = 0, B = 0, X = 0, M = 0, U = [], V = (
      /*::(*/
      g.slice(0, 512)
    );
    rr(V, 0);
    var Y = h(V);
    switch (E = Y[0], E) {
      case 3:
        T = 512;
        break;
      case 4:
        T = 4096;
        break;
      case 0:
        if (Y[1] == 0)
          return is(g, k);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + E);
    }
    T !== 512 && (V = /*::(*/
    g.slice(0, T), rr(
      V,
      28
      /* blob.l */
    ));
    var Q = g.slice(0, T);
    x(V, E);
    var se = V.read_shift(4, "i");
    if (E === 3 && se !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + se);
    V.l += 4, B = V.read_shift(4, "i"), V.l += 4, V.chk("00100000", "Mini Stream Cutoff Size: "), X = V.read_shift(4, "i"), y = V.read_shift(4, "i"), M = V.read_shift(4, "i"), F = V.read_shift(4, "i");
    for (var J = -1, ae = 0; ae < 109 && (J = V.read_shift(4, "i"), !(J < 0)); ++ae)
      U[ae] = J;
    var de = d(g, T);
    v(M, F, de, T, U);
    var Re = C(de, B, U, T);
    Re[B].name = "!Directory", y > 0 && X !== K && (Re[X].name = "!MiniFAT"), Re[U[0]].name = "!FAT", Re.fat_addrs = U, Re.ssz = T;
    var Ne = {}, nr = [], ca = [], fa = [];
    m(B, Re, de, nr, y, Ne, ca, X), p(ca, fa, nr), nr.shift();
    var oa = {
      FileIndex: ca,
      FullPaths: fa
    };
    return k && k.raw && (oa.raw = { header: Q, sectors: de }), oa;
  }
  function h(g) {
    if (g[g.l] == 80 && g[g.l + 1] == 75)
      return [0, 0];
    g.chk(fe, "Header Signature: "), g.l += 16;
    var k = g.read_shift(2, "u");
    return [g.read_shift(2, "u"), k];
  }
  function x(g, k) {
    var E = 9;
    switch (g.l += 2, E = g.read_shift(2)) {
      case 9:
        if (k != 3)
          throw new Error("Sector Shift: Expected 9 saw " + E);
        break;
      case 12:
        if (k != 4)
          throw new Error("Sector Shift: Expected 12 saw " + E);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + E);
    }
    g.chk("0600", "Mini Sector Shift: "), g.chk("000000000000", "Reserved: ");
  }
  function d(g, k) {
    for (var E = Math.ceil(g.length / k) - 1, T = [], y = 1; y < E; ++y)
      T[y - 1] = g.slice(y * k, (y + 1) * k);
    return T[E - 1] = g.slice(E * k), T;
  }
  function p(g, k, E) {
    for (var T = 0, y = 0, F = 0, B = 0, X = 0, M = E.length, U = [], V = []; T < M; ++T)
      U[T] = V[T] = T, k[T] = E[T];
    for (; X < V.length; ++X)
      T = V[X], y = g[T].L, F = g[T].R, B = g[T].C, U[T] === T && (y !== -1 && U[y] !== y && (U[T] = U[y]), F !== -1 && U[F] !== F && (U[T] = U[F])), B !== -1 && (U[B] = T), y !== -1 && T != U[T] && (U[y] = U[T], V.lastIndexOf(y) < X && V.push(y)), F !== -1 && T != U[T] && (U[F] = U[T], V.lastIndexOf(F) < X && V.push(F));
    for (T = 1; T < M; ++T)
      U[T] === T && (F !== -1 && U[F] !== F ? U[T] = U[F] : y !== -1 && U[y] !== y && (U[T] = U[y]));
    for (T = 1; T < M; ++T)
      if (g[T].type !== 0) {
        if (X = T, X != U[X])
          do
            X = U[X], k[T] = k[X] + "/" + k[T];
          while (X !== 0 && U[X] !== -1 && X != U[X]);
        U[T] = -1;
      }
    for (k[0] += "/", T = 1; T < M; ++T)
      g[T].type !== 2 && (k[T] += "/");
  }
  function u(g, k, E) {
    for (var T = g.start, y = g.size, F = [], B = T; E && y > 0 && B >= 0; )
      F.push(k.slice(B * P, B * P + P)), y -= P, B = _t(E, B * 4);
    return F.length === 0 ? Ke(0) : ot(F).slice(0, g.size);
  }
  function v(g, k, E, T, y) {
    var F = K;
    if (g === K) {
      if (k !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (g !== -1) {
      var B = E[g], X = (T >>> 2) - 1;
      if (!B)
        return;
      for (var M = 0; M < X && (F = _t(B, M * 4)) !== K; ++M)
        y.push(F);
      v(_t(B, T - 4), k - 1, E, T, y);
    }
  }
  function _(g, k, E, T, y) {
    var F = [], B = [];
    y || (y = []);
    var X = T - 1, M = 0, U = 0;
    for (M = k; M >= 0; ) {
      y[M] = !0, F[F.length] = M, B.push(g[M]);
      var V = E[Math.floor(M * 4 / T)];
      if (U = M * 4 & X, T < 4 + U)
        throw new Error("FAT boundary crossed: " + M + " 4 " + T);
      if (!g[V])
        break;
      M = _t(g[V], U);
    }
    return { nodes: F, data: Ss([B]) };
  }
  function C(g, k, E, T) {
    var y = g.length, F = [], B = [], X = [], M = [], U = T - 1, V = 0, Y = 0, Q = 0, se = 0;
    for (V = 0; V < y; ++V)
      if (X = [], Q = V + k, Q >= y && (Q -= y), !B[Q]) {
        M = [];
        var J = [];
        for (Y = Q; Y >= 0; ) {
          J[Y] = !0, B[Y] = !0, X[X.length] = Y, M.push(g[Y]);
          var ae = E[Math.floor(Y * 4 / T)];
          if (se = Y * 4 & U, T < 4 + se)
            throw new Error("FAT boundary crossed: " + Y + " 4 " + T);
          if (!g[ae] || (Y = _t(g[ae], se), J[Y]))
            break;
        }
        F[Q] = { nodes: X, data: Ss([M]) };
      }
    return F;
  }
  function m(g, k, E, T, y, F, B, X) {
    for (var M = 0, U = T.length ? 2 : 0, V = k[g].data, Y = 0, Q = 0, se; Y < V.length; Y += 128) {
      var J = (
        /*::(*/
        V.slice(Y, Y + 128)
      );
      rr(J, 64), Q = J.read_shift(2), se = R0(J, 0, Q - U), T.push(se);
      var ae = {
        name: se,
        type: J.read_shift(1),
        color: J.read_shift(1),
        L: J.read_shift(4, "i"),
        R: J.read_shift(4, "i"),
        C: J.read_shift(4, "i"),
        clsid: J.read_shift(16),
        state: J.read_shift(4, "i"),
        start: 0,
        size: 0
      }, de = J.read_shift(2) + J.read_shift(2) + J.read_shift(2) + J.read_shift(2);
      de !== 0 && (ae.ct = O(J, J.l - 8));
      var Re = J.read_shift(2) + J.read_shift(2) + J.read_shift(2) + J.read_shift(2);
      Re !== 0 && (ae.mt = O(J, J.l - 8)), ae.start = J.read_shift(4, "i"), ae.size = J.read_shift(4, "i"), ae.size < 0 && ae.start < 0 && (ae.size = ae.type = 0, ae.start = K, ae.name = ""), ae.type === 5 ? (M = ae.start, y > 0 && M !== K && (k[M].name = "!StreamData")) : ae.size >= 4096 ? (ae.storage = "fat", k[ae.start] === void 0 && (k[ae.start] = _(E, ae.start, k.fat_addrs, k.ssz)), k[ae.start].name = ae.name, ae.content = k[ae.start].data.slice(0, ae.size)) : (ae.storage = "minifat", ae.size < 0 ? ae.size = 0 : M !== K && ae.start !== K && k[M] && (ae.content = u(ae, k[M].data, (k[X] || {}).data))), ae.content && rr(ae.content, 0), F[se] = ae, B.push(ae);
    }
  }
  function O(g, k) {
    return new Date((kr(g, k + 4) / 1e7 * Math.pow(2, 32) + kr(g, k) / 1e7 - 11644473600) * 1e3);
  }
  function b(g, k) {
    return l(), o(f.readFileSync(g), k);
  }
  function D(g, k) {
    var E = k && k.type;
    switch (E || Ee && Buffer.isBuffer(g) && (E = "buffer"), E || "base64") {
      case "file":
        return b(g, k);
      case "base64":
        return o(Br(Sr(g)), k);
      case "binary":
        return o(Br(g), k);
    }
    return o(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      g,
      k
    );
  }
  function w(g, k) {
    var E = k || {}, T = E.root || "Root Entry";
    if (g.FullPaths || (g.FullPaths = []), g.FileIndex || (g.FileIndex = []), g.FullPaths.length !== g.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    g.FullPaths.length === 0 && (g.FullPaths[0] = T + "/", g.FileIndex[0] = { name: T, type: 5 }), E.CLSID && (g.FileIndex[0].clsid = E.CLSID), L(g);
  }
  function L(g) {
    var k = "Sh33tJ5";
    if (!Te.find(g, "/" + k)) {
      var E = Ke(4);
      E[0] = 55, E[1] = E[3] = 50, E[2] = 54, g.FileIndex.push({ name: k, type: 2, content: E, size: 4, L: 69, R: 69, C: 69 }), g.FullPaths.push(g.FullPaths[0] + k), I(g);
    }
  }
  function I(g, k) {
    w(g);
    for (var E = !1, T = !1, y = g.FullPaths.length - 1; y >= 0; --y) {
      var F = g.FileIndex[y];
      switch (F.type) {
        case 0:
          T ? E = !0 : (g.FileIndex.pop(), g.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          T = !0, isNaN(F.R * F.L * F.C) && (E = !0), F.R > -1 && F.L > -1 && F.R == F.L && (E = !0);
          break;
        default:
          E = !0;
          break;
      }
    }
    if (!(!E && !k)) {
      var B = new Date(1987, 1, 19), X = 0, M = Object.create ? /* @__PURE__ */ Object.create(null) : {}, U = [];
      for (y = 0; y < g.FullPaths.length; ++y)
        M[g.FullPaths[y]] = !0, g.FileIndex[y].type !== 0 && U.push([g.FullPaths[y], g.FileIndex[y]]);
      for (y = 0; y < U.length; ++y) {
        var V = a(U[y][0]);
        T = M[V], T || (U.push([V, {
          name: n(V).replace("/", ""),
          type: 1,
          clsid: ce,
          ct: B,
          mt: B,
          content: null
        }]), M[V] = !0);
      }
      for (U.sort(function(se, J) {
        return r(se[0], J[0]);
      }), g.FullPaths = [], g.FileIndex = [], y = 0; y < U.length; ++y)
        g.FullPaths[y] = U[y][0], g.FileIndex[y] = U[y][1];
      for (y = 0; y < U.length; ++y) {
        var Y = g.FileIndex[y], Q = g.FullPaths[y];
        if (Y.name = n(Q).replace("/", ""), Y.L = Y.R = Y.C = -(Y.color = 1), Y.size = Y.content ? Y.content.length : 0, Y.start = 0, Y.clsid = Y.clsid || ce, y === 0)
          Y.C = U.length > 1 ? 1 : -1, Y.size = 0, Y.type = 5;
        else if (Q.slice(-1) == "/") {
          for (X = y + 1; X < U.length && a(g.FullPaths[X]) != Q; ++X)
            ;
          for (Y.C = X >= U.length ? -1 : X, X = y + 1; X < U.length && a(g.FullPaths[X]) != a(Q); ++X)
            ;
          Y.R = X >= U.length ? -1 : X, Y.type = 1;
        } else
          a(g.FullPaths[y + 1] || "") == a(Q) && (Y.R = y + 1), Y.type = 2;
      }
    }
  }
  function z(g, k) {
    var E = k || {};
    if (E.fileType == "mad")
      return ao(g, E);
    switch (I(g), E.fileType) {
      case "zip":
        return qf(g, E);
    }
    var T = function(se) {
      for (var J = 0, ae = 0, de = 0; de < se.FileIndex.length; ++de) {
        var Re = se.FileIndex[de];
        if (Re.content) {
          var Ne = Re.content.length;
          Ne > 0 && (Ne < 4096 ? J += Ne + 63 >> 6 : ae += Ne + 511 >> 9);
        }
      }
      for (var nr = se.FullPaths.length + 3 >> 2, ca = J + 7 >> 3, fa = J + 127 >> 7, oa = ca + ae + nr + fa, gt = oa + 127 >> 7, Bn = gt <= 109 ? 0 : Math.ceil((gt - 109) / 127); oa + gt + Bn + 127 >> 7 > gt; )
        Bn = ++gt <= 109 ? 0 : Math.ceil((gt - 109) / 127);
      var Qr = [1, Bn, gt, fa, nr, ae, J, 0];
      return se.FileIndex[0].size = J << 6, Qr[7] = (se.FileIndex[0].start = Qr[0] + Qr[1] + Qr[2] + Qr[3] + Qr[4] + Qr[5]) + (Qr[6] + 7 >> 3), Qr;
    }(g), y = Ke(T[7] << 9), F = 0, B = 0;
    {
      for (F = 0; F < 8; ++F)
        y.write_shift(1, re[F]);
      for (F = 0; F < 8; ++F)
        y.write_shift(2, 0);
      for (y.write_shift(2, 62), y.write_shift(2, 3), y.write_shift(2, 65534), y.write_shift(2, 9), y.write_shift(2, 6), F = 0; F < 3; ++F)
        y.write_shift(2, 0);
      for (y.write_shift(4, 0), y.write_shift(4, T[2]), y.write_shift(4, T[0] + T[1] + T[2] + T[3] - 1), y.write_shift(4, 0), y.write_shift(4, 1 << 12), y.write_shift(4, T[3] ? T[0] + T[1] + T[2] - 1 : K), y.write_shift(4, T[3]), y.write_shift(-4, T[1] ? T[0] - 1 : K), y.write_shift(4, T[1]), F = 0; F < 109; ++F)
        y.write_shift(-4, F < T[2] ? T[1] + F : -1);
    }
    if (T[1])
      for (B = 0; B < T[1]; ++B) {
        for (; F < 236 + B * 127; ++F)
          y.write_shift(-4, F < T[2] ? T[1] + F : -1);
        y.write_shift(-4, B === T[1] - 1 ? K : B + 1);
      }
    var X = function(se) {
      for (B += se; F < B - 1; ++F)
        y.write_shift(-4, F + 1);
      se && (++F, y.write_shift(-4, K));
    };
    for (B = F = 0, B += T[1]; F < B; ++F)
      y.write_shift(-4, ie.DIFSECT);
    for (B += T[2]; F < B; ++F)
      y.write_shift(-4, ie.FATSECT);
    X(T[3]), X(T[4]);
    for (var M = 0, U = 0, V = g.FileIndex[0]; M < g.FileIndex.length; ++M)
      V = g.FileIndex[M], V.content && (U = V.content.length, !(U < 4096) && (V.start = B, X(U + 511 >> 9)));
    for (X(T[6] + 7 >> 3); y.l & 511; )
      y.write_shift(-4, ie.ENDOFCHAIN);
    for (B = F = 0, M = 0; M < g.FileIndex.length; ++M)
      V = g.FileIndex[M], V.content && (U = V.content.length, !(!U || U >= 4096) && (V.start = B, X(U + 63 >> 6)));
    for (; y.l & 511; )
      y.write_shift(-4, ie.ENDOFCHAIN);
    for (F = 0; F < T[4] << 2; ++F) {
      var Y = g.FullPaths[F];
      if (!Y || Y.length === 0) {
        for (M = 0; M < 17; ++M)
          y.write_shift(4, 0);
        for (M = 0; M < 3; ++M)
          y.write_shift(4, -1);
        for (M = 0; M < 12; ++M)
          y.write_shift(4, 0);
        continue;
      }
      V = g.FileIndex[F], F === 0 && (V.start = V.size ? V.start - 1 : K);
      var Q = F === 0 && E.root || V.name;
      if (U = 2 * (Q.length + 1), y.write_shift(64, Q, "utf16le"), y.write_shift(2, U), y.write_shift(1, V.type), y.write_shift(1, V.color), y.write_shift(-4, V.L), y.write_shift(-4, V.R), y.write_shift(-4, V.C), V.clsid)
        y.write_shift(16, V.clsid, "hex");
      else
        for (M = 0; M < 4; ++M)
          y.write_shift(4, 0);
      y.write_shift(4, V.state || 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, V.start), y.write_shift(4, V.size), y.write_shift(4, 0);
    }
    for (F = 1; F < g.FileIndex.length; ++F)
      if (V = g.FileIndex[F], V.size >= 4096)
        if (y.l = V.start + 1 << 9, Ee && Buffer.isBuffer(V.content))
          V.content.copy(y, y.l, 0, V.size), y.l += V.size + 511 & -512;
        else {
          for (M = 0; M < V.size; ++M)
            y.write_shift(1, V.content[M]);
          for (; M & 511; ++M)
            y.write_shift(1, 0);
        }
    for (F = 1; F < g.FileIndex.length; ++F)
      if (V = g.FileIndex[F], V.size > 0 && V.size < 4096)
        if (Ee && Buffer.isBuffer(V.content))
          V.content.copy(y, y.l, 0, V.size), y.l += V.size + 63 & -64;
        else {
          for (M = 0; M < V.size; ++M)
            y.write_shift(1, V.content[M]);
          for (; M & 63; ++M)
            y.write_shift(1, 0);
        }
    if (Ee)
      y.l = y.length;
    else
      for (; y.l < y.length; )
        y.write_shift(1, 0);
    return y;
  }
  function W(g, k) {
    var E = g.FullPaths.map(function(M) {
      return M.toUpperCase();
    }), T = E.map(function(M) {
      var U = M.split("/");
      return U[U.length - (M.slice(-1) == "/" ? 2 : 1)];
    }), y = !1;
    k.charCodeAt(0) === 47 ? (y = !0, k = E[0].slice(0, -1) + k) : y = k.indexOf("/") !== -1;
    var F = k.toUpperCase(), B = y === !0 ? E.indexOf(F) : T.indexOf(F);
    if (B !== -1)
      return g.FileIndex[B];
    var X = !F.match(ha);
    for (F = F.replace(gr, ""), X && (F = F.replace(ha, "!")), B = 0; B < E.length; ++B)
      if ((X ? E[B].replace(ha, "!") : E[B]).replace(gr, "") == F || (X ? T[B].replace(ha, "!") : T[B]).replace(gr, "") == F)
        return g.FileIndex[B];
    return null;
  }
  var P = 64, K = -2, fe = "d0cf11e0a1b11ae1", re = [208, 207, 17, 224, 161, 177, 26, 225], ce = "00000000000000000000000000000000", ie = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: K,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: fe,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ce,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function De(g, k, E) {
    l();
    var T = z(g, E);
    f.writeFileSync(k, T);
  }
  function G(g) {
    for (var k = new Array(g.length), E = 0; E < g.length; ++E)
      k[E] = String.fromCharCode(g[E]);
    return k.join("");
  }
  function ue(g, k) {
    var E = z(g, k);
    switch (k && k.type || "buffer") {
      case "file":
        return l(), f.writeFileSync(k.filename, E), E;
      case "binary":
        return typeof E == "string" ? E : G(E);
      case "base64":
        return os(typeof E == "string" ? E : G(E));
      case "buffer":
        if (Ee)
          return Buffer.isBuffer(E) ? E : Dt(E);
      case "array":
        return typeof E == "string" ? Br(E) : E;
    }
    return E;
  }
  var he;
  function A(g) {
    try {
      var k = g.InflateRaw, E = new k();
      if (E._processChunk(new Uint8Array([3, 0]), E._finishFlushFlag), E.bytesRead)
        he = g;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (T) {
      console.error("cannot use native zlib: " + (T.message || T));
    }
  }
  function H(g, k) {
    if (!he)
      return ns(g, k);
    var E = he.InflateRaw, T = new E(), y = T._processChunk(g.slice(g.l), T._finishFlushFlag);
    return g.l += T.bytesRead, y;
  }
  function N(g) {
    return he ? he.deflateRawSync(g) : ge(g);
  }
  var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function ne(g) {
    var k = (g << 1 | g << 11) & 139536 | (g << 5 | g << 15) & 558144;
    return (k >> 16 | k >> 8 | k) & 255;
  }
  for (var Z = typeof Uint8Array < "u", q = Z ? new Uint8Array(1 << 8) : [], ke = 0; ke < 1 << 8; ++ke)
    q[ke] = ne(ke);
  function S(g, k) {
    var E = q[g & 255];
    return k <= 8 ? E >>> 8 - k : (E = E << 8 | q[g >> 8 & 255], k <= 16 ? E >>> 16 - k : (E = E << 8 | q[g >> 16 & 255], E >>> 24 - k));
  }
  function He(g, k) {
    var E = k & 7, T = k >>> 3;
    return (g[T] | (E <= 6 ? 0 : g[T + 1] << 8)) >>> E & 3;
  }
  function Fe(g, k) {
    var E = k & 7, T = k >>> 3;
    return (g[T] | (E <= 5 ? 0 : g[T + 1] << 8)) >>> E & 7;
  }
  function Ce(g, k) {
    var E = k & 7, T = k >>> 3;
    return (g[T] | (E <= 4 ? 0 : g[T + 1] << 8)) >>> E & 15;
  }
  function me(g, k) {
    var E = k & 7, T = k >>> 3;
    return (g[T] | (E <= 3 ? 0 : g[T + 1] << 8)) >>> E & 31;
  }
  function te(g, k) {
    var E = k & 7, T = k >>> 3;
    return (g[T] | (E <= 1 ? 0 : g[T + 1] << 8)) >>> E & 127;
  }
  function Ve(g, k, E) {
    var T = k & 7, y = k >>> 3, F = (1 << E) - 1, B = g[y] >>> T;
    return E < 8 - T || (B |= g[y + 1] << 8 - T, E < 16 - T) || (B |= g[y + 2] << 16 - T, E < 24 - T) || (B |= g[y + 3] << 24 - T), B & F;
  }
  function Or(g, k, E) {
    var T = k & 7, y = k >>> 3;
    return T <= 5 ? g[y] |= (E & 7) << T : (g[y] |= E << T & 255, g[y + 1] = (E & 7) >> 8 - T), k + 3;
  }
  function Gr(g, k, E) {
    var T = k & 7, y = k >>> 3;
    return E = (E & 1) << T, g[y] |= E, k + 1;
  }
  function Jr(g, k, E) {
    var T = k & 7, y = k >>> 3;
    return E <<= T, g[y] |= E & 255, E >>>= 8, g[y + 1] = E, k + 8;
  }
  function sa(g, k, E) {
    var T = k & 7, y = k >>> 3;
    return E <<= T, g[y] |= E & 255, E >>>= 8, g[y + 1] = E & 255, g[y + 2] = E >>> 8, k + 16;
  }
  function st(g, k) {
    var E = g.length, T = 2 * E > k ? 2 * E : k + 5, y = 0;
    if (E >= k)
      return g;
    if (Ee) {
      var F = ls(T);
      if (g.copy)
        g.copy(F);
      else
        for (; y < g.length; ++y)
          F[y] = g[y];
      return F;
    } else if (Z) {
      var B = new Uint8Array(T);
      if (B.set)
        B.set(g);
      else
        for (; y < E; ++y)
          B[y] = g[y];
      return B;
    }
    return g.length = T, g;
  }
  function wr(g) {
    for (var k = new Array(g), E = 0; E < g; ++E)
      k[E] = 0;
    return k;
  }
  function Zr(g, k, E) {
    var T = 1, y = 0, F = 0, B = 0, X = 0, M = g.length, U = Z ? new Uint16Array(32) : wr(32);
    for (F = 0; F < 32; ++F)
      U[F] = 0;
    for (F = M; F < E; ++F)
      g[F] = 0;
    M = g.length;
    var V = Z ? new Uint16Array(M) : wr(M);
    for (F = 0; F < M; ++F)
      U[y = g[F]]++, T < y && (T = y), V[F] = 0;
    for (U[0] = 0, F = 1; F <= T; ++F)
      U[F + 16] = X = X + U[F - 1] << 1;
    for (F = 0; F < M; ++F)
      X = g[F], X != 0 && (V[F] = U[X + 16]++);
    var Y = 0;
    for (F = 0; F < M; ++F)
      if (Y = g[F], Y != 0)
        for (X = S(V[F], T) >> T - Y, B = (1 << T + 4 - Y) - 1; B >= 0; --B)
          k[X | B << Y] = Y & 15 | F << 4;
    return T;
  }
  var it = Z ? new Uint16Array(512) : wr(512), ia = Z ? new Uint16Array(32) : wr(32);
  if (!Z) {
    for (var hr = 0; hr < 512; ++hr)
      it[hr] = 0;
    for (hr = 0; hr < 32; ++hr)
      ia[hr] = 0;
  }
  (function() {
    for (var g = [], k = 0; k < 32; k++)
      g.push(5);
    Zr(g, ia, 32);
    var E = [];
    for (k = 0; k <= 143; k++)
      E.push(8);
    for (; k <= 255; k++)
      E.push(9);
    for (; k <= 279; k++)
      E.push(7);
    for (; k <= 287; k++)
      E.push(8);
    Zr(E, it, 288);
  })();
  var zr = /* @__PURE__ */ function() {
    for (var k = Z ? new Uint8Array(32768) : [], E = 0, T = 0; E < ee.length - 1; ++E)
      for (; T < ee[E + 1]; ++T)
        k[T] = E;
    for (; T < 32768; ++T)
      k[T] = 29;
    var y = Z ? new Uint8Array(259) : [];
    for (E = 0, T = 0; E < j.length - 1; ++E)
      for (; T < j[E + 1]; ++T)
        y[T] = E;
    function F(X, M) {
      for (var U = 0; U < X.length; ) {
        var V = Math.min(65535, X.length - U), Y = U + V == X.length;
        for (M.write_shift(1, +Y), M.write_shift(2, V), M.write_shift(2, ~V & 65535); V-- > 0; )
          M[M.l++] = X[U++];
      }
      return M.l;
    }
    function B(X, M) {
      for (var U = 0, V = 0, Y = Z ? new Uint16Array(32768) : []; V < X.length; ) {
        var Q = (
          /* data.length - boff; */
          Math.min(65535, X.length - V)
        );
        if (Q < 10) {
          for (U = Or(M, U, +(V + Q == X.length)), U & 7 && (U += 8 - (U & 7)), M.l = U / 8 | 0, M.write_shift(2, Q), M.write_shift(2, ~Q & 65535); Q-- > 0; )
            M[M.l++] = X[V++];
          U = M.l * 8;
          continue;
        }
        U = Or(M, U, +(V + Q == X.length) + 2);
        for (var se = 0; Q-- > 0; ) {
          var J = X[V];
          se = (se << 5 ^ J) & 32767;
          var ae = -1, de = 0;
          if ((ae = Y[se]) && (ae |= V & -32768, ae > V && (ae -= 32768), ae < V))
            for (; X[ae + de] == X[V + de] && de < 250; )
              ++de;
          if (de > 2) {
            J = y[de], J <= 22 ? U = Jr(M, U, q[J + 1] >> 1) - 1 : (Jr(M, U, 3), U += 5, Jr(M, U, q[J - 23] >> 5), U += 3);
            var Re = J < 8 ? 0 : J - 4 >> 2;
            Re > 0 && (sa(M, U, de - j[J]), U += Re), J = k[V - ae], U = Jr(M, U, q[J] >> 3), U -= 3;
            var Ne = J < 4 ? 0 : J - 2 >> 1;
            Ne > 0 && (sa(M, U, V - ae - ee[J]), U += Ne);
            for (var nr = 0; nr < de; ++nr)
              Y[se] = V & 32767, se = (se << 5 ^ X[V]) & 32767, ++V;
            Q -= de - 1;
          } else
            J <= 143 ? J = J + 48 : U = Gr(M, U, 1), U = Jr(M, U, q[J]), Y[se] = V & 32767, ++V;
        }
        U = Jr(M, U, 0) - 1;
      }
      return M.l = (U + 7) / 8 | 0, M.l;
    }
    return function(M, U) {
      return M.length < 8 ? F(M, U) : B(M, U);
    };
  }();
  function ge(g) {
    var k = Ke(50 + Math.floor(g.length * 1.1)), E = zr(g, k);
    return k.slice(0, E);
  }
  var $e = Z ? new Uint16Array(32768) : wr(32768), Dr = Z ? new Uint16Array(32768) : wr(32768), je = Z ? new Uint16Array(128) : wr(128), vt = 1, as = 1;
  function jf(g, k) {
    var E = me(g, k) + 257;
    k += 5;
    var T = me(g, k) + 1;
    k += 5;
    var y = Ce(g, k) + 4;
    k += 4;
    for (var F = 0, B = Z ? new Uint8Array(19) : wr(19), X = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], M = 1, U = Z ? new Uint8Array(8) : wr(8), V = Z ? new Uint8Array(8) : wr(8), Y = B.length, Q = 0; Q < y; ++Q)
      B[R[Q]] = F = Fe(g, k), M < F && (M = F), U[F]++, k += 3;
    var se = 0;
    for (U[0] = 0, Q = 1; Q <= M; ++Q)
      V[Q] = se = se + U[Q - 1] << 1;
    for (Q = 0; Q < Y; ++Q)
      (se = B[Q]) != 0 && (X[Q] = V[se]++);
    var J = 0;
    for (Q = 0; Q < Y; ++Q)
      if (J = B[Q], J != 0) {
        se = q[X[Q]] >> 8 - J;
        for (var ae = (1 << 7 - J) - 1; ae >= 0; --ae)
          je[se | ae << J] = J & 7 | Q << 3;
      }
    var de = [];
    for (M = 1; de.length < E + T; )
      switch (se = je[te(g, k)], k += se & 7, se >>>= 3) {
        case 16:
          for (F = 3 + He(g, k), k += 2, se = de[de.length - 1]; F-- > 0; )
            de.push(se);
          break;
        case 17:
          for (F = 3 + Fe(g, k), k += 3; F-- > 0; )
            de.push(0);
          break;
        case 18:
          for (F = 11 + te(g, k), k += 7; F-- > 0; )
            de.push(0);
          break;
        default:
          de.push(se), M < se && (M = se);
          break;
      }
    var Re = de.slice(0, E), Ne = de.slice(E);
    for (Q = E; Q < 286; ++Q)
      Re[Q] = 0;
    for (Q = T; Q < 30; ++Q)
      Ne[Q] = 0;
    return vt = Zr(Re, $e, 286), as = Zr(Ne, Dr, 30), k;
  }
  function Kf(g, k) {
    if (g[0] == 3 && !(g[1] & 3))
      return [xt(k), 2];
    for (var E = 0, T = 0, y = ls(k || 1 << 18), F = 0, B = y.length >>> 0, X = 0, M = 0; !(T & 1); ) {
      if (T = Fe(g, E), E += 3, T >>> 1)
        T >> 1 == 1 ? (X = 9, M = 5) : (E = jf(g, E), X = vt, M = as);
      else {
        E & 7 && (E += 8 - (E & 7));
        var U = g[E >>> 3] | g[(E >>> 3) + 1] << 8;
        if (E += 32, U > 0)
          for (!k && B < F + U && (y = st(y, F + U), B = y.length); U-- > 0; )
            y[F++] = g[E >>> 3], E += 8;
        continue;
      }
      for (; ; ) {
        !k && B < F + 32767 && (y = st(y, F + 32767), B = y.length);
        var V = Ve(g, E, X), Y = T >>> 1 == 1 ? it[V] : $e[V];
        if (E += Y & 15, Y >>>= 4, !(Y >>> 8 & 255))
          y[F++] = Y;
        else {
          if (Y == 256)
            break;
          Y -= 257;
          var Q = Y < 8 ? 0 : Y - 4 >> 2;
          Q > 5 && (Q = 0);
          var se = F + j[Y];
          Q > 0 && (se += Ve(g, E, Q), E += Q), V = Ve(g, E, M), Y = T >>> 1 == 1 ? ia[V] : Dr[V], E += Y & 15, Y >>>= 4;
          var J = Y < 4 ? 0 : Y - 2 >> 1, ae = ee[Y];
          for (J > 0 && (ae += Ve(g, E, J), E += J), !k && B < se && (y = st(y, se + 100), B = y.length); F < se; )
            y[F] = y[F - ae], ++F;
        }
      }
    }
    return k ? [y, E + 7 >>> 3] : [y.slice(0, F), E + 7 >>> 3];
  }
  function ns(g, k) {
    var E = g.slice(g.l || 0), T = Kf(E, k);
    return g.l += T[1], T[0];
  }
  function ss(g, k) {
    if (g)
      typeof console < "u" && console.error(k);
    else
      throw new Error(k);
  }
  function is(g, k) {
    var E = (
      /*::(*/
      g
    );
    rr(E, 0);
    var T = [], y = [], F = {
      FileIndex: T,
      FullPaths: y
    };
    w(F, { root: k.root });
    for (var B = E.length - 4; (E[B] != 80 || E[B + 1] != 75 || E[B + 2] != 5 || E[B + 3] != 6) && B >= 0; )
      --B;
    E.l = B + 4, E.l += 4;
    var X = E.read_shift(2);
    E.l += 6;
    var M = E.read_shift(4);
    for (E.l = M, B = 0; B < X; ++B) {
      E.l += 20;
      var U = E.read_shift(4), V = E.read_shift(4), Y = E.read_shift(2), Q = E.read_shift(2), se = E.read_shift(2);
      E.l += 8;
      var J = E.read_shift(4), ae = c(
        /*::(*/
        E.slice(E.l + Y, E.l + Y + Q)
        /*:: :any)*/
      );
      E.l += Y + Q + se;
      var de = E.l;
      E.l = J + 4, Yf(E, U, V, F, ae), E.l = de;
    }
    return F;
  }
  function Yf(g, k, E, T, y) {
    g.l += 2;
    var F = g.read_shift(2), B = g.read_shift(2), X = i(g);
    if (F & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var M = g.read_shift(4), U = g.read_shift(4), V = g.read_shift(4), Y = g.read_shift(2), Q = g.read_shift(2), se = "", J = 0; J < Y; ++J)
      se += String.fromCharCode(g[g.l++]);
    if (Q) {
      var ae = c(
        /*::(*/
        g.slice(g.l, g.l + Q)
        /*:: :any)*/
      );
      (ae[21589] || {}).mt && (X = ae[21589].mt), ((y || {})[21589] || {}).mt && (X = y[21589].mt);
    }
    g.l += Q;
    var de = g.slice(g.l, g.l + U);
    switch (B) {
      case 8:
        de = H(g, V);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + B);
    }
    var Re = !1;
    F & 8 && (M = g.read_shift(4), M == 134695760 && (M = g.read_shift(4), Re = !0), U = g.read_shift(4), V = g.read_shift(4)), U != k && ss(Re, "Bad compressed size: " + k + " != " + U), V != E && ss(Re, "Bad uncompressed size: " + E + " != " + V), Mn(T, se, de, { unsafe: !0, mt: X });
  }
  function qf(g, k) {
    var E = k || {}, T = [], y = [], F = Ke(1), B = E.compression ? 8 : 0, X = 0, M = 0, U = 0, V = 0, Y = 0, Q = g.FullPaths[0], se = Q, J = g.FileIndex[0], ae = [], de = 0;
    for (M = 1; M < g.FullPaths.length; ++M)
      if (se = g.FullPaths[M].slice(Q.length), J = g.FileIndex[M], !(!J.size || !J.content || se == "Sh33tJ5")) {
        var Re = V, Ne = Ke(se.length);
        for (U = 0; U < se.length; ++U)
          Ne.write_shift(1, se.charCodeAt(U) & 127);
        Ne = Ne.slice(0, Ne.l), ae[Y] = Yo.buf(
          /*::((*/
          J.content,
          0
        );
        var nr = J.content;
        B == 8 && (nr = N(nr)), F = Ke(30), F.write_shift(4, 67324752), F.write_shift(2, 20), F.write_shift(2, X), F.write_shift(2, B), J.mt ? s(F, J.mt) : F.write_shift(4, 0), F.write_shift(-4, ae[Y]), F.write_shift(4, nr.length), F.write_shift(
          4,
          /*::(*/
          J.content.length
        ), F.write_shift(2, Ne.length), F.write_shift(2, 0), V += F.length, T.push(F), V += Ne.length, T.push(Ne), V += nr.length, T.push(nr), F = Ke(46), F.write_shift(4, 33639248), F.write_shift(2, 0), F.write_shift(2, 20), F.write_shift(2, X), F.write_shift(2, B), F.write_shift(4, 0), F.write_shift(-4, ae[Y]), F.write_shift(4, nr.length), F.write_shift(
          4,
          /*::(*/
          J.content.length
        ), F.write_shift(2, Ne.length), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(4, 0), F.write_shift(4, Re), de += F.l, y.push(F), de += Ne.length, y.push(Ne), ++Y;
      }
    return F = Ke(22), F.write_shift(4, 101010256), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, Y), F.write_shift(2, Y), F.write_shift(4, de), F.write_shift(4, V), F.write_shift(2, 0), ot([ot(T), ot(y), F]);
  }
  var Ka = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Jf(g, k) {
    if (g.ctype)
      return g.ctype;
    var E = g.name || "", T = E.match(/\.([^\.]+)$/);
    return T && Ka[T[1]] || k && (T = (E = k).match(/[\.\\]([^\.\\])+$/), T && Ka[T[1]]) ? Ka[T[1]] : "application/octet-stream";
  }
  function Zf(g) {
    for (var k = os(g), E = [], T = 0; T < k.length; T += 76)
      E.push(k.slice(T, T + 76));
    return E.join(`\r
`) + `\r
`;
  }
  function Qf(g) {
    var k = g.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(U) {
      var V = U.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (V.length == 1 ? "0" + V : V);
    });
    k = k.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), k.charAt(0) == `
` && (k = "=0D" + k.slice(1)), k = k.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var E = [], T = k.split(`\r
`), y = 0; y < T.length; ++y) {
      var F = T[y];
      if (F.length == 0) {
        E.push("");
        continue;
      }
      for (var B = 0; B < F.length; ) {
        var X = 76, M = F.slice(B, B + X);
        M.charAt(X - 1) == "=" ? X-- : M.charAt(X - 2) == "=" ? X -= 2 : M.charAt(X - 3) == "=" && (X -= 3), M = F.slice(B, B + X), B += X, B < F.length && (M += "="), E.push(M);
      }
    }
    return E.join(`\r
`);
  }
  function eo(g) {
    for (var k = [], E = 0; E < g.length; ++E) {
      for (var T = g[E]; E <= g.length && T.charAt(T.length - 1) == "="; )
        T = T.slice(0, T.length - 1) + g[++E];
      k.push(T);
    }
    for (var y = 0; y < k.length; ++y)
      k[y] = k[y].replace(/[=][0-9A-Fa-f]{2}/g, function(F) {
        return String.fromCharCode(parseInt(F.slice(1), 16));
      });
    return Br(k.join(`\r
`));
  }
  function ro(g, k, E) {
    for (var T = "", y = "", F = "", B, X = 0; X < 10; ++X) {
      var M = k[X];
      if (!M || M.match(/^\s*$/))
        break;
      var U = M.match(/^(.*?):\s*([^\s].*)$/);
      if (U)
        switch (U[1].toLowerCase()) {
          case "content-location":
            T = U[2].trim();
            break;
          case "content-type":
            F = U[2].trim();
            break;
          case "content-transfer-encoding":
            y = U[2].trim();
            break;
        }
    }
    switch (++X, y.toLowerCase()) {
      case "base64":
        B = Br(Sr(k.slice(X).join("")));
        break;
      case "quoted-printable":
        B = eo(k.slice(X));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + y);
    }
    var V = Mn(g, T.slice(E.length), B, { unsafe: !0 });
    F && (V.ctype = F);
  }
  function to(g, k) {
    if (G(g.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var E = k && k.root || "", T = (Ee && Buffer.isBuffer(g) ? g.toString("binary") : G(g)).split(`\r
`), y = 0, F = "";
    for (y = 0; y < T.length; ++y)
      if (F = T[y], !!/^Content-Location:/i.test(F) && (F = F.slice(F.indexOf("file")), E || (E = F.slice(0, F.lastIndexOf("/") + 1)), F.slice(0, E.length) != E))
        for (; E.length > 0 && (E = E.slice(0, E.length - 1), E = E.slice(0, E.lastIndexOf("/") + 1), F.slice(0, E.length) != E); )
          ;
    var B = (T[1] || "").match(/boundary="(.*?)"/);
    if (!B)
      throw new Error("MAD cannot find boundary");
    var X = "--" + (B[1] || ""), M = [], U = [], V = {
      FileIndex: M,
      FullPaths: U
    };
    w(V);
    var Y, Q = 0;
    for (y = 0; y < T.length; ++y) {
      var se = T[y];
      se !== X && se !== X + "--" || (Q++ && ro(V, T.slice(Y, y), E), Y = y);
    }
    return V;
  }
  function ao(g, k) {
    var E = k || {}, T = E.boundary || "SheetJS";
    T = "------=" + T;
    for (var y = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + T.slice(2) + '"',
      "",
      "",
      ""
    ], F = g.FullPaths[0], B = F, X = g.FileIndex[0], M = 1; M < g.FullPaths.length; ++M)
      if (B = g.FullPaths[M].slice(F.length), X = g.FileIndex[M], !(!X.size || !X.content || B == "Sh33tJ5")) {
        B = B.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(de) {
          return "_x" + de.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(de) {
          return "_u" + de.charCodeAt(0).toString(16) + "_";
        });
        for (var U = X.content, V = Ee && Buffer.isBuffer(U) ? U.toString("binary") : G(U), Y = 0, Q = Math.min(1024, V.length), se = 0, J = 0; J <= Q; ++J)
          (se = V.charCodeAt(J)) >= 32 && se < 128 && ++Y;
        var ae = Y >= Q * 4 / 5;
        y.push(T), y.push("Content-Location: " + (E.root || "file:///C:/SheetJS/") + B), y.push("Content-Transfer-Encoding: " + (ae ? "quoted-printable" : "base64")), y.push("Content-Type: " + Jf(X, B)), y.push(""), y.push(ae ? Qf(V) : Zf(V));
      }
    return y.push(T + `--\r
`), y.join(`\r
`);
  }
  function no(g) {
    var k = {};
    return w(k, g), k;
  }
  function Mn(g, k, E, T) {
    var y = T && T.unsafe;
    y || w(g);
    var F = !y && Te.find(g, k);
    if (!F) {
      var B = g.FullPaths[0];
      k.slice(0, B.length) == B ? B = k : (B.slice(-1) != "/" && (B += "/"), B = (B + k).replace("//", "/")), F = { name: n(k), type: 2 }, g.FileIndex.push(F), g.FullPaths.push(B), y || Te.utils.cfb_gc(g);
    }
    return F.content = E, F.size = E ? E.length : 0, T && (T.CLSID && (F.clsid = T.CLSID), T.mt && (F.mt = T.mt), T.ct && (F.ct = T.ct)), F;
  }
  function so(g, k) {
    w(g);
    var E = Te.find(g, k);
    if (E) {
      for (var T = 0; T < g.FileIndex.length; ++T)
        if (g.FileIndex[T] == E)
          return g.FileIndex.splice(T, 1), g.FullPaths.splice(T, 1), !0;
    }
    return !1;
  }
  function io(g, k, E) {
    w(g);
    var T = Te.find(g, k);
    if (T) {
      for (var y = 0; y < g.FileIndex.length; ++y)
        if (g.FileIndex[y] == T)
          return g.FileIndex[y].name = n(E), g.FullPaths[y] = E, !0;
    }
    return !1;
  }
  function co(g) {
    I(g, !0);
  }
  return t.find = W, t.read = D, t.parse = o, t.write = ue, t.writeFile = De, t.utils = {
    cfb_new: no,
    cfb_add: Mn,
    cfb_del: so,
    cfb_mov: io,
    cfb_gc: co,
    ReadShift: va,
    CheckField: pc,
    prep_blob: rr,
    bconcat: ot,
    use_zlib: A,
    _deflateRaw: ge,
    _inflateRaw: ns,
    consts: ie
  }, t;
}();
function qo(e) {
  if (typeof Deno < "u")
    return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var t = File(e);
      t.open("r"), t.encoding = "binary";
      var r = t.read();
      return t.close(), r;
    } catch (a) {
      if (!a.message || !a.message.match(/onstruct/))
        throw a;
    }
  throw new Error("Cannot access file " + e);
}
function Kr(e) {
  for (var t = Object.keys(e), r = [], a = 0; a < t.length; ++a)
    Object.prototype.hasOwnProperty.call(e, t[a]) && r.push(t[a]);
  return r;
}
function C0(e) {
  for (var t = [], r = Kr(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] = r[a];
  return t;
}
var pn = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function mr(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var a = /* @__PURE__ */ pn.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ pn.getTimezoneOffset()) * 6e4;
  return (r - a) / (24 * 60 * 60 * 1e3);
}
var ji = /* @__PURE__ */ new Date(), Jo = /* @__PURE__ */ pn.getTime() + (/* @__PURE__ */ ji.getTimezoneOffset() - /* @__PURE__ */ pn.getTimezoneOffset()) * 6e4, ms = /* @__PURE__ */ ji.getTimezoneOffset();
function On(e) {
  var t = new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + Jo), t.getTimezoneOffset() !== ms && t.setTime(t.getTime() + (t.getTimezoneOffset() - ms) * 6e4), t;
}
function Zo(e) {
  var t = 0, r = 0, a = !1, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!n)
    throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var s = 1; s != n.length; ++s)
    if (n[s]) {
      switch (r = 1, s > 3 && (a = !0), n[s].slice(n[s].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + n[s].slice(n[s].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (a)
            r *= 60;
          else
            throw new Error("Unsupported ISO Duration Field: M");
      }
      t += r * parseInt(n[s], 10);
    }
  return t;
}
var _s = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Ki = /* @__PURE__ */ isNaN(/* @__PURE__ */ _s.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : _s, Qo = /* @__PURE__ */ Ki.getFullYear() == 2017;
function er(e, t) {
  var r = new Date(e);
  if (Qo)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (Ki.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var a = r.getFullYear();
    return e.indexOf("" + a) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], s = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)), s;
}
function St(e, t) {
  if (Ee && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return da(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return da(bi(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return da(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return da(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(s) {
        return r[s] || s;
      });
    } catch {
    }
  for (var a = [], n = 0; n != e.length; ++n)
    a.push(String.fromCharCode(e[n]));
  return a.join("");
}
function tr(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = tr(e[r]));
  return t;
}
function Le(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function Wr(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(a)) || (a = a.replace(/[(](.*)[)]/, function(n, s) {
    return r = -r, s;
  }), !isNaN(t = Number(a))) ? t / r : t;
}
var el = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function jt(e) {
  var t = new Date(e), r = new Date(NaN), a = t.getYear(), n = t.getMonth(), s = t.getDate();
  if (isNaN(s))
    return r;
  var i = e.toLowerCase();
  if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), i.length > 3 && el.indexOf(i) == -1)
      return r;
  } else if (i.match(/[a-z]/))
    return r;
  return a < 0 || a > 8099 ? r : (n > 0 || s > 1) && a != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
var rl = /* @__PURE__ */ function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, a, n) {
    if (e || typeof a == "string")
      return r.split(a);
    for (var s = r.split(a), i = [s[0]], c = 1; c < s.length; ++c)
      i.push(n), i.push(s[c]);
    return i;
  };
}();
function Yi(e) {
  return e ? e.content && e.type ? St(e.content, !0) : e.data ? ua(e.data) : e.asNodeBuffer && Ee ? ua(e.asNodeBuffer().toString("binary")) : e.asBinary ? ua(e.asBinary()) : e._data && e._data.getContent ? ua(St(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function qi(e) {
  if (!e)
    return null;
  if (e.data)
    return cs(e.data);
  if (e.asNodeBuffer && Ee)
    return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var t = e._data.getContent();
    return typeof t == "string" ? cs(t) : Array.prototype.slice.call(t);
  }
  return e.content && e.type ? e.content : null;
}
function tl(e) {
  return e && e.name.slice(-4) === ".bin" ? qi(e) : Yi(e);
}
function Nr(e, t) {
  for (var r = e.FullPaths || Kr(e.files), a = t.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), s = 0; s < r.length; ++s) {
    var i = r[s].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == i || n == i)
      return e.files ? e.files[r[s]] : e.FileIndex[s];
  }
  return null;
}
function O0(e, t) {
  var r = Nr(e, t);
  if (r == null)
    throw new Error("Cannot find file " + t + " in zip");
  return r;
}
function ze(e, t, r) {
  if (!r)
    return tl(O0(e, t));
  if (!t)
    return null;
  try {
    return ze(e, t);
  } catch {
    return null;
  }
}
function yr(e, t, r) {
  if (!r)
    return Yi(O0(e, t));
  if (!t)
    return null;
  try {
    return yr(e, t);
  } catch {
    return null;
  }
}
function Ji(e, t, r) {
  if (!r)
    return qi(O0(e, t));
  if (!t)
    return null;
  try {
    return Ji(e, t);
  } catch {
    return null;
  }
}
function Es(e) {
  for (var t = e.FullPaths || Kr(e.files), r = [], a = 0; a < t.length; ++a)
    t[a].slice(-1) != "/" && r.push(t[a].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function al(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var a;
      return Ee ? a = Dt(r) : a = ko(r), Te.utils.cfb_add(e, t, a);
    }
    Te.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function Zi(e, t) {
  switch (t.type) {
    case "base64":
      return Te.read(e, { type: "base64" });
    case "binary":
      return Te.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Te.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + t.type);
}
function xa(e, t) {
  if (e.charAt(0) == "/")
    return e.slice(1);
  var r = t.split("/");
  t.slice(-1) != "/" && r.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? r.pop() : n !== "." && r.push(n);
  }
  return r.join("/");
}
var Qi = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, nl = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, Ts = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, sl = /<[^>]*>/g, ur = /* @__PURE__ */ Qi.match(Ts) ? Ts : sl, il = /<\w*:/, cl = /<(\/?)\w+:/;
function le(e, t, r) {
  for (var a = {}, n = 0, s = 0; n !== e.length && !((s = e.charCodeAt(n)) === 32 || s === 10 || s === 13); ++n)
    ;
  if (t || (a[0] = e.slice(0, n)), n === e.length)
    return a;
  var i = e.match(nl), c = 0, f = "", l = 0, o = "", h = "", x = 1;
  if (i)
    for (l = 0; l != i.length; ++l) {
      for (h = i[l], s = 0; s != h.length && h.charCodeAt(s) !== 61; ++s)
        ;
      for (o = h.slice(0, s).trim(); h.charCodeAt(s + 1) == 32; )
        ++s;
      for (x = (n = h.charCodeAt(s + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(s + 1 + x, h.length - x), c = 0; c != o.length && o.charCodeAt(c) !== 58; ++c)
        ;
      if (c === o.length)
        o.indexOf("_") > 0 && (o = o.slice(0, o.indexOf("_"))), a[o] = f, r || (a[o.toLowerCase()] = f);
      else {
        var d = (c === 5 && o.slice(0, 5) === "xmlns" ? "xmlns" : "") + o.slice(c + 1);
        if (a[d] && o.slice(c - 3, c) == "ext")
          continue;
        a[d] = f, r || (a[d.toLowerCase()] = f);
      }
    }
  return a;
}
function Yr(e) {
  return e.replace(cl, "<$1");
}
var ec = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, fl = /* @__PURE__ */ C0(ec), ye = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, t = /_x([\da-fA-F]{4})_/ig;
  return function r(a) {
    var n = a + "", s = n.indexOf("<![CDATA[");
    if (s == -1)
      return n.replace(e, function(c, f) {
        return ec[c] || String.fromCharCode(parseInt(f, c.indexOf("x") > -1 ? 16 : 10)) || c;
      }).replace(t, function(c, f) {
        return String.fromCharCode(parseInt(f, 16));
      });
    var i = n.indexOf("]]>");
    return r(n.slice(0, s)) + n.slice(s + 9, i) + r(n.slice(i + 3));
  };
}(), ol = /[&<>'"]/g, ll = /[\u0000-\u001f]/g;
function D0(e) {
  var t = e + "";
  return t.replace(ol, function(r) {
    return fl[r];
  }).replace(/\n/g, "<br/>").replace(ll, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var ws = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function t(r, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, t);
  };
}();
function Ie(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function Hn(e) {
  for (var t = "", r = 0, a = 0, n = 0, s = 0, i = 0, c = 0; r < e.length; ) {
    if (a = e.charCodeAt(r++), a < 128) {
      t += String.fromCharCode(a);
      continue;
    }
    if (n = e.charCodeAt(r++), a > 191 && a < 224) {
      i = (a & 31) << 6, i |= n & 63, t += String.fromCharCode(i);
      continue;
    }
    if (s = e.charCodeAt(r++), a < 240) {
      t += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | s & 63);
      continue;
    }
    i = e.charCodeAt(r++), c = ((a & 7) << 18 | (n & 63) << 12 | (s & 63) << 6 | i & 63) - 65536, t += String.fromCharCode(55296 + (c >>> 10 & 1023)), t += String.fromCharCode(56320 + (c & 1023));
  }
  return t;
}
function ks(e) {
  var t = xt(2 * e.length), r, a, n = 1, s = 0, i = 0, c;
  for (a = 0; a < e.length; a += n)
    n = 1, (c = e.charCodeAt(a)) < 128 ? r = c : c < 224 ? (r = (c & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : c < 240 ? (r = (c & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, r = (c & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), r -= 65536, i = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), i !== 0 && (t[s++] = i & 255, t[s++] = i >>> 8, i = 0), t[s++] = r % 256, t[s++] = r >>> 8;
  return t.slice(0, s).toString("ucs2");
}
function ys(e) {
  return Dt(e, "binary").toString("utf8");
}
var qa = "foo bar bazâð£", Oe = Ee && (/* @__PURE__ */ ys(qa) == /* @__PURE__ */ Hn(qa) && ys || /* @__PURE__ */ ks(qa) == /* @__PURE__ */ Hn(qa) && ks) || Hn, da = Ee ? function(e) {
  return Dt(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, a = 0, n = 0; r < e.length; )
    switch (a = e.charCodeAt(r++), !0) {
      case a < 128:
        t.push(String.fromCharCode(a));
        break;
      case a < 2048:
        t.push(String.fromCharCode(192 + (a >> 6))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      case (a >= 55296 && a < 57344):
        a -= 55296, n = e.charCodeAt(r++) - 56320 + (a << 10), t.push(String.fromCharCode(240 + (n >> 18 & 7))), t.push(String.fromCharCode(144 + (n >> 12 & 63))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (a >> 12))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
    }
  return t.join("");
}, Oa = /* @__PURE__ */ function() {
  var e = {};
  return function(r, a) {
    var n = r + "|" + (a || "");
    return e[n] ? e[n] : e[n] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", a || "");
  };
}(), rc = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var a = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n)
      a = a.replace(e[n][0], e[n][1]);
    return a;
  };
}(), ul = /* @__PURE__ */ function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
}(), hl = /<\/?(?:vt:)?variant>/g, xl = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Fs(e, t) {
  var r = le(e), a = e.match(ul(r.baseType)) || [], n = [];
  if (a.length != r.size) {
    if (t.WTF)
      throw new Error("unexpected vector length " + a.length + " != " + r.size);
    return n;
  }
  return a.forEach(function(s) {
    var i = s.replace(hl, "").match(xl);
    i && n.push({ v: Oe(i[2]), t: i[1] });
  }), n;
}
var dl = /(^\s|\s$|\n)/;
function pl(e) {
  return Kr(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function vl(e, t, r) {
  return "<" + e + (r != null ? pl(r) : "") + (t != null ? (t.match(dl) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function I0(e) {
  if (Ee && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e))
    return e.toString("utf8");
  if (typeof e == "string")
    return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return Oe(It(F0(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Da = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, gl = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, ml = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
function _l(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), a = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), n = e[t + 6] & 15, s = 5; s >= 0; --s)
    n = n * 256 + e[t + s];
  return a == 2047 ? n == 0 ? r * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), r * Math.pow(2, a - 52) * n);
}
function El(e, t, r) {
  var a = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, n = 0, s = 0, i = a ? -t : t;
  isFinite(i) ? i == 0 ? n = s = 0 : (n = Math.floor(Math.log(i) / Math.LN2), s = i * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? n = -1022 : (s -= Math.pow(2, 52), n += 1023)) : (n = 2047, s = isNaN(t) ? 26985 : 0);
  for (var c = 0; c <= 5; ++c, s /= 256)
    e[r + c] = s & 255;
  e[r + 6] = (n & 15) << 4 | s & 15, e[r + 7] = n >> 4 | a;
}
var As = function(e) {
  for (var t = [], r = 10240, a = 0; a < e[0].length; ++a)
    if (e[0][a])
      for (var n = 0, s = e[0][a].length; n < s; n += r)
        t.push.apply(t, e[0][a].slice(n, n + r));
  return t;
}, Ss = Ee ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Dt(t);
  })) : As(e);
} : As, Cs = function(e, t, r) {
  for (var a = [], n = t; n < r; n += 2)
    a.push(String.fromCharCode(et(e, n)));
  return a.join("").replace(gr, "");
}, R0 = Ee ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(gr, "") : Cs(e, t, r);
} : Cs, Os = function(e, t, r) {
  for (var a = [], n = t; n < t + r; ++n)
    a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, tc = Ee ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Os(e, t, r);
} : Os, Ds = function(e, t, r) {
  for (var a = [], n = t; n < r; n++)
    a.push(String.fromCharCode(Ht(e, n)));
  return a.join("");
}, Ha = Ee ? function(t, r, a) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, a) : Ds(t, r, a);
} : Ds, ac = function(e, t) {
  var r = kr(e, t);
  return r > 0 ? Ha(e, t + 4, t + 4 + r - 1) : "";
}, nc = ac, sc = function(e, t) {
  var r = kr(e, t);
  return r > 0 ? Ha(e, t + 4, t + 4 + r - 1) : "";
}, ic = sc, cc = function(e, t) {
  var r = 2 * kr(e, t);
  return r > 0 ? Ha(e, t + 4, t + 4 + r - 1) : "";
}, fc = cc, oc = function(t, r) {
  var a = kr(t, r);
  return a > 0 ? R0(t, r + 4, r + 4 + a) : "";
}, lc = oc, uc = function(e, t) {
  var r = kr(e, t);
  return r > 0 ? Ha(e, t + 4, t + 4 + r) : "";
}, hc = uc, xc = function(e, t) {
  return _l(e, t);
}, vn = xc, dc = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
Ee && (nc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return ac(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, ic = function(t, r) {
  if (!Buffer.isBuffer(t))
    return sc(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, fc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return cc(t, r);
  var a = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a - 1);
}, lc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return oc(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a);
}, hc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return uc(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + a);
}, vn = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : xc(t, r);
}, dc = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var Ht = function(e, t) {
  return e[t];
}, et = function(e, t) {
  return e[t + 1] * (1 << 8) + e[t];
}, Tl = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, kr = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, _t = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, wl = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function va(e, t) {
  var r = "", a, n, s = [], i, c, f, l;
  switch (t) {
    case "dbcs":
      if (l = this.l, Ee && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (f = 0; f < e; ++f)
          r += String.fromCharCode(et(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      r = Ha(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = R0(this, this.l, this.l + e);
      break;
    case "wstr":
      return va.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = nc(this, this.l), e = 4 + kr(this, this.l);
      break;
    case "lpstr-cp":
      r = ic(this, this.l), e = 4 + kr(this, this.l);
      break;
    case "lpwstr":
      r = fc(this, this.l), e = 4 + 2 * kr(this, this.l);
      break;
    case "lpp4":
      e = 4 + kr(this, this.l), r = lc(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + kr(this, this.l), r = hc(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = Ht(this, this.l + e++)) !== 0; )
        s.push(Ya(i));
      r = s.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = et(this, this.l + e)) !== 0; )
        s.push(Ya(i)), e += 2;
      e += 2, r = s.join("");
      break;
    case "dbcs-cont":
      for (r = "", l = this.l, f = 0; f < e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = Ht(this, l), this.l = l + 1, c = va.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(Ya(et(this, l))), l += 2;
      }
      r = s.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", l = this.l, f = 0; f != e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = Ht(this, l), this.l = l + 1, c = va.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(Ya(Ht(this, l))), l += 1;
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Ht(this, this.l), this.l++, a;
        case 2:
          return a = (t === "i" ? Tl : et)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128) ? (a = (e > 0 ? _t : wl)(this, this.l), this.l += 4, a) : (n = kr(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? n = vn(this, this.l) : n = vn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          r = tc(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var kl = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, yl = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, Fl = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Al(e, t, r) {
  var a = 0, n = 0;
  if (r === "dbcs") {
    for (n = 0; n != t.length; ++n)
      Fl(this, t.charCodeAt(n), this.l + 2 * n);
    a = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != t.length; ++n)
      this[this.l + n] = t.charCodeAt(n) & 255;
    a = t.length;
  } else if (r === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(t.length, e); ++n) {
      var i = t.charCodeAt(n);
      this[this.l++] = i & 255, this[this.l++] = i >> 8;
    }
    for (; this.l < s; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        a = 1, this[this.l] = t & 255;
        break;
      case 2:
        a = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        a = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        a = 4, kl(this, t, this.l);
        break;
      case 8:
        if (a = 8, r === "f") {
          El(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        a = 4, yl(this, t, this.l);
        break;
    }
  return this.l += a, this;
}
function pc(e, t) {
  var r = tc(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function rr(e, t) {
  e.l = t, e.read_shift = /*::(*/
  va, e.chk = pc, e.write_shift = Al;
}
function lr(e, t) {
  e.l += t;
}
function Ke(e) {
  var t = xt(e);
  return rr(t, 0), t;
}
function nt(e, t, r) {
  if (e) {
    var a, n, s;
    rr(e, e.l || 0);
    for (var i = e.length, c = 0, f = 0; e.l < i; ) {
      c = e.read_shift(1), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var l = wn[c] || wn[65535];
      for (a = e.read_shift(1), s = a & 127, n = 1; n < 4 && a & 128; ++n)
        s += ((a = e.read_shift(1)) & 127) << 7 * n;
      f = e.l + s;
      var o = l.f && l.f(e, s, r);
      if (e.l = f, t(o, l, c))
        return;
    }
  }
}
function Qn() {
  var e = [], t = Ee ? 256 : 2048, r = function(l) {
    var o = Ke(l);
    return rr(o, 0), o;
  }, a = r(t), n = function() {
    a && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a), a = null);
  }, s = function(l) {
    return a && l < a.length - a.l ? a : (n(), a = r(Math.max(l + 1, t)));
  }, i = function() {
    return n(), ot(e);
  }, c = function(l) {
    n(), a = l, a.l == null && (a.l = a.length), s(t);
  };
  return { next: s, push: c, end: i, _bufs: e };
}
function ga(e, t, r) {
  var a = tr(e);
  if (t.s ? (a.cRel && (a.c += t.s.c), a.rRel && (a.r += t.s.r)) : (a.cRel && (a.c += t.c), a.rRel && (a.r += t.r)), !r || r.biff < 12) {
    for (; a.c >= 256; )
      a.c -= 256;
    for (; a.r >= 65536; )
      a.r -= 65536;
  }
  return a;
}
function Is(e, t, r) {
  var a = tr(e);
  return a.s = ga(a.s, t.s, r), a.e = ga(a.e, t.s, r), a;
}
function ma(e, t) {
  if (e.cRel && e.c < 0)
    for (e = tr(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = tr(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = xe(e);
  return !e.cRel && e.cRel != null && (r = Ol(r)), !e.rRel && e.rRel != null && (r = Sl(r)), r;
}
function Vn(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ye(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ye(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + ar(e.s.r) + ":" + (e.e.rRel ? "" : "$") + ar(e.e.r) : ma(e.s, t.biff) + ":" + ma(e.e, t.biff);
}
function N0(e) {
  return parseInt(Cl(e), 10) - 1;
}
function ar(e) {
  return "" + (e + 1);
}
function Sl(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Cl(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function b0(e) {
  for (var t = Dl(e), r = 0, a = 0; a !== t.length; ++a)
    r = 26 * r + t.charCodeAt(a) - 64;
  return r - 1;
}
function Ye(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function Ol(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Dl(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Il(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function vr(e) {
  for (var t = 0, r = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? t = 10 * t + (n - 48) : n >= 65 && n <= 90 && (r = 26 * r + (n - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function xe(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function ra(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: vr(e), e: vr(e) } : { s: vr(e.slice(0, t)), e: vr(e.slice(t + 1)) };
}
function we(e, t) {
  return typeof t > "u" || typeof t == "number" ? we(e.s, e.e) : (typeof e != "string" && (e = xe(e)), typeof t != "string" && (t = xe(t)), e == t ? e : e + ":" + t);
}
function Ue(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, a = 0, n = 0, s = e.length;
  for (r = 0; a < s && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.s.c = --r, r = 0; a < s && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  if (t.s.r = --r, a === s || n != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++a, r = 0; a != s && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.e.c = --r, r = 0; a != s && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  return t.e.r = --r, t;
}
function Rs(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = br(e.z, r ? mr(t) : t);
    } catch {
    }
  try {
    return e.w = br((e.XF || {}).numFmtId || (r ? 14 : 0), r ? mr(t) : t);
  } catch {
    return "" + t;
  }
}
function at(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? bt[e.v] || e.v : t == null ? Rs(e, e.v) : Rs(e, t));
}
function pt(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", a = {};
  return a[r] = e, { SheetNames: [r], Sheets: a };
}
function vc(e, t, r) {
  var a = r || {}, n = e ? Array.isArray(e) : a.dense, s = e || (n ? [] : {}), i = 0, c = 0;
  if (s && a.origin != null) {
    if (typeof a.origin == "number")
      i = a.origin;
    else {
      var f = typeof a.origin == "string" ? vr(a.origin) : a.origin;
      i = f.r, c = f.c;
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var o = Ue(s["!ref"]);
    l.s.c = o.s.c, l.s.r = o.s.r, l.e.c = Math.max(l.e.c, o.e.c), l.e.r = Math.max(l.e.r, o.e.r), i == -1 && (l.e.r = i = o.e.r + 1);
  }
  for (var h = 0; h != t.length; ++h)
    if (t[h]) {
      if (!Array.isArray(t[h]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != t[h].length; ++x)
        if (!(typeof t[h][x] > "u")) {
          var d = { v: t[h][x] }, p = i + h, u = c + x;
          if (l.s.r > p && (l.s.r = p), l.s.c > u && (l.s.c = u), l.e.r < p && (l.e.r = p), l.e.c < u && (l.e.c = u), t[h][x] && typeof t[h][x] == "object" && !Array.isArray(t[h][x]) && !(t[h][x] instanceof Date))
            d = t[h][x];
          else if (Array.isArray(d.v) && (d.f = t[h][x][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (a.nullError)
              d.t = "e", d.v = 0;
            else if (a.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = a.dateNF || pe[14], a.cellDates ? (d.t = "d", d.w = br(d.z, mr(d.v))) : (d.t = "n", d.v = mr(d.v), d.w = br(d.z, d.v))) : d.t = "s";
          if (n)
            s[p] || (s[p] = []), s[p][u] && s[p][u].z && (d.z = s[p][u].z), s[p][u] = d;
          else {
            var v = xe({ c: u, r: p });
            s[v] && s[v].z && (d.z = s[v].z), s[v] = d;
          }
        }
    }
  return l.s.c < 1e7 && (s["!ref"] = we(l)), s;
}
function ta(e, t) {
  return vc(null, e, t);
}
function Rl(e) {
  return e.read_shift(4, "i");
}
function or(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function Nl(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function P0(e, t) {
  var r = e.l, a = e.read_shift(1), n = or(e), s = [], i = { t: n, h: n };
  if (a & 1) {
    for (var c = e.read_shift(4), f = 0; f != c; ++f)
      s.push(Nl(e));
    i.r = s;
  } else
    i.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, i;
}
var bl = P0;
function Pr(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function Rt(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
var Pl = or;
function L0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
var Ll = or, e0 = L0;
function M0(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, a = t[0] & 2;
  e.l += 4;
  var n = a === 0 ? vn([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : _t(t, 0) >> 2;
  return r ? n / 100 : n;
}
function gc(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
var Nt = gc;
function cr(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Ml(e) {
  var t = {}, r = e.read_shift(1), a = r >>> 1, n = e.read_shift(1), s = e.read_shift(2, "i"), i = e.read_shift(1), c = e.read_shift(1), f = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = n;
      var l = yt[n];
      l && (t.rgb = Ra(l));
      break;
    case 2:
      t.rgb = Ra([i, c, f]);
      break;
    case 3:
      t.theme = n;
      break;
  }
  return s != 0 && (t.tint = s > 0 ? s / 32767 : s / 32768), t;
}
function Bl(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function mc(e, t) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, a = e.read_shift(4);
  switch (a) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (a > 400)
    throw new Error("Unsupported Clipboard: " + a.toString(16));
  return e.l -= 4, e.read_shift(0, t == 1 ? "lpstr" : "lpwstr");
}
function Ul(e) {
  return mc(e, 1);
}
function Hl(e) {
  return mc(e, 2);
}
var B0 = 2, Er = 3, Ja = 11, Ns = 12, gn = 19, Za = 64, Vl = 65, $l = 71, Wl = 4108, Gl = 4126, Ze = 80, _c = 81, zl = [Ze, _c], Xl = {
  /*::[*/
  1: { n: "CodePage", t: B0 },
  /*::[*/
  2: { n: "Category", t: Ze },
  /*::[*/
  3: { n: "PresentationFormat", t: Ze },
  /*::[*/
  4: { n: "ByteCount", t: Er },
  /*::[*/
  5: { n: "LineCount", t: Er },
  /*::[*/
  6: { n: "ParagraphCount", t: Er },
  /*::[*/
  7: { n: "SlideCount", t: Er },
  /*::[*/
  8: { n: "NoteCount", t: Er },
  /*::[*/
  9: { n: "HiddenCount", t: Er },
  /*::[*/
  10: { n: "MultimediaClipCount", t: Er },
  /*::[*/
  11: { n: "ScaleCrop", t: Ja },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: Wl
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: Gl
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: Ze },
  /*::[*/
  15: { n: "Company", t: Ze },
  /*::[*/
  16: { n: "LinksUpToDate", t: Ja },
  /*::[*/
  17: { n: "CharacterCount", t: Er },
  /*::[*/
  19: { n: "SharedDoc", t: Ja },
  /*::[*/
  22: { n: "HyperlinksChanged", t: Ja },
  /*::[*/
  23: { n: "AppVersion", t: Er, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: Vl },
  /*::[*/
  26: { n: "ContentType", t: Ze },
  /*::[*/
  27: { n: "ContentStatus", t: Ze },
  /*::[*/
  28: { n: "Language", t: Ze },
  /*::[*/
  29: { n: "Version", t: Ze },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: gn },
  /*::[*/
  2147483651: { n: "Behavior", t: gn },
  /*::[*/
  1919054434: {}
}, jl = {
  /*::[*/
  1: { n: "CodePage", t: B0 },
  /*::[*/
  2: { n: "Title", t: Ze },
  /*::[*/
  3: { n: "Subject", t: Ze },
  /*::[*/
  4: { n: "Author", t: Ze },
  /*::[*/
  5: { n: "Keywords", t: Ze },
  /*::[*/
  6: { n: "Comments", t: Ze },
  /*::[*/
  7: { n: "Template", t: Ze },
  /*::[*/
  8: { n: "LastAuthor", t: Ze },
  /*::[*/
  9: { n: "RevNumber", t: Ze },
  /*::[*/
  10: { n: "EditTime", t: Za },
  /*::[*/
  11: { n: "LastPrinted", t: Za },
  /*::[*/
  12: { n: "CreatedDate", t: Za },
  /*::[*/
  13: { n: "ModifiedDate", t: Za },
  /*::[*/
  14: { n: "PageCount", t: Er },
  /*::[*/
  15: { n: "WordCount", t: Er },
  /*::[*/
  16: { n: "CharCount", t: Er },
  /*::[*/
  17: { n: "Thumbnail", t: $l },
  /*::[*/
  18: { n: "Application", t: Ze },
  /*::[*/
  19: { n: "DocSecurity", t: Er },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: gn },
  /*::[*/
  2147483651: { n: "Behavior", t: gn },
  /*::[*/
  1919054434: {}
}, bs = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
}, Kl = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function Yl(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var ql = /* @__PURE__ */ Yl([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), yt = /* @__PURE__ */ tr(ql), bt = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, Ec = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, Ps = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
};
function Jl() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Zl(e) {
  var t = Jl();
  if (!e || !e.match)
    return t;
  var r = {};
  if ((e.match(ur) || []).forEach(function(a) {
    var n = le(a);
    switch (n[0].replace(il, "<")) {
      case "<?xml":
        break;
      case "<Types":
        t.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[n.Extension] = n.ContentType;
        break;
      case "<Override":
        t[Ps[n.ContentType]] !== void 0 && t[Ps[n.ContentType]].push(n.PartName);
        break;
    }
  }), t.xmlns !== gl.CT)
    throw new Error("Unknown Namespace: " + t.xmlns);
  return t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "", t.sst = t.strs.length > 0 ? t.strs[0] : "", t.style = t.styles.length > 0 ? t.styles[0] : "", t.defaults = r, delete t.calcchains, t;
}
var $t = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function r0(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function _a(e, t) {
  var r = { "!id": {} };
  if (!e)
    return r;
  t.charAt(0) !== "/" && (t = "/" + t);
  var a = {};
  return (e.match(ur) || []).forEach(function(n) {
    var s = le(n);
    if (s[0] === "<Relationship") {
      var i = {};
      i.Type = s.Type, i.Target = s.Target, i.Id = s.Id, s.TargetMode && (i.TargetMode = s.TargetMode);
      var c = s.TargetMode === "External" ? s.Target : xa(s.Target, t);
      r[c] = i, a[s.Id] = i;
    }
  }), r["!id"] = a, r;
}
var Ql = "application/vnd.oasis.opendocument.spreadsheet";
function eu(e, t) {
  for (var r = I0(e), a, n; a = Da.exec(r); )
    switch (a[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (n = le(a[0], !1), n.path == "/" && n.type !== Ql)
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (t && t.WTF)
          throw a;
    }
}
var Ea = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], ru = /* @__PURE__ */ function() {
  for (var e = new Array(Ea.length), t = 0; t < Ea.length; ++t) {
    var r = Ea[t], a = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[t] = new RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">");
  }
  return e;
}();
function Tc(e) {
  var t = {};
  e = Oe(e);
  for (var r = 0; r < Ea.length; ++r) {
    var a = Ea[r], n = e.match(ru[r]);
    n != null && n.length > 0 && (t[a[1]] = ye(n[1])), a[2] === "date" && t[a[1]] && (t[a[1]] = er(t[a[1]]));
  }
  return t;
}
var tu = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
function wc(e, t, r, a) {
  var n = [];
  if (typeof e == "string")
    n = Fs(e, a);
  else
    for (var s = 0; s < e.length; ++s)
      n = n.concat(e[s].map(function(o) {
        return { v: o };
      }));
  var i = typeof t == "string" ? Fs(t, a).map(function(o) {
    return o.v;
  }) : t, c = 0, f = 0;
  if (i.length > 0)
    for (var l = 0; l !== n.length; l += 2) {
      switch (f = +n[l + 1].v, n[l].v) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          r.Worksheets = f, r.SheetNames = i.slice(c, c + f);
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          r.NamedRanges = f, r.DefinedNames = i.slice(c, c + f);
          break;
        case "Charts":
        case "Diagramme":
          r.Chartsheets = f, r.ChartNames = i.slice(c, c + f);
          break;
      }
      c += f;
    }
}
function au(e, t, r) {
  var a = {};
  return t || (t = {}), e = Oe(e), tu.forEach(function(n) {
    var s = (e.match(Oa(n[0])) || [])[1];
    switch (n[2]) {
      case "string":
        s && (t[n[1]] = ye(s));
        break;
      case "bool":
        t[n[1]] = s === "true";
        break;
      case "raw":
        var i = e.match(new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"));
        i && i.length > 0 && (a[n[1]] = i[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && wc(a.HeadingPairs, a.TitlesOfParts, t, r), t;
}
var nu = /<[^>]+>[^<]*/g;
function su(e, t) {
  var r = {}, a = "", n = e.match(nu);
  if (n)
    for (var s = 0; s != n.length; ++s) {
      var i = n[s], c = le(i);
      switch (c[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          a = ye(c.name);
          break;
        case "</property>":
          a = null;
          break;
        default:
          if (i.indexOf("<vt:") === 0) {
            var f = i.split(">"), l = f[0].slice(4), o = f[1];
            switch (l) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[a] = ye(o);
                break;
              case "bool":
                r[a] = Ie(o);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[a] = parseInt(o, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[a] = parseFloat(o);
                break;
              case "filetime":
              case "date":
                r[a] = er(o);
                break;
              case "cy":
              case "error":
                r[a] = ye(o);
                break;
              default:
                if (l.slice(-1) == "/")
                  break;
                t.WTF && typeof console < "u" && console.warn("Unexpected", i, l, f);
            }
          } else if (i.slice(0, 2) !== "</") {
            if (t.WTF)
              throw new Error(i);
          }
      }
    }
  return r;
}
var iu = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, $n;
function cu(e, t, r) {
  $n || ($n = C0(iu)), t = $n[t] || t, e[t] = r;
}
function U0(e) {
  var t = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function kc(e, t, r) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (r)
    for (; e.l - a & 3; )
      ++e.l;
  return n;
}
function yc(e, t, r) {
  var a = e.read_shift(0, "lpwstr");
  return r && (e.l += 4 - (a.length + 1 & 3) & 3), a;
}
function Fc(e, t, r) {
  return t === 31 ? yc(e) : kc(e, t, r);
}
function t0(e, t, r) {
  return Fc(e, t, r === !1 ? 0 : 4);
}
function fu(e, t) {
  if (!t)
    throw new Error("VtUnalignedString must have positive length");
  return Fc(e, t, 0);
}
function ou(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a) {
    var n = e.l;
    r[a] = e.read_shift(0, "lpwstr").replace(gr, ""), e.l - n & 2 && (e.l += 2);
  }
  return r;
}
function lu(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a)
    r[a] = e.read_shift(0, "lpstr-cp").replace(gr, "");
  return r;
}
function uu(e) {
  var t = e.l, r = mn(e, _c);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - t & 2 && (e.l += 2);
  var a = mn(e, Er);
  return [r, a];
}
function hu(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a < t / 2; ++a)
    r.push(uu(e));
  return r;
}
function Ls(e, t) {
  for (var r = e.read_shift(4), a = {}, n = 0; n != r; ++n) {
    var s = e.read_shift(4), i = e.read_shift(4);
    a[s] = e.read_shift(i, t === 1200 ? "utf16le" : "utf8").replace(gr, "").replace(ha, "!"), t === 1200 && i % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 2 + 1 << 2), a;
}
function Ac(e) {
  var t = e.read_shift(4), r = e.slice(e.l, e.l + t);
  return e.l += t, (t & 3) > 0 && (e.l += 4 - (t & 3) & 3), r;
}
function xu(e) {
  var t = {};
  return t.Size = e.read_shift(4), e.l += t.Size + 3 - (t.Size - 1) % 4, t;
}
function mn(e, t, r) {
  var a = e.read_shift(2), n, s = r || {};
  if (e.l += 2, t !== Ns && a !== t && zl.indexOf(t) === -1 && !((t & 65534) == 4126 && (a & 65534) == 4126))
    throw new Error("Expected type " + t + " saw " + a);
  switch (t === Ns ? a : t) {
    case 2:
      return n = e.read_shift(2, "i"), s.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      return kc(e, a, 4).replace(gr, "");
    case 31:
      return yc(e);
    case 64:
      return U0(e);
    case 65:
      return Ac(e);
    case 71:
      return xu(e);
    case 80:
      return t0(e, a, !s.raw).replace(gr, "");
    case 81:
      return fu(
        e,
        a
        /*, 4*/
      ).replace(gr, "");
    case 4108:
      return hu(e);
    case 4126:
    case 4127:
      return a == 4127 ? ou(e) : lu(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + t + " " + a);
  }
}
function Ms(e, t) {
  var r = e.l, a = e.read_shift(4), n = e.read_shift(4), s = [], i = 0, c = 0, f = -1, l = {};
  for (i = 0; i != n; ++i) {
    var o = e.read_shift(4), h = e.read_shift(4);
    s[i] = [o, h + r];
  }
  s.sort(function(C, m) {
    return C[1] - m[1];
  });
  var x = {};
  for (i = 0; i != n; ++i) {
    if (e.l !== s[i][1]) {
      var d = !0;
      if (i > 0 && t)
        switch (t[s[i - 1][0]].t) {
          case 2:
            e.l + 2 === s[i][1] && (e.l += 2, d = !1);
            break;
          case 80:
            e.l <= s[i][1] && (e.l = s[i][1], d = !1);
            break;
          case 4108:
            e.l <= s[i][1] && (e.l = s[i][1], d = !1);
            break;
        }
      if ((!t || i == 0) && e.l <= s[i][1] && (d = !1, e.l = s[i][1]), d)
        throw new Error("Read Error: Expected address " + s[i][1] + " at " + e.l + " :" + i);
    }
    if (t) {
      var p = t[s[i][0]];
      if (x[p.n] = mn(e, p.t, { raw: !0 }), p.p === "version" && (x[p.n] = String(x[p.n] >> 16) + "." + ("0000" + String(x[p.n] & 65535)).slice(-4)), p.n == "CodePage")
        switch (x[p.n]) {
          case 0:
            x[p.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            Ur(c = x[p.n] >>> 0 & 65535);
            break;
          default:
            throw new Error("Unsupported CodePage: " + x[p.n]);
        }
    } else if (s[i][0] === 1) {
      if (c = x.CodePage = mn(e, B0), Ur(c), f !== -1) {
        var u = e.l;
        e.l = s[f][1], l = Ls(e, c), e.l = u;
      }
    } else if (s[i][0] === 0) {
      if (c === 0) {
        f = i, e.l = s[i + 1][1];
        continue;
      }
      l = Ls(e, c);
    } else {
      var v = l[s[i][0]], _;
      switch (e[e.l]) {
        case 65:
          e.l += 4, _ = Ac(e);
          break;
        case 30:
          e.l += 4, _ = t0(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, _ = t0(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, _ = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, _ = e.read_shift(4);
          break;
        case 5:
          e.l += 4, _ = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, _ = We(e, 4);
          break;
        case 64:
          e.l += 4, _ = er(U0(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      x[v] = _;
    }
  }
  return e.l = r + a, x;
}
function Bs(e, t, r) {
  var a = e.content;
  if (!a)
    return {};
  rr(a, 0);
  var n, s, i, c, f = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var l = a.read_shift(4), o = a.read_shift(16);
  if (o !== Te.utils.consts.HEADER_CLSID && o !== r)
    throw new Error("Bad PropertySet CLSID " + o);
  if (n = a.read_shift(4), n !== 1 && n !== 2)
    throw new Error("Unrecognized #Sets: " + n);
  if (s = a.read_shift(16), c = a.read_shift(4), n === 1 && c !== a.l)
    throw new Error("Length mismatch: " + c + " !== " + a.l);
  n === 2 && (i = a.read_shift(16), f = a.read_shift(4));
  var h = Ms(a, t), x = { SystemIdentifier: l };
  for (var d in h)
    x[d] = h[d];
  if (x.FMTID = s, n === 1)
    return x;
  if (f - a.l == 2 && (a.l += 2), a.l !== f)
    throw new Error("Length mismatch 2: " + a.l + " !== " + f);
  var p;
  try {
    p = Ms(a, null);
  } catch {
  }
  for (d in p)
    x[d] = p[d];
  return x.FMTID = [s, i], x;
}
function ct(e, t) {
  return e.read_shift(t), null;
}
function du(e, t, r) {
  for (var a = [], n = e.l + t; e.l < n; )
    a.push(r(e, n - e.l));
  if (n !== e.l)
    throw new Error("Slurp error");
  return a;
}
function We(e, t) {
  return e.read_shift(t) === 1;
}
function Xe(e) {
  return e.read_shift(2, "u");
}
function Sc(e, t) {
  return du(e, t, Xe);
}
function pu(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? t : t === 1;
}
function Va(e, t, r) {
  var a = e.read_shift(r && r.biff >= 12 ? 2 : 1), n = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else
    r.biff == 12 && (n = "wstr");
  r.biff >= 2 && r.biff <= 5 && (n = "cpstr");
  var i = a ? e.read_shift(a, n) : "";
  return i;
}
function vu(e) {
  var t = e.read_shift(2), r = e.read_shift(1), a = r & 4, n = r & 8, s = 1 + (r & 1), i = 0, c, f = {};
  n && (i = e.read_shift(2)), a && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont", o = t === 0 ? "" : e.read_shift(t, l);
  return n && (e.l += 4 * i), a && (e.l += c), f.t = o, n || (f.raw = "<t>" + f.t + "</t>", f.r = f.t), f;
}
function Ct(e, t, r) {
  var a;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(t, "sbcs-cont") : a = e.read_shift(t, "dbcs-cont"), a;
}
function $a(e, t, r) {
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : Ct(e, a, r);
}
function Pt(e, t, r) {
  if (r.biff > 5)
    return $a(e, t, r);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function gu(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [t, r];
}
function mu(e) {
  var t = e.read_shift(4), r = e.l, a = !1;
  t > 24 && (e.l += t - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = !0), e.l = r);
  var n = e.read_shift((a ? t - 24 : t) >> 1, "utf16le").replace(gr, "");
  return a && (e.l += 24), n;
}
function _u(e) {
  for (var t = e.read_shift(2), r = ""; t-- > 0; )
    r += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005)
    throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0)
    return r + a.replace(/\\/g, "/");
  var s = e.read_shift(4);
  if (e.read_shift(2) != 3)
    throw new Error("Bad FileMoniker");
  var i = e.read_shift(s >> 1, "utf16le").replace(gr, "");
  return r + i;
}
function Eu(e, t) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return mu(e);
    case "0303000000000000c000000000000046":
      return _u(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function Qa(e) {
  var t = e.read_shift(4), r = t > 0 ? e.read_shift(t, "utf16le").replace(gr, "") : "";
  return r;
}
function Tu(e, t) {
  var r = e.l + t, a = e.read_shift(4);
  if (a !== 2)
    throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var s, i, c, f, l = "", o, h;
  n & 16 && (s = Qa(e, r - e.l)), n & 128 && (i = Qa(e, r - e.l)), (n & 257) === 257 && (c = Qa(e, r - e.l)), (n & 257) === 1 && (f = Eu(e, r - e.l)), n & 8 && (l = Qa(e, r - e.l)), n & 32 && (o = e.read_shift(16)), n & 64 && (h = U0(
    e
    /*, 8*/
  )), e.l = r;
  var x = i || c || f || "";
  x && l && (x += "#" + l), x || (x = "#" + l), n & 2 && x.charAt(0) == "/" && x.charAt(1) != "/" && (x = "file://" + x);
  var d = { Target: x };
  return o && (d.guid = o), h && (d.time = h), s && (d.Tooltip = s), d;
}
function Cc(e) {
  var t = e.read_shift(1), r = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [t, r, a, n];
}
function Oc(e, t) {
  var r = Cc(e);
  return r[3] = 0, r;
}
function qr(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return { r: t, c: r, ixfe: a };
}
function wu(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: t, flags: r };
}
function ku(e, t, r) {
  return t === 0 ? "" : Pt(e, t, r);
}
function yu(e, t, r) {
  var a = r.biff > 8 ? 4 : 2, n = e.read_shift(a), s = e.read_shift(a, "i"), i = e.read_shift(a, "i");
  return [n, s, i];
}
function Dc(e) {
  var t = e.read_shift(2), r = M0(e);
  return [t, r];
}
function Fu(e, t, r) {
  e.l += 4, t -= 4;
  var a = e.l + t, n = Va(e, t, r), s = e.read_shift(2);
  if (a -= e.l, s !== a)
    throw new Error("Malformed AddinUdf: padding = " + a + " != " + s);
  return e.l += s, n;
}
function Dn(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
function Ic(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
var Au = Ic;
function Rc(e) {
  e.l += 4;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function Su(e) {
  var t = {};
  return e.l += 4, e.l += 16, t.fSharedNote = e.read_shift(2), e.l += 4, t;
}
function Cu(e) {
  var t = {};
  return e.l += 4, e.cf = e.read_shift(2), t;
}
function sr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var Ou = {
  /*::[*/
  0: sr,
  /* FtEnd */
  /*::[*/
  4: sr,
  /* FtMacro */
  /*::[*/
  5: sr,
  /* FtButton */
  /*::[*/
  6: sr,
  /* FtGmo */
  /*::[*/
  7: Cu,
  /* FtCf */
  /*::[*/
  8: sr,
  /* FtPioGrbit */
  /*::[*/
  9: sr,
  /* FtPictFmla */
  /*::[*/
  10: sr,
  /* FtCbls */
  /*::[*/
  11: sr,
  /* FtRbo */
  /*::[*/
  12: sr,
  /* FtSbs */
  /*::[*/
  13: Su,
  /* FtNts */
  /*::[*/
  14: sr,
  /* FtSbsFmla */
  /*::[*/
  15: sr,
  /* FtGboData */
  /*::[*/
  16: sr,
  /* FtEdoData */
  /*::[*/
  17: sr,
  /* FtRboData */
  /*::[*/
  18: sr,
  /* FtCblsData */
  /*::[*/
  19: sr,
  /* FtLbsData */
  /*::[*/
  20: sr,
  /* FtCblsFmla */
  /*::[*/
  21: Rc
};
function Du(e, t) {
  for (var r = e.l + t, a = []; e.l < r; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a.push(Ou[n](e, r - e.l));
    } catch {
      return e.l = r, a;
    }
  }
  return e.l != r && (e.l = r), a;
}
function en(e, t) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), t -= 2, t >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (t > 6)
        throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(t), r;
}
function Iu(e, t) {
  return t === 0 || e.read_shift(2), 1200;
}
function Ru(e, t, r) {
  if (r.enc)
    return e.l += t, "";
  var a = e.l, n = Pt(e, 0, r);
  return e.read_shift(t + a - e.l), n;
}
function Nu(e, t, r) {
  var a = r && r.biff == 8 || t == 2 ? e.read_shift(2) : (e.l += t, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function bu(e, t, r) {
  var a = e.read_shift(4), n = e.read_shift(1) & 3, s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  var i = Va(e, 0, r);
  return i.length === 0 && (i = "Sheet1"), { pos: a, hs: n, dt: s, name: i };
}
function Pu(e, t) {
  for (var r = e.l + t, a = e.read_shift(4), n = e.read_shift(4), s = [], i = 0; i != n && e.l < r; ++i)
    s.push(vu(e));
  return s.Count = a, s.Unique = n, s;
}
function Lu(e, t) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += t - 2, r;
}
function Mu(e) {
  var t = {};
  t.r = e.read_shift(2), t.c = e.read_shift(2), t.cnt = e.read_shift(2) - t.c;
  var r = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (t.level = a & 7), a & 32 && (t.hidden = !0), a & 64 && (t.hpt = r / 20), t;
}
function Bu(e) {
  var t = wu(e);
  if (t.type != 2211)
    throw new Error("Invalid Future Record " + t.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function Uu(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Us(e, t, r) {
  var a = 0;
  r && r.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  r && r.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var s = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [s, n];
}
function Hu(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = e.read_shift(2), f = e.read_shift(2), l = e.read_shift(2);
  return {
    Pos: [t, r],
    Dim: [a, n],
    Flags: s,
    CurTab: i,
    FirstTab: c,
    Selected: f,
    TabRatio: l
  };
}
function Vu(e, t, r) {
  if (r && r.biff >= 2 && r.biff < 5)
    return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function $u() {
}
function Wu(e, t, r) {
  var a = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return a.name = Va(e, 0, r), a;
}
function Gu(e) {
  var t = qr(e);
  return t.isst = e.read_shift(4), t;
}
function zu(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = e.l + t, n = qr(e);
  r.biff == 2 && e.l++;
  var s = $a(e, a - e.l, r);
  return n.val = s, n;
}
function Xu(e, t, r) {
  var a = e.read_shift(2), n = Pt(e, 0, r);
  return [a, n];
}
var ju = Pt;
function Hs(e, t, r) {
  var a = e.l + t, n = r.biff == 8 || !r.biff ? 4 : 2, s = e.read_shift(n), i = e.read_shift(n), c = e.read_shift(2), f = e.read_shift(2);
  return e.l = a, { s: { r: s, c }, e: { r: i, c: f } };
}
function Ku(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = Dc(e);
  return { r: t, c: r, ixfe: a[0], rknum: a[1] };
}
function Yu(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < r; )
    s.push(Dc(e));
  if (e.l !== r)
    throw new Error("MulRK read error");
  var i = e.read_shift(2);
  if (s.length != i - n + 1)
    throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: i, rkrec: s };
}
function qu(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < r; )
    s.push(e.read_shift(2));
  if (e.l !== r)
    throw new Error("MulBlank read error");
  var i = e.read_shift(2);
  if (s.length != i - n + 1)
    throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: i, ixfe: s };
}
function Ju(e, t, r, a) {
  var n = {}, s = e.read_shift(4), i = e.read_shift(4), c = e.read_shift(4), f = e.read_shift(2);
  return n.patternType = Kl[c >> 26], a.cellStyles && (n.alc = s & 7, n.fWrap = s >> 3 & 1, n.alcV = s >> 4 & 7, n.fJustLast = s >> 7 & 1, n.trot = s >> 8 & 255, n.cIndent = s >> 16 & 15, n.fShrinkToFit = s >> 20 & 1, n.iReadOrder = s >> 22 & 2, n.fAtrNum = s >> 26 & 1, n.fAtrFnt = s >> 27 & 1, n.fAtrAlc = s >> 28 & 1, n.fAtrBdr = s >> 29 & 1, n.fAtrPat = s >> 30 & 1, n.fAtrProt = s >> 31 & 1, n.dgLeft = i & 15, n.dgRight = i >> 4 & 15, n.dgTop = i >> 8 & 15, n.dgBottom = i >> 12 & 15, n.icvLeft = i >> 16 & 127, n.icvRight = i >> 23 & 127, n.grbitDiag = i >> 30 & 3, n.icvTop = c & 127, n.icvBottom = c >> 7 & 127, n.icvDiag = c >> 14 & 127, n.dgDiag = c >> 21 & 15, n.icvFore = f & 127, n.icvBack = f >> 7 & 127, n.fsxButton = f >> 14 & 1), n;
}
function Zu(e, t, r) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, t -= 6, a.data = Ju(e, t, a.fStyle, r), a;
}
function Qu(e) {
  e.l += 4;
  var t = [e.read_shift(2), e.read_shift(2)];
  if (t[0] !== 0 && t[0]--, t[1] !== 0 && t[1]--, t[0] > 7 || t[1] > 7)
    throw new Error("Bad Gutters: " + t.join("|"));
  return t;
}
function Vs(e, t, r) {
  var a = qr(e);
  (r.biff == 2 || t == 9) && ++e.l;
  var n = pu(e);
  return a.val = n, a.t = n === !0 || n === !1 ? "b" : "e", a;
}
function e1(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = qr(e), n = cr(e);
  return a.val = n, a;
}
var $s = ku;
function r1(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), s = e.read_shift(2);
  if (r.sbcch = s, s == 1025 || s == 14849)
    return [s, n];
  if (s < 1 || s > 255)
    throw new Error("Unexpected SupBook type: " + s);
  for (var i = Ct(e, s), c = []; a > e.l; )
    c.push($a(e));
  return [s, n, i, c];
}
function Ws(e, t, r) {
  var a = e.read_shift(2), n, s = {
    fBuiltIn: a & 1,
    fWantAdvise: a >>> 1 & 1,
    fWantPict: a >>> 2 & 1,
    fOle: a >>> 3 & 1,
    fOleLink: a >>> 4 & 1,
    cf: a >>> 5 & 1023,
    fIcon: a >>> 15 & 1
  };
  return r.sbcch === 14849 && (n = Fu(e, t - 2, r)), s.body = n || e.read_shift(t - 2), typeof n == "string" && (s.Name = n), s;
}
var t1 = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function Gs(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(r && r.biff == 2 ? 1 : 2), f = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), f = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var l = Ct(e, i, r);
  n & 32 && (l = t1[l.charCodeAt(0)]);
  var o = a - e.l;
  r && r.biff == 2 && --o;
  var h = a == e.l || c === 0 || !(o > 0) ? [] : Md(e, o, r, c);
  return {
    chKey: s,
    Name: l,
    itab: f,
    rgce: h
  };
}
function Nc(e, t, r) {
  if (r.biff < 8)
    return a1(e, t, r);
  for (var a = [], n = e.l + t, s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0; )
    a.push(yu(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != n)
    throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function a1(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = Va(e, t, r);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function n1(e, t, r) {
  if (r.biff < 8) {
    e.l += t;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), s = Ct(e, a, r), i = Ct(e, n, r);
  return [s, i];
}
function s1(e, t, r) {
  var a = Ic(e);
  e.l++;
  var n = e.read_shift(1);
  return t -= 8, [Bd(e, t, r), n, a];
}
function zs(e, t, r) {
  var a = Au(e);
  switch (r.biff) {
    case 2:
      e.l++, t -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, t -= 8;
      break;
    default:
      e.l += 6, t -= 12;
  }
  return [a, Pd(e, t, r)];
}
function i1(e) {
  var t = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [t, r, a];
}
function c1(e, t, r) {
  if (!(r.biff < 8)) {
    var a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = Pt(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: a, c: n }, c, i, s];
  }
}
function f1(e, t, r) {
  return c1(e, t, r);
}
function o1(e, t) {
  for (var r = [], a = e.read_shift(2); a--; )
    r.push(Dn(e));
  return r;
}
function l1(e, t, r) {
  if (r && r.biff < 8)
    return h1(e, t, r);
  var a = Rc(e), n = Du(e, t - 22, a[1]);
  return { cmo: a, ft: n };
}
var u1 = {
  8: function(e, t) {
    var r = e.l + t;
    e.l += 10;
    var a = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var n = e.read_shift(1);
    return e.l += n, e.l = r, { fmt: a };
  }
};
function h1(e, t, r) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, t -= 36;
  var i = [];
  return i.push((u1[a] || lr)(e, t, r)), { cmo: [n, a, s], ft: i };
}
function x1(e, t, r) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var s = (r.lastobj || { cmo: [0, 0] }).cmo[1], i;
    [0, 5, 7, 11, 12, 14].indexOf(s) == -1 ? e.l += 6 : i = gu(e, 6, r);
    var c = e.read_shift(2);
    e.read_shift(2), Xe(e, 2);
    var f = e.read_shift(2);
    e.l += f;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - a != e.lens[l])
        throw new Error("TxO: bad continue record");
      var o = e[e.l], h = Ct(e, e.lens[l + 1] - e.lens[l] - 1);
      if (n += h, n.length >= (o ? c : 2 * c))
        break;
    }
    if (n.length !== c && n.length !== c * 2)
      throw new Error("cchText: " + c + " != " + n.length);
    return e.l = a + t, { t: n };
  } catch {
    return e.l = a + t, { t: n };
  }
}
function d1(e, t) {
  var r = Dn(e);
  e.l += 16;
  var a = Tu(e, t - 24);
  return [r, a];
}
function p1(e, t) {
  e.read_shift(2);
  var r = Dn(e), a = e.read_shift((t - 10) / 2, "dbcs-cont");
  return a = a.replace(gr, ""), [r, a];
}
function v1(e) {
  var t = [0, 0], r;
  return r = e.read_shift(2), t[0] = bs[r] || r, r = e.read_shift(2), t[1] = bs[r] || r, t;
}
function g1(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(Oc(e));
  return r;
}
function m1(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(Oc(e));
  return r;
}
function _1(e) {
  e.l += 2;
  var t = { cxfs: 0, crc: 0 };
  return t.cxfs = e.read_shift(2), t.crc = e.read_shift(4), t;
}
function bc(e, t, r) {
  if (!r.cellStyles)
    return lr(e, t);
  var a = r && r.biff >= 12 ? 4 : 2, n = e.read_shift(a), s = e.read_shift(a), i = e.read_shift(a), c = e.read_shift(a), f = e.read_shift(2);
  a == 2 && (e.l += 2);
  var l = { s: n, e: s, w: i, ixfe: c, flags: f };
  return (r.biff >= 5 || !r.biff) && (l.level = f >> 8 & 7), l;
}
function E1(e, t) {
  var r = {};
  return t < 32 || (e.l += 16, r.header = cr(e), r.footer = cr(e), e.l += 2), r;
}
function T1(e, t, r) {
  var a = { area: !1 };
  if (r.biff != 5)
    return e.l += t, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = !0), a;
}
var w1 = qr, k1 = Sc, y1 = $a;
function F1(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = { fmt: t, env: r, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function A1(e, t, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var a = qr(e);
  ++e.l;
  var n = Pt(e, t - 7, r);
  return a.t = "str", a.val = n, a;
}
function S1(e) {
  var t = qr(e);
  ++e.l;
  var r = cr(e);
  return t.t = "n", t.val = r, t;
}
function C1(e) {
  var t = qr(e);
  ++e.l;
  var r = e.read_shift(2);
  return t.t = "n", t.val = r, t;
}
function O1(e) {
  var t = e.read_shift(1);
  return t === 0 ? (e.l++, "") : e.read_shift(t, "sbcs-cont");
}
function D1(e, t) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += t - 13;
}
function I1(e, t, r) {
  var a = e.l + t, n = qr(e), s = e.read_shift(2), i = Ct(e, s, r);
  return e.l = a, n.t = "str", n.val = i, n;
}
var R1 = [2, 3, 48, 49, 131, 139, 140, 245], Xs = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = C0({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(c, f) {
    var l = [], o = xt(1);
    switch (f.type) {
      case "base64":
        o = Br(Sr(c));
        break;
      case "binary":
        o = Br(c);
        break;
      case "buffer":
      case "array":
        o = c;
        break;
    }
    rr(o, 0);
    var h = o.read_shift(1), x = !!(h & 136), d = !1, p = !1;
    switch (h) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, x = !0;
        break;
      case 49:
        d = !0, x = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        p = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + h.toString(16));
    }
    var u = 0, v = 521;
    h == 2 && (u = o.read_shift(2)), o.l += 3, h != 2 && (u = o.read_shift(4)), u > 1048576 && (u = 1e6), h != 2 && (v = o.read_shift(2));
    var _ = o.read_shift(2), C = f.codepage || 1252;
    h != 2 && (o.l += 16, o.read_shift(1), o[o.l] !== 0 && (C = e[o[o.l]]), o.l += 1, o.l += 2), p && (o.l += 36);
    for (var m = [], O = {}, b = Math.min(o.length, h == 2 ? 521 : v - 10 - (d ? 264 : 0)), D = p ? 32 : 11; o.l < b && o[o.l] != 13; )
      switch (O = {}, O.name = ft.utils.decode(C, o.slice(o.l, o.l + D)).replace(/[\u0000\r\n].*$/g, ""), o.l += D, O.type = String.fromCharCode(o.read_shift(1)), h != 2 && !p && (O.offset = o.read_shift(4)), O.len = o.read_shift(1), h == 2 && (O.offset = o.read_shift(2)), O.dec = o.read_shift(1), O.name.length && m.push(O), h != 2 && (o.l += p ? 13 : 14), O.type) {
        case "B":
          (!d || O.len != 8) && f.WTF && console.log("Skipping " + O.name + ":" + O.type);
          break;
        case "G":
        case "P":
          f.WTF && console.log("Skipping " + O.name + ":" + O.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + O.type);
      }
    if (o[o.l] !== 13 && (o.l = v - 1), o.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + o.l + " " + o[o.l]);
    o.l = v;
    var w = 0, L = 0;
    for (l[0] = [], L = 0; L != m.length; ++L)
      l[0][L] = m[L].name;
    for (; u-- > 0; ) {
      if (o[o.l] === 42) {
        o.l += _;
        continue;
      }
      for (++o.l, l[++w] = [], L = 0, L = 0; L != m.length; ++L) {
        var I = o.slice(o.l, o.l + m[L].len);
        o.l += m[L].len, rr(I, 0);
        var z = ft.utils.decode(C, I);
        switch (m[L].type) {
          case "C":
            z.trim().length && (l[w][L] = z.replace(/\s+$/, ""));
            break;
          case "D":
            z.length === 8 ? l[w][L] = new Date(+z.slice(0, 4), +z.slice(4, 6) - 1, +z.slice(6, 8)) : l[w][L] = z;
            break;
          case "F":
            l[w][L] = parseFloat(z.trim());
            break;
          case "+":
          case "I":
            l[w][L] = p ? I.read_shift(-4, "i") ^ 2147483648 : I.read_shift(4, "i");
            break;
          case "L":
            switch (z.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[w][L] = !0;
                break;
              case "N":
              case "F":
                l[w][L] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + z + "|");
            }
            break;
          case "M":
            if (!x)
              throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
            l[w][L] = "##MEMO##" + (p ? parseInt(z.trim(), 10) : I.read_shift(4));
            break;
          case "N":
            z = z.replace(/\u0000/g, "").trim(), z && z != "." && (l[w][L] = +z || 0);
            break;
          case "@":
            l[w][L] = new Date(I.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            l[w][L] = new Date((I.read_shift(4) - 2440588) * 864e5 + I.read_shift(4));
            break;
          case "Y":
            l[w][L] = I.read_shift(4, "i") / 1e4 + I.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[w][L] = -I.read_shift(-8, "f");
            break;
          case "B":
            if (d && m[L].len == 8) {
              l[w][L] = I.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            I.l += m[L].len;
            break;
          case "0":
            if (m[L].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + m[L].type);
        }
      }
    }
    if (h != 2 && o.l < o.length && o[o.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (o.l - 1) + " of " + o.length + " " + o[o.l - 1].toString(16));
    return f && f.sheetRows && (l = l.slice(0, f.sheetRows)), f.DBF = m, l;
  }
  function a(c, f) {
    var l = f || {};
    l.dateNF || (l.dateNF = "yyyymmdd");
    var o = ta(r(c, l), l);
    return o["!cols"] = l.DBF.map(function(h) {
      return {
        wch: h.len,
        DBF: h
      };
    }), delete l.DBF, o;
  }
  function n(c, f) {
    try {
      return pt(a(c, f), f);
    } catch (l) {
      if (f && f.WTF)
        throw l;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function i(c, f) {
    var l = f || {};
    if (+l.codepage >= 0 && Ur(+l.codepage), l.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var o = Qn(), h = o0(c, { header: 1, raw: !0, cellDates: !0 }), x = h[0], d = h.slice(1), p = c["!cols"] || [], u = 0, v = 0, _ = 0, C = 1;
    for (u = 0; u < x.length; ++u) {
      if (((p[u] || {}).DBF || {}).name) {
        x[u] = p[u].DBF.name, ++_;
        continue;
      }
      if (x[u] != null) {
        if (++_, typeof x[u] == "number" && (x[u] = x[u].toString(10)), typeof x[u] != "string")
          throw new Error("DBF Invalid column name " + x[u] + " |" + typeof x[u] + "|");
        if (x.indexOf(x[u]) !== u) {
          for (v = 0; v < 1024; ++v)
            if (x.indexOf(x[u] + "_" + v) == -1) {
              x[u] += "_" + v;
              break;
            }
        }
      }
    }
    var m = Ue(c["!ref"]), O = [], b = [], D = [];
    for (u = 0; u <= m.e.c - m.s.c; ++u) {
      var w = "", L = "", I = 0, z = [];
      for (v = 0; v < d.length; ++v)
        d[v][u] != null && z.push(d[v][u]);
      if (z.length == 0 || x[u] == null) {
        O[u] = "?";
        continue;
      }
      for (v = 0; v < z.length; ++v) {
        switch (typeof z[v]) {
          case "number":
            L = "B";
            break;
          case "string":
            L = "C";
            break;
          case "boolean":
            L = "L";
            break;
          case "object":
            L = z[v] instanceof Date ? "D" : "C";
            break;
          default:
            L = "C";
        }
        I = Math.max(I, String(z[v]).length), w = w && w != L ? "C" : L;
      }
      I > 250 && (I = 250), L = ((p[u] || {}).DBF || {}).type, L == "C" && p[u].DBF.len > I && (I = p[u].DBF.len), w == "B" && L == "N" && (w = "N", D[u] = p[u].DBF.dec, I = p[u].DBF.len), b[u] = w == "C" || L == "N" ? I : s[w] || 0, C += b[u], O[u] = w;
    }
    var W = o.next(32);
    for (W.write_shift(4, 318902576), W.write_shift(4, d.length), W.write_shift(2, 296 + 32 * _), W.write_shift(2, C), u = 0; u < 4; ++u)
      W.write_shift(4, 0);
    for (W.write_shift(4, 0 | (+t[
      /*::String(*/
      Ri
      /*::)*/
    ] || 3) << 8), u = 0, v = 0; u < x.length; ++u)
      if (x[u] != null) {
        var P = o.next(32), K = (x[u].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        P.write_shift(1, K, "sbcs"), P.write_shift(1, O[u] == "?" ? "C" : O[u], "sbcs"), P.write_shift(4, v), P.write_shift(1, b[u] || s[O[u]] || 0), P.write_shift(1, D[u] || 0), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(1, 0), P.write_shift(4, 0), P.write_shift(4, 0), v += b[u] || s[O[u]] || 0;
      }
    var fe = o.next(264);
    for (fe.write_shift(4, 13), u = 0; u < 65; ++u)
      fe.write_shift(4, 0);
    for (u = 0; u < d.length; ++u) {
      var re = o.next(C);
      for (re.write_shift(1, 0), v = 0; v < x.length; ++v)
        if (x[v] != null)
          switch (O[v]) {
            case "L":
              re.write_shift(1, d[u][v] == null ? 63 : d[u][v] ? 84 : 70);
              break;
            case "B":
              re.write_shift(8, d[u][v] || 0, "f");
              break;
            case "N":
              var ce = "0";
              for (typeof d[u][v] == "number" && (ce = d[u][v].toFixed(D[v] || 0)), _ = 0; _ < b[v] - ce.length; ++_)
                re.write_shift(1, 32);
              re.write_shift(1, ce, "sbcs");
              break;
            case "D":
              d[u][v] ? (re.write_shift(4, ("0000" + d[u][v].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[u][v].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[u][v].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ie = String(d[u][v] != null ? d[u][v] : "").slice(0, b[v]);
              for (re.write_shift(1, ie, "sbcs"), _ = 0; _ < b[v] - ie.length; ++_)
                re.write_shift(1, 32);
              break;
          }
    }
    return o.next(1).write_shift(1, 26), o.end();
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: i
  };
}(), N1 = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + Kr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(x, d) {
    var p = e[d];
    return typeof p == "number" ? fs(p) : p;
  }, a = function(x, d, p) {
    var u = d.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
    return u == 59 ? x : fs(u);
  };
  e["|"] = 254;
  function n(x, d) {
    switch (d.type) {
      case "base64":
        return s(Sr(x), d);
      case "binary":
        return s(x, d);
      case "buffer":
        return s(Ee && Buffer.isBuffer(x) ? x.toString("binary") : It(x), d);
      case "array":
        return s(St(x), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function s(x, d) {
    var p = x.split(/[\n\r]+/), u = -1, v = -1, _ = 0, C = 0, m = [], O = [], b = null, D = {}, w = [], L = [], I = [], z = 0, W;
    for (+d.codepage >= 0 && Ur(+d.codepage); _ !== p.length; ++_) {
      z = 0;
      var P = p[_].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r), K = P.replace(/;;/g, "\0").split(";").map(function(R) {
        return R.replace(/\u0000/g, ";");
      }), fe = K[0], re;
      if (P.length > 0)
        switch (fe) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            K[1].charAt(0) == "P" && O.push(P.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var ce = !1, ie = !1, De = !1, G = !1, ue = -1, he = -1;
            for (C = 1; C < K.length; ++C)
              switch (K[C].charAt(0)) {
                case "A":
                  break;
                case "X":
                  v = parseInt(K[C].slice(1)) - 1, ie = !0;
                  break;
                case "Y":
                  for (u = parseInt(K[C].slice(1)) - 1, ie || (v = 0), W = m.length; W <= u; ++W)
                    m[W] = [];
                  break;
                case "K":
                  re = K[C].slice(1), re.charAt(0) === '"' ? re = re.slice(1, re.length - 1) : re === "TRUE" ? re = !0 : re === "FALSE" ? re = !1 : isNaN(Wr(re)) ? isNaN(jt(re).getDate()) || (re = er(re)) : (re = Wr(re), b !== null && ea(b) && (re = On(re))), ce = !0;
                  break;
                case "E":
                  G = !0;
                  var A = zt(K[C].slice(1), { r: u, c: v });
                  m[u][v] = [m[u][v], A];
                  break;
                case "S":
                  De = !0, m[u][v] = [m[u][v], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  ue = parseInt(K[C].slice(1)) - 1;
                  break;
                case "C":
                  he = parseInt(K[C].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + P);
              }
            if (ce && (m[u][v] && m[u][v].length == 2 ? m[u][v][0] = re : m[u][v] = re, b = null), De) {
              if (G)
                throw new Error("SYLK shared formula cannot have own formula");
              var H = ue > -1 && m[ue][he];
              if (!H || !H[1])
                throw new Error("SYLK shared formula cannot find base");
              m[u][v][1] = Gc(H[1], { r: u - ue, c: v - he });
            }
            break;
          case "F":
            var N = 0;
            for (C = 1; C < K.length; ++C)
              switch (K[C].charAt(0)) {
                case "X":
                  v = parseInt(K[C].slice(1)) - 1, ++N;
                  break;
                case "Y":
                  for (u = parseInt(K[C].slice(1)) - 1, W = m.length; W <= u; ++W)
                    m[W] = [];
                  break;
                case "M":
                  z = parseInt(K[C].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  b = O[parseInt(K[C].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (I = K[C].slice(1).split(" "), W = parseInt(I[0], 10); W <= parseInt(I[1], 10); ++W)
                    z = parseInt(I[2], 10), L[W - 1] = z === 0 ? { hidden: !0 } : { wch: z }, Kt(L[W - 1]);
                  break;
                case "C":
                  v = parseInt(K[C].slice(1)) - 1, L[v] || (L[v] = {});
                  break;
                case "R":
                  u = parseInt(K[C].slice(1)) - 1, w[u] || (w[u] = {}), z > 0 ? (w[u].hpt = z, w[u].hpx = Na(z)) : z === 0 && (w[u].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + P);
              }
            N < 1 && (b = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + P);
        }
    }
    return w.length > 0 && (D["!rows"] = w), L.length > 0 && (D["!cols"] = L), d && d.sheetRows && (m = m.slice(0, d.sheetRows)), [m, D];
  }
  function i(x, d) {
    var p = n(x, d), u = p[0], v = p[1], _ = ta(u, d);
    return Kr(v).forEach(function(C) {
      _[C] = v[C];
    }), _;
  }
  function c(x, d) {
    return pt(i(x, d), d);
  }
  function f(x, d, p, u) {
    var v = "C;Y" + (p + 1) + ";X" + (u + 1) + ";K";
    switch (x.t) {
      case "n":
        v += x.v || 0, x.f && !x.F && (v += ";E" + _x(x.f, { r: p, c: u }));
        break;
      case "b":
        v += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        v += x.w || x.v;
        break;
      case "d":
        v += '"' + (x.w || x.v) + '"';
        break;
      case "s":
        v += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return v;
  }
  function l(x, d) {
    d.forEach(function(p, u) {
      var v = "F;W" + (u + 1) + " " + (u + 1) + " ";
      p.hidden ? v += "0" : (typeof p.width == "number" && !p.wpx && (p.wpx = En(p.width)), typeof p.wpx == "number" && !p.wch && (p.wch = Tn(p.wpx)), typeof p.wch == "number" && (v += Math.round(p.wch))), v.charAt(v.length - 1) != " " && x.push(v);
    });
  }
  function o(x, d) {
    d.forEach(function(p, u) {
      var v = "F;";
      p.hidden ? v += "M0;" : p.hpt ? v += "M" + 20 * p.hpt + ";" : p.hpx && (v += "M" + 20 * Vc(p.hpx) + ";"), v.length > 2 && x.push(v + "R" + (u + 1));
    });
  }
  function h(x, d) {
    var p = ["ID;PWXL;N;E"], u = [], v = Ue(x["!ref"]), _, C = Array.isArray(x), m = `\r
`;
    p.push("P;PGeneral"), p.push("F;P0;DG0G8;M255"), x["!cols"] && l(p, x["!cols"]), x["!rows"] && o(p, x["!rows"]), p.push("B;Y" + (v.e.r - v.s.r + 1) + ";X" + (v.e.c - v.s.c + 1) + ";D" + [v.s.c, v.s.r, v.e.c, v.e.r].join(" "));
    for (var O = v.s.r; O <= v.e.r; ++O)
      for (var b = v.s.c; b <= v.e.c; ++b) {
        var D = xe({ r: O, c: b });
        _ = C ? (x[O] || [])[b] : x[D], !(!_ || _.v == null && (!_.f || _.F)) && u.push(f(_, x, O, b));
      }
    return p.join(m) + m + u.join(m) + m + "E" + m;
  }
  return {
    to_workbook: c,
    to_sheet: i,
    from_sheet: h
  };
}(), b1 = /* @__PURE__ */ function() {
  function e(s, i) {
    switch (i.type) {
      case "base64":
        return t(Sr(s), i);
      case "binary":
        return t(s, i);
      case "buffer":
        return t(Ee && Buffer.isBuffer(s) ? s.toString("binary") : It(s), i);
      case "array":
        return t(St(s), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(s, i) {
    for (var c = s.split(`
`), f = -1, l = -1, o = 0, h = []; o !== c.length; ++o) {
      if (c[o].trim() === "BOT") {
        h[++f] = [], l = 0;
        continue;
      }
      if (!(f < 0)) {
        var x = c[o].trim().split(","), d = x[0], p = x[1];
        ++o;
        for (var u = c[o] || ""; (u.match(/["]/g) || []).length & 1 && o < c.length - 1; )
          u += `
` + c[++o];
        switch (u = u.trim(), +d) {
          case -1:
            if (u === "BOT") {
              h[++f] = [], l = 0;
              continue;
            } else if (u !== "EOD")
              throw new Error("Unrecognized DIF special command " + u);
            break;
          case 0:
            u === "TRUE" ? h[f][l] = !0 : u === "FALSE" ? h[f][l] = !1 : isNaN(Wr(p)) ? isNaN(jt(p).getDate()) ? h[f][l] = p : h[f][l] = er(p) : h[f][l] = Wr(p), ++l;
            break;
          case 1:
            u = u.slice(1, u.length - 1), u = u.replace(/""/g, '"'), u && u.match(/^=".*"$/) && (u = u.slice(2, -1)), h[f][l++] = u !== "" ? u : null;
            break;
        }
        if (u === "EOD")
          break;
      }
    }
    return i && i.sheetRows && (h = h.slice(0, i.sheetRows)), h;
  }
  function r(s, i) {
    return ta(e(s, i), i);
  }
  function a(s, i) {
    return pt(r(s, i), i);
  }
  var n = /* @__PURE__ */ function() {
    var s = function(f, l, o, h, x) {
      f.push(l), f.push(o + "," + h), f.push('"' + x.replace(/"/g, '""') + '"');
    }, i = function(f, l, o, h) {
      f.push(l + "," + o), f.push(l == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
    };
    return function(f) {
      var l = [], o = Ue(f["!ref"]), h, x = Array.isArray(f);
      s(l, "TABLE", 0, 1, "sheetjs"), s(l, "VECTORS", 0, o.e.r - o.s.r + 1, ""), s(l, "TUPLES", 0, o.e.c - o.s.c + 1, ""), s(l, "DATA", 0, 0, "");
      for (var d = o.s.r; d <= o.e.r; ++d) {
        i(l, -1, 0, "BOT");
        for (var p = o.s.c; p <= o.e.c; ++p) {
          var u = xe({ r: d, c: p });
          if (h = x ? (f[d] || [])[p] : f[u], !h) {
            i(l, 1, 0, "");
            continue;
          }
          switch (h.t) {
            case "n":
              var v = h.w;
              !v && h.v != null && (v = h.v), v == null ? h.f && !h.F ? i(l, 1, 0, "=" + h.f) : i(l, 1, 0, "") : i(l, 0, v, "V");
              break;
            case "b":
              i(l, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
              break;
            case "s":
              i(l, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
              break;
            case "d":
              h.w || (h.w = br(h.z || pe[14], mr(er(h.v)))), i(l, 0, h.w, "V");
              break;
            default:
              i(l, 1, 0, "");
          }
        }
      }
      i(l, -1, 0, "EOD");
      var _ = `\r
`, C = l.join(_);
      return C;
    };
  }();
  return {
    to_workbook: a,
    to_sheet: r,
    from_sheet: n
  };
}(), P1 = /* @__PURE__ */ function() {
  function e(h) {
    return h.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(h) {
    return h.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(h, x) {
    for (var d = h.split(`
`), p = -1, u = -1, v = 0, _ = []; v !== d.length; ++v) {
      var C = d[v].trim().split(":");
      if (C[0] === "cell") {
        var m = vr(C[1]);
        if (_.length <= m.r)
          for (p = _.length; p <= m.r; ++p)
            _[p] || (_[p] = []);
        switch (p = m.r, u = m.c, C[2]) {
          case "t":
            _[p][u] = e(C[3]);
            break;
          case "v":
            _[p][u] = +C[3];
            break;
          case "vtf":
            var O = C[C.length - 1];
          case "vtc":
            switch (C[3]) {
              case "nl":
                _[p][u] = !!+C[4];
                break;
              default:
                _[p][u] = +C[4];
                break;
            }
            C[2] == "vtf" && (_[p][u] = [_[p][u], O]);
        }
      }
    }
    return x && x.sheetRows && (_ = _.slice(0, x.sheetRows)), _;
  }
  function a(h, x) {
    return ta(r(h, x), x);
  }
  function n(h, x) {
    return pt(a(h, x), x);
  }
  var s = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), i = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), f = "--SocialCalcSpreadsheetControlSave--";
  function l(h) {
    if (!h || !h["!ref"])
      return "";
    for (var x = [], d = [], p, u = "", v = ra(h["!ref"]), _ = Array.isArray(h), C = v.s.r; C <= v.e.r; ++C)
      for (var m = v.s.c; m <= v.e.c; ++m)
        if (u = xe({ r: C, c: m }), p = _ ? (h[C] || [])[m] : h[u], !(!p || p.v == null || p.t === "z")) {
          switch (d = ["cell", u, "t"], p.t) {
            case "s":
            case "str":
              d.push(t(p.v));
              break;
            case "n":
              p.f ? (d[2] = "vtf", d[3] = "n", d[4] = p.v, d[5] = t(p.f)) : (d[2] = "v", d[3] = p.v);
              break;
            case "b":
              d[2] = "vt" + (p.f ? "f" : "c"), d[3] = "nl", d[4] = p.v ? "1" : "0", d[5] = t(p.f || (p.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var O = mr(er(p.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + O, d[5] = p.w || br(p.z || pe[14], O);
              break;
            case "e":
              continue;
          }
          x.push(d.join(":"));
        }
    return x.push("sheet:c:" + (v.e.c - v.s.c + 1) + ":r:" + (v.e.r - v.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join(`
`);
  }
  function o(h) {
    return [s, i, c, i, l(h), f].join(`
`);
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: o
  };
}(), Ia = /* @__PURE__ */ function() {
  function e(o, h, x, d, p) {
    p.raw ? h[x][d] = o : o === "" || (o === "TRUE" ? h[x][d] = !0 : o === "FALSE" ? h[x][d] = !1 : isNaN(Wr(o)) ? isNaN(jt(o).getDate()) ? h[x][d] = o : h[x][d] = er(o) : h[x][d] = Wr(o));
  }
  function t(o, h) {
    var x = h || {}, d = [];
    if (!o || o.length === 0)
      return d;
    for (var p = o.split(/[\r\n]/), u = p.length - 1; u >= 0 && p[u].length === 0; )
      --u;
    for (var v = 10, _ = 0, C = 0; C <= u; ++C)
      _ = p[C].indexOf(" "), _ == -1 ? _ = p[C].length : _++, v = Math.max(v, _);
    for (C = 0; C <= u; ++C) {
      d[C] = [];
      var m = 0;
      for (e(p[C].slice(0, v).trim(), d, C, m, x), m = 1; m <= (p[C].length - v) / 10 + 1; ++m)
        e(p[C].slice(v + (m - 1) * 10, v + m * 10).trim(), d, C, m, x);
    }
    return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, a = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function n(o) {
    for (var h = {}, x = !1, d = 0, p = 0; d < o.length; ++d)
      (p = o.charCodeAt(d)) == 34 ? x = !x : !x && p in r && (h[p] = (h[p] || 0) + 1);
    p = [];
    for (d in h)
      Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
    if (!p.length) {
      h = a;
      for (d in h)
        Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
    }
    return p.sort(function(u, v) {
      return u[0] - v[0] || a[u[1]] - a[v[1]];
    }), r[p.pop()[1]] || 44;
  }
  function s(o, h) {
    var x = h || {}, d = "", p = x.dense ? [] : {}, u = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    o.slice(0, 4) == "sep=" ? o.charCodeAt(5) == 13 && o.charCodeAt(6) == 10 ? (d = o.charAt(4), o = o.slice(7)) : o.charCodeAt(5) == 13 || o.charCodeAt(5) == 10 ? (d = o.charAt(4), o = o.slice(6)) : d = n(o.slice(0, 1024)) : x && x.FS ? d = x.FS : d = n(o.slice(0, 1024));
    var v = 0, _ = 0, C = 0, m = 0, O = 0, b = d.charCodeAt(0), D = !1, w = 0, L = o.charCodeAt(0);
    o = o.replace(/\r\n/mg, `
`);
    var I = x.dateNF != null ? jo(x.dateNF) : null;
    function z() {
      var W = o.slice(m, O), P = {};
      if (W.charAt(0) == '"' && W.charAt(W.length - 1) == '"' && (W = W.slice(1, -1).replace(/""/g, '"')), W.length === 0)
        P.t = "z";
      else if (x.raw)
        P.t = "s", P.v = W;
      else if (W.trim().length === 0)
        P.t = "s", P.v = W;
      else if (W.charCodeAt(0) == 61)
        W.charCodeAt(1) == 34 && W.charCodeAt(W.length - 1) == 34 ? (P.t = "s", P.v = W.slice(2, -1).replace(/""/g, '"')) : Tx(W) ? (P.t = "n", P.f = W.slice(1)) : (P.t = "s", P.v = W);
      else if (W == "TRUE")
        P.t = "b", P.v = !0;
      else if (W == "FALSE")
        P.t = "b", P.v = !1;
      else if (!isNaN(C = Wr(W)))
        P.t = "n", x.cellText !== !1 && (P.w = W), P.v = C;
      else if (!isNaN(jt(W).getDate()) || I && W.match(I)) {
        P.z = x.dateNF || pe[14];
        var K = 0;
        I && W.match(I) && (W = Ko(W, x.dateNF, W.match(I) || []), K = 1), x.cellDates ? (P.t = "d", P.v = er(W, K)) : (P.t = "n", P.v = mr(er(W, K))), x.cellText !== !1 && (P.w = br(P.z, P.v instanceof Date ? mr(P.v) : P.v)), x.cellNF || delete P.z;
      } else
        P.t = "s", P.v = W;
      if (P.t == "z" || (x.dense ? (p[v] || (p[v] = []), p[v][_] = P) : p[xe({ c: _, r: v })] = P), m = O + 1, L = o.charCodeAt(m), u.e.c < _ && (u.e.c = _), u.e.r < v && (u.e.r = v), w == b)
        ++_;
      else if (_ = 0, ++v, x.sheetRows && x.sheetRows <= v)
        return !0;
    }
    e:
      for (; O < o.length; ++O)
        switch (w = o.charCodeAt(O)) {
          case 34:
            L === 34 && (D = !D);
            break;
          case b:
          case 10:
          case 13:
            if (!D && z())
              break e;
            break;
        }
    return O - m > 0 && z(), p["!ref"] = we(u), p;
  }
  function i(o, h) {
    return !(h && h.PRN) || h.FS || o.slice(0, 4) == "sep=" || o.indexOf("	") >= 0 || o.indexOf(",") >= 0 || o.indexOf(";") >= 0 ? s(o, h) : ta(t(o, h), h);
  }
  function c(o, h) {
    var x = "", d = h.type == "string" ? [0, 0, 0, 0] : j0(o, h);
    switch (h.type) {
      case "base64":
        x = Sr(o);
        break;
      case "binary":
        x = o;
        break;
      case "buffer":
        h.codepage == 65001 ? x = o.toString("utf8") : h.codepage && typeof ft < "u" ? x = ft.utils.decode(h.codepage, o) : x = Ee && Buffer.isBuffer(o) ? o.toString("binary") : It(o);
        break;
      case "array":
        x = St(o);
        break;
      case "string":
        x = o;
        break;
      default:
        throw new Error("Unrecognized type " + h.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? x = Oe(x.slice(3)) : h.type != "string" && h.type != "buffer" && h.codepage == 65001 ? x = Oe(x) : h.type == "binary" && typeof ft < "u" && h.codepage && (x = ft.utils.decode(h.codepage, ft.utils.encode(28591, x))), x.slice(0, 19) == "socialcalc:version:" ? P1.to_sheet(h.type == "string" ? x : Oe(x), h) : i(x, h);
  }
  function f(o, h) {
    return pt(c(o, h), h);
  }
  function l(o) {
    for (var h = [], x = Ue(o["!ref"]), d, p = Array.isArray(o), u = x.s.r; u <= x.e.r; ++u) {
      for (var v = [], _ = x.s.c; _ <= x.e.c; ++_) {
        var C = xe({ r: u, c: _ });
        if (d = p ? (o[u] || [])[_] : o[C], !d || d.v == null) {
          v.push("          ");
          continue;
        }
        for (var m = (d.w || (at(d), d.w) || "").slice(0, 10); m.length < 10; )
          m += " ";
        v.push(m + (_ === 0 ? " " : ""));
      }
      h.push(v.join(""));
    }
    return h.join(`
`);
  }
  return {
    to_workbook: f,
    to_sheet: c,
    from_sheet: l
  };
}();
function L1(e, t) {
  var r = t || {}, a = !!r.WTF;
  r.WTF = !0;
  try {
    var n = N1.to_workbook(e, r);
    return r.WTF = a, n;
  } catch (s) {
    if (r.WTF = a, !s.message.match(/SYLK bad record ID/) && a)
      throw s;
    return Ia.to_workbook(e, t);
  }
}
var Ta = /* @__PURE__ */ function() {
  function e(A, H, N) {
    if (A) {
      rr(A, A.l || 0);
      for (var R = N.Enum || ue; A.l < A.length; ) {
        var j = A.read_shift(2), ee = R[j] || R[65535], ne = A.read_shift(2), Z = A.l + ne, q = ee.f && ee.f(A, ne, N);
        if (A.l = Z, H(q, ee, j))
          return;
      }
    }
  }
  function t(A, H) {
    switch (H.type) {
      case "base64":
        return r(Br(Sr(A)), H);
      case "binary":
        return r(Br(A), H);
      case "buffer":
      case "array":
        return r(A, H);
    }
    throw "Unsupported type " + H.type;
  }
  function r(A, H) {
    if (!A)
      return A;
    var N = H || {}, R = N.dense ? [] : {}, j = "Sheet1", ee = "", ne = 0, Z = {}, q = [], ke = [], S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, He = N.sheetRows || 0;
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      N.Enum = ue, e(A, function(te, Ve, Or) {
        switch (Or) {
          case 0:
            N.vers = te, te >= 4096 && (N.qpro = !0);
            break;
          case 6:
            S = te;
            break;
          case 204:
            te && (ee = te);
            break;
          case 222:
            ee = te;
            break;
          case 15:
          case 51:
            N.qpro || (te[1].v = te[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            Or == 14 && (te[2] & 112) == 112 && (te[2] & 15) > 1 && (te[2] & 15) < 15 && (te[1].z = N.dateNF || pe[14], N.cellDates && (te[1].t = "d", te[1].v = On(te[1].v))), N.qpro && te[3] > ne && (R["!ref"] = we(S), Z[j] = R, q.push(j), R = N.dense ? [] : {}, S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = te[3], j = ee || "Sheet" + (ne + 1), ee = "");
            var Gr = N.dense ? (R[te[0].r] || [])[te[0].c] : R[xe(te[0])];
            if (Gr) {
              Gr.t = te[1].t, Gr.v = te[1].v, te[1].z != null && (Gr.z = te[1].z), te[1].f != null && (Gr.f = te[1].f);
              break;
            }
            N.dense ? (R[te[0].r] || (R[te[0].r] = []), R[te[0].r][te[0].c] = te[1]) : R[xe(te[0])] = te[1];
            break;
        }
      }, N);
    else if (A[2] == 26 || A[2] == 14)
      N.Enum = he, A[2] == 14 && (N.qpro = !0, A.l = 0), e(A, function(te, Ve, Or) {
        switch (Or) {
          case 204:
            j = te;
            break;
          case 22:
            te[1].v = te[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (te[3] > ne && (R["!ref"] = we(S), Z[j] = R, q.push(j), R = N.dense ? [] : {}, S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = te[3], j = "Sheet" + (ne + 1)), He > 0 && te[0].r >= He)
              break;
            N.dense ? (R[te[0].r] || (R[te[0].r] = []), R[te[0].r][te[0].c] = te[1]) : R[xe(te[0])] = te[1], S.e.c < te[0].c && (S.e.c = te[0].c), S.e.r < te[0].r && (S.e.r = te[0].r);
            break;
          case 27:
            te[14e3] && (ke[te[14e3][0]] = te[14e3][1]);
            break;
          case 1537:
            ke[te[0]] = te[1], te[0] == ne && (j = te[1]);
            break;
        }
      }, N);
    else
      throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (R["!ref"] = we(S), Z[ee || j] = R, q.push(ee || j), !ke.length)
      return { SheetNames: q, Sheets: Z };
    for (var Fe = {}, Ce = [], me = 0; me < ke.length; ++me)
      Z[q[me]] ? (Ce.push(ke[me] || q[me]), Fe[ke[me]] = Z[ke[me]] || Z[q[me]]) : (Ce.push(ke[me]), Fe[ke[me]] = { "!ref": "A1" });
    return { SheetNames: Ce, Sheets: Fe };
  }
  function a(A, H) {
    var N = H || {};
    if (+N.codepage >= 0 && Ur(+N.codepage), N.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var R = Qn(), j = Ue(A["!ref"]), ee = Array.isArray(A), ne = [];
    Mr(R, 0, s(1030)), Mr(R, 6, f(j));
    for (var Z = Math.min(j.e.r, 8191), q = j.s.r; q <= Z; ++q)
      for (var ke = ar(q), S = j.s.c; S <= j.e.c; ++S) {
        q === j.s.r && (ne[S] = Ye(S));
        var He = ne[S] + ke, Fe = ee ? (A[q] || [])[S] : A[He];
        if (!(!Fe || Fe.t == "z"))
          if (Fe.t == "n")
            (Fe.v | 0) == Fe.v && Fe.v >= -32768 && Fe.v <= 32767 ? Mr(R, 13, d(q, S, Fe.v)) : Mr(R, 14, u(q, S, Fe.v));
          else {
            var Ce = at(Fe);
            Mr(R, 15, h(q, S, Ce.slice(0, 239)));
          }
      }
    return Mr(R, 1), R.end();
  }
  function n(A, H) {
    var N = H || {};
    if (+N.codepage >= 0 && Ur(+N.codepage), N.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var R = Qn();
    Mr(R, 0, i(A));
    for (var j = 0, ee = 0; j < A.SheetNames.length; ++j)
      (A.Sheets[A.SheetNames[j]] || {})["!ref"] && Mr(R, 27, G(A.SheetNames[j], ee++));
    var ne = 0;
    for (j = 0; j < A.SheetNames.length; ++j) {
      var Z = A.Sheets[A.SheetNames[j]];
      if (!(!Z || !Z["!ref"])) {
        for (var q = Ue(Z["!ref"]), ke = Array.isArray(Z), S = [], He = Math.min(q.e.r, 8191), Fe = q.s.r; Fe <= He; ++Fe)
          for (var Ce = ar(Fe), me = q.s.c; me <= q.e.c; ++me) {
            Fe === q.s.r && (S[me] = Ye(me));
            var te = S[me] + Ce, Ve = ke ? (Z[Fe] || [])[me] : Z[te];
            if (!(!Ve || Ve.t == "z"))
              if (Ve.t == "n")
                Mr(R, 23, z(Fe, me, ne, Ve.v));
              else {
                var Or = at(Ve);
                Mr(R, 22, w(Fe, me, ne, Or.slice(0, 239)));
              }
          }
        ++ne;
      }
    }
    return Mr(R, 1), R.end();
  }
  function s(A) {
    var H = Ke(2);
    return H.write_shift(2, A), H;
  }
  function i(A) {
    var H = Ke(26);
    H.write_shift(2, 4096), H.write_shift(2, 4), H.write_shift(4, 0);
    for (var N = 0, R = 0, j = 0, ee = 0; ee < A.SheetNames.length; ++ee) {
      var ne = A.SheetNames[ee], Z = A.Sheets[ne];
      if (!(!Z || !Z["!ref"])) {
        ++j;
        var q = ra(Z["!ref"]);
        N < q.e.r && (N = q.e.r), R < q.e.c && (R = q.e.c);
      }
    }
    return N > 8191 && (N = 8191), H.write_shift(2, N), H.write_shift(1, j), H.write_shift(1, R), H.write_shift(2, 0), H.write_shift(2, 0), H.write_shift(1, 1), H.write_shift(1, 2), H.write_shift(4, 0), H.write_shift(4, 0), H;
  }
  function c(A, H, N) {
    var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return H == 8 && N.qpro ? (R.s.c = A.read_shift(1), A.l++, R.s.r = A.read_shift(2), R.e.c = A.read_shift(1), A.l++, R.e.r = A.read_shift(2), R) : (R.s.c = A.read_shift(2), R.s.r = A.read_shift(2), H == 12 && N.qpro && (A.l += 2), R.e.c = A.read_shift(2), R.e.r = A.read_shift(2), H == 12 && N.qpro && (A.l += 2), R.s.c == 65535 && (R.s.c = R.e.c = R.s.r = R.e.r = 0), R);
  }
  function f(A) {
    var H = Ke(8);
    return H.write_shift(2, A.s.c), H.write_shift(2, A.s.r), H.write_shift(2, A.e.c), H.write_shift(2, A.e.r), H;
  }
  function l(A, H, N) {
    var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return N.qpro && N.vers != 20768 ? (R[0].c = A.read_shift(1), R[3] = A.read_shift(1), R[0].r = A.read_shift(2), A.l += 2) : (R[2] = A.read_shift(1), R[0].c = A.read_shift(2), R[0].r = A.read_shift(2)), R;
  }
  function o(A, H, N) {
    var R = A.l + H, j = l(A, H, N);
    if (j[1].t = "s", N.vers == 20768) {
      A.l++;
      var ee = A.read_shift(1);
      return j[1].v = A.read_shift(ee, "utf8"), j;
    }
    return N.qpro && A.l++, j[1].v = A.read_shift(R - A.l, "cstr"), j;
  }
  function h(A, H, N) {
    var R = Ke(7 + N.length);
    R.write_shift(1, 255), R.write_shift(2, H), R.write_shift(2, A), R.write_shift(1, 39);
    for (var j = 0; j < R.length; ++j) {
      var ee = N.charCodeAt(j);
      R.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return R.write_shift(1, 0), R;
  }
  function x(A, H, N) {
    var R = l(A, H, N);
    return R[1].v = A.read_shift(2, "i"), R;
  }
  function d(A, H, N) {
    var R = Ke(7);
    return R.write_shift(1, 255), R.write_shift(2, H), R.write_shift(2, A), R.write_shift(2, N, "i"), R;
  }
  function p(A, H, N) {
    var R = l(A, H, N);
    return R[1].v = A.read_shift(8, "f"), R;
  }
  function u(A, H, N) {
    var R = Ke(13);
    return R.write_shift(1, 255), R.write_shift(2, H), R.write_shift(2, A), R.write_shift(8, N, "f"), R;
  }
  function v(A, H, N) {
    var R = A.l + H, j = l(A, H, N);
    if (j[1].v = A.read_shift(8, "f"), N.qpro)
      A.l = R;
    else {
      var ee = A.read_shift(2);
      O(A.slice(A.l, A.l + ee), j), A.l += ee;
    }
    return j;
  }
  function _(A, H, N) {
    var R = H & 32768;
    return H &= -32769, H = (R ? A : 0) + (H >= 8192 ? H - 16384 : H), (R ? "" : "$") + (N ? Ye(H) : ar(H));
  }
  var C = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, m = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function O(A, H) {
    rr(A, 0);
    for (var N = [], R = 0, j = "", ee = "", ne = "", Z = ""; A.l < A.length; ) {
      var q = A[A.l++];
      switch (q) {
        case 0:
          N.push(A.read_shift(8, "f"));
          break;
        case 1:
          ee = _(H[0].c, A.read_shift(2), !0), j = _(H[0].r, A.read_shift(2), !1), N.push(ee + j);
          break;
        case 2:
          {
            var ke = _(H[0].c, A.read_shift(2), !0), S = _(H[0].r, A.read_shift(2), !1);
            ee = _(H[0].c, A.read_shift(2), !0), j = _(H[0].r, A.read_shift(2), !1), N.push(ke + S + ":" + ee + j);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          N.push("(" + N.pop() + ")");
          break;
        case 5:
          N.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var He = ""; q = A[A.l++]; )
              He += String.fromCharCode(q);
            N.push('"' + He.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          N.push("-" + N.pop());
          break;
        case 23:
          N.push("+" + N.pop());
          break;
        case 22:
          N.push("NOT(" + N.pop() + ")");
          break;
        case 20:
        case 21:
          Z = N.pop(), ne = N.pop(), N.push(["AND", "OR"][q - 20] + "(" + ne + "," + Z + ")");
          break;
        default:
          if (q < 32 && m[q])
            Z = N.pop(), ne = N.pop(), N.push(ne + m[q] + Z);
          else if (C[q]) {
            if (R = C[q][1], R == 69 && (R = A[A.l++]), R > N.length) {
              console.error("WK1 bad formula parse 0x" + q.toString(16) + ":|" + N.join("|") + "|");
              return;
            }
            var Fe = N.slice(-R);
            N.length -= R, N.push(C[q][0] + "(" + Fe.join(",") + ")");
          } else
            return q <= 7 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 24 ? console.error("WK1 unsupported op " + q.toString(16)) : q <= 30 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 115 ? console.error("WK1 unsupported function opcode " + q.toString(16)) : console.error("WK1 unrecognized opcode " + q.toString(16));
      }
    }
    N.length == 1 ? H[1].f = "" + N[0] : console.error("WK1 bad formula parse |" + N.join("|") + "|");
  }
  function b(A) {
    var H = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return H[0].r = A.read_shift(2), H[3] = A[A.l++], H[0].c = A[A.l++], H;
  }
  function D(A, H) {
    var N = b(A);
    return N[1].t = "s", N[1].v = A.read_shift(H - 4, "cstr"), N;
  }
  function w(A, H, N, R) {
    var j = Ke(6 + R.length);
    j.write_shift(2, A), j.write_shift(1, N), j.write_shift(1, H), j.write_shift(1, 39);
    for (var ee = 0; ee < R.length; ++ee) {
      var ne = R.charCodeAt(ee);
      j.write_shift(1, ne >= 128 ? 95 : ne);
    }
    return j.write_shift(1, 0), j;
  }
  function L(A, H) {
    var N = b(A);
    N[1].v = A.read_shift(2);
    var R = N[1].v >> 1;
    if (N[1].v & 1)
      switch (R & 7) {
        case 0:
          R = (R >> 3) * 5e3;
          break;
        case 1:
          R = (R >> 3) * 500;
          break;
        case 2:
          R = (R >> 3) / 20;
          break;
        case 3:
          R = (R >> 3) / 200;
          break;
        case 4:
          R = (R >> 3) / 2e3;
          break;
        case 5:
          R = (R >> 3) / 2e4;
          break;
        case 6:
          R = (R >> 3) / 16;
          break;
        case 7:
          R = (R >> 3) / 64;
          break;
      }
    return N[1].v = R, N;
  }
  function I(A, H) {
    var N = b(A), R = A.read_shift(4), j = A.read_shift(4), ee = A.read_shift(2);
    if (ee == 65535)
      return R === 0 && j === 3221225472 ? (N[1].t = "e", N[1].v = 15) : R === 0 && j === 3489660928 ? (N[1].t = "e", N[1].v = 42) : N[1].v = 0, N;
    var ne = ee & 32768;
    return ee = (ee & 32767) - 16446, N[1].v = (1 - ne * 2) * (j * Math.pow(2, ee + 32) + R * Math.pow(2, ee)), N;
  }
  function z(A, H, N, R) {
    var j = Ke(14);
    if (j.write_shift(2, A), j.write_shift(1, N), j.write_shift(1, H), R == 0)
      return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var ee = 0, ne = 0, Z = 0, q = 0;
    return R < 0 && (ee = 1, R = -R), ne = Math.log2(R) | 0, R /= Math.pow(2, ne - 31), q = R >>> 0, q & 2147483648 || (R /= 2, ++ne, q = R >>> 0), R -= q, q |= 2147483648, q >>>= 0, R *= Math.pow(2, 32), Z = R >>> 0, j.write_shift(4, Z), j.write_shift(4, q), ne += 16383 + (ee ? 32768 : 0), j.write_shift(2, ne), j;
  }
  function W(A, H) {
    var N = I(A);
    return A.l += H - 14, N;
  }
  function P(A, H) {
    var N = b(A), R = A.read_shift(4);
    return N[1].v = R >> 6, N;
  }
  function K(A, H) {
    var N = b(A), R = A.read_shift(8, "f");
    return N[1].v = R, N;
  }
  function fe(A, H) {
    var N = K(A);
    return A.l += H - 10, N;
  }
  function re(A, H) {
    return A[A.l + H - 1] == 0 ? A.read_shift(H, "cstr") : "";
  }
  function ce(A, H) {
    var N = A[A.l++];
    N > H - 1 && (N = H - 1);
    for (var R = ""; R.length < N; )
      R += String.fromCharCode(A[A.l++]);
    return R;
  }
  function ie(A, H, N) {
    if (!(!N.qpro || H < 21)) {
      var R = A.read_shift(1);
      A.l += 17, A.l += 1, A.l += 2;
      var j = A.read_shift(H - 21, "cstr");
      return [R, j];
    }
  }
  function De(A, H) {
    for (var N = {}, R = A.l + H; A.l < R; ) {
      var j = A.read_shift(2);
      if (j == 14e3) {
        for (N[j] = [0, ""], N[j][0] = A.read_shift(2); A[A.l]; )
          N[j][1] += String.fromCharCode(A[A.l]), A.l++;
        A.l++;
      }
    }
    return N;
  }
  function G(A, H) {
    var N = Ke(5 + A.length);
    N.write_shift(2, 14e3), N.write_shift(2, H);
    for (var R = 0; R < A.length; ++R) {
      var j = A.charCodeAt(R);
      N[N.l++] = j > 127 ? 95 : j;
    }
    return N[N.l++] = 0, N;
  }
  var ue = {
    /*::[*/
    0: { n: "BOF", f: Xe },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: c },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: x },
    /*::[*/
    14: { n: "NUMBER", f: p },
    /*::[*/
    15: { n: "LABEL", f: o },
    /*::[*/
    16: { n: "FORMULA", f: v },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: o },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    222: { n: "SHEETNAMELP", f: ce },
    /*::[*/
    65535: { n: "" }
  }, he = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: D },
    /*::[*/
    23: { n: "NUMBER17", f: I },
    /*::[*/
    24: { n: "NUMBER18", f: L },
    /*::[*/
    25: { n: "FORMULA19", f: W },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: De },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: P },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: K },
    /*::[*/
    40: { n: "FORMULA28", f: fe },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: ie },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: a,
    book_to_wk3: n,
    to_workbook: t
  };
}();
function M1(e) {
  var t = {}, r = e.match(ur), a = 0, n = !1;
  if (r)
    for (; a != r.length; ++a) {
      var s = le(r[a]);
      switch (s[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!s.val)
            break;
        case "<shadow>":
        case "<shadow/>":
          t.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (s.val == "1")
            break;
          t.cp = k0[parseInt(s.val, 10)];
          break;
        case "<outline":
          if (!s.val)
            break;
        case "<outline>":
        case "<outline/>":
          t.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          t.name = s.val;
          break;
        case "<sz":
          t.sz = s.val;
          break;
        case "<strike":
          if (!s.val)
            break;
        case "<strike>":
        case "<strike/>":
          t.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!s.val)
            break;
          switch (s.val) {
            case "double":
              t.uval = "double";
              break;
            case "singleAccounting":
              t.uval = "single-accounting";
              break;
            case "doubleAccounting":
              t.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          t.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (s.val == "0")
            break;
        case "<b>":
        case "<b/>":
          t.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (s.val == "0")
            break;
        case "<i>":
        case "<i/>":
          t.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          s.rgb && (t.color = s.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          t.family = s.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          t.valign = s.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (s[0].charCodeAt(1) !== 47 && !n)
            throw new Error("Unrecognized rich format " + s[0]);
      }
    }
  return t;
}
var B1 = /* @__PURE__ */ function() {
  var e = Oa("t"), t = Oa("rPr");
  function r(s) {
    var i = s.match(e);
    if (!i)
      return { t: "s", v: "" };
    var c = { t: "s", v: ye(i[1]) }, f = s.match(t);
    return f && (c.s = M1(f[1])), c;
  }
  var a = /<(?:\w+:)?r>/g, n = /<\/(?:\w+:)?r>/;
  return function(i) {
    return i.replace(a, "").split(n).map(r).filter(function(c) {
      return c.v;
    });
  };
}(), U1 = /* @__PURE__ */ function() {
  var t = /(\r\n|\n)/g;
  function r(n, s, i) {
    var c = [];
    n.u && c.push("text-decoration: underline;"), n.uval && c.push("text-underline-style:" + n.uval + ";"), n.sz && c.push("font-size:" + n.sz + "pt;"), n.outline && c.push("text-effect: outline;"), n.shadow && c.push("text-shadow: auto;"), s.push('<span style="' + c.join("") + '">'), n.b && (s.push("<b>"), i.push("</b>")), n.i && (s.push("<i>"), i.push("</i>")), n.strike && (s.push("<s>"), i.push("</s>"));
    var f = n.valign || "";
    return f == "superscript" || f == "super" ? f = "sup" : f == "subscript" && (f = "sub"), f != "" && (s.push("<" + f + ">"), i.push("</" + f + ">")), i.push("</span>"), n;
  }
  function a(n) {
    var s = [[], n.v, []];
    return n.v ? (n.s && r(n.s, s[0], s[2]), s[0].join("") + s[1].replace(t, "<br/>") + s[2].join("")) : "";
  }
  return function(s) {
    return s.map(a).join("");
  };
}(), H1 = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, V1 = /<(?:\w+:)?r>/, $1 = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function H0(e, t) {
  var r = t ? t.cellHTML : !0, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = ye(Oe(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), a.r = Oe(e), r && (a.h = D0(a.t))) : (
    /*y = */
    e.match(V1) && (a.r = Oe(e), a.t = ye(Oe((e.replace($1, "").match(H1) || []).join("").replace(ur, ""))), r && (a.h = U1(B1(a.r))))
  ), a) : { t: "" };
}
var W1 = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, G1 = /<(?:\w+:)?(?:si|sstItem)>/g, z1 = /<\/(?:\w+:)?(?:si|sstItem)>/;
function X1(e, t) {
  var r = [], a = "";
  if (!e)
    return r;
  var n = e.match(W1);
  if (n) {
    a = n[2].replace(G1, "").split(z1);
    for (var s = 0; s != a.length; ++s) {
      var i = H0(a[s].trim(), t);
      i != null && (r[r.length] = i);
    }
    n = le(n[1]), r.Count = n.count, r.Unique = n.uniqueCount;
  }
  return r;
}
function j1(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function K1(e, t) {
  var r = [], a = !1;
  return nt(e, function(s, i, c) {
    switch (c) {
      case 159:
        r.Count = s[0], r.Unique = s[1];
        break;
      case 19:
        r.push(s);
        break;
      case 160:
        return !0;
      case 35:
        a = !0;
        break;
      case 36:
        a = !1;
        break;
      default:
        if (i.T, !a || t.WTF)
          throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), r;
}
function Pc(e) {
  for (var t = [], r = e.split(""), a = 0; a < r.length; ++a)
    t[a] = r[a].charCodeAt(0);
  return t;
}
function tt(e, t) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), t >= 4 && (e.l += t - 4), r;
}
function Y1(e) {
  var t = {};
  return t.id = e.read_shift(0, "lpp4"), t.R = tt(e, 4), t.U = tt(e, 4), t.W = tt(e, 4), t;
}
function q1(e) {
  for (var t = e.read_shift(4), r = e.l + t - 4, a = {}, n = e.read_shift(4), s = []; n-- > 0; )
    s.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = s, e.l != r)
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return a;
}
function J1(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(q1(e));
  return t;
}
function Z1(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(e.read_shift(0, "lpp4"));
  return t;
}
function Q1(e) {
  var t = {};
  return e.read_shift(4), e.l += 4, t.id = e.read_shift(0, "lpp4"), t.name = e.read_shift(0, "lpp4"), t.R = tt(e, 4), t.U = tt(e, 4), t.W = tt(e, 4), t;
}
function eh(e) {
  var t = Q1(e);
  if (t.ename = e.read_shift(0, "8lpp4"), t.blksz = e.read_shift(4), t.cmode = e.read_shift(4), e.read_shift(4) != 4)
    throw new Error("Bad !Primary record");
  return t;
}
function Lc(e, t) {
  var r = e.l + t, a = {};
  a.Flags = e.read_shift(4) & 63, e.l += 4, a.AlgID = e.read_shift(4);
  var n = !1;
  switch (a.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = a.Flags == 36;
      break;
    case 26625:
      n = a.Flags == 4;
      break;
    case 0:
      n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + a.AlgID;
  }
  if (!n)
    throw new Error("Encryption Flags/AlgID mismatch");
  return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, a;
}
function Mc(e, t) {
  var r = {}, a = e.l + t;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, a), e.l = a, r;
}
function rh(e) {
  var t = tt(e);
  switch (t.Minor) {
    case 2:
      return [t.Minor, th(e)];
    case 3:
      return [t.Minor, ah()];
    case 4:
      return [t.Minor, nh(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + t.Minor);
}
function th(e) {
  var t = e.read_shift(4);
  if ((t & 63) != 36)
    throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), a = Lc(e, r), n = Mc(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function ah() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function nh(e) {
  var t = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), a = {};
  return r.replace(ur, function(s) {
    var i = le(s);
    switch (Yr(i[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        t.forEach(function(c) {
          a[c] = i[c];
        });
        break;
      case "<dataIntegrity":
        a.encryptedHmacKey = i.encryptedHmacKey, a.encryptedHmacValue = i.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        a.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        a.uri = i.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        a.encs.push(i);
        break;
      default:
        throw i[0];
    }
  }), a;
}
function sh(e, t) {
  var r = {}, a = r.EncryptionVersionInfo = tt(e, 4);
  if (t -= 4, a.Minor != 2)
    throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2)
    throw new Error("unrecognized major version code: " + a.Major);
  r.Flags = e.read_shift(4), t -= 4;
  var n = e.read_shift(4);
  return t -= 4, r.EncryptionHeader = Lc(e, n), t -= n, r.EncryptionVerifier = Mc(e, t), r;
}
function ih(e) {
  var t = {}, r = t.EncryptionVersionInfo = tt(e, 4);
  if (r.Major != 1 || r.Minor != 1)
    throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return t.Salt = e.read_shift(16), t.EncryptedVerifier = e.read_shift(16), t.EncryptedVerifierHash = e.read_shift(16), t;
}
function ch(e) {
  var t = 0, r, a = Pc(e), n = a.length + 1, s, i, c, f, l;
  for (r = xt(n), r[0] = a.length, s = 1; s != n; ++s)
    r[s] = a[s - 1];
  for (s = n - 1; s >= 0; --s)
    i = r[s], c = t & 16384 ? 1 : 0, f = t << 1 & 32767, l = c | f, t = l ^ i;
  return t ^ 52811;
}
var Bc = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], t = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(i) {
    return (i / 2 | i * 128) & 255;
  }, n = function(i, c) {
    return a(i ^ c);
  }, s = function(i) {
    for (var c = t[i.length - 1], f = 104, l = i.length - 1; l >= 0; --l)
      for (var o = i[l], h = 0; h != 7; ++h)
        o & 64 && (c ^= r[f]), o *= 2, --f;
    return c;
  };
  return function(i) {
    for (var c = Pc(i), f = s(c), l = c.length, o = xt(16), h = 0; h != 16; ++h)
      o[h] = 0;
    var x, d, p;
    for ((l & 1) === 1 && (x = f >> 8, o[l] = n(e[0], x), --l, x = f & 255, d = c[c.length - 1], o[l] = n(d, x)); l > 0; )
      --l, x = f >> 8, o[l] = n(c[l], x), --l, x = f & 255, o[l] = n(c[l], x);
    for (l = 15, p = 15 - c.length; p > 0; )
      x = f >> 8, o[l] = n(e[p], x), --l, --p, x = f & 255, o[l] = n(c[l], x), --l, --p;
    return o;
  };
}(), fh = function(e, t, r, a, n) {
  n || (n = t), a || (a = Bc(e));
  var s, i;
  for (s = 0; s != t.length; ++s)
    i = t[s], i ^= a[r], i = (i >> 5 | i << 3) & 255, n[s] = i, ++r;
  return [n, r, a];
}, oh = function(e) {
  var t = 0, r = Bc(e);
  return function(a) {
    var n = fh("", a, t, r);
    return t = n[1], n[0];
  };
};
function lh(e, t, r, a) {
  var n = { key: Xe(e), verificationBytes: Xe(e) };
  return r.password && (n.verifier = ch(r.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = oh(r.password)), n;
}
function uh(e, t, r) {
  var a = r || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = ih(e) : a.Data = sh(e, t), a;
}
function hh(e, t, r) {
  var a = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? uh(e, t - 2, a) : lh(e, r.biff >= 8 ? t : t - 2, r, a), a;
}
var xh = /* @__PURE__ */ function() {
  function e(n, s) {
    switch (s.type) {
      case "base64":
        return t(Sr(n), s);
      case "binary":
        return t(n, s);
      case "buffer":
        return t(Ee && Buffer.isBuffer(n) ? n.toString("binary") : It(n), s);
      case "array":
        return t(St(n), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(n, s) {
    var i = s || {}, c = i.dense ? [] : {}, f = n.match(/\\trowd.*?\\row\b/g);
    if (!f.length)
      throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: f.length - 1 } };
    return f.forEach(function(o, h) {
      Array.isArray(c) && (c[h] = []);
      for (var x = /\\\w+\b/g, d = 0, p, u = -1; p = x.exec(o); ) {
        switch (p[0]) {
          case "\\cell":
            var v = o.slice(d, x.lastIndex - p[0].length);
            if (v[0] == " " && (v = v.slice(1)), ++u, v.length) {
              var _ = { v, t: "s" };
              Array.isArray(c) ? c[h][u] = _ : c[xe({ r: h, c: u })] = _;
            }
            break;
        }
        d = x.lastIndex;
      }
      u > l.e.c && (l.e.c = u);
    }), c["!ref"] = we(l), c;
  }
  function r(n, s) {
    return pt(e(n, s), s);
  }
  function a(n) {
    for (var s = ["{\\rtf1\\ansi"], i = Ue(n["!ref"]), c, f = Array.isArray(n), l = i.s.r; l <= i.e.r; ++l) {
      s.push("\\trowd\\trautofit1");
      for (var o = i.s.c; o <= i.e.c; ++o)
        s.push("\\cellx" + (o + 1));
      for (s.push("\\pard\\intbl"), o = i.s.c; o <= i.e.c; ++o) {
        var h = xe({ r: l, c: o });
        c = f ? (n[l] || [])[o] : n[h], !(!c || c.v == null && (!c.f || c.F)) && (s.push(" " + (c.w || (at(c), c.w))), s.push("\\cell"));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: a
  };
}();
function dh(e) {
  var t = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
}
function Ra(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
function ph(e) {
  var t = e[0] / 255, r = e[1] / 255, a = e[2] / 255, n = Math.max(t, r, a), s = Math.min(t, r, a), i = n - s;
  if (i === 0)
    return [0, 0, t];
  var c = 0, f = 0, l = n + s;
  switch (f = i / (l > 1 ? 2 - l : l), n) {
    case t:
      c = ((r - a) / i + 6) % 6;
      break;
    case r:
      c = (a - t) / i + 2;
      break;
    case a:
      c = (t - r) / i + 4;
      break;
  }
  return [c / 6, f, l / 2];
}
function vh(e) {
  var t = e[0], r = e[1], a = e[2], n = r * 2 * (a < 0.5 ? a : 1 - a), s = a - n / 2, i = [s, s, s], c = 6 * t, f;
  if (r !== 0)
    switch (c | 0) {
      case 0:
      case 6:
        f = n * c, i[0] += n, i[1] += f;
        break;
      case 1:
        f = n * (2 - c), i[0] += f, i[1] += n;
        break;
      case 2:
        f = n * (c - 2), i[1] += n, i[2] += f;
        break;
      case 3:
        f = n * (4 - c), i[1] += f, i[2] += n;
        break;
      case 4:
        f = n * (c - 4), i[2] += n, i[0] += f;
        break;
      case 5:
        f = n * (6 - c), i[2] += f, i[0] += n;
        break;
    }
  for (var l = 0; l != 3; ++l)
    i[l] = Math.round(i[l] * 255);
  return i;
}
function _n(e, t) {
  if (t === 0)
    return e;
  var r = ph(dh(e));
  return t < 0 ? r[2] = r[2] * (1 + t) : r[2] = 1 - (1 - r[2]) * (1 - t), Ra(vh(r));
}
var Uc = 6, gh = 15, mh = 1, dr = Uc;
function En(e) {
  return Math.floor((e + Math.round(128 / dr) / 256) * dr);
}
function Tn(e) {
  return Math.floor((e - 5) / dr * 100 + 0.5) / 100;
}
function a0(e) {
  return Math.round((e * dr + 5) / dr * 256) / 256;
}
function Wn(e) {
  return a0(Tn(En(e)));
}
function V0(e) {
  var t = Math.abs(e - Wn(e)), r = dr;
  if (t > 5e-3)
    for (dr = mh; dr < gh; ++dr)
      Math.abs(e - Wn(e)) <= t && (t = Math.abs(e - Wn(e)), r = dr);
  dr = r;
}
function Kt(e) {
  e.width ? (e.wpx = En(e.width), e.wch = Tn(e.wpx), e.MDW = dr) : e.wpx ? (e.wch = Tn(e.wpx), e.width = a0(e.wch), e.MDW = dr) : typeof e.wch == "number" && (e.width = a0(e.wch), e.wpx = En(e.width), e.MDW = dr), e.customWidth && delete e.customWidth;
}
var _h = 96, Hc = _h;
function Vc(e) {
  return e * 96 / Hc;
}
function Na(e) {
  return e * Hc / 96;
}
var Eh = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Th(e, t, r, a) {
  t.Borders = [];
  var n = {}, s = !1;
  (e[0].match(ur) || []).forEach(function(i) {
    var c = le(i);
    switch (Yr(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = /*::(*/
        {}, c.diagonalUp && (n.diagonalUp = Ie(c.diagonalUp)), c.diagonalDown && (n.diagonalDown = Ie(c.diagonalDown)), t.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (a && a.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function wh(e, t, r, a) {
  t.Fills = [];
  var n = {}, s = !1;
  (e[0].match(ur) || []).forEach(function(i) {
    var c = le(i);
    switch (Yr(c[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        n = {}, t.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        t.Fills.push(n), n = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        c.patternType && (n.patternType = c.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}), c.indexed && (n.bgColor.indexed = parseInt(c.indexed, 10)), c.theme && (n.bgColor.theme = parseInt(c.theme, 10)), c.tint && (n.bgColor.tint = parseFloat(c.tint)), c.rgb && (n.bgColor.rgb = c.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}), c.theme && (n.fgColor.theme = parseInt(c.theme, 10)), c.tint && (n.fgColor.tint = parseFloat(c.tint)), c.rgb != null && (n.fgColor.rgb = c.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (a && a.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function kh(e, t, r, a) {
  t.Fonts = [];
  var n = {}, s = !1;
  (e[0].match(ur) || []).forEach(function(i) {
    var c = le(i);
    switch (Yr(c[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        t.Fonts.push(n), n = {};
        break;
      case "<name":
        c.val && (n.name = Oe(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = c.val ? Ie(c.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "<i":
        n.italic = c.val ? Ie(c.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "<u":
        switch (c.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "<strike":
        n.strike = c.val ? Ie(c.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "<outline":
        n.outline = c.val ? Ie(c.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "<shadow":
        n.shadow = c.val ? Ie(c.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "<condense":
        n.condense = c.val ? Ie(c.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "<extend":
        n.extend = c.val ? Ie(c.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "<sz":
        c.val && (n.sz = +c.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        c.val && (n.vertAlign = c.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        c.val && (n.family = parseInt(c.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        c.val && (n.scheme = c.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (c.val == "1")
          break;
        c.codepage = k0[parseInt(c.val, 10)];
        break;
      case "<color":
        if (n.color || (n.color = {}), c.auto && (n.color.auto = Ie(c.auto)), c.rgb)
          n.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          n.color.index = parseInt(c.indexed, 10);
          var f = yt[n.color.index];
          n.color.index == 81 && (f = yt[1]), f || (f = yt[1]), n.color.rgb = f[0].toString(16) + f[1].toString(16) + f[2].toString(16);
        } else
          c.theme && (n.color.theme = parseInt(c.theme, 10), c.tint && (n.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (n.color.rgb = _n(r.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        s = !0;
        break;
      case "</AlternateContent>":
        s = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (a && a.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function yh(e, t, r) {
  t.NumberFmt = [];
  for (var a = Kr(pe), n = 0; n < a.length; ++n)
    t.NumberFmt[a[n]] = pe[a[n]];
  var s = e[0].match(ur);
  if (s)
    for (n = 0; n < s.length; ++n) {
      var i = le(s[n]);
      switch (Yr(i[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = ye(Oe(i.formatCode)), f = parseInt(i.numFmtId, 10);
            if (t.NumberFmt[f] = c, f > 0) {
              if (f > 392) {
                for (f = 392; f > 60 && t.NumberFmt[f] != null; --f)
                  ;
                t.NumberFmt[f] = c;
              }
              kt(c, f);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF)
            throw new Error("unrecognized " + i[0] + " in numFmts");
      }
    }
}
var rn = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], tn = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Fh(e, t, r) {
  t.CellXf = [];
  var a, n = !1;
  (e[0].match(ur) || []).forEach(function(s) {
    var i = le(s), c = 0;
    switch (Yr(i[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (a = i, delete a[0], c = 0; c < rn.length; ++c)
          a[rn[c]] && (a[rn[c]] = parseInt(a[rn[c]], 10));
        for (c = 0; c < tn.length; ++c)
          a[tn[c]] && (a[tn[c]] = Ie(a[tn[c]]));
        if (t.NumberFmt && a.numFmtId > 392) {
          for (c = 392; c > 60; --c)
            if (t.NumberFmt[a.numFmtId] == t.NumberFmt[c]) {
              a.numFmtId = c;
              break;
            }
        }
        t.CellXf.push(a);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var f = {};
        i.vertical && (f.vertical = i.vertical), i.horizontal && (f.horizontal = i.horizontal), i.textRotation != null && (f.textRotation = i.textRotation), i.indent && (f.indent = i.indent), i.wrapText && (f.wrapText = Ie(i.wrapText)), a.alignment = f;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (r && r.WTF && !n)
          throw new Error("unrecognized " + i[0] + " in cellXfs");
    }
  });
}
var Ah = /* @__PURE__ */ function() {
  var t = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, a = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, s = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(c, f, l) {
    var o = {};
    if (!c)
      return o;
    c = c.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var h;
    return (h = c.match(t)) && yh(h, o, l), (h = c.match(n)) && kh(h, o, f, l), (h = c.match(a)) && wh(h, o, f, l), (h = c.match(s)) && Th(h, o, f, l), (h = c.match(r)) && Fh(h, o, l), o;
  };
}();
function Sh(e, t) {
  var r = e.read_shift(2), a = or(e);
  return [r, a];
}
function Ch(e, t, r) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = Bl(e);
  n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1);
  var s = e.read_shift(2);
  switch (s === 700 && (a.bold = 1), e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (a.underline = i);
  var c = e.read_shift(1);
  c > 0 && (a.family = c);
  var f = e.read_shift(1);
  switch (f > 0 && (a.charset = f), e.l++, a.color = Ml(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = or(e), a;
}
var Oh = lr;
function Dh(e, t) {
  var r = e.l + t, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = r, { ixfe: a, numFmtId: n };
}
var Ih = lr;
function Rh(e, t, r) {
  var a = {};
  a.NumberFmt = [];
  for (var n in pe)
    a.NumberFmt[n] = pe[n];
  a.CellXf = [], a.Fonts = [];
  var s = [], i = !1;
  return nt(e, function(f, l, o) {
    switch (o) {
      case 44:
        a.NumberFmt[f[0]] = f[1], kt(f[1], f[0]);
        break;
      case 43:
        a.Fonts.push(f), f.color.theme != null && t && t.themeElements && t.themeElements.clrScheme && (f.color.rgb = _n(t.themeElements.clrScheme[f.color.theme].rgb, f.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        s[s.length - 1] == 617 && a.CellXf.push(f);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        s.push(o), i = !0;
        break;
      case 38:
        s.pop(), i = !1;
        break;
      default:
        if (l.T > 0)
          s.push(o);
        else if (l.T < 0)
          s.pop();
        else if (!i || r.WTF && s[s.length - 1] != 37)
          throw new Error("Unexpected record 0x" + o.toString(16));
    }
  }), a;
}
var Nh = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function bh(e, t, r) {
  t.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(ur) || []).forEach(function(n) {
    var s = le(n);
    switch (s[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        a.rgb = s.val;
        break;
      case "<a:sysClr":
        a.rgb = s.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        s[0].charAt(1) === "/" ? (t.themeElements.clrScheme[Nh.indexOf(s[0])] = a, a = {}) : a.name = s[0].slice(3, s[0].length - 1);
        break;
      default:
        if (r && r.WTF)
          throw new Error("Unrecognized " + s[0] + " in clrScheme");
    }
  });
}
function Ph() {
}
function Lh() {
}
var Mh = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, Bh = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, Uh = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function Hh(e, t, r) {
  t.themeElements = {};
  var a;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", Mh, bh],
    /* fontScheme CT_FontScheme */
    ["fontScheme", Bh, Ph],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", Uh, Lh]
  ].forEach(function(n) {
    if (!(a = e.match(n[1])))
      throw new Error(n[0] + " not found in themeElements");
    n[2](a, t, r);
  });
}
var Vh = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function $c(e, t) {
  (!e || e.length === 0) && (e = $h());
  var r, a = {};
  if (!(r = e.match(Vh)))
    throw new Error("themeElements not found in theme");
  return Hh(r[0], a, t), a.raw = e, a;
}
function $h(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [Qi];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function Wh(e, t, r) {
  var a = e.l + t, n = e.read_shift(4);
  if (n !== 124226) {
    if (!r.cellStyles) {
      e.l = a;
      return;
    }
    var s = e.slice(e.l);
    e.l = a;
    var i;
    try {
      i = Zi(s, { type: "array" });
    } catch {
      return;
    }
    var c = yr(i, "theme/theme/theme1.xml", !0);
    if (c)
      return $c(c, r);
  }
}
function Gh(e) {
  return e.read_shift(4);
}
function zh(e) {
  var t = {};
  switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      t.xclrValue = Xh(e, 4);
      break;
    case 2:
      t.xclrValue = Cc(e);
      break;
    case 3:
      t.xclrValue = Gh(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, t;
}
function Xh(e, t) {
  return lr(e, t);
}
function jh(e, t) {
  return lr(e, t);
}
function Kh(e) {
  var t = e.read_shift(2), r = e.read_shift(2) - 4, a = [t];
  switch (t) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      a[1] = zh(e);
      break;
    case 6:
      a[1] = jh(e, r);
      break;
    case 14:
    case 15:
      a[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + t + " " + r);
  }
  return a;
}
function Yh(e, t) {
  var r = e.l + t;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), s = []; n-- > 0; )
    s.push(Kh(e, r - e.l));
  return { ixfe: a, ext: s };
}
function qh(e, t) {
  t.forEach(function(r) {
    switch (r[0]) {
    }
  });
}
function Jh(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: or(e)
  };
}
function Zh(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Qh(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function ex(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] }, n = r || {}, s = [], i = !1, c = 2;
  return nt(e, function(f, l, o) {
    switch (o) {
      case 335:
        a.Types.push({ name: f.name });
        break;
      case 51:
        f.forEach(function(h) {
          c == 1 ? a.Cell.push({ type: a.Types[h[0] - 1].name, index: h[1] }) : c == 0 && a.Value.push({ type: a.Types[h[0] - 1].name, index: h[1] });
        });
        break;
      case 337:
        c = f ? 1 : 0;
        break;
      case 338:
        c = 2;
        break;
      case 35:
        s.push(o), i = !0;
        break;
      case 36:
        s.pop(), i = !1;
        break;
      default:
        if (!l.T) {
          if (!i || n.WTF && s[s.length - 1] != 35)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }), a;
}
function rx(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e)
    return a;
  var n = !1, s = 2, i;
  return e.replace(ur, function(c) {
    var f = le(c);
    switch (Yr(f[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: f.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var l = 0; l < a.Types.length; ++l)
          a.Types[l].name == f.name && (i = a.Types[l]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        s == 1 ? a.Cell.push({ type: a.Types[f.t - 1].name, index: +f.v }) : s == 0 && a.Value.push({ type: a.Types[f.t - 1].name, index: +f.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        s = 1;
        break;
      case "</cellMetadata>":
        s = 2;
        break;
      case "<valueMetadata":
        s = 0;
        break;
      case "</valueMetadata>":
        s = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      case "<rvb":
        if (!i)
          break;
        i.offsets || (i.offsets = []), i.offsets.push(+f.i);
        break;
      default:
        if (!n && r.WTF)
          throw new Error("unrecognized " + f[0] + " in metadata");
    }
    return c;
  }), a;
}
function tx(e) {
  var t = [];
  if (!e)
    return t;
  var r = 1;
  return (e.match(ur) || []).forEach(function(a) {
    var n = le(a);
    switch (n[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete n[0], n.i ? r = n.i : n.i = r, t.push(n);
        break;
    }
  }), t;
}
function ax(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = xe(r);
  var a = e.read_shift(1);
  return a & 2 && (t.l = "1"), a & 8 && (t.a = "1"), t;
}
function nx(e, t, r) {
  var a = [];
  return nt(e, function(s, i, c) {
    switch (c) {
      case 63:
        a.push(s);
        break;
      default:
        if (!i.T)
          throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), a;
}
function sx(e, t, r, a) {
  if (!e)
    return e;
  var n = a || {}, s = !1;
  nt(e, function(c, f, l) {
    switch (l) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      default:
        if (!f.T) {
          if (!s || n.WTF)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, n);
}
function ix(e, t) {
  if (!e)
    return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return t["!id"][r].Target;
}
function js(e, t, r, a) {
  var n = Array.isArray(e), s;
  t.forEach(function(i) {
    var c = vr(i.ref);
    if (n ? (e[c.r] || (e[c.r] = []), s = e[c.r][c.c]) : s = e[i.ref], !s) {
      s = { t: "z" }, n ? e[c.r][c.c] = s : e[i.ref] = s;
      var f = Ue(e["!ref"] || "BDWGO1000001:A1");
      f.s.r > c.r && (f.s.r = c.r), f.e.r < c.r && (f.e.r = c.r), f.s.c > c.c && (f.s.c = c.c), f.e.c < c.c && (f.e.c = c.c);
      var l = we(f);
      l !== e["!ref"] && (e["!ref"] = l);
    }
    s.c || (s.c = []);
    var o = { a: i.author, t: i.t, r: i.r, T: r };
    i.h && (o.h = i.h);
    for (var h = s.c.length - 1; h >= 0; --h) {
      if (!r && s.c[h].T)
        return;
      r && !s.c[h].T && s.c.splice(h, 1);
    }
    if (r && a) {
      for (h = 0; h < a.length; ++h)
        if (o.a == a[h].id) {
          o.a = a[h].name || o.a;
          break;
        }
    }
    s.c.push(o);
  });
}
function cx(e, t) {
  if (e.match(/<(?:\w+:)?comments *\/>/))
    return [];
  var r = [], a = [], n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?author[^>]*>(.*)/);
      c && r.push(c[1]);
    }
  });
  var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?comment[^>]*>/);
      if (c) {
        var f = le(c[0]), l = { author: f.authorId && r[f.authorId] || "sheetjsghost", ref: f.ref, guid: f.guid }, o = vr(f.ref);
        if (!(t.sheetRows && t.sheetRows <= o.r)) {
          var h = i.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), x = !!h && !!h[1] && H0(h[1]) || { r: "", t: "", h: "" };
          l.r = x.r, x.r == "<t></t>" && (x.t = x.h = ""), l.t = (x.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), t.cellHTML && (l.h = x.h), a.push(l);
        }
      }
    }
  }), a;
}
function fx(e, t) {
  var r = [], a = !1, n = {}, s = 0;
  return e.replace(ur, function(c, f) {
    var l = le(c);
    switch (Yr(l[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: l.personId, guid: l.id, ref: l.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && r.push(n);
        break;
      case "<text>":
      case "<text":
        s = f + c.length;
        break;
      case "</text>":
        n.t = e.slice(s, f).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        a = !0;
        break;
      case "</mentions>":
        a = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + l[0] + " in threaded comments");
    }
    return c;
  }), r;
}
function ox(e, t) {
  var r = [], a = !1;
  return e.replace(ur, function(s) {
    var i = le(s);
    switch (Yr(i[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        r.push({ name: i.displayname, id: i.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + i[0] + " in threaded comments");
    }
    return s;
  }), r;
}
function lx(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Nt(e);
  return t.rfx = r.s, t.ref = xe(r.s), e.l += 16, t;
}
var ux = or;
function hx(e, t) {
  var r = [], a = [], n = {}, s = !1;
  return nt(e, function(c, f, l) {
    switch (l) {
      case 632:
        a.push(c);
        break;
      case 635:
        n = c;
        break;
      case 637:
        n.t = c.t, n.h = c.h, n.r = c.r;
        break;
      case 636:
        if (n.author = a[n.iauthor], delete n.iauthor, t.sheetRows && n.rfx && t.sheetRows <= n.rfx.r)
          break;
        n.t || (n.t = ""), delete n.rfx, r.push(n);
        break;
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!f.T) {
          if (!s || t.WTF)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), r;
}
var xx = "application/vnd.ms-office.vbaProject";
function dx(e) {
  var t = Te.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, a) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var n = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      Te.utils.cfb_add(t, n, e.FileIndex[a].content);
    }
  }), Te.write(t);
}
function px() {
  return { "!type": "dialog" };
}
function vx() {
  return { "!type": "dialog" };
}
function gx() {
  return { "!type": "macro" };
}
function mx() {
  return { "!type": "macro" };
}
var zt = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(a, n, s, i) {
    var c = !1, f = !1;
    s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1)), i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1));
    var l = s.length > 0 ? parseInt(s, 10) | 0 : 0, o = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    return c ? o += t.c : --o, f ? l += t.r : --l, n + (c ? "" : "$") + Ye(o) + (f ? "" : "$") + ar(l);
  }
  return function(n, s) {
    return t = s, n.replace(e, r);
  };
}(), Wc = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, _x = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(Wc, function(a, n, s, i, c, f) {
      var l = b0(i) - (s ? 0 : r.c), o = N0(f) - (c ? 0 : r.r), h = o == 0 ? "" : c ? o + 1 : "[" + o + "]", x = l == 0 ? "" : s ? l + 1 : "[" + l + "]";
      return n + "R" + h + "C" + x;
    });
  };
}();
function Gc(e, t) {
  return e.replace(Wc, function(r, a, n, s, i, c) {
    return a + (n == "$" ? n + s : Ye(b0(s) + t.c)) + (i == "$" ? i + c : ar(N0(c) + t.r));
  });
}
function Ex(e, t, r) {
  var a = ra(t), n = a.s, s = vr(r), i = { r: s.r - n.r, c: s.c - n.c };
  return Gc(e, i);
}
function Tx(e) {
  return e.length != 1;
}
function Ks(e) {
  return e.replace(/_xlfn\./g, "");
}
function Ge(e) {
  e.l += 1;
}
function dt(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function zc(e, t, r) {
  var a = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return Xc(e);
    r.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), s = e.read_shift(a), i = dt(e, 2), c = dt(e, 2);
  return { s: { r: n, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: s, c: c[0], cRel: c[1], rRel: c[2] } };
}
function Xc(e) {
  var t = dt(e, 2), r = dt(e, 2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: t[0], c: a, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: n, cRel: r[1], rRel: r[2] } };
}
function wx(e, t, r) {
  if (r.biff < 8)
    return Xc(e);
  var a = e.read_shift(r.biff == 12 ? 4 : 2), n = e.read_shift(r.biff == 12 ? 4 : 2), s = dt(e, 2), i = dt(e, 2);
  return { s: { r: a, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: n, c: i[0], cRel: i[1], rRel: i[2] } };
}
function jc(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return kx(e);
  var a = e.read_shift(r && r.biff == 12 ? 4 : 2), n = dt(e, 2);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function kx(e) {
  var t = dt(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function yx(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Fx(e, t, r) {
  var a = r && r.biff ? r.biff : 8;
  if (a >= 2 && a <= 5)
    return Ax(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), s = e.read_shift(2), i = (s & 16384) >> 14, c = (s & 32768) >> 15;
  if (s &= 16383, c == 1)
    for (; n > 524287; )
      n -= 1048576;
  if (i == 1)
    for (; s > 8191; )
      s = s - 16384;
  return { r: n, c: s, cRel: i, rRel: c };
}
function Ax(e) {
  var t = e.read_shift(2), r = e.read_shift(1), a = (t & 32768) >> 15, n = (t & 16384) >> 14;
  return t &= 16383, a == 1 && t >= 8192 && (t = t - 16384), n == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: n, rRel: a };
}
function Sx(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = zc(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [a, n];
}
function Cx(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  var i = zc(e, s, r);
  return [a, n, i];
}
function Ox(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [a];
}
function Dx(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  return e.l += s, [a, n];
}
function Ix(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = wx(e, t - 1, r);
  return [a, n];
}
function Rx(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [a];
}
function Ys(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function Nx(e, t, r) {
  e.l += 2;
  for (var a = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], s = 0; s <= a; ++s)
    n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return n;
}
function bx(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Px(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Lx(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function Mx(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [a];
}
function Kc(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function Bx(e) {
  return e.read_shift(2), Kc(e);
}
function Ux(e) {
  return e.read_shift(2), Kc(e);
}
function Hx(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = jc(e, 0, r);
  return [a, n];
}
function Vx(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Fx(e, 0, r);
  return [a, n];
}
function $x(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var s = jc(e, 0, r);
  return [a, n, s];
}
function Wx(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Gd[n], Jc[n], a];
}
function Gx(e, t, r) {
  var a = e[e.l++], n = e.read_shift(1), s = r && r.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : zx(e);
  return [n, (s[0] === 0 ? Jc : Wd)[s[1]]];
}
function zx(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Xx(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function jx(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Kx(e) {
  return e.l++, bt[e.read_shift(1)];
}
function Yx(e) {
  return e.l++, e.read_shift(2);
}
function qx(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Jx(e) {
  return e.l++, cr(e);
}
function Zx(e, t, r) {
  return e.l++, Va(e, t - 1, r);
}
function Qx(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = We(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = bt[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = cr(e);
      break;
    case 2:
      r[1] = Pt(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function ed(e, t, r) {
  for (var a = e.read_shift(r.biff == 12 ? 4 : 2), n = [], s = 0; s != a; ++s)
    n.push((r.biff == 12 ? Nt : Dn)(e));
  return n;
}
function rd(e, t, r) {
  var a = 0, n = 0;
  r.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var s = 0, i = []; s != a && (i[s] = []); ++s)
    for (var c = 0; c != n; ++c)
      i[s][c] = Qx(e, r.biff);
  return i;
}
function td(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = !r || r.biff >= 8 ? 4 : 2, s = e.read_shift(n);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, s];
}
function ad(e, t, r) {
  if (r.biff == 5)
    return nd(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), s = e.read_shift(4);
  return [a, n, s];
}
function nd(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function sd(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function id(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function cd(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [a];
}
function fd(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), s = 4;
  if (r)
    switch (r.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  return e.l += s, [a, n];
}
var od = lr, ld = lr, ud = lr;
function Wa(e, t, r) {
  return e.l += 2, [yx(e)];
}
function $0(e) {
  return e.l += 6, [];
}
var hd = Wa, xd = $0, dd = $0, pd = Wa;
function Yc(e) {
  return e.l += 2, [Xe(e), e.read_shift(2) & 1];
}
var vd = Wa, gd = Yc, md = $0, _d = Wa, Ed = Wa, Td = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function wd(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), s = e.read_shift(2), i = Td[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: i, idx: a, c: n, C: s };
}
function kd(e) {
  return e.l += 2, [e.read_shift(4)];
}
function yd(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Fd(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Ad(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Sd(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Cd(e) {
  return e.l += 4, [0, 0];
}
var qs = {
  /*::[*/
  1: { n: "PtgExp", f: jx },
  /*::[*/
  2: { n: "PtgTbl", f: ud },
  /*::[*/
  3: { n: "PtgAdd", f: Ge },
  /*::[*/
  4: { n: "PtgSub", f: Ge },
  /*::[*/
  5: { n: "PtgMul", f: Ge },
  /*::[*/
  6: { n: "PtgDiv", f: Ge },
  /*::[*/
  7: { n: "PtgPower", f: Ge },
  /*::[*/
  8: { n: "PtgConcat", f: Ge },
  /*::[*/
  9: { n: "PtgLt", f: Ge },
  /*::[*/
  10: { n: "PtgLe", f: Ge },
  /*::[*/
  11: { n: "PtgEq", f: Ge },
  /*::[*/
  12: { n: "PtgGe", f: Ge },
  /*::[*/
  13: { n: "PtgGt", f: Ge },
  /*::[*/
  14: { n: "PtgNe", f: Ge },
  /*::[*/
  15: { n: "PtgIsect", f: Ge },
  /*::[*/
  16: { n: "PtgUnion", f: Ge },
  /*::[*/
  17: { n: "PtgRange", f: Ge },
  /*::[*/
  18: { n: "PtgUplus", f: Ge },
  /*::[*/
  19: { n: "PtgUminus", f: Ge },
  /*::[*/
  20: { n: "PtgPercent", f: Ge },
  /*::[*/
  21: { n: "PtgParen", f: Ge },
  /*::[*/
  22: { n: "PtgMissArg", f: Ge },
  /*::[*/
  23: { n: "PtgStr", f: Zx },
  /*::[*/
  26: { n: "PtgSheet", f: yd },
  /*::[*/
  27: { n: "PtgEndSheet", f: Fd },
  /*::[*/
  28: { n: "PtgErr", f: Kx },
  /*::[*/
  29: { n: "PtgBool", f: qx },
  /*::[*/
  30: { n: "PtgInt", f: Yx },
  /*::[*/
  31: { n: "PtgNum", f: Jx },
  /*::[*/
  32: { n: "PtgArray", f: Rx },
  /*::[*/
  33: { n: "PtgFunc", f: Wx },
  /*::[*/
  34: { n: "PtgFuncVar", f: Gx },
  /*::[*/
  35: { n: "PtgName", f: td },
  /*::[*/
  36: { n: "PtgRef", f: Hx },
  /*::[*/
  37: { n: "PtgArea", f: Sx },
  /*::[*/
  38: { n: "PtgMemArea", f: sd },
  /*::[*/
  39: { n: "PtgMemErr", f: od },
  /*::[*/
  40: { n: "PtgMemNoMem", f: ld },
  /*::[*/
  41: { n: "PtgMemFunc", f: id },
  /*::[*/
  42: { n: "PtgRefErr", f: cd },
  /*::[*/
  43: { n: "PtgAreaErr", f: Ox },
  /*::[*/
  44: { n: "PtgRefN", f: Vx },
  /*::[*/
  45: { n: "PtgAreaN", f: Ix },
  /*::[*/
  46: { n: "PtgMemAreaN", f: Ad },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: Sd },
  /*::[*/
  57: { n: "PtgNameX", f: ad },
  /*::[*/
  58: { n: "PtgRef3d", f: $x },
  /*::[*/
  59: { n: "PtgArea3d", f: Cx },
  /*::[*/
  60: { n: "PtgRefErr3d", f: fd },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: Dx },
  /*::[*/
  255: {}
}, Od = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, Dd = {
  /*::[*/
  1: { n: "PtgElfLel", f: Yc },
  /*::[*/
  2: { n: "PtgElfRw", f: _d },
  /*::[*/
  3: { n: "PtgElfCol", f: hd },
  /*::[*/
  6: { n: "PtgElfRwV", f: Ed },
  /*::[*/
  7: { n: "PtgElfColV", f: pd },
  /*::[*/
  10: { n: "PtgElfRadical", f: vd },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: md },
  /*::[*/
  13: { n: "PtgElfColS", f: xd },
  /*::[*/
  15: { n: "PtgElfColSV", f: dd },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: gd },
  /*::[*/
  25: { n: "PtgList", f: wd },
  /*::[*/
  29: { n: "PtgSxName", f: kd },
  /*::[*/
  255: {}
}, Id = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: Cd },
  /*::[*/
  1: { n: "PtgAttrSemi", f: Mx },
  /*::[*/
  2: { n: "PtgAttrIf", f: Px },
  /*::[*/
  4: { n: "PtgAttrChoose", f: Nx },
  /*::[*/
  8: { n: "PtgAttrGoto", f: bx },
  /*::[*/
  16: { n: "PtgAttrSum", f: Xx },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: Ys },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: Ys },
  /*::[*/
  64: { n: "PtgAttrSpace", f: Bx },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: Ux },
  /*::[*/
  128: { n: "PtgAttrIfError", f: Lx },
  /*::[*/
  255: {}
};
function Ga(e, t, r, a) {
  if (a.biff < 8)
    return lr(e, t);
  for (var n = e.l + t, s = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = rd(e, 0, a), s.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = ed(e, r[i][1], a), s.push(r[i][2]);
        break;
      case "PtgExp":
        a && a.biff == 12 && (r[i][1][1] = e.read_shift(4), s.push(r[i][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return t = n - e.l, t !== 0 && s.push(lr(e, t)), s;
}
function za(e, t, r) {
  for (var a = e.l + t, n, s, i = []; a != e.l; )
    t = a - e.l, s = e[e.l], n = qs[s] || qs[Od[s]], (s === 24 || s === 25) && (n = (s === 24 ? Dd : Id)[e[e.l + 1]]), !n || !n.f ? lr(e, t) : i.push([n.n, n.f(e, t, r)]);
  return i;
}
function Rd(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var a = e[r], n = [], s = 0; s < a.length; ++s) {
      var i = a[s];
      if (i)
        switch (i[0]) {
          case 2:
            n.push('"' + i[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(i[1]);
        }
      else
        n.push("");
    }
    t.push(n.join(","));
  }
  return t.join(";");
}
var Nd = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function bd(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function qc(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var a = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!a)
    return "SH33TJSERR1";
  var n = "";
  if (r.biff > 8)
    switch (e[a[0]][0]) {
      case 357:
        return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[a[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[a[0]][0];
    }
  switch (e[a[0]][0][0]) {
    case 1025:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 14849:
      return e[a[0]].slice(1).map(function(s) {
        return s.Name;
      }).join(";;");
    default:
      return e[a[0]][0][3] ? (n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
  }
}
function Js(e, t, r) {
  var a = qc(e, t, r);
  return a == "#REF" ? a : bd(a, r);
}
function ir(e, t, r, a, n) {
  var s = n && n.biff || 8, i = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), c = [], f, l, o, h = 0, x = 0, d, p = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var u = -1, v = "", _ = 0, C = e[0].length; _ < C; ++_) {
    var m = e[0][_];
    switch (m[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (f = c.pop(), l = c.pop(), u >= 0) {
          switch (e[0][u][1][0]) {
            case 0:
              v = Le(" ", e[0][u][1][1]);
              break;
            case 1:
              v = Le("\r", e[0][u][1][1]);
              break;
            default:
              if (v = "", n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          l = l + v, u = -1;
        }
        c.push(l + Nd[m[0]] + f);
        break;
      case "PtgIsect":
        f = c.pop(), l = c.pop(), c.push(l + " " + f);
        break;
      case "PtgUnion":
        f = c.pop(), l = c.pop(), c.push(l + "," + f);
        break;
      case "PtgRange":
        f = c.pop(), l = c.pop(), c.push(l + ":" + f);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        o = ga(m[1][1], i, n), c.push(ma(o, s));
        break;
      case "PtgRefN":
        o = r ? ga(m[1][1], r, n) : m[1][1], c.push(ma(o, s));
        break;
      case "PtgRef3d":
        h = /*::Number(*/
        m[1][1], o = ga(m[1][2], i, n), p = Js(a, h, n), c.push(p + "!" + ma(o, s));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var O = m[1][0], b = m[1][1];
        O || (O = 0), O &= 127;
        var D = O == 0 ? [] : c.slice(-O);
        c.length -= O, b === "User" && (b = D.shift()), c.push(b + "(" + D.join(",") + ")");
        break;
      case "PtgBool":
        c.push(m[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(
          /*::String(*/
          m[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        c.push(String(m[1]));
        break;
      case "PtgStr":
        c.push('"' + m[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(
          /*::String(*/
          m[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = Is(m[1][1], r ? { s: r } : i, n), c.push(Vn(d, n));
        break;
      case "PtgArea":
        d = Is(m[1][1], i, n), c.push(Vn(d, n));
        break;
      case "PtgArea3d":
        h = /*::Number(*/
        m[1][1], d = m[1][2], p = Js(a, h, n), c.push(p + "!" + Vn(d, n));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = m[1][2];
        var w = (a.names || [])[x - 1] || (a[0] || [])[x], L = w ? w.Name : "SH33TJSNAME" + String(x);
        L && L.slice(0, 6) == "_xlfn." && !n.xlfn && (L = L.slice(6)), c.push(L);
        break;
      case "PtgNameX":
        var I = m[1][1];
        x = m[1][2];
        var z;
        if (n.biff <= 5)
          I < 0 && (I = -I), a[I] && (z = a[I][x]);
        else {
          var W = "";
          if (((a[I] || [])[0] || [])[0] == 14849 || (((a[I] || [])[0] || [])[0] == 1025 ? a[I][x] && a[I][x].itab > 0 && (W = a.SheetNames[a[I][x].itab - 1] + "!") : W = a.SheetNames[x - 1] + "!"), a[I] && a[I][x])
            W += a[I][x].Name;
          else if (a[0] && a[0][x])
            W += a[0][x].Name;
          else {
            var P = (qc(a, I, n) || "").split(";;");
            P[x - 1] ? W = P[x - 1] : W += "SH33TJSERRX";
          }
          c.push(W);
          break;
        }
        z || (z = { Name: "SH33TJSERRY" }), c.push(z.Name);
        break;
      case "PtgParen":
        var K = "(", fe = ")";
        if (u >= 0) {
          switch (v = "", e[0][u][1][0]) {
            case 2:
              K = Le(" ", e[0][u][1][1]) + K;
              break;
            case 3:
              K = Le("\r", e[0][u][1][1]) + K;
              break;
            case 4:
              fe = Le(" ", e[0][u][1][1]) + fe;
              break;
            case 5:
              fe = Le("\r", e[0][u][1][1]) + fe;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          u = -1;
        }
        c.push(K + c.pop() + fe);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        o = { c: m[1][1], r: m[1][0] };
        var re = { c: r.c, r: r.r };
        if (a.sharedf[xe(o)]) {
          var ce = a.sharedf[xe(o)];
          c.push(ir(ce, i, re, a, n));
        } else {
          var ie = !1;
          for (f = 0; f != a.arrayf.length; ++f)
            if (l = a.arrayf[f], !(o.c < l[0].s.c || o.c > l[0].e.c) && !(o.r < l[0].s.r || o.r > l[0].e.r)) {
              c.push(ir(l[1], i, re, a, n)), ie = !0;
              break;
            }
          ie || c.push(
            /*::String(*/
            m[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        c.push("{" + Rd(
          /*::(*/
          m[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        u = _;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + m[1].idx + "[#" + m[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(m));
      default:
        throw new Error("Unrecognized Formula Token: " + String(m));
    }
    var De = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && u >= 0 && De.indexOf(e[0][_][0]) == -1) {
      m = e[0][u];
      var G = !0;
      switch (m[1][0]) {
        case 4:
          G = !1;
        case 0:
          v = Le(" ", m[1][1]);
          break;
        case 5:
          G = !1;
        case 1:
          v = Le("\r", m[1][1]);
          break;
        default:
          if (v = "", n.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + m[1][0]);
      }
      c.push((G ? v : "") + c.pop() + (G ? "" : v)), u = -1;
    }
  }
  if (c.length > 1 && n.WTF)
    throw new Error("bad formula stack");
  return c[0];
}
function Pd(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, s, i = e.read_shift(n);
  if (i == 65535)
    return [[], lr(e, t - 2)];
  var c = za(e, i, r);
  return t !== i + n && (s = Ga(e, t - i - n, c, r)), e.l = a, [c, s];
}
function Ld(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, s, i = e.read_shift(n);
  if (i == 65535)
    return [[], lr(e, t - 2)];
  var c = za(e, i, r);
  return t !== i + n && (s = Ga(e, t - i - n, c, r)), e.l = a, [c, s];
}
function Md(e, t, r, a) {
  var n = e.l + t, s = za(e, a, r), i;
  return n !== e.l && (i = Ga(e, n - e.l, s, r)), [s, i];
}
function Bd(e, t, r) {
  var a = e.l + t, n, s = e.read_shift(2), i = za(e, s, r);
  return s == 65535 ? [[], lr(e, t - 2)] : (t !== s + 2 && (n = Ga(e, a - s - 2, i, r)), [i, n]);
}
function Ud(e) {
  var t;
  if (et(e, e.l + 6) !== 65535)
    return [cr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return t = e[e.l + 2] === 1, e.l += 8, [t, "b"];
    case 2:
      return t = e[e.l + 2], e.l += 8, [t, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Gn(e, t, r) {
  var a = e.l + t, n = qr(e);
  r.biff == 2 && ++e.l;
  var s = Ud(e), i = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = Ld(e, a - e.l, r);
  return { cell: n, val: s[0], formula: c, shared: i >> 3 & 1, tt: s[1] };
}
function In(e, t, r) {
  var a = e.read_shift(4), n = za(e, a, r), s = e.read_shift(4), i = s > 0 ? Ga(e, s, n, r) : null;
  return [n, i];
}
var Hd = In, Rn = In, Vd = In, $d = In, Wd = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Jc = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, Gd = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function Zs(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(t, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function zn(e) {
  var t = e.split(":"), r = t[0].split(".")[0];
  return [r, t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")];
}
var wa = {}, Xt = {};
function ka(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Zc(e, t, r, a, n, s) {
  try {
    a.cellNF && (e.z = pe[t]);
  } catch (c) {
    if (a.WTF)
      throw c;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = er(e.v)), (!a || a.cellText !== !1) && e.t !== "z")
      try {
        if (pe[t] == null && kt(Xo[t] || "General", t), e.t === "e")
          e.w = e.w || bt[e.v];
        else if (t === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Ca(e.v);
          else if (e.t === "d") {
            var i = mr(e.v);
            (i | 0) === i ? e.w = i.toString(10) : e.w = Ca(i);
          } else {
            if (e.v === void 0)
              return "";
            e.w = At(e.v, Xt);
          }
        else
          e.t === "d" ? e.w = br(t, mr(e.v), Xt) : e.w = br(t, e.v, Xt);
      } catch (c) {
        if (a.WTF)
          throw c;
      }
    if (a.cellStyles && r != null)
      try {
        e.s = s.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = _n(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = _n(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (a.WTF && s.Fills)
          throw c;
      }
  }
}
function zd(e, t) {
  var r = Ue(t);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = we(r));
}
var Xd = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, jd = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, Kd = /<(?:\w:)?hyperlink [^>]*>/mg, Yd = /"(\w*:\w*)"/, qd = /<(?:\w:)?col\b[^>]*[\/]?>/g, Jd = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, Zd = /<(?:\w:)?pageMargins[^>]*\/>/g, Qc = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, Qd = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, ep = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function rp(e, t, r, a, n, s, i) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var c = t.dense ? [] : {}, f = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, l = "", o = "", h = e.match(jd);
  h ? (l = e.slice(0, h.index), o = e.slice(h.index + h[0].length)) : l = o = e;
  var x = l.match(Qc);
  x ? W0(x[0], c, n, r) : (x = l.match(Qd)) && tp(x[0], x[1] || "", c, n, r);
  var d = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var p = l.slice(d, d + 50).match(Yd);
    p && zd(c, p[1]);
  }
  var u = l.match(ep);
  u && u[1] && fp(u[1], n);
  var v = [];
  if (t.cellStyles) {
    var _ = l.match(qd);
    _ && sp(v, _);
  }
  h && op(h[1], c, t, f, s, i);
  var C = o.match(Jd);
  C && (c["!autofilter"] = ip(C[0]));
  var m = [], O = o.match(Xd);
  if (O)
    for (d = 0; d != O.length; ++d)
      m[d] = Ue(O[d].slice(O[d].indexOf('"') + 1));
  var b = o.match(Kd);
  b && ap(c, b, a);
  var D = o.match(Zd);
  if (D && (c["!margins"] = np(le(D[0]))), !c["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r && (c["!ref"] = we(f)), t.sheetRows > 0 && c["!ref"]) {
    var w = Ue(c["!ref"]);
    t.sheetRows <= +w.e.r && (w.e.r = t.sheetRows - 1, w.e.r > f.e.r && (w.e.r = f.e.r), w.e.r < w.s.r && (w.s.r = w.e.r), w.e.c > f.e.c && (w.e.c = f.e.c), w.e.c < w.s.c && (w.s.c = w.e.c), c["!fullref"] = c["!ref"], c["!ref"] = we(w));
  }
  return v.length > 0 && (c["!cols"] = v), m.length > 0 && (c["!merges"] = m), c;
}
function W0(e, t, r, a) {
  var n = le(e);
  r.Sheets[a] || (r.Sheets[a] = {}), n.codeName && (r.Sheets[a].CodeName = ye(Oe(n.codeName)));
}
function tp(e, t, r, a, n) {
  W0(e.slice(0, e.indexOf(">")), r, a, n);
}
function ap(e, t, r) {
  for (var a = Array.isArray(e), n = 0; n != t.length; ++n) {
    var s = le(Oe(t[n]), !0);
    if (!s.ref)
      return;
    var i = ((r || {})["!id"] || [])[s.id];
    i ? (s.Target = i.Target, s.location && (s.Target += "#" + ye(s.location))) : (s.Target = "#" + ye(s.location), i = { Target: s.Target, TargetMode: "Internal" }), s.Rel = i, s.tooltip && (s.Tooltip = s.tooltip, delete s.tooltip);
    for (var c = Ue(s.ref), f = c.s.r; f <= c.e.r; ++f)
      for (var l = c.s.c; l <= c.e.c; ++l) {
        var o = xe({ c: l, r: f });
        a ? (e[f] || (e[f] = []), e[f][l] || (e[f][l] = { t: "z", v: void 0 }), e[f][l].l = s) : (e[o] || (e[o] = { t: "z", v: void 0 }), e[o].l = s);
      }
  }
}
function np(e) {
  var t = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (t[r] = parseFloat(e[r]));
  }), t;
}
function sp(e, t) {
  for (var r = !1, a = 0; a != t.length; ++a) {
    var n = le(t[a], !0);
    n.hidden && (n.hidden = Ie(n.hidden));
    var s = parseInt(n.min, 10) - 1, i = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !r && n.width && (r = !0, V0(n.width)), Kt(n); s <= i; )
      e[s++] = tr(n);
  }
}
function ip(e) {
  var t = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return t;
}
var cp = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function fp(e, t) {
  t.Views || (t.Views = [{}]), (e.match(cp) || []).forEach(function(r, a) {
    var n = le(r);
    t.Views[a] || (t.Views[a] = {}), +n.zoomScale && (t.Views[a].zoom = +n.zoomScale), Ie(n.rightToLeft) && (t.Views[a].RTL = !0);
  });
}
var op = /* @__PURE__ */ function() {
  var e = /<(?:\w+:)?c[ \/>]/, t = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, n = /ref=["']([^"']*)["']/, s = Oa("v"), i = Oa("f");
  return function(f, l, o, h, x, d) {
    for (var p = 0, u = "", v = [], _ = [], C = 0, m = 0, O = 0, b = "", D, w, L = 0, I = 0, z, W, P = 0, K = 0, fe = Array.isArray(d.CellXf), re, ce = [], ie = [], De = Array.isArray(l), G = [], ue = {}, he = !1, A = !!o.sheetStubs, H = f.split(t), N = 0, R = H.length; N != R; ++N) {
      u = H[N].trim();
      var j = u.length;
      if (j === 0)
        continue;
      var ee = 0;
      e:
        for (p = 0; p < j; ++p)
          switch (
            /*x.charCodeAt(ri)*/
            u[p]
          ) {
            case ">":
              if (
                /*x.charCodeAt(ri-1) != 47*/
                u[p - 1] != "/"
              ) {
                ++p;
                break e;
              }
              if (o && o.cellStyles) {
                if (w = le(u.slice(ee, p), !0), L = w.r != null ? parseInt(w.r, 10) : L + 1, I = -1, o.sheetRows && o.sheetRows < L)
                  continue;
                ue = {}, he = !1, w.ht && (he = !0, ue.hpt = parseFloat(w.ht), ue.hpx = Na(ue.hpt)), w.hidden == "1" && (he = !0, ue.hidden = !0), w.outlineLevel != null && (he = !0, ue.level = +w.outlineLevel), he && (G[L - 1] = ue);
              }
              break;
            case "<":
              ee = p;
              break;
          }
      if (ee >= p)
        break;
      if (w = le(u.slice(ee, p), !0), L = w.r != null ? parseInt(w.r, 10) : L + 1, I = -1, !(o.sheetRows && o.sheetRows < L)) {
        h.s.r > L - 1 && (h.s.r = L - 1), h.e.r < L - 1 && (h.e.r = L - 1), o && o.cellStyles && (ue = {}, he = !1, w.ht && (he = !0, ue.hpt = parseFloat(w.ht), ue.hpx = Na(ue.hpt)), w.hidden == "1" && (he = !0, ue.hidden = !0), w.outlineLevel != null && (he = !0, ue.level = +w.outlineLevel), he && (G[L - 1] = ue)), v = u.slice(p).split(e);
        for (var ne = 0; ne != v.length && v[ne].trim().charAt(0) == "<"; ++ne)
          ;
        for (v = v.slice(ne), p = 0; p != v.length; ++p)
          if (u = v[p].trim(), u.length !== 0) {
            if (_ = u.match(r), C = p, m = 0, O = 0, u = "<c " + (u.slice(0, 1) == "<" ? ">" : "") + u, _ != null && _.length === 2) {
              for (C = 0, b = _[1], m = 0; m != b.length && !((O = b.charCodeAt(m) - 64) < 1 || O > 26); ++m)
                C = 26 * C + O;
              --C, I = C;
            } else
              ++I;
            for (m = 0; m != u.length && u.charCodeAt(m) !== 62; ++m)
              ;
            if (++m, w = le(u.slice(0, m), !0), w.r || (w.r = xe({ r: L - 1, c: I })), b = u.slice(m), D = { t: "" }, (_ = b.match(s)) != null && /*::cref != null && */
            _[1] !== "" && (D.v = ye(_[1])), o.cellFormula) {
              if ((_ = b.match(i)) != null && /*::cref != null && */
              _[1] !== "") {
                if (D.f = ye(Oe(_[1])).replace(/\r\n/g, `
`), o.xlfn || (D.f = Ks(D.f)), /*::cref != null && cref[0] != null && */
                _[0].indexOf('t="array"') > -1)
                  D.F = (b.match(n) || [])[1], D.F.indexOf(":") > -1 && ce.push([Ue(D.F), D.F]);
                else if (
                  /*::cref != null && cref[0] != null && */
                  _[0].indexOf('t="shared"') > -1
                ) {
                  W = le(_[0]);
                  var Z = ye(Oe(_[1]));
                  o.xlfn || (Z = Ks(Z)), ie[parseInt(W.si, 10)] = [W, Z, w.r];
                }
              } else
                (_ = b.match(/<f[^>]*\/>/)) && (W = le(_[0]), ie[W.si] && (D.f = Ex(ie[W.si][1], ie[W.si][2], w.r)));
              var q = vr(w.r);
              for (m = 0; m < ce.length; ++m)
                q.r >= ce[m][0].s.r && q.r <= ce[m][0].e.r && q.c >= ce[m][0].s.c && q.c <= ce[m][0].e.c && (D.F = ce[m][1]);
            }
            if (w.t == null && D.v === void 0)
              if (D.f || D.F)
                D.v = 0, D.t = "n";
              else if (A)
                D.t = "z";
              else
                continue;
            else
              D.t = w.t || "n";
            switch (h.s.c > I && (h.s.c = I), h.e.c < I && (h.e.c = I), D.t) {
              case "n":
                if (D.v == "" || D.v == null) {
                  if (!A)
                    continue;
                  D.t = "z";
                } else
                  D.v = parseFloat(D.v);
                break;
              case "s":
                if (typeof D.v > "u") {
                  if (!A)
                    continue;
                  D.t = "z";
                } else
                  z = wa[parseInt(D.v, 10)], D.v = z.t, D.r = z.r, o.cellHTML && (D.h = z.h);
                break;
              case "str":
                D.t = "s", D.v = D.v != null ? Oe(D.v) : "", o.cellHTML && (D.h = D0(D.v));
                break;
              case "inlineStr":
                _ = b.match(a), D.t = "s", _ != null && (z = H0(_[1])) ? (D.v = z.t, o.cellHTML && (D.h = z.h)) : D.v = "";
                break;
              case "b":
                D.v = Ie(D.v);
                break;
              case "d":
                o.cellDates ? D.v = er(D.v, 1) : (D.v = mr(er(D.v, 1)), D.t = "n");
                break;
              case "e":
                (!o || o.cellText !== !1) && (D.w = D.v), D.v = Ec[D.v];
                break;
            }
            if (P = K = 0, re = null, fe && w.s !== void 0 && (re = d.CellXf[w.s], re != null && (re.numFmtId != null && (P = re.numFmtId), o.cellStyles && re.fillId != null && (K = re.fillId))), Zc(D, P, K, o, x, d), o.cellDates && fe && D.t == "n" && ea(pe[P]) && (D.t = "d", D.v = On(D.v)), w.cm && o.xlmeta) {
              var ke = (o.xlmeta.Cell || [])[+w.cm - 1];
              ke && ke.type == "XLDAPR" && (D.D = !0);
            }
            if (De) {
              var S = vr(w.r);
              l[S.r] || (l[S.r] = []), l[S.r][S.c] = D;
            } else
              l[w.r] = D;
          }
      }
    }
    G.length > 0 && (l["!rows"] = G);
  };
}();
function lp(e, t) {
  var r = {}, a = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return e.l = a, s & 7 && (r.level = s & 7), s & 16 && (r.hidden = !0), s & 32 && (r.hpt = n / 20), r;
}
var up = Nt;
function hp() {
}
function xp(e, t) {
  var r = {}, a = e[e.l];
  return ++e.l, r.above = !(a & 64), r.left = !(a & 128), e.l += 18, r.name = Pl(e), r;
}
function dp(e) {
  var t = Pr(e);
  return [t];
}
function pp(e) {
  var t = Rt(e);
  return [t];
}
function vp(e) {
  var t = Pr(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function gp(e) {
  var t = Rt(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function mp(e) {
  var t = Pr(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function _p(e) {
  var t = Rt(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Ep(e) {
  var t = Pr(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function Tp(e) {
  var t = Rt(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function wp(e) {
  var t = Pr(e), r = cr(e);
  return [t, r, "n"];
}
function ef(e) {
  var t = Rt(e), r = cr(e);
  return [t, r, "n"];
}
function kp(e) {
  var t = Pr(e), r = M0(e);
  return [t, r, "n"];
}
function yp(e) {
  var t = Rt(e), r = M0(e);
  return [t, r, "n"];
}
function Fp(e) {
  var t = Pr(e), r = P0(e);
  return [t, r, "is"];
}
function Ap(e) {
  var t = Pr(e), r = or(e);
  return [t, r, "str"];
}
function Sp(e) {
  var t = Rt(e), r = or(e);
  return [t, r, "str"];
}
function Cp(e, t, r) {
  var a = e.l + t, n = Pr(e);
  n.r = r["!row"];
  var s = e.read_shift(1), i = [n, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rn(e, a - e.l, r);
    i[3] = ir(c, null, n, r.supbooks, r);
  } else
    e.l = a;
  return i;
}
function Op(e, t, r) {
  var a = e.l + t, n = Pr(e);
  n.r = r["!row"];
  var s = e.read_shift(1), i = [n, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rn(e, a - e.l, r);
    i[3] = ir(c, null, n, r.supbooks, r);
  } else
    e.l = a;
  return i;
}
function Dp(e, t, r) {
  var a = e.l + t, n = Pr(e);
  n.r = r["!row"];
  var s = cr(e), i = [n, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rn(e, a - e.l, r);
    i[3] = ir(c, null, n, r.supbooks, r);
  } else
    e.l = a;
  return i;
}
function Ip(e, t, r) {
  var a = e.l + t, n = Pr(e);
  n.r = r["!row"];
  var s = or(e), i = [n, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rn(e, a - e.l, r);
    i[3] = ir(c, null, n, r.supbooks, r);
  } else
    e.l = a;
  return i;
}
var Rp = Nt;
function Np(e, t) {
  var r = e.l + t, a = Nt(e), n = L0(e), s = or(e), i = or(e), c = or(e);
  e.l = r;
  var f = { rfx: a, relId: n, loc: s, display: c };
  return i && (f.Tooltip = i), f;
}
function bp() {
}
function Pp(e, t, r) {
  var a = e.l + t, n = gc(e), s = e.read_shift(1), i = [n];
  if (i[2] = s, r.cellFormula) {
    var c = Hd(e, a - e.l, r);
    i[1] = c;
  } else
    e.l = a;
  return i;
}
function Lp(e, t, r) {
  var a = e.l + t, n = Nt(e), s = [n];
  if (r.cellFormula) {
    var i = $d(e, a - e.l, r);
    s[1] = i, e.l = a;
  } else
    e.l = a;
  return s;
}
var Mp = ["left", "right", "top", "bottom", "header", "footer"];
function Bp(e) {
  var t = {};
  return Mp.forEach(function(r) {
    t[r] = cr(e);
  }), t;
}
function Up(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function Hp() {
}
function Vp() {
}
function $p(e, t, r, a, n, s, i) {
  if (!e)
    return e;
  var c = t || {};
  a || (a = { "!id": {} });
  var f = c.dense ? [] : {}, l, o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, h = !1, x = !1, d, p, u, v, _, C, m, O, b, D = [];
  c.biff = 12, c["!row"] = 0;
  var w = 0, L = !1, I = [], z = {}, W = c.supbooks || /*::(*/
  n.supbooks || [[]];
  if (W.sharedf = z, W.arrayf = I, W.SheetNames = n.SheetNames || n.Sheets.map(function(De) {
    return De.name;
  }), !c.supbooks && (c.supbooks = W, n.Names))
    for (var P = 0; P < n.Names.length; ++P)
      W[0][P + 1] = n.Names[P];
  var K = [], fe = [], re = !1;
  wn[16] = { n: "BrtShortReal", f: ef };
  var ce;
  if (nt(e, function(G, ue, he) {
    if (!x)
      switch (he) {
        case 148:
          l = G;
          break;
        case 0:
          d = G, c.sheetRows && c.sheetRows <= d.r && (x = !0), O = ar(v = d.r), c["!row"] = d.r, (G.hidden || G.hpt || G.level != null) && (G.hpt && (G.hpx = Na(G.hpt)), fe[G.r] = G);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 62:
          switch (p = { t: G[2] }, G[2]) {
            case "n":
              p.v = G[1];
              break;
            case "s":
              m = wa[G[1]], p.v = m.t, p.r = m.r;
              break;
            case "b":
              p.v = !!G[1];
              break;
            case "e":
              p.v = G[1], c.cellText !== !1 && (p.w = bt[p.v]);
              break;
            case "str":
              p.t = "s", p.v = G[1];
              break;
            case "is":
              p.t = "s", p.v = G[1].t;
              break;
          }
          if ((u = i.CellXf[G[0].iStyleRef]) && Zc(p, u.numFmtId, null, c, s, i), _ = G[0].c == -1 ? _ + 1 : G[0].c, c.dense ? (f[v] || (f[v] = []), f[v][_] = p) : f[Ye(_) + O] = p, c.cellFormula) {
            for (L = !1, w = 0; w < I.length; ++w) {
              var A = I[w];
              d.r >= A[0].s.r && d.r <= A[0].e.r && _ >= A[0].s.c && _ <= A[0].e.c && (p.F = we(A[0]), L = !0);
            }
            !L && G.length > 3 && (p.f = G[3]);
          }
          if (o.s.r > d.r && (o.s.r = d.r), o.s.c > _ && (o.s.c = _), o.e.r < d.r && (o.e.r = d.r), o.e.c < _ && (o.e.c = _), c.cellDates && u && p.t == "n" && ea(pe[u.numFmtId])) {
            var H = Et(p.v);
            H && (p.t = "d", p.v = new Date(H.y, H.m - 1, H.d, H.H, H.M, H.S, H.u));
          }
          ce && (ce.type == "XLDAPR" && (p.D = !0), ce = void 0);
          break;
        case 1:
        case 12:
          if (!c.sheetStubs || h)
            break;
          p = { t: "z", v: void 0 }, _ = G[0].c == -1 ? _ + 1 : G[0].c, c.dense ? (f[v] || (f[v] = []), f[v][_] = p) : f[Ye(_) + O] = p, o.s.r > d.r && (o.s.r = d.r), o.s.c > _ && (o.s.c = _), o.e.r < d.r && (o.e.r = d.r), o.e.c < _ && (o.e.c = _), ce && (ce.type == "XLDAPR" && (p.D = !0), ce = void 0);
          break;
        case 176:
          D.push(G);
          break;
        case 49:
          ce = ((c.xlmeta || {}).Cell || [])[G - 1];
          break;
        case 494:
          var N = a["!id"][G.relId];
          for (N ? (G.Target = N.Target, G.loc && (G.Target += "#" + G.loc), G.Rel = N) : G.relId == "" && (G.Target = "#" + G.loc), v = G.rfx.s.r; v <= G.rfx.e.r; ++v)
            for (_ = G.rfx.s.c; _ <= G.rfx.e.c; ++_)
              c.dense ? (f[v] || (f[v] = []), f[v][_] || (f[v][_] = { t: "z", v: void 0 }), f[v][_].l = G) : (C = xe({ c: _, r: v }), f[C] || (f[C] = { t: "z", v: void 0 }), f[C].l = G);
          break;
        case 426:
          if (!c.cellFormula)
            break;
          I.push(G), b = c.dense ? f[v][_] : f[Ye(_) + O], b.f = ir(G[1], o, { r: d.r, c: _ }, W, c), b.F = we(G[0]);
          break;
        case 427:
          if (!c.cellFormula)
            break;
          z[xe(G[0].s)] = G[1], b = c.dense ? f[v][_] : f[Ye(_) + O], b.f = ir(G[1], o, { r: d.r, c: _ }, W, c);
          break;
        case 60:
          if (!c.cellStyles)
            break;
          for (; G.e >= G.s; )
            K[G.e--] = { width: G.w / 256, hidden: !!(G.flags & 1), level: G.level }, re || (re = !0, V0(G.w / 256)), Kt(K[G.e + 1]);
          break;
        case 161:
          f["!autofilter"] = { ref: we(G) };
          break;
        case 476:
          f["!margins"] = G;
          break;
        case 147:
          n.Sheets[r] || (n.Sheets[r] = {}), G.name && (n.Sheets[r].CodeName = G.name), (G.above || G.left) && (f["!outline"] = { above: G.above, left: G.left });
          break;
        case 137:
          n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), G.RTL && (n.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        case 1053:
          break;
        case 151:
          break;
        case 152:
        case 175:
        case 644:
        case 625:
        case 562:
        case 396:
        case 1112:
        case 1146:
        case 471:
        case 1050:
        case 649:
        case 1105:
        case 589:
        case 607:
        case 564:
        case 1055:
        case 168:
        case 174:
        case 1180:
        case 499:
        case 507:
        case 550:
        case 171:
        case 167:
        case 1177:
        case 169:
        case 1181:
        case 551:
        case 552:
        case 661:
        case 639:
        case 478:
        case 537:
        case 477:
        case 536:
        case 1103:
        case 680:
        case 1104:
        case 1024:
        case 663:
        case 535:
        case 678:
        case 504:
        case 1043:
        case 428:
        case 170:
        case 3072:
        case 50:
        case 2070:
        case 1045:
          break;
        case 35:
          h = !0;
          break;
        case 36:
          h = !1;
          break;
        case 37:
          h = !0;
          break;
        case 38:
          h = !1;
          break;
        default:
          if (!ue.T) {
            if (!h || c.WTF)
              throw new Error("Unexpected record 0x" + he.toString(16));
          }
      }
  }, c), delete c.supbooks, delete c["!row"], !f["!ref"] && (o.s.r < 2e6 || l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0)) && (f["!ref"] = we(l || o)), c.sheetRows && f["!ref"]) {
    var ie = Ue(f["!ref"]);
    c.sheetRows <= +ie.e.r && (ie.e.r = c.sheetRows - 1, ie.e.r > o.e.r && (ie.e.r = o.e.r), ie.e.r < ie.s.r && (ie.s.r = ie.e.r), ie.e.c > o.e.c && (ie.e.c = o.e.c), ie.e.c < ie.s.c && (ie.s.c = ie.e.c), f["!fullref"] = f["!ref"], f["!ref"] = we(ie));
  }
  return D.length > 0 && (f["!merges"] = D), K.length > 0 && (f["!cols"] = K), fe.length > 0 && (f["!rows"] = fe), f;
}
function Wp(e) {
  var t = [], r = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(s) {
    var i = s.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    i && (t[+i[1]] = r ? +i[2] : i[2]);
  });
  var n = ye((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(s) {
    a = s.replace(/<.*?>/g, "");
  }), [t, n, a];
}
function Gp(e, t, r, a, n, s) {
  var i = s || { "!type": "chart" };
  if (!e)
    return s;
  var c = 0, f = 0, l = "A", o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(h) {
    var x = Wp(h);
    o.s.r = o.s.c = 0, o.e.c = c, l = Ye(c), x[0].forEach(function(d, p) {
      i[l + ar(p)] = { t: "n", v: d, z: x[1] }, f = p;
    }), o.e.r < f && (o.e.r = f), ++c;
  }), c > 0 && (i["!ref"] = we(o)), i;
}
function zp(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i, c = e.match(Qc);
  return c && W0(c[0], s, n, r), (i = e.match(/drawing r:id="(.*?)"/)) && (s["!rel"] = i[1]), a["!id"][s["!rel"]] && (s["!drawel"] = a["!id"][s["!rel"]]), s;
}
function Xp(e, t) {
  e.l += 10;
  var r = or(e);
  return { name: r };
}
function jp(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i = !1;
  return nt(e, function(f, l, o) {
    switch (o) {
      case 550:
        s["!rel"] = f;
        break;
      case 651:
        n.Sheets[r] || (n.Sheets[r] = {}), f.name && (n.Sheets[r].CodeName = f.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(l.T > 0)) {
          if (!(l.T < 0)) {
            if (!i || t.WTF)
              throw new Error("Unexpected record 0x" + o.toString(16));
          }
        }
    }
  }, t), a["!id"][s["!rel"]] && (s["!drawel"] = a["!id"][s["!rel"]]), s;
}
var rf = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], Kp = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], Yp = [
  //['state', 'visible']
], qp = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function Qs(e, t) {
  for (var r = 0; r != e.length; ++r)
    for (var a = e[r], n = 0; n != t.length; ++n) {
      var s = t[n];
      if (a[s[0]] == null)
        a[s[0]] = s[1];
      else
        switch (s[2]) {
          case "bool":
            typeof a[s[0]] == "string" && (a[s[0]] = Ie(a[s[0]]));
            break;
          case "int":
            typeof a[s[0]] == "string" && (a[s[0]] = parseInt(a[s[0]], 10));
            break;
        }
    }
}
function ei(e, t) {
  for (var r = 0; r != t.length; ++r) {
    var a = t[r];
    if (e[a[0]] == null)
      e[a[0]] = a[1];
    else
      switch (a[2]) {
        case "bool":
          typeof e[a[0]] == "string" && (e[a[0]] = Ie(e[a[0]]));
          break;
        case "int":
          typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
          break;
      }
  }
}
function tf(e) {
  ei(e.WBProps, rf), ei(e.CalcPr, qp), Qs(e.WBView, Kp), Qs(e.Sheets, Yp), Xt.date1904 = Ie(e.WBProps.date1904);
}
var Jp = /* @__PURE__ */ "][*?/\\".split("");
function Zp(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return Jp.forEach(function(a) {
    if (e.indexOf(a) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
var Qp = /<\w+:workbook/;
function e2(e, t) {
  if (!e)
    throw new Error("Could not find file");
  var r = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), a = !1, n = "xmlns", s = {}, i = 0;
  if (e.replace(ur, function(f, l) {
    var o = le(f);
    switch (Yr(o[0])) {
      case "<?xml":
        break;
      case "<workbook":
        f.match(Qp) && (n = "xmlns" + f.match(/<(\w+):/)[1]), r.xmlns = o[n];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete o[0], r.AppVersion = o;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        rf.forEach(function(h) {
          if (o[h[0]] != null)
            switch (h[2]) {
              case "bool":
                r.WBProps[h[0]] = Ie(o[h[0]]);
                break;
              case "int":
                r.WBProps[h[0]] = parseInt(o[h[0]], 10);
                break;
              default:
                r.WBProps[h[0]] = o[h[0]];
            }
        }), o.codeName && (r.WBProps.CodeName = Oe(o.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete o[0], r.WBView.push(o);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (o.state) {
          case "hidden":
            o.Hidden = 1;
            break;
          case "veryHidden":
            o.Hidden = 2;
            break;
          default:
            o.Hidden = 0;
        }
        delete o.state, o.name = ye(Oe(o.name)), delete o[0], r.Sheets.push(o);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        a = !0;
        break;
      case "</definedNames>":
        a = !1;
        break;
      case "<definedName":
        s = {}, s.Name = Oe(o.name), o.comment && (s.Comment = o.comment), o.localSheetId && (s.Sheet = +o.localSheetId), Ie(o.hidden || "0") && (s.Hidden = !0), i = l + f.length;
        break;
      case "</definedName>":
        s.Ref = ye(Oe(e.slice(i, l))), r.Names.push(s);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete o[0], r.CalcPr = o;
        break;
      case "<calcPr/>":
        delete o[0], r.CalcPr = o;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        a = !0;
        break;
      case "</AlternateContent>":
        a = !1;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + o[0] + " in workbook");
    }
    return f;
  }), ml.indexOf(r.xmlns) === -1)
    throw new Error("Unknown Namespace: " + r.xmlns);
  return tf(r), r;
}
function r2(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = e0(e), r.name = or(e), r;
}
function t2(e, t) {
  var r = {}, a = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var n = t > 8 ? or(e) : "";
  return n.length > 0 && (r.CodeName = n), r.autoCompressPictures = !!(a & 65536), r.backupFile = !!(a & 64), r.checkCompatibility = !!(a & 4096), r.date1904 = !!(a & 1), r.filterPrivacy = !!(a & 8), r.hidePivotFieldList = !!(a & 1024), r.promptedSolutions = !!(a & 16), r.publishItems = !!(a & 2048), r.refreshAllConnections = !!(a & 262144), r.saveExternalLinkValues = !!(a & 128), r.showBorderUnselectedTables = !!(a & 4), r.showInkAnnotation = !!(a & 32), r.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], r.showPivotChartFilter = !!(a & 32768), r.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], r;
}
function a2(e, t) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += t - 8, r;
}
function n2(e, t, r) {
  var a = e.l + t;
  e.l += 4, e.l += 1;
  var n = e.read_shift(4), s = Ll(e), i = Vd(e, 0, r), c = L0(e);
  e.l = a;
  var f = { Name: s, Ptg: i };
  return n < 268435455 && (f.Sheet = n), c && (f.Comment = c), f;
}
function s2(e, t) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = !1;
  t || (t = {}), t.biff = 12;
  var s = [], i = [[]];
  return i.SheetNames = [], i.XTI = [], wn[16] = { n: "BrtFRTArchID$", f: a2 }, nt(e, function(f, l, o) {
    switch (o) {
      case 156:
        i.SheetNames.push(f.name), r.Sheets.push(f);
        break;
      case 153:
        r.WBProps = f;
        break;
      case 39:
        f.Sheet != null && (t.SID = f.Sheet), f.Ref = ir(f.Ptg, null, null, i, t), delete t.SID, delete f.Ptg, s.push(f);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        i[0].length ? i.push([o, f]) : i[0] = [o, f], i[i.length - 1].XTI = [];
        break;
      case 362:
        i.length === 0 && (i[0] = [], i[0].XTI = []), i[i.length - 1].XTI = i[i.length - 1].XTI.concat(f), i.XTI = i.XTI.concat(f);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        a.push(o), n = !0;
        break;
      case 36:
        a.pop(), n = !1;
        break;
      case 37:
        a.push(o), n = !0;
        break;
      case 38:
        a.pop(), n = !1;
        break;
      case 16:
        break;
      default:
        if (!l.T) {
          if (!n || t.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }, t), tf(r), r.Names = s, r.supbooks = i, r;
}
function i2(e, t, r) {
  return t.slice(-4) === ".bin" ? s2(e, r) : e2(e, r);
}
function c2(e, t, r, a, n, s, i, c) {
  return t.slice(-4) === ".bin" ? $p(e, a, r, n, s, i, c) : rp(e, a, r, n, s, i, c);
}
function f2(e, t, r, a, n, s, i, c) {
  return t.slice(-4) === ".bin" ? jp(e, a, r, n, s) : zp(e, a, r, n, s);
}
function o2(e, t, r, a, n, s, i, c) {
  return t.slice(-4) === ".bin" ? gx() : mx();
}
function l2(e, t, r, a, n, s, i, c) {
  return t.slice(-4) === ".bin" ? px() : vx();
}
function u2(e, t, r, a) {
  return t.slice(-4) === ".bin" ? Rh(e, r, a) : Ah(e, r, a);
}
function h2(e, t, r) {
  return $c(e, r);
}
function x2(e, t, r) {
  return t.slice(-4) === ".bin" ? K1(e, r) : X1(e, r);
}
function d2(e, t, r) {
  return t.slice(-4) === ".bin" ? hx(e, r) : cx(e, r);
}
function p2(e, t, r) {
  return t.slice(-4) === ".bin" ? nx(e) : tx(e);
}
function v2(e, t, r, a) {
  return r.slice(-4) === ".bin" ? sx(e, t, r, a) : void 0;
}
function g2(e, t, r) {
  return t.slice(-4) === ".bin" ? ex(e, t, r) : rx(e, t, r);
}
var af = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, nf = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Lr(e, t) {
  var r = e.split(/\s+/), a = [];
  if (t || (a[0] = r[0]), r.length === 1)
    return a;
  var n = e.match(af), s, i, c, f;
  if (n)
    for (f = 0; f != n.length; ++f)
      s = n[f].match(nf), (i = s[1].indexOf(":")) === -1 ? a[s[1]] = s[2].slice(1, s[2].length - 1) : (s[1].slice(0, 6) === "xmlns:" ? c = "xmlns" + s[1].slice(6) : c = s[1].slice(i + 1), a[c] = s[2].slice(1, s[2].length - 1));
  return a;
}
function m2(e) {
  var t = e.split(/\s+/), r = {};
  if (t.length === 1)
    return r;
  var a = e.match(af), n, s, i, c;
  if (a)
    for (c = 0; c != a.length; ++c)
      n = a[c].match(nf), (s = n[1].indexOf(":")) === -1 ? r[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? i = "xmlns" + n[1].slice(6) : i = n[1].slice(s + 1), r[i] = n[2].slice(1, n[2].length - 1));
  return r;
}
var ya;
function _2(e, t) {
  var r = ya[e] || ye(e);
  return r === "General" ? At(t) : br(r, t);
}
function E2(e, t, r, a) {
  var n = a;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = Ie(a);
      break;
    case "i2":
    case "int":
      n = parseInt(a, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(a);
      break;
    case "date":
    case "dateTime.tz":
      n = er(a);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[ye(t)] = n;
}
function T2(e, t, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || bt[e.v] : t === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Ca(e.v) : e.w = At(e.v) : e.w = _2(t || "General", e.v);
      } catch (s) {
        if (r.WTF)
          throw s;
      }
    try {
      var a = ya[t] || t || "General";
      if (r.cellNF && (e.z = a), r.cellDates && e.t == "n" && ea(a)) {
        var n = Et(e.v);
        n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
      }
    } catch (s) {
      if (r.WTF)
        throw s;
    }
  }
}
function w2(e, t, r) {
  if (r.cellStyles && t.Interior) {
    var a = t.Interior;
    a.Pattern && (a.patternType = Eh[a.Pattern] || a.Pattern);
  }
  e[t.ID] = t;
}
function k2(e, t, r, a, n, s, i, c, f, l) {
  var o = "General", h = a.StyleID, x = {};
  l = l || {};
  var d = [], p = 0;
  for (h === void 0 && c && (h = c.StyleID), h === void 0 && i && (h = i.StyleID); s[h] !== void 0 && (s[h].nf && (o = s[h].nf), s[h].Interior && d.push(s[h].Interior), !!s[h].Parent); )
    h = s[h].Parent;
  switch (r.Type) {
    case "Boolean":
      a.t = "b", a.v = Ie(e);
      break;
    case "String":
      a.t = "s", a.r = ws(ye(e)), a.v = e.indexOf("<") > -1 ? ye(t || e).replace(/<.*?>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = (er(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3), a.v !== a.v ? a.v = ye(e) : a.v < 60 && (a.v = a.v - 1), (!o || o == "General") && (o = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = Ec[e], l.cellText !== !1 && (a.w = e);
      break;
    default:
      e == "" && t == "" ? a.t = "z" : (a.t = "s", a.v = ws(t || e));
      break;
  }
  if (T2(a, o, l), l.cellFormula !== !1)
    if (a.Formula) {
      var u = ye(a.Formula);
      u.charCodeAt(0) == 61 && (u = u.slice(1)), a.f = zt(u, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = zt("RC:RC", n) : a.ArrayRange && (a.F = zt(a.ArrayRange, n), f.push([Ue(a.F), a.F]));
    } else
      for (p = 0; p < f.length; ++p)
        n.r >= f[p][0].s.r && n.r <= f[p][0].e.r && n.c >= f[p][0].s.c && n.c <= f[p][0].e.c && (a.F = f[p][1]);
  l.cellStyles && (d.forEach(function(v) {
    !x.patternType && v.patternType && (x.patternType = v.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function y2(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Xn(e, t) {
  var r = t || {};
  zi();
  var a = ua(I0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (a = Oe(a));
  var n = a.slice(0, 1024).toLowerCase(), s = !1;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var i = tr(r);
    return i.type = "string", Ia.to_workbook(a, i);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(Ve) {
    n.indexOf("<" + Ve) >= 0 && (s = !0);
  }), s)
    return N2(a, r);
  ya = {
    "General Number": "General",
    "General Date": pe[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": pe[15],
    "Short Date": pe[14],
    "Long Time": pe[19],
    "Medium Time": pe[18],
    "Short Time": pe[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: pe[2],
    Standard: pe[4],
    Percent: pe[10],
    Scientific: pe[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var c, f = [], l, o = {}, h = [], x = r.dense ? [] : {}, d = "", p = {}, u = {}, v = Lr('<Data ss:Type="String">'), _ = 0, C = 0, m = 0, O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, b = {}, D = {}, w = "", L = 0, I = [], z = {}, W = {}, P = 0, K = [], fe = [], re = {}, ce = [], ie, De = !1, G = [], ue = [], he = {}, A = 0, H = 0, N = { Sheets: [], WBProps: { date1904: !1 } }, R = {};
  Da.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var j = ""; c = Da.exec(a); )
    switch (c[3] = (j = c[3]).toLowerCase()) {
      case "data":
        if (j == "data") {
          if (c[1] === "/") {
            if ((l = f.pop())[0] !== c[3])
              throw new Error("Bad state: " + l.join("|"));
          } else
            c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
          break;
        }
        if (f[f.length - 1][1])
          break;
        c[1] === "/" ? k2(a.slice(_, c.index), w, v, f[f.length - 1][0] == /*"Comment"*/
        "comment" ? re : p, { c: C, r: m }, b, ce[C], u, G, r) : (w = "", v = Lr(c[0]), _ = c.index + c[0].length);
        break;
      case "cell":
        if (c[1] === "/")
          if (fe.length > 0 && (p.c = fe), (!r.sheetRows || r.sheetRows > m) && p.v !== void 0 && (r.dense ? (x[m] || (x[m] = []), x[m][C] = p) : x[Ye(C) + ar(m)] = p), p.HRef && (p.l = { Target: ye(p.HRef) }, p.HRefScreenTip && (p.l.Tooltip = p.HRefScreenTip), delete p.HRef, delete p.HRefScreenTip), (p.MergeAcross || p.MergeDown) && (A = C + (parseInt(p.MergeAcross, 10) | 0), H = m + (parseInt(p.MergeDown, 10) | 0), I.push({ s: { c: C, r: m }, e: { c: A, r: H } })), !r.sheetStubs)
            p.MergeAcross ? C = A + 1 : ++C;
          else if (p.MergeAcross || p.MergeDown) {
            for (var ee = C; ee <= A; ++ee)
              for (var ne = m; ne <= H; ++ne)
                (ee > C || ne > m) && (r.dense ? (x[ne] || (x[ne] = []), x[ne][ee] = { t: "z" }) : x[Ye(ee) + ar(ne)] = { t: "z" });
            C = A + 1;
          } else
            ++C;
        else
          p = m2(c[0]), p.Index && (C = +p.Index - 1), C < O.s.c && (O.s.c = C), C > O.e.c && (O.e.c = C), c[0].slice(-2) === "/>" && ++C, fe = [];
        break;
      case "row":
        c[1] === "/" || c[0].slice(-2) === "/>" ? (m < O.s.r && (O.s.r = m), m > O.e.r && (O.e.r = m), c[0].slice(-2) === "/>" && (u = Lr(c[0]), u.Index && (m = +u.Index - 1)), C = 0, ++m) : (u = Lr(c[0]), u.Index && (m = +u.Index - 1), he = {}, (u.AutoFitHeight == "0" || u.Height) && (he.hpx = parseInt(u.Height, 10), he.hpt = Vc(he.hpx), ue[m] = he), u.Hidden == "1" && (he.hidden = !0, ue[m] = he));
        break;
      case "worksheet":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
          h.push(d), O.s.r <= O.e.r && O.s.c <= O.e.c && (x["!ref"] = we(O), r.sheetRows && r.sheetRows <= O.e.r && (x["!fullref"] = x["!ref"], O.e.r = r.sheetRows - 1, x["!ref"] = we(O))), I.length && (x["!merges"] = I), ce.length > 0 && (x["!cols"] = ce), ue.length > 0 && (x["!rows"] = ue), o[d] = x;
        } else
          O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, m = C = 0, f.push([c[3], !1]), l = Lr(c[0]), d = ye(l.Name), x = r.dense ? [] : {}, I = [], G = [], ue = [], R = { name: d, Hidden: 0 }, N.Sheets.push(R);
        break;
      case "table":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else {
          if (c[0].slice(-2) == "/>")
            break;
          f.push([c[3], !1]), ce = [], De = !1;
        }
        break;
      case "style":
        c[1] === "/" ? w2(b, D, r) : D = Lr(c[0]);
        break;
      case "numberformat":
        D.nf = ye(Lr(c[0]).Format || "General"), ya[D.nf] && (D.nf = ya[D.nf]);
        for (var Z = 0; Z != 392 && pe[Z] != D.nf; ++Z)
          ;
        if (Z == 392) {
          for (Z = 57; Z != 392; ++Z)
            if (pe[Z] == null) {
              kt(D.nf, Z);
              break;
            }
        }
        break;
      case "column":
        if (f[f.length - 1][0] !== /*'Table'*/
        "table")
          break;
        if (ie = Lr(c[0]), ie.Hidden && (ie.hidden = !0, delete ie.Hidden), ie.Width && (ie.wpx = parseInt(ie.Width, 10)), !De && ie.wpx > 10) {
          De = !0, dr = Uc;
          for (var q = 0; q < ce.length; ++q)
            ce[q] && Kt(ce[q]);
        }
        De && Kt(ie), ce[ie.Index - 1 || ce.length] = ie;
        for (var ke = 0; ke < +ie.Span; ++ke)
          ce[ce.length] = tr(ie);
        break;
      case "namedrange":
        if (c[1] === "/")
          break;
        N.Names || (N.Names = []);
        var S = le(c[0]), He = {
          Name: S.Name,
          Ref: zt(S.RefersTo.slice(1), { r: 0, c: 0 })
        };
        N.Sheets.length > 0 && (He.Sheet = N.Sheets.length - 1), N.Names.push(He);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (c[0].slice(-2) === "/>")
          break;
        c[1] === "/" ? w += a.slice(L, c.index) : L = c.index + c[0].length;
        break;
      case "interior":
        if (!r.cellStyles)
          break;
        D.Interior = Lr(c[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (c[0].slice(-2) === "/>")
          break;
        c[1] === "/" ? cu(z, j, a.slice(P, c.index)) : P = c.index + c[0].length;
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          f.push([c[3], !1]);
        break;
      case "comment":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
          y2(re), fe.push(re);
        } else
          f.push([c[3], !1]), l = Lr(c[0]), re = { a: l.Author };
        break;
      case "autofilter":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else if (c[0].charAt(c[0].length - 2) !== "/") {
          var Fe = Lr(c[0]);
          x["!autofilter"] = { ref: zt(Fe.Range).replace(/\$/g, "") }, f.push([c[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "null":
        break;
      default:
        if (f.length == 0 && c[3] == "document" || f.length == 0 && c[3] == "uof")
          return ii(a, r);
        var Ce = !0;
        switch (f[f.length - 1][0]) {
          case "officedocumentsettings":
            switch (c[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                Ce = !1;
            }
            break;
          case "componentoptions":
            switch (c[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                Ce = !1;
            }
            break;
          case "excelworkbook":
            switch (c[3]) {
              case "date1904":
                N.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                Ce = !1;
            }
            break;
          case "workbookoptions":
            switch (c[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                Ce = !1;
            }
            break;
          case "worksheetoptions":
            switch (c[3]) {
              case "visible":
                if (c[0].slice(-2) !== "/>")
                  if (c[1] === "/")
                    switch (a.slice(P, c.index)) {
                      case "SheetHidden":
                        R.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        R.Hidden = 2;
                        break;
                    }
                  else
                    P = c.index + c[0].length;
                break;
              case "header":
                x["!margins"] || ka(x["!margins"] = {}, "xlml"), isNaN(+le(c[0]).Margin) || (x["!margins"].header = +le(c[0]).Margin);
                break;
              case "footer":
                x["!margins"] || ka(x["!margins"] = {}, "xlml"), isNaN(+le(c[0]).Margin) || (x["!margins"].footer = +le(c[0]).Margin);
                break;
              case "pagemargins":
                var me = le(c[0]);
                x["!margins"] || ka(x["!margins"] = {}, "xlml"), isNaN(+me.Top) || (x["!margins"].top = +me.Top), isNaN(+me.Left) || (x["!margins"].left = +me.Left), isNaN(+me.Right) || (x["!margins"].right = +me.Right), isNaN(+me.Bottom) || (x["!margins"].bottom = +me.Bottom);
                break;
              case "displayrighttoleft":
                N.Views || (N.Views = []), N.Views[0] || (N.Views[0] = {}), N.Views[0].RTL = !0;
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].above = !0;
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].left = !0;
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                Ce = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (c[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                Ce = !1;
            }
            break;
          case "pagebreaks":
            switch (c[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                Ce = !1;
            }
            break;
          case "autofilter":
            switch (c[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                Ce = !1;
            }
            break;
          case "querytable":
            switch (c[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                Ce = !1;
            }
            break;
          case "datavalidation":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                Ce = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                Ce = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (c[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                Ce = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            Ce = !1;
            break;
        }
        if (Ce || c[3].match(/!\[CDATA/))
          break;
        if (!f[f.length - 1][1])
          throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
        if (f[f.length - 1][0] === /*'CustomDocumentProperties'*/
        "customdocumentproperties") {
          if (c[0].slice(-2) === "/>")
            break;
          c[1] === "/" ? E2(W, j, K, a.slice(P, c.index)) : (K = c, P = c.index + c[0].length);
          break;
        }
        if (r.WTF)
          throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
    }
  var te = {};
  return !r.bookSheets && !r.bookProps && (te.Sheets = o), te.SheetNames = h, te.Workbook = N, te.SSF = tr(pe), te.Props = z, te.Custprops = W, te;
}
function n0(e, t) {
  switch (X0(t = t || {}), t.type || "base64") {
    case "base64":
      return Xn(Sr(e), t);
    case "binary":
    case "buffer":
    case "file":
      return Xn(e, t);
    case "array":
      return Xn(It(e), t);
  }
}
function F2(e) {
  var t = {}, r = e.content;
  if (r.l = 28, t.AnsiUserType = r.read_shift(0, "lpstr-ansi"), t.AnsiClipboardFormat = Ul(r), r.length - r.l <= 4)
    return t;
  var a = r.read_shift(4);
  if (a == 0 || a > 40 || (r.l -= 4, t.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (a = r.read_shift(4), a !== 1907505652) || (t.UnicodeClipboardFormat = Hl(r), a = r.read_shift(4), a == 0 || a > 40))
    return t;
  r.l -= 4, t.Reserved2 = r.read_shift(0, "lpwstr");
}
var A2 = [60, 1084, 2066, 2165, 2175];
function S2(e, t, r, a, n) {
  var s = a, i = [], c = r.slice(r.l, r.l + s);
  if (n && n.enc && n.enc.insitu && c.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        n.enc.insitu(c);
    }
  i.push(c), r.l += s;
  for (var f = et(r, r.l), l = s0[f], o = 0; l != null && A2.indexOf(f) > -1; )
    s = et(r, r.l + 2), o = r.l + 4, f == 2066 ? o += 4 : (f == 2165 || f == 2175) && (o += 12), c = r.slice(o, r.l + 4 + s), i.push(c), r.l += 4 + s, l = s0[f = et(r, r.l)];
  var h = ot(i);
  rr(h, 0);
  var x = 0;
  h.lens = [];
  for (var d = 0; d < i.length; ++d)
    h.lens.push(x), x += i[d].length;
  if (h.length < a)
    throw "XLS Record 0x" + e.toString(16) + " Truncated: " + h.length + " < " + a;
  return t.f(h, h.length, n);
}
function Xr(e, t, r) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, t.cellNF && (e.z = pe[a]);
    } catch (s) {
      if (t.WTF)
        throw s;
    }
    if (!t || t.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || bt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Ca(e.v) : e.w = At(e.v) : e.w = br(a, e.v, { date1904: !!r, dateNF: t && t.dateNF });
      } catch (s) {
        if (t.WTF)
          throw s;
      }
    if (t.cellDates && a && e.t == "n" && ea(pe[a] || String(a))) {
      var n = Et(e.v);
      n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
    }
  }
}
function an(e, t, r) {
  return { v: e, ixfe: t, t: r };
}
function C2(e, t) {
  var r = { opts: {} }, a = {}, n = t.dense ? [] : {}, s = {}, i = {}, c = null, f = [], l = "", o = {}, h, x = "", d, p, u, v, _ = {}, C = [], m, O, b = [], D = [], w = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, L = {}, I = function(ge) {
    return ge < 8 ? yt[ge] : ge < 64 && D[ge - 8] || yt[ge];
  }, z = function(ge, $e, Dr) {
    var je = $e.XF.data;
    if (!(!je || !je.patternType || !Dr || !Dr.cellStyles)) {
      $e.s = {}, $e.s.patternType = je.patternType;
      var vt;
      (vt = Ra(I(je.icvFore))) && ($e.s.fgColor = { rgb: vt }), (vt = Ra(I(je.icvBack))) && ($e.s.bgColor = { rgb: vt });
    }
  }, W = function(ge, $e, Dr) {
    if (!(he > 1) && !(Dr.sheetRows && ge.r >= Dr.sheetRows)) {
      if (Dr.cellStyles && $e.XF && $e.XF.data && z(ge, $e, Dr), delete $e.ixfe, delete $e.XF, h = ge, x = xe(ge), (!i || !i.s || !i.e) && (i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), ge.r < i.s.r && (i.s.r = ge.r), ge.c < i.s.c && (i.s.c = ge.c), ge.r + 1 > i.e.r && (i.e.r = ge.r + 1), ge.c + 1 > i.e.c && (i.e.c = ge.c + 1), Dr.cellFormula && $e.f) {
        for (var je = 0; je < C.length; ++je)
          if (!(C[je][0].s.c > ge.c || C[je][0].s.r > ge.r) && !(C[je][0].e.c < ge.c || C[je][0].e.r < ge.r)) {
            $e.F = we(C[je][0]), (C[je][0].s.c != ge.c || C[je][0].s.r != ge.r) && delete $e.f, $e.f && ($e.f = "" + ir(C[je][1], i, ge, G, P));
            break;
          }
      }
      Dr.dense ? (n[ge.r] || (n[ge.r] = []), n[ge.r][ge.c] = $e) : n[x] = $e;
    }
  }, P = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: _,
    // shared formulae by address
    arrayf: C,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!t && !!t.cellStyles,
    WTF: !!t && !!t.wtf
  };
  t.password && (P.password = t.password);
  var K, fe = [], re = [], ce = [], ie = [], De = !1, G = [];
  G.SheetNames = P.snames, G.sharedf = P.sharedf, G.arrayf = P.arrayf, G.names = [], G.XTI = [];
  var ue = 0, he = 0, A = 0, H = [], N = [], R;
  P.codepage = 1200, Ur(1200);
  for (var j = !1; e.l < e.length - 1; ) {
    var ee = e.l, ne = e.read_shift(2);
    if (ne === 0 && ue === 10)
      break;
    var Z = e.l === e.length ? 0 : e.read_shift(2), q = s0[ne];
    if (q && q.f) {
      if (t.bookSheets && ue === 133 && ne !== 133)
        break;
      if (ue = ne, q.r === 2 || q.r == 12) {
        var ke = e.read_shift(2);
        if (Z -= 2, !P.enc && ke !== ne && ((ke & 255) << 8 | ke >> 8) !== ne)
          throw new Error("rt mismatch: " + ke + "!=" + ne);
        q.r == 12 && (e.l += 10, Z -= 10);
      }
      var S = {};
      if (ne === 10 ? S = /*::(*/
      q.f(e, Z, P) : S = /*::(*/
      S2(ne, q, e, Z, P), he == 0 && [9, 521, 1033, 2057].indexOf(ue) === -1)
        continue;
      switch (ne) {
        case 34:
          r.opts.Date1904 = w.WBProps.date1904 = S;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (P.enc || (e.l = 0), P.enc = S, !t.password)
            throw new Error("File is password-protected");
          if (S.valid == null)
            throw new Error("Encryption scheme unsupported");
          if (!S.valid)
            throw new Error("Password is incorrect");
          break;
        case 92:
          P.lastuser = S;
          break;
        case 66:
          var He = Number(S);
          switch (He) {
            case 21010:
              He = 1200;
              break;
            case 32768:
              He = 1e4;
              break;
            case 32769:
              He = 1252;
              break;
          }
          Ur(P.codepage = He), j = !0;
          break;
        case 317:
          P.rrtabid = S;
          break;
        case 25:
          P.winlocked = S;
          break;
        case 439:
          r.opts.RefreshAll = S;
          break;
        case 12:
          r.opts.CalcCount = S;
          break;
        case 16:
          r.opts.CalcDelta = S;
          break;
        case 17:
          r.opts.CalcIter = S;
          break;
        case 13:
          r.opts.CalcMode = S;
          break;
        case 14:
          r.opts.CalcPrecision = S;
          break;
        case 95:
          r.opts.CalcSaveRecalc = S;
          break;
        case 15:
          P.CalcRefMode = S;
          break;
        case 2211:
          r.opts.FullCalc = S;
          break;
        case 129:
          S.fDialog && (n["!type"] = "dialog"), S.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0), S.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0);
          break;
        case 224:
          b.push(S);
          break;
        case 430:
          G.push([S]), G[G.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          G[G.length - 1].push(S);
          break;
        case 24:
        case 536:
          R = {
            Name: S.Name,
            Ref: ir(S.rgce, i, null, G, P)
          }, S.itab > 0 && (R.Sheet = S.itab - 1), G.names.push(R), G[0] || (G[0] = [], G[0].XTI = []), G[G.length - 1].push(S), S.Name == "_xlnm._FilterDatabase" && S.itab > 0 && S.rgce && S.rgce[0] && S.rgce[0][0] && S.rgce[0][0][0] == "PtgArea3d" && (N[S.itab - 1] = { ref: we(S.rgce[0][0][1][2]) });
          break;
        case 22:
          P.ExternCount = S;
          break;
        case 23:
          G.length == 0 && (G[0] = [], G[0].XTI = []), G[G.length - 1].XTI = G[G.length - 1].XTI.concat(S), G.XTI = G.XTI.concat(S);
          break;
        case 2196:
          if (P.biff < 8)
            break;
          R != null && (R.Comment = S[1]);
          break;
        case 18:
          n["!protect"] = S;
          break;
        case 19:
          S !== 0 && P.WTF && console.error("Password verifier: " + S);
          break;
        case 133:
          s[S.pos] = S, P.snames.push(S.name);
          break;
        case 10:
          {
            if (--he)
              break;
            if (i.e) {
              if (i.e.r > 0 && i.e.c > 0) {
                if (i.e.r--, i.e.c--, n["!ref"] = we(i), t.sheetRows && t.sheetRows <= i.e.r) {
                  var Fe = i.e.r;
                  i.e.r = t.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = we(i), i.e.r = Fe;
                }
                i.e.r++, i.e.c++;
              }
              fe.length > 0 && (n["!merges"] = fe), re.length > 0 && (n["!objects"] = re), ce.length > 0 && (n["!cols"] = ce), ie.length > 0 && (n["!rows"] = ie), w.Sheets.push(L);
            }
            l === "" ? o = n : a[l] = n, n = t.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (P.biff === 8 && (P.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[ne] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[S.BIFFVer] || 8), P.biffguess = S.BIFFVer == 0, S.BIFFVer == 0 && S.dt == 4096 && (P.biff = 5, j = !0, Ur(P.codepage = 28591)), P.biff == 8 && S.BIFFVer == 0 && S.dt == 16 && (P.biff = 2), he++)
              break;
            if (n = t.dense ? [] : {}, P.biff < 8 && !j && (j = !0, Ur(P.codepage = t.codepage || 1252)), P.biff < 5 || S.BIFFVer == 0 && S.dt == 4096) {
              l === "" && (l = "Sheet1"), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Ce = { pos: e.l - Z, name: l };
              s[Ce.pos] = Ce, P.snames.push(l);
            } else
              l = (s[ee] || { name: "" }).name;
            S.dt == 32 && (n["!type"] = "chart"), S.dt == 64 && (n["!type"] = "macro"), fe = [], re = [], P.arrayf = C = [], ce = [], ie = [], De = !1, L = { Hidden: (s[ee] || { hs: 0 }).hs, name: l };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (t.dense ? (n[S.r] || [])[S.c] : n[xe({ c: S.c, r: S.r })]) && ++S.c, m = { ixfe: S.ixfe, XF: b[S.ixfe] || {}, v: S.val, t: "n" }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t);
          break;
        case 5:
        case 517:
          m = { ixfe: S.ixfe, XF: b[S.ixfe], v: S.val, t: S.t }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t);
          break;
        case 638:
          m = { ixfe: S.ixfe, XF: b[S.ixfe], v: S.rknum, t: "n" }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t);
          break;
        case 189:
          for (var me = S.c; me <= S.C; ++me) {
            var te = S.rkrec[me - S.c][0];
            m = { ixfe: te, XF: b[te], v: S.rkrec[me - S.c][1], t: "n" }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: me, r: S.r }, m, t);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (S.val == "String") {
              c = S;
              break;
            }
            if (m = an(S.val, S.cell.ixfe, S.tt), m.XF = b[m.ixfe], t.cellFormula) {
              var Ve = S.formula;
              if (Ve && Ve[0] && Ve[0][0] && Ve[0][0][0] == "PtgExp") {
                var Or = Ve[0][0][1][0], Gr = Ve[0][0][1][1], Jr = xe({ r: Or, c: Gr });
                _[Jr] ? m.f = "" + ir(S.formula, i, S.cell, G, P) : m.F = ((t.dense ? (n[Or] || [])[Gr] : n[Jr]) || {}).F;
              } else
                m.f = "" + ir(S.formula, i, S.cell, G, P);
            }
            A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W(S.cell, m, t), c = S;
          }
          break;
        case 7:
        case 519:
          if (c)
            c.val = S, m = an(S, c.cell.ixfe, "s"), m.XF = b[m.ixfe], t.cellFormula && (m.f = "" + ir(c.formula, i, c.cell, G, P)), A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W(c.cell, m, t), c = null;
          else
            throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            C.push(S);
            var sa = xe(S[0].s);
            if (d = t.dense ? (n[S[0].s.r] || [])[S[0].s.c] : n[sa], t.cellFormula && d) {
              if (!c || !sa || !d)
                break;
              d.f = "" + ir(S[1], i, S[0], G, P), d.F = we(S[0]);
            }
          }
          break;
        case 1212:
          {
            if (!t.cellFormula)
              break;
            if (x) {
              if (!c)
                break;
              _[xe(c.cell)] = S[0], d = t.dense ? (n[c.cell.r] || [])[c.cell.c] : n[xe(c.cell)], (d || {}).f = "" + ir(S[0], i, h, G, P);
            }
          }
          break;
        case 253:
          m = an(f[S.isst].t, S.ixfe, "s"), f[S.isst].h && (m.h = f[S.isst].h), m.XF = b[m.ixfe], A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t);
          break;
        case 513:
          t.sheetStubs && (m = { ixfe: S.ixfe, XF: b[S.ixfe], t: "z" }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t));
          break;
        case 190:
          if (t.sheetStubs)
            for (var st = S.c; st <= S.C; ++st) {
              var wr = S.ixfe[st - S.c];
              m = { ixfe: wr, XF: b[wr], t: "z" }, A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: st, r: S.r }, m, t);
            }
          break;
        case 214:
        case 516:
        case 4:
          m = an(S.val, S.ixfe, "s"), m.XF = b[m.ixfe], A > 0 && (m.z = H[m.ixfe >> 8 & 63]), Xr(m, t, r.opts.Date1904), W({ c: S.c, r: S.r }, m, t);
          break;
        case 0:
        case 512:
          he === 1 && (i = S);
          break;
        case 252:
          f = S;
          break;
        case 1054:
          if (P.biff == 4) {
            H[A++] = S[1];
            for (var Zr = 0; Zr < A + 163 && pe[Zr] != S[1]; ++Zr)
              ;
            Zr >= 163 && kt(S[1], A + 163);
          } else
            kt(S[1], S[0]);
          break;
        case 30:
          {
            H[A++] = S;
            for (var it = 0; it < A + 163 && pe[it] != S; ++it)
              ;
            it >= 163 && kt(S, A + 163);
          }
          break;
        case 229:
          fe = fe.concat(S);
          break;
        case 93:
          re[S.cmo[0]] = P.lastobj = S;
          break;
        case 438:
          P.lastobj.TxO = S;
          break;
        case 127:
          P.lastobj.ImData = S;
          break;
        case 440:
          for (v = S[0].s.r; v <= S[0].e.r; ++v)
            for (u = S[0].s.c; u <= S[0].e.c; ++u)
              d = t.dense ? (n[v] || [])[u] : n[xe({ c: u, r: v })], d && (d.l = S[1]);
          break;
        case 2048:
          for (v = S[0].s.r; v <= S[0].e.r; ++v)
            for (u = S[0].s.c; u <= S[0].e.c; ++u)
              d = t.dense ? (n[v] || [])[u] : n[xe({ c: u, r: v })], d && d.l && (d.l.Tooltip = S[1]);
          break;
        case 28:
          {
            if (P.biff <= 5 && P.biff >= 2)
              break;
            d = t.dense ? (n[S[0].r] || [])[S[0].c] : n[xe(S[0])];
            var ia = re[S[2]];
            d || (t.dense ? (n[S[0].r] || (n[S[0].r] = []), d = n[S[0].r][S[0].c] = { t: "z" }) : d = n[xe(S[0])] = { t: "z" }, i.e.r = Math.max(i.e.r, S[0].r), i.s.r = Math.min(i.s.r, S[0].r), i.e.c = Math.max(i.e.c, S[0].c), i.s.c = Math.min(i.s.c, S[0].c)), d.c || (d.c = []), p = { a: S[1], t: ia.TxO.t }, d.c.push(p);
          }
          break;
        case 2173:
          qh(b[S.ixfe], S.ext);
          break;
        case 125:
          {
            if (!P.cellStyles)
              break;
            for (; S.e >= S.s; )
              ce[S.e--] = { width: S.w / 256, level: S.level || 0, hidden: !!(S.flags & 1) }, De || (De = !0, V0(S.w / 256)), Kt(ce[S.e + 1]);
          }
          break;
        case 520:
          {
            var hr = {};
            S.level != null && (ie[S.r] = hr, hr.level = S.level), S.hidden && (ie[S.r] = hr, hr.hidden = !0), S.hpt && (ie[S.r] = hr, hr.hpt = S.hpt, hr.hpx = Na(S.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || ka(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[ne]] = S;
          break;
        case 161:
          n["!margins"] || ka(n["!margins"] = {}), n["!margins"].header = S.header, n["!margins"].footer = S.footer;
          break;
        case 574:
          S.RTL && (w.Views[0].RTL = !0);
          break;
        case 146:
          D = S;
          break;
        case 2198:
          K = S;
          break;
        case 140:
          O = S;
          break;
        case 442:
          l ? L.CodeName = S || L.name : w.WBProps.CodeName = S || "ThisWorkbook";
          break;
      }
    } else
      q || console.error("Missing Info for XLS Record 0x" + ne.toString(16)), e.l += Z;
  }
  return r.SheetNames = Kr(s).sort(function(zr, ge) {
    return Number(zr) - Number(ge);
  }).map(function(zr) {
    return s[zr].name;
  }), t.bookSheets || (r.Sheets = a), !r.SheetNames.length && o["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = o)) : r.Preamble = o, r.Sheets && N.forEach(function(zr, ge) {
    r.Sheets[r.SheetNames[ge]]["!autofilter"] = zr;
  }), r.Strings = f, r.SSF = tr(pe), P.enc && (r.Encryption = P.enc), K && (r.Themes = K), r.Metadata = {}, O !== void 0 && (r.Metadata.Country = O), G.names.length > 0 && (w.Names = G.names), r.Workbook = w, r;
}
var ri = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function O2(e, t, r) {
  var a = Te.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0)
    try {
      var n = Bs(a, Xl, ri.DSI);
      for (var s in n)
        t[s] = n[s];
    } catch (l) {
      if (r.WTF)
        throw l;
    }
  var i = Te.find(e, "/!SummaryInformation");
  if (i && i.size > 0)
    try {
      var c = Bs(i, jl, ri.SI);
      for (var f in c)
        t[f] == null && (t[f] = c[f]);
    } catch (l) {
      if (r.WTF)
        throw l;
    }
  t.HeadingPairs && t.TitlesOfParts && (wc(t.HeadingPairs, t.TitlesOfParts, t, r), delete t.HeadingPairs, delete t.TitlesOfParts);
}
function sf(e, t) {
  t || (t = {}), X0(t), Ni(), t.codepage && y0(t.codepage);
  var r, a;
  if (e.FullPaths) {
    if (Te.find(e, "/encryption"))
      throw new Error("File is password-protected");
    r = Te.find(e, "!CompObj"), a = Te.find(e, "/Workbook") || Te.find(e, "/Book");
  } else {
    switch (t.type) {
      case "base64":
        e = Br(Sr(e));
        break;
      case "binary":
        e = Br(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    rr(e, 0), a = { content: e };
  }
  var n, s;
  if (r && F2(r), t.bookProps && !t.bookSheets)
    n = {};
  else {
    var i = Ee ? "buffer" : "array";
    if (a && a.content)
      n = C2(a.content, t);
    else if ((s = Te.find(e, "PerfectOffice_MAIN")) && s.content)
      n = Ta.to_workbook(s.content, (t.type = i, t));
    else if ((s = Te.find(e, "NativeContent_MAIN")) && s.content)
      n = Ta.to_workbook(s.content, (t.type = i, t));
    else
      throw (s = Te.find(e, "MN0")) && s.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    t.bookVBA && e.FullPaths && Te.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = dx(e));
  }
  var c = {};
  return e.FullPaths && O2(
    /*::((*/
    e,
    c,
    t
  ), n.Props = n.Custprops = c, t.bookFiles && (n.cfb = e), n;
}
var wn = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: lp
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: dp
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: kp
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: mp
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: vp
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: wp
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: Ap
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: Ep
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: Ip
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: Dp
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: Cp
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: Op
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: pp
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: yp
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: _p
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: gp
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: ef
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: Sp
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: Tp
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: P0
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: n2
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: Ch
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: Sh
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: Oh
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: Ih
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Dh
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Rl
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: Zh
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: bc
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: Fp
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: ax
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: Hp
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: lr,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Up
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: xp
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: up,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: bp
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: t2
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: r2
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: j1
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: Nt
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: Rp
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: Jh
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: Qh,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: e0
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Nc
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: Pp
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: Lp
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: Bp
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: hp
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Np
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: e0
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: ux
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: lx
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: bl
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: Xp
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: Vp
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
}, s0 = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: Gn
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: ct
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: Xe
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: Xe
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: We
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: We
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: cr
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: We
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: We
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: Xe
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: $s
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: $s
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: Nc
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: Gs
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: We
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: f1
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: We
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: Ws
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: cr
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: cr
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: cr
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: cr
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: We
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: We
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: hh
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: Wu
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: Xe
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: Hu
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: We
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: $u
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: Xe
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: Xe
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: Ru
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: l1
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: We
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: We
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: bc
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: Qu
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: Nu
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: Xe
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: We
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: We
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: bu
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: v1
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: Xe
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: m1
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: Xe
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: k1
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: E1
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: Yu
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: qu
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: ct
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: We
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: Xe
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: We
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: Zu
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: Iu
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: ct
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: o1
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: Pu
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: Gu
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: Lu
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: Sc
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: We
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: ct
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: r1
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: We
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: x1
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: We
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: d1
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: $a
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: Xe
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: ct
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: Uu,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: ct
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: Hs
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: w1
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: e1
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: zu
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: Vs
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: y1
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: Mu
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: zs
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: Us
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: Vu
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: Ku
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: Xu
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: s1
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: p1
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: en
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: ct
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: _1,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: Yh,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: We,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: n1,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: Wh,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: i1,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: ct
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: Bu
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: Xe
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: T1
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: g1
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: Hs
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: C1
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: S1
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: A1
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: Vs
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: O1
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: en
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: Xe
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: ju
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: zs
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: Us
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: D1
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: Xe
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: F1
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: I1
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: Gn
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: en
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: Gs
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: Ws
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: Gn
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: en
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function Mr(e, t, r, a) {
  var n = t;
  if (!isNaN(n)) {
    var s = a || (r || []).length || 0, i = e.next(4);
    i.write_shift(2, n), i.write_shift(2, s), /*:: len != null &&*/
    s > 0 && dc(r) && e.push(r);
  }
}
function ti(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var n = e.match(/<table/i);
  if (!n)
    throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), i = n.index, c = s && s.index || e.length, f = rl(e.slice(i, c), /(:?<tr[^>]*>)/i, "<tr>"), l = -1, o = 0, h = 0, x = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, p = [];
  for (i = 0; i < f.length; ++i) {
    var u = f[i].trim(), v = u.slice(0, 3).toLowerCase();
    if (v == "<tr") {
      if (++l, r.sheetRows && r.sheetRows <= l) {
        --l;
        break;
      }
      o = 0;
      continue;
    }
    if (!(v != "<td" && v != "<th")) {
      var _ = u.split(/<\/t[dh]>/i);
      for (c = 0; c < _.length; ++c) {
        var C = _[c].trim();
        if (C.match(/<t[dh]/i)) {
          for (var m = C, O = 0; m.charAt(0) == "<" && (O = m.indexOf(">")) > -1; )
            m = m.slice(O + 1);
          for (var b = 0; b < p.length; ++b) {
            var D = p[b];
            D.s.c == o && D.s.r < l && l <= D.e.r && (o = D.e.c + 1, b = -1);
          }
          var w = le(C.slice(0, C.indexOf(">")));
          x = w.colspan ? +w.colspan : 1, ((h = +w.rowspan) > 1 || x > 1) && p.push({ s: { r: l, c: o }, e: { r: l + (h || 1) - 1, c: o + x - 1 } });
          var L = w.t || w["data-t"] || "";
          if (!m.length) {
            o += x;
            continue;
          }
          if (m = rc(m), d.s.r > l && (d.s.r = l), d.e.r < l && (d.e.r = l), d.s.c > o && (d.s.c = o), d.e.c < o && (d.e.c = o), !m.length) {
            o += x;
            continue;
          }
          var I = { t: "s", v: m };
          r.raw || !m.trim().length || L == "s" || (m === "TRUE" ? I = { t: "b", v: !0 } : m === "FALSE" ? I = { t: "b", v: !1 } : isNaN(Wr(m)) ? isNaN(jt(m).getDate()) || (I = { t: "d", v: er(m) }, r.cellDates || (I = { t: "n", v: mr(I.v) }), I.z = r.dateNF || pe[14]) : I = { t: "n", v: Wr(m) }), r.dense ? (a[l] || (a[l] = []), a[l][o] = I) : a[xe({ r: l, c: o })] = I, o += x;
        }
      }
    }
  }
  return a["!ref"] = we(d), p.length && (a["!merges"] = p), a;
}
function D2(e, t, r, a) {
  for (var n = e["!merges"] || [], s = [], i = t.s.c; i <= t.e.c; ++i) {
    for (var c = 0, f = 0, l = 0; l < n.length; ++l)
      if (!(n[l].s.r > r || n[l].s.c > i) && !(n[l].e.r < r || n[l].e.c < i)) {
        if (n[l].s.r < r || n[l].s.c < i) {
          c = -1;
          break;
        }
        c = n[l].e.r - n[l].s.r + 1, f = n[l].e.c - n[l].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var o = xe({ r, c: i }), h = a.dense ? (e[r] || [])[i] : e[o], x = h && h.v != null && (h.h || D0(h.w || (at(h), h.w) || "")) || "", d = {};
      c > 1 && (d.rowspan = c), f > 1 && (d.colspan = f), a.editable ? x = '<span contenteditable="true">' + x + "</span>" : h && (d["data-t"] = h && h.t || "z", h.v != null && (d["data-v"] = h.v), h.z != null && (d["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + h.l.Target + '">' + x + "</a>")), d.id = (a.id || "sjs") + "-" + o, s.push(vl("td", x, d));
    }
  }
  var p = "<tr>";
  return p + s.join("") + "</tr>";
}
var I2 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', R2 = "</body></html>";
function N2(e, t) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1)
    return pt(ti(r[0], t), t);
  var a = K0();
  return r.forEach(function(n, s) {
    Y0(a, ti(n, t), "Sheet" + (s + 1));
  }), a;
}
function b2(e, t, r) {
  var a = [];
  return a.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function P2(e, t) {
  var r = t || {}, a = r.header != null ? r.header : I2, n = r.footer != null ? r.footer : R2, s = [a], i = ra(e["!ref"]);
  r.dense = Array.isArray(e), s.push(b2(e, i, r));
  for (var c = i.s.r; c <= i.e.r; ++c)
    s.push(D2(e, i, c, r));
  return s.push("</table>" + n), s.join("");
}
function cf(e, t, r) {
  var a = r || {}, n = 0, s = 0;
  if (a.origin != null)
    if (typeof a.origin == "number")
      n = a.origin;
    else {
      var i = typeof a.origin == "string" ? vr(a.origin) : a.origin;
      n = i.r, s = i.c;
    }
  var c = t.getElementsByTagName("tr"), f = Math.min(a.sheetRows || 1e7, c.length), l = { s: { r: 0, c: 0 }, e: { r: n, c: s } };
  if (e["!ref"]) {
    var o = ra(e["!ref"]);
    l.s.r = Math.min(l.s.r, o.s.r), l.s.c = Math.min(l.s.c, o.s.c), l.e.r = Math.max(l.e.r, o.e.r), l.e.c = Math.max(l.e.c, o.e.c), n == -1 && (l.e.r = n = o.e.r + 1);
  }
  var h = [], x = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, u = 0, v = 0, _ = 0, C = 0, m = 0;
  for (e["!cols"] || (e["!cols"] = []); p < c.length && u < f; ++p) {
    var O = c[p];
    if (ai(O)) {
      if (a.display)
        continue;
      d[u] = { hidden: !0 };
    }
    var b = O.children;
    for (v = _ = 0; v < b.length; ++v) {
      var D = b[v];
      if (!(a.display && ai(D))) {
        var w = D.hasAttribute("data-v") ? D.getAttribute("data-v") : D.hasAttribute("v") ? D.getAttribute("v") : rc(D.innerHTML), L = D.getAttribute("data-z") || D.getAttribute("z");
        for (x = 0; x < h.length; ++x) {
          var I = h[x];
          I.s.c == _ + s && I.s.r < u + n && u + n <= I.e.r && (_ = I.e.c + 1 - s, x = -1);
        }
        m = +D.getAttribute("colspan") || 1, ((C = +D.getAttribute("rowspan") || 1) > 1 || m > 1) && h.push({ s: { r: u + n, c: _ + s }, e: { r: u + n + (C || 1) - 1, c: _ + s + (m || 1) - 1 } });
        var z = { t: "s", v: w }, W = D.getAttribute("data-t") || D.getAttribute("t") || "";
        w != null && (w.length == 0 ? z.t = W || "z" : a.raw || w.trim().length == 0 || W == "s" || (w === "TRUE" ? z = { t: "b", v: !0 } : w === "FALSE" ? z = { t: "b", v: !1 } : isNaN(Wr(w)) ? isNaN(jt(w).getDate()) || (z = { t: "d", v: er(w) }, a.cellDates || (z = { t: "n", v: mr(z.v) }), z.z = a.dateNF || pe[14]) : z = { t: "n", v: Wr(w) })), z.z === void 0 && L != null && (z.z = L);
        var P = "", K = D.getElementsByTagName("A");
        if (K && K.length)
          for (var fe = 0; fe < K.length && !(K[fe].hasAttribute("href") && (P = K[fe].getAttribute("href"), P.charAt(0) != "#")); ++fe)
            ;
        P && P.charAt(0) != "#" && (z.l = { Target: P }), a.dense ? (e[u + n] || (e[u + n] = []), e[u + n][_ + s] = z) : e[xe({ c: _ + s, r: u + n })] = z, l.e.c < _ + s && (l.e.c = _ + s), _ += m;
      }
    }
    ++u;
  }
  return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), l.e.r = Math.max(l.e.r, u - 1 + n), e["!ref"] = we(l), u >= f && (e["!fullref"] = we((l.e.r = c.length - p + u - 1 + n, l))), e;
}
function ff(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  return cf(a, e, t);
}
function L2(e, t) {
  return pt(ff(e, t), t);
}
function ai(e) {
  var t = "", r = M2(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function M2(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function B2(e) {
  var t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = ye(t.replace(/<[^>]*>/g, ""));
  return [r];
}
var ni = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function of(e, t) {
  var r = t || {}, a = I0(e), n = [], s, i, c = { name: "" }, f = "", l = 0, o, h, x = {}, d = [], p = r.dense ? [] : {}, u, v, _ = { value: "" }, C = "", m = 0, O = [], b = -1, D = -1, w = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, L = 0, I = {}, z = [], W = {}, P = 0, K = 0, fe = [], re = 1, ce = 1, ie = [], De = { Names: [] }, G = {}, ue = ["", ""], he = [], A = {}, H = "", N = 0, R = !1, j = !1, ee = 0;
  for (Da.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); u = Da.exec(a); )
    switch (u[3] = u[3].replace(/_.*$/, "")) {
      case "table":
      case "工作表":
        u[1] === "/" ? (w.e.c >= w.s.c && w.e.r >= w.s.r ? p["!ref"] = we(w) : p["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= w.e.r && (p["!fullref"] = p["!ref"], w.e.r = r.sheetRows - 1, p["!ref"] = we(w)), z.length && (p["!merges"] = z), fe.length && (p["!rows"] = fe), o.name = o.名称 || o.name, typeof JSON < "u" && JSON.stringify(o), d.push(o.name), x[o.name] = p, j = !1) : u[0].charAt(u[0].length - 2) !== "/" && (o = le(u[0], !1), b = D = -1, w.s.r = w.s.c = 1e7, w.e.r = w.e.c = 0, p = r.dense ? [] : {}, z = [], fe = [], j = !0);
        break;
      case "table-row-group":
        u[1] === "/" ? --L : ++L;
        break;
      case "table-row":
      case "行":
        if (u[1] === "/") {
          b += re, re = 1;
          break;
        }
        if (h = le(u[0], !1), h.行号 ? b = h.行号 - 1 : b == -1 && (b = 0), re = +h["number-rows-repeated"] || 1, re < 10)
          for (ee = 0; ee < re; ++ee)
            L > 0 && (fe[b + ee] = { level: L });
        D = -1;
        break;
      case "covered-table-cell":
        u[1] !== "/" && ++D, r.sheetStubs && (r.dense ? (p[b] || (p[b] = []), p[b][D] = { t: "z" }) : p[xe({ r: b, c: D })] = { t: "z" }), C = "", O = [];
        break;
      case "table-cell":
      case "数据":
        if (u[0].charAt(u[0].length - 2) === "/")
          ++D, _ = le(u[0], !1), ce = parseInt(_["number-columns-repeated"] || "1", 10), v = {
            t: "z",
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, _.formula && r.cellFormula != !1 && (v.f = Zs(ye(_.formula))), (_.数据类型 || _["value-type"]) == "string" && (v.t = "s", v.v = ye(_["string-value"] || ""), r.dense ? (p[b] || (p[b] = []), p[b][D] = v) : p[xe({ r: b, c: D })] = v), D += ce - 1;
        else if (u[1] !== "/") {
          ++D, C = "", m = 0, O = [], ce = 1;
          var ne = re ? b + re - 1 : b;
          if (D > w.e.c && (w.e.c = D), D < w.s.c && (w.s.c = D), b < w.s.r && (w.s.r = b), ne > w.e.r && (w.e.r = ne), _ = le(u[0], !1), he = [], A = {}, v = {
            t: _.数据类型 || _["value-type"],
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, r.cellFormula)
            if (_.formula && (_.formula = ye(_.formula)), _["number-matrix-columns-spanned"] && _["number-matrix-rows-spanned"] && (P = parseInt(_["number-matrix-rows-spanned"], 10) || 0, K = parseInt(_["number-matrix-columns-spanned"], 10) || 0, W = { s: { r: b, c: D }, e: { r: b + P - 1, c: D + K - 1 } }, v.F = we(W), ie.push([W, v.F])), _.formula)
              v.f = Zs(_.formula);
            else
              for (ee = 0; ee < ie.length; ++ee)
                b >= ie[ee][0].s.r && b <= ie[ee][0].e.r && D >= ie[ee][0].s.c && D <= ie[ee][0].e.c && (v.F = ie[ee][1]);
          switch ((_["number-columns-spanned"] || _["number-rows-spanned"]) && (P = parseInt(_["number-rows-spanned"], 10) || 0, K = parseInt(_["number-columns-spanned"], 10) || 0, W = { s: { r: b, c: D }, e: { r: b + P - 1, c: D + K - 1 } }, z.push(W)), _["number-columns-repeated"] && (ce = parseInt(_["number-columns-repeated"], 10)), v.t) {
            case "boolean":
              v.t = "b", v.v = Ie(_["boolean-value"]);
              break;
            case "float":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "percentage":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "currency":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "date":
              v.t = "d", v.v = er(_["date-value"]), r.cellDates || (v.t = "n", v.v = mr(v.v)), v.z = "m/d/yy";
              break;
            case "time":
              v.t = "n", v.v = Zo(_["time-value"]) / 86400, r.cellDates && (v.t = "d", v.v = On(v.v)), v.z = "HH:MM:SS";
              break;
            case "number":
              v.t = "n", v.v = parseFloat(_.数据数值);
              break;
            default:
              if (v.t === "string" || v.t === "text" || !v.t)
                v.t = "s", _["string-value"] != null && (C = ye(_["string-value"]), O = []);
              else
                throw new Error("Unsupported value type " + v.t);
          }
        } else {
          if (R = !1, v.t === "s" && (v.v = C || "", O.length && (v.R = O), R = m == 0), G.Target && (v.l = G), he.length > 0 && (v.c = he, he = []), C && r.cellText !== !1 && (v.w = C), R && (v.t = "z", delete v.v), (!R || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b))
            for (var Z = 0; Z < re; ++Z) {
              if (ce = parseInt(_["number-columns-repeated"] || "1", 10), r.dense)
                for (p[b + Z] || (p[b + Z] = []), p[b + Z][D] = Z == 0 ? v : tr(v); --ce > 0; )
                  p[b + Z][D + ce] = tr(v);
              else
                for (p[xe({ r: b + Z, c: D })] = v; --ce > 0; )
                  p[xe({ r: b + Z, c: D + ce })] = tr(v);
              w.e.c <= D && (w.e.c = D);
            }
          ce = parseInt(_["number-columns-repeated"] || "1", 10), D += ce - 1, ce = 0, v = {
            /*:: t:"", v:null, z:null, w:"",c:[]*/
          }, C = "", O = [];
        }
        G = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (u[1] === "/") {
          if ((s = n.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && n.push([u[3], !0]);
        break;
      case "annotation":
        if (u[1] === "/") {
          if ((s = n.pop())[0] !== u[3])
            throw "Bad state: " + s;
          A.t = C, O.length && (A.R = O), A.a = H, he.push(A);
        } else
          u[0].charAt(u[0].length - 2) !== "/" && n.push([u[3], !1]);
        H = "", N = 0, C = "", m = 0, O = [];
        break;
      case "creator":
        u[1] === "/" ? H = a.slice(N, u.index) : N = u.index + u[0].length;
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (u[1] === "/") {
          if ((s = n.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && n.push([u[3], !1]);
        C = "", m = 0, O = [];
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (u[1] === "/") {
          if (I[c.name] = f, (s = n.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && (f = "", c = le(u[0], !1), n.push([u[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            i = le(u[0], !1), f += ni[u[3]][i.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            i = le(u[0], !1), f += ni[u[3]][i.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (u[0].slice(-2) === "/>")
          break;
        if (u[1] === "/")
          switch (n[n.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              f += a.slice(l, u.index);
              break;
          }
        else
          l = u.index + u[0].length;
        break;
      case "named-range":
        i = le(u[0], !1), ue = zn(i["cell-range-address"]);
        var q = { Name: i.name, Ref: ue[0] + "!" + ue[1] };
        j && (q.Sheet = d.length), De.Names.push(q);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "电子表格":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(n[n.length - 1][0]) > -1)
          break;
        if (u[1] === "/" && (!_ || !_["string-value"])) {
          var ke = B2(a.slice(m, u.index));
          C = (C.length > 0 ? C + `
` : "") + ke[0];
        } else
          le(u[0], !1), m = u.index + u[0].length;
        break;
      case "s":
        break;
      case "database-range":
        if (u[1] === "/")
          break;
        try {
          ue = zn(le(u[0])["target-range-address"]), x[ue[0]]["!autofilter"] = { ref: ue[1] };
        } catch {
        }
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "标题":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (u[1] !== "/") {
          if (G = le(u[0], !1), !G.href)
            break;
          G.Target = ye(G.href), delete G.href, G.Target.charAt(0) == "#" && G.Target.indexOf(".") > -1 ? (ue = zn(G.Target.slice(1)), G.Target = "#" + ue[0] + "!" + ue[1]) : G.Target.match(/^\.\.[\\\/]/) && (G.Target = G.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (u[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (r.WTF)
              throw new Error(u);
        }
    }
  var S = {
    Sheets: x,
    SheetNames: d,
    Workbook: De
  };
  return r.bookSheets && delete /*::(*/
  S.Sheets, S;
}
function si(e, t) {
  t = t || {}, Nr(e, "META-INF/manifest.xml") && eu(ze(e, "META-INF/manifest.xml"), t);
  var r = yr(e, "content.xml");
  if (!r)
    throw new Error("Missing content.xml in ODS / UOF file");
  var a = of(Oe(r), t);
  return Nr(e, "meta.xml") && (a.Props = Tc(ze(e, "meta.xml"))), a;
}
function ii(e, t) {
  return of(e, t);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function G0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function i0(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Oe(It(e));
}
function c0(e) {
  var t = e.reduce(function(n, s) {
    return n + s.length;
  }, 0), r = new Uint8Array(t), a = 0;
  return e.forEach(function(n) {
    r.set(n, a), a += n.length;
  }), r;
}
function ci(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function U2(e, t) {
  for (var r = (e[t + 15] & 127) << 7 | e[t + 14] >> 1, a = e[t + 14] & 1, n = t + 13; n >= t; --n)
    a = a * 256 + e[n];
  return (e[t + 15] & 128 ? -a : a) * Math.pow(10, r - 6176);
}
function ba(e, t) {
  var r = t ? t[0] : 0, a = e[r] & 127;
  e:
    if (e[r++] >= 128 && (a |= (e[r] & 127) << 7, e[r++] < 128 || (a |= (e[r] & 127) << 14, e[r++] < 128) || (a |= (e[r] & 127) << 21, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), a;
}
function qe(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function fr(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var a = r[0], n = ba(e, r), s = n & 7;
    n = Math.floor(n / 8);
    var i = 0, c;
    if (n == 0)
      break;
    switch (s) {
      case 0:
        {
          for (var f = r[0]; e[r[0]++] >= 128; )
            ;
          c = e.slice(f, r[0]);
        }
        break;
      case 5:
        i = 4, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 1:
        i = 8, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 2:
        i = ba(e, r), c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(s, " for Field ").concat(n, " at offset ").concat(a));
    }
    var l = { data: c, type: s };
    t[n] == null ? t[n] = [l] : t[n].push(l);
  }
  return t;
}
function z0(e, t) {
  return (e == null ? void 0 : e.map(function(r) {
    return t(r.data);
  })) || [];
}
function H2(e) {
  for (var t, r = [], a = [0]; a[0] < e.length; ) {
    var n = ba(e, a), s = fr(e.slice(a[0], a[0] + n));
    a[0] += n;
    var i = {
      id: qe(s[1][0].data),
      messages: []
    };
    s[2].forEach(function(c) {
      var f = fr(c.data), l = qe(f[3][0].data);
      i.messages.push({
        meta: f,
        data: e.slice(a[0], a[0] + l)
      }), a[0] += l;
    }), (t = s[3]) != null && t[0] && (i.merge = qe(s[3][0].data) >>> 0 > 0), r.push(i);
  }
  return r;
}
function V2(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], a = ba(t, r), n = []; r[0] < t.length; ) {
    var s = t[r[0]] & 3;
    if (s == 0) {
      var i = t[r[0]++] >> 2;
      if (i < 60)
        ++i;
      else {
        var c = i - 59;
        i = t[r[0]], c > 1 && (i |= t[r[0] + 1] << 8), c > 2 && (i |= t[r[0] + 2] << 16), c > 3 && (i |= t[r[0] + 3] << 24), i >>>= 0, i++, r[0] += c;
      }
      n.push(t.slice(r[0], r[0] + i)), r[0] += i;
      continue;
    } else {
      var f = 0, l = 0;
      if (s == 1 ? (l = (t[r[0]] >> 2 & 7) + 4, f = (t[r[0]++] & 224) << 3, f |= t[r[0]++]) : (l = (t[r[0]++] >> 2) + 1, s == 2 ? (f = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (f = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), n = [c0(n)], f == 0)
        throw new Error("Invalid offset 0");
      if (f > n[0].length)
        throw new Error("Invalid offset beyond length");
      if (l >= f)
        for (n.push(n[0].slice(-f)), l -= f; l >= n[n.length - 1].length; )
          n.push(n[n.length - 1]), l -= n[n.length - 1].length;
      n.push(n[0].slice(-f, -f + l));
    }
  }
  var o = c0(n);
  if (o.length != a)
    throw new Error("Unexpected length: ".concat(o.length, " != ").concat(a));
  return o;
}
function $2(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var a = e[r++], n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(V2(a, e.slice(r, r + n))), r += n;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return c0(t);
}
function W2(e, t, r, a) {
  var n = G0(e), s = n.getUint32(4, !0), i = (a > 1 ? 12 : 8) + ci(s & (a > 1 ? 3470 : 398)) * 4, c = -1, f = -1, l = NaN, o = new Date(2001, 0, 1);
  s & 512 && (c = n.getUint32(i, !0), i += 4), i += ci(s & (a > 1 ? 12288 : 4096)) * 4, s & 16 && (f = n.getUint32(i, !0), i += 4), s & 32 && (l = n.getFloat64(i, !0), i += 8), s & 64 && (o.setTime(o.getTime() + n.getFloat64(i, !0) * 1e3), i += 8);
  var h;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: l };
      break;
    case 3:
      h = { t: "s", v: t[f] };
      break;
    case 5:
      h = { t: "d", v: o };
      break;
    case 6:
      h = { t: "b", v: l > 0 };
      break;
    case 7:
      h = { t: "n", v: l / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1)
        h = { t: "s", v: r[c] };
      else if (f > -1)
        h = { t: "s", v: t[f] };
      else if (!isNaN(l))
        h = { t: "n", v: l };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return h;
}
function G2(e, t, r) {
  var a = G0(e), n = a.getUint32(8, !0), s = 12, i = -1, c = -1, f = NaN, l = NaN, o = new Date(2001, 0, 1);
  n & 1 && (f = U2(e, s), s += 16), n & 2 && (l = a.getFloat64(s, !0), s += 8), n & 4 && (o.setTime(o.getTime() + a.getFloat64(s, !0) * 1e3), s += 8), n & 8 && (c = a.getUint32(s, !0), s += 4), n & 16 && (i = a.getUint32(s, !0), s += 4);
  var h;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: f };
      break;
    case 3:
      h = { t: "s", v: t[c] };
      break;
    case 5:
      h = { t: "d", v: o };
      break;
    case 6:
      h = { t: "b", v: l > 0 };
      break;
    case 7:
      h = { t: "n", v: l / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (i > -1)
        h = { t: "s", v: r[i] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      h = { t: "n", v: f };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
  }
  return h;
}
function z2(e, t, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return W2(e, t, r, e[0]);
    case 5:
      return G2(e, t, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function ht(e) {
  var t = fr(e);
  return ba(t[1][0].data);
}
function fi(e, t) {
  var r = fr(t.data), a = qe(r[1][0].data), n = r[3], s = [];
  return (n || []).forEach(function(i) {
    var c = fr(i.data), f = qe(c[1][0].data) >>> 0;
    switch (a) {
      case 1:
        s[f] = i0(c[3][0].data);
        break;
      case 8:
        {
          var l = e[ht(c[9][0].data)][0], o = fr(l.data), h = e[ht(o[1][0].data)][0], x = qe(h.meta[1][0].data);
          if (x != 2001)
            throw new Error("2000 unexpected reference to ".concat(x));
          var d = fr(h.data);
          s[f] = d[3].map(function(p) {
            return i0(p.data);
          }).join("");
        }
        break;
    }
  }), s;
}
function X2(e, t) {
  var r, a, n, s, i, c, f, l, o, h, x, d, p, u, v = fr(e), _ = qe(v[1][0].data) >>> 0, C = qe(v[2][0].data) >>> 0, m = ((a = (r = v[8]) == null ? void 0 : r[0]) == null ? void 0 : a.data) && qe(v[8][0].data) > 0 || !1, O, b;
  if ((s = (n = v[7]) == null ? void 0 : n[0]) != null && s.data && t != 0)
    O = (c = (i = v[7]) == null ? void 0 : i[0]) == null ? void 0 : c.data, b = (l = (f = v[6]) == null ? void 0 : f[0]) == null ? void 0 : l.data;
  else if ((h = (o = v[4]) == null ? void 0 : o[0]) != null && h.data && t != 1)
    O = (d = (x = v[4]) == null ? void 0 : x[0]) == null ? void 0 : d.data, b = (u = (p = v[3]) == null ? void 0 : p[0]) == null ? void 0 : u.data;
  else
    throw "NUMBERS Tile missing ".concat(t, " cell storage");
  for (var D = m ? 4 : 1, w = G0(O), L = [], I = 0; I < O.length / 2; ++I) {
    var z = w.getUint16(I * 2, !0);
    z < 65535 && L.push([I, z]);
  }
  if (L.length != C)
    throw "Expected ".concat(C, " cells, found ").concat(L.length);
  var W = [];
  for (I = 0; I < L.length - 1; ++I)
    W[L[I][0]] = b.subarray(L[I][1] * D, L[I + 1][1] * D);
  return L.length >= 1 && (W[L[L.length - 1][0]] = b.subarray(L[L.length - 1][1] * D)), { R: _, cells: W };
}
function j2(e, t) {
  var r, a = fr(t.data), n = (r = a == null ? void 0 : a[7]) != null && r[0] ? qe(a[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, s = z0(a[5], function(i) {
    return X2(i, n);
  });
  return {
    nrows: qe(a[4][0].data) >>> 0,
    data: s.reduce(function(i, c) {
      return i[c.R] || (i[c.R] = []), c.cells.forEach(function(f, l) {
        if (i[c.R][l])
          throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(l));
        i[c.R][l] = f;
      }), i;
    }, [])
  };
}
function K2(e, t, r) {
  var a, n = fr(t.data), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (s.e.r = (qe(n[6][0].data) >>> 0) - 1, s.e.r < 0)
    throw new Error("Invalid row varint ".concat(n[6][0].data));
  if (s.e.c = (qe(n[7][0].data) >>> 0) - 1, s.e.c < 0)
    throw new Error("Invalid col varint ".concat(n[7][0].data));
  r["!ref"] = we(s);
  var i = fr(n[4][0].data), c = fi(e, e[ht(i[4][0].data)][0]), f = (a = i[17]) != null && a[0] ? fi(e, e[ht(i[17][0].data)][0]) : [], l = fr(i[3][0].data), o = 0;
  l[1].forEach(function(h) {
    var x = fr(h.data), d = e[ht(x[2][0].data)][0], p = qe(d.meta[1][0].data);
    if (p != 6002)
      throw new Error("6001 unexpected reference to ".concat(p));
    var u = j2(e, d);
    u.data.forEach(function(v, _) {
      v.forEach(function(C, m) {
        var O = xe({ r: o + _, c: m }), b = z2(C, c, f);
        b && (r[O] = b);
      });
    }), o += u.nrows;
  });
}
function Y2(e, t) {
  var r = fr(t.data), a = { "!ref": "A1" }, n = e[ht(r[2][0].data)], s = qe(n[0].meta[1][0].data);
  if (s != 6001)
    throw new Error("6000 unexpected reference to ".concat(s));
  return K2(e, n[0], a), a;
}
function q2(e, t) {
  var r, a = fr(t.data), n = {
    name: (r = a[1]) != null && r[0] ? i0(a[1][0].data) : "",
    sheets: []
  }, s = z0(a[2], ht);
  return s.forEach(function(i) {
    e[i].forEach(function(c) {
      var f = qe(c.meta[1][0].data);
      f == 6e3 && n.sheets.push(Y2(e, c));
    });
  }), n;
}
function J2(e, t) {
  var r = K0(), a = fr(t.data), n = z0(a[1], ht);
  if (n.forEach(function(s) {
    e[s].forEach(function(i) {
      var c = qe(i.meta[1][0].data);
      if (c == 2) {
        var f = q2(e, i);
        f.sheets.forEach(function(l, o) {
          Y0(r, l, o == 0 ? f.name : f.name + "_" + o, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function jn(e) {
  var t, r, a, n, s = {}, i = [];
  if (e.FullPaths.forEach(function(f) {
    if (f.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(f) {
    if (f.name.match(/\.iwa$/)) {
      var l;
      try {
        l = $2(f.content);
      } catch (h) {
        return console.log("?? " + f.content.length + " " + (h.message || h));
      }
      var o;
      try {
        o = H2(l);
      } catch (h) {
        return console.log("## " + (h.message || h));
      }
      o.forEach(function(h) {
        s[h.id] = h.messages, i.push(h.id);
      });
    }
  }), !i.length)
    throw new Error("File has no messages");
  var c = ((n = (a = (r = (t = s == null ? void 0 : s[1]) == null ? void 0 : t[0]) == null ? void 0 : r.meta) == null ? void 0 : a[1]) == null ? void 0 : n[0].data) && qe(s[1][0].meta[1][0].data) == 1 && s[1][0];
  if (c || i.forEach(function(f) {
    s[f].forEach(function(l) {
      var o = qe(l.meta[1][0].data) >>> 0;
      if (o == 1)
        if (!c)
          c = l;
        else
          throw new Error("Document has multiple roots");
    });
  }), !c)
    throw new Error("Cannot find Document root");
  return J2(s, c);
}
function Z2(e) {
  return function(r) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      r[n[0]] === void 0 && (r[n[0]] = n[1]), n[2] === "n" && (r[n[0]] = Number(r[n[0]]));
    }
  };
}
function X0(e) {
  Z2([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function Q2(e) {
  return $t.WS.indexOf(e) > -1 ? "sheet" : e == $t.CS ? "chart" : e == $t.DS ? "dialog" : e == $t.MS ? "macro" : e && e.length ? e : "sheet";
}
function ev(e, t) {
  if (!e)
    return 0;
  try {
    e = t.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, Q2(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function rv(e, t, r, a, n, s, i, c, f, l, o, h) {
  try {
    s[a] = _a(yr(e, r, !0), t);
    var x = ze(e, t), d;
    switch (c) {
      case "sheet":
        d = c2(x, t, n, f, s[a], l, o, h);
        break;
      case "chart":
        if (d = f2(x, t, n, f, s[a], l, o, h), !d || !d["!drawel"])
          break;
        var p = xa(d["!drawel"].Target, t), u = r0(p), v = ix(yr(e, p, !0), _a(yr(e, u, !0), p)), _ = xa(v, p), C = r0(_);
        d = Gp(yr(e, _, !0), _, f, _a(yr(e, C, !0), _), l, d);
        break;
      case "macro":
        d = o2(x, t, n, f, s[a], l, o, h);
        break;
      case "dialog":
        d = l2(x, t, n, f, s[a], l, o, h);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    i[a] = d;
    var m = [];
    s && s[a] && Kr(s[a]).forEach(function(O) {
      var b = "";
      if (s[a][O].Type == $t.CMNT) {
        b = xa(s[a][O].Target, t);
        var D = d2(ze(e, b, !0), b, f);
        if (!D || !D.length)
          return;
        js(d, D, !1);
      }
      s[a][O].Type == $t.TCMNT && (b = xa(s[a][O].Target, t), m = m.concat(fx(ze(e, b, !0), f)));
    }), m && m.length && js(d, m, !0, f.people || []);
  } catch (O) {
    if (f.WTF)
      throw O;
  }
}
function Ir(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function tv(e, t) {
  if (zi(), t = t || {}, X0(t), Nr(e, "META-INF/manifest.xml") || Nr(e, "objectdata.xml"))
    return si(e, t);
  if (Nr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof jn < "u") {
      if (e.FileIndex)
        return jn(e);
      var r = Te.utils.cfb_new();
      return Es(e).forEach(function(fe) {
        al(r, fe, Ji(e, fe));
      }), jn(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Nr(e, "[Content_Types].xml"))
    throw Nr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : Nr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var a = Es(e), n = Zl(yr(e, "[Content_Types].xml")), s = !1, i, c;
  if (n.workbooks.length === 0 && (c = "xl/workbook.xml", ze(e, c, !0) && n.workbooks.push(c)), n.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !ze(e, c, !0))
      throw new Error("Could not find workbook");
    n.workbooks.push(c), s = !0;
  }
  n.workbooks[0].slice(-3) == "bin" && (s = !0);
  var f = {}, l = {};
  if (!t.bookSheets && !t.bookProps) {
    if (wa = [], n.sst)
      try {
        wa = x2(ze(e, Ir(n.sst)), n.sst, t);
      } catch (fe) {
        if (t.WTF)
          throw fe;
      }
    t.cellStyles && n.themes.length && (f = h2(yr(e, n.themes[0].replace(/^\//, ""), !0) || "", n.themes[0], t)), n.style && (l = u2(ze(e, Ir(n.style)), n.style, f, t));
  }
  n.links.map(function(fe) {
    try {
      var re = _a(yr(e, r0(Ir(fe))), fe);
      return v2(ze(e, Ir(fe)), re, fe, t);
    } catch {
    }
  });
  var o = i2(ze(e, Ir(n.workbooks[0])), n.workbooks[0], t), h = {}, x = "";
  n.coreprops.length && (x = ze(e, Ir(n.coreprops[0]), !0), x && (h = Tc(x)), n.extprops.length !== 0 && (x = ze(e, Ir(n.extprops[0]), !0), x && au(x, h, t)));
  var d = {};
  (!t.bookSheets || t.bookProps) && n.custprops.length !== 0 && (x = yr(e, Ir(n.custprops[0]), !0), x && (d = su(x, t)));
  var p = {};
  if ((t.bookSheets || t.bookProps) && (o.Sheets ? i = o.Sheets.map(function(re) {
    return re.name;
  }) : h.Worksheets && h.SheetNames.length > 0 && (i = h.SheetNames), t.bookProps && (p.Props = h, p.Custprops = d), t.bookSheets && typeof i < "u" && (p.SheetNames = i), t.bookSheets ? p.SheetNames : t.bookProps))
    return p;
  i = {};
  var u = {};
  t.bookDeps && n.calcchain && (u = p2(ze(e, Ir(n.calcchain)), n.calcchain));
  var v = 0, _ = {}, C, m;
  {
    var O = o.Sheets;
    h.Worksheets = O.length, h.SheetNames = [];
    for (var b = 0; b != O.length; ++b)
      h.SheetNames[b] = O[b].name;
  }
  var D = s ? "bin" : "xml", w = n.workbooks[0].lastIndexOf("/"), L = (n.workbooks[0].slice(0, w + 1) + "_rels/" + n.workbooks[0].slice(w + 1) + ".rels").replace(/^\//, "");
  Nr(e, L) || (L = "xl/_rels/workbook." + D + ".rels");
  var I = _a(yr(e, L, !0), L.replace(/_rels.*/, "s5s"));
  (n.metadata || []).length >= 1 && (t.xlmeta = g2(ze(e, Ir(n.metadata[0])), n.metadata[0], t)), (n.people || []).length >= 1 && (t.people = ox(ze(e, Ir(n.people[0])), t)), I && (I = ev(I, o.Sheets));
  var z = ze(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e:
    for (v = 0; v != h.Worksheets; ++v) {
      var W = "sheet";
      if (I && I[v] ? (C = "xl/" + I[v][1].replace(/[\/]?xl\//, ""), Nr(e, C) || (C = I[v][1]), Nr(e, C) || (C = L.replace(/_rels\/.*$/, "") + I[v][1]), W = I[v][2]) : (C = "xl/worksheets/sheet" + (v + 1 - z) + "." + D, C = C.replace(/sheet0\./, "sheet.")), m = C.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), t && t.sheets != null)
        switch (typeof t.sheets) {
          case "number":
            if (v != t.sheets)
              continue e;
            break;
          case "string":
            if (h.SheetNames[v].toLowerCase() != t.sheets.toLowerCase())
              continue e;
            break;
          default:
            if (Array.isArray && Array.isArray(t.sheets)) {
              for (var P = !1, K = 0; K != t.sheets.length; ++K)
                typeof t.sheets[K] == "number" && t.sheets[K] == v && (P = 1), typeof t.sheets[K] == "string" && t.sheets[K].toLowerCase() == h.SheetNames[v].toLowerCase() && (P = 1);
              if (!P)
                continue e;
            }
        }
      rv(e, C, m, h.SheetNames[v], v, _, i, W, t, o, f, l);
    }
  return p = {
    Directory: n,
    Workbook: o,
    Props: h,
    Custprops: d,
    Deps: u,
    Sheets: i,
    SheetNames: h.SheetNames,
    Strings: wa,
    Styles: l,
    Themes: f,
    SSF: tr(pe)
  }, t && t.bookFiles && (e.files ? (p.keys = a, p.files = e.files) : (p.keys = [], p.files = {}, e.FullPaths.forEach(function(fe, re) {
    fe = fe.replace(/^Root Entry[\/]/, ""), p.keys.push(fe), p.files[fe] = e.FileIndex[re];
  }))), t && t.bookVBA && (n.vba.length > 0 ? p.vbaraw = ze(e, Ir(n.vba[0]), !0) : n.defaults && n.defaults.bin === xx && (p.vbaraw = ze(e, "xl/vbaProject.bin", !0))), p;
}
function av(e, t) {
  var r = t || {}, a = "Workbook", n = Te.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = Te.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    if (Y1(n.content), a = "/!DataSpaces/DataSpaceMap", n = Te.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = J1(n.content);
    if (s.length !== 1 || s[0].comps.length !== 1 || s[0].comps[0].t !== 0 || s[0].name !== "StrongEncryptionDataSpace" || s[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = Te.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = Z1(n.content);
    if (i.length != 1 || i[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = Te.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    eh(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = Te.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  var c = rh(n.content);
  if (a = "/EncryptedPackage", n = Te.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  if (c[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(c[1], n.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(c[1], n.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function j0(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = Sr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function nv(e, t) {
  return Te.find(e, "EncryptedPackage") ? av(e, t) : sf(e, t);
}
function sv(e, t) {
  var r, a = e, n = t || {};
  return n.type || (n.type = Ee && Buffer.isBuffer(e) ? "buffer" : "base64"), r = Zi(a, n), tv(r, n);
}
function lf(e, t) {
  var r = 0;
  e:
    for (; r < e.length; )
      switch (e.charCodeAt(r)) {
        case 10:
        case 13:
        case 32:
          ++r;
          break;
        case 60:
          return n0(e.slice(r), t);
        default:
          break e;
      }
  return Ia.to_workbook(e, t);
}
function iv(e, t) {
  var r = "", a = j0(e, t);
  switch (t.type) {
    case "base64":
      r = Sr(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = St(e);
      break;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (r = Oe(r)), t.type = "binary", lf(r, t);
}
function cv(e, t) {
  var r = e;
  return t.type == "base64" && (r = Sr(r)), r = ft.utils.decode(1200, r.slice(2), "str"), t.type = "binary", lf(r, t);
}
function fv(e) {
  return e.match(/[^\x00-\x7F]/) ? da(e) : e;
}
function Kn(e, t, r, a) {
  return a ? (r.type = "string", Ia.to_workbook(e, r)) : Ia.to_workbook(t, r);
}
function f0(e, t) {
  Ni();
  var r = t || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return f0(new Uint8Array(e), (r = tr(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], s = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), Xt = {}, r.dateNF && (Xt.dateNF = r.dateNF), r.type || (r.type = Ee && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = Ee ? "buffer" : "binary", a = qo(e), typeof Uint8Array < "u" && !Ee && (r.type = "array")), r.type == "string" && (s = !0, r.type = "binary", r.codepage = 65001, a = fv(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var i = new ArrayBuffer(3), c = new Uint8Array(i);
    if (c.foo = "bar", !c.foo)
      return r = tr(r), r.type = "array", f0(F0(a), r);
  }
  switch ((n = j0(a, r))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225)
        return nv(Te.read(a, r), r);
      break;
    case 9:
      if (n[1] <= 8)
        return sf(a, r);
      break;
    case 60:
      return n0(a, r);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68)
        return L1(a, r);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76)
        return b1.to_workbook(a, r);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? sv(a, r) : Kn(e, a, r, s);
    case 239:
      return n[3] === 60 ? n0(a, r) : Kn(e, a, r, s);
    case 255:
      if (n[1] === 254)
        return cv(a, r);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0)
        return Ta.to_workbook(a, r);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9)))
        return Ta.to_workbook(a, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Xs.to_workbook(a, r);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116)
        return xh.to_workbook(a, r);
      break;
    case 10:
    case 13:
    case 32:
      return iv(a, r);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return R1.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Xs.to_workbook(a, r) : Kn(e, a, r, s);
}
function ov(e, t, r, a, n, s, i, c) {
  var f = ar(r), l = c.defval, o = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), h = !0, x = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        x.__rowNum__ = r;
      }
    else
      x.__rowNum__ = r;
  if (!i || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var p = i ? e[r][d] : e[a[d] + f];
      if (p === void 0 || p.t === void 0) {
        if (l === void 0)
          continue;
        s[d] != null && (x[s[d]] = l);
        continue;
      }
      var u = p.v;
      switch (p.t) {
        case "z":
          if (u == null)
            break;
          continue;
        case "e":
          u = u == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + p.t);
      }
      if (s[d] != null) {
        if (u == null)
          if (p.t == "e" && u === null)
            x[s[d]] = null;
          else if (l !== void 0)
            x[s[d]] = l;
          else if (o && u === null)
            x[s[d]] = null;
          else
            continue;
        else
          x[s[d]] = o && (p.t !== "n" || p.t === "n" && c.rawNumbers !== !1) ? u : at(p, u, c);
        u != null && (h = !1);
      }
    }
  return { row: x, isempty: h };
}
function o0(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, a = 0, n = 1, s = [], i = 0, c = "", f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = t || {}, o = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? a = 1 : l.header === "A" ? a = 2 : Array.isArray(l.header) ? a = 3 : l.header == null && (a = 0), typeof o) {
    case "string":
      f = Ue(o);
      break;
    case "number":
      f = Ue(e["!ref"]), f.s.r = o;
      break;
    default:
      f = o;
  }
  a > 0 && (n = 0);
  var h = ar(f.s.r), x = [], d = [], p = 0, u = 0, v = Array.isArray(e), _ = f.s.r, C = 0, m = {};
  v && !e[_] && (e[_] = []);
  var O = l.skipHidden && e["!cols"] || [], b = l.skipHidden && e["!rows"] || [];
  for (C = f.s.c; C <= f.e.c; ++C)
    if (!(O[C] || {}).hidden)
      switch (x[C] = Ye(C), r = v ? e[_][C] : e[x[C] + h], a) {
        case 1:
          s[C] = C - f.s.c;
          break;
        case 2:
          s[C] = x[C];
          break;
        case 3:
          s[C] = l.header[C - f.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), c = i = at(r, null, l), u = m[i] || 0, !u)
            m[i] = 1;
          else {
            do
              c = i + "_" + u++;
            while (m[c]);
            m[i] = u, m[c] = 1;
          }
          s[C] = c;
      }
  for (_ = f.s.r + n; _ <= f.e.r; ++_)
    if (!(b[_] || {}).hidden) {
      var D = ov(e, f, _, x, a, s, v, l);
      (D.isempty === !1 || (a === 1 ? l.blankrows !== !1 : l.blankrows)) && (d[p++] = D.row);
    }
  return d.length = p, d;
}
var oi = /"/g;
function lv(e, t, r, a, n, s, i, c) {
  for (var f = !0, l = [], o = "", h = ar(r), x = t.s.c; x <= t.e.c; ++x)
    if (a[x]) {
      var d = c.dense ? (e[r] || [])[x] : e[a[x] + h];
      if (d == null)
        o = "";
      else if (d.v != null) {
        f = !1, o = "" + (c.rawNumbers && d.t == "n" ? d.v : at(d, null, c));
        for (var p = 0, u = 0; p !== o.length; ++p)
          if ((u = o.charCodeAt(p)) === n || u === s || u === 34 || c.forceQuotes) {
            o = '"' + o.replace(oi, '""') + '"';
            break;
          }
        o == "ID" && (o = '"ID"');
      } else
        d.f != null && !d.F ? (f = !1, o = "=" + d.f, o.indexOf(",") >= 0 && (o = '"' + o.replace(oi, '""') + '"')) : o = "";
      l.push(o);
    }
  return c.blankrows === !1 && f ? null : l.join(i);
}
function uf(e, t) {
  var r = [], a = t ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var n = Ue(e["!ref"]), s = a.FS !== void 0 ? a.FS : ",", i = s.charCodeAt(0), c = a.RS !== void 0 ? a.RS : `
`, f = c.charCodeAt(0), l = new RegExp((s == "|" ? "\\|" : s) + "+$"), o = "", h = [];
  a.dense = Array.isArray(e);
  for (var x = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], p = n.s.c; p <= n.e.c; ++p)
    (x[p] || {}).hidden || (h[p] = Ye(p));
  for (var u = 0, v = n.s.r; v <= n.e.r; ++v)
    (d[v] || {}).hidden || (o = lv(e, n, v, h, i, f, s, a), o != null && (a.strip && (o = o.replace(l, "")), (o || a.blankrows !== !1) && r.push((u++ ? c : "") + o)));
  return delete a.dense, r.join("");
}
function uv(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = uf(e, t);
  return r;
}
function hv(e) {
  var t = "", r, a = "";
  if (e == null || e["!ref"] == null)
    return [];
  var n = Ue(e["!ref"]), s = "", i = [], c, f = [], l = Array.isArray(e);
  for (c = n.s.c; c <= n.e.c; ++c)
    i[c] = Ye(c);
  for (var o = n.s.r; o <= n.e.r; ++o)
    for (s = ar(o), c = n.s.c; c <= n.e.c; ++c)
      if (t = i[c] + s, r = l ? (e[o] || [])[c] : e[t], a = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          a = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          a = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            a = "" + r.v;
          else if (r.t == "b")
            a = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            a = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? a = "'" + r.v : a = "" + r.v;
          }
        }
        f[f.length] = t + "=" + a;
      }
  return f;
}
function hf(e, t, r) {
  var a = r || {}, n = +!a.skipHeader, s = e || {}, i = 0, c = 0;
  if (s && a.origin != null)
    if (typeof a.origin == "number")
      i = a.origin;
    else {
      var f = typeof a.origin == "string" ? vr(a.origin) : a.origin;
      i = f.r, c = f.c;
    }
  var l, o = { s: { c: 0, r: 0 }, e: { c, r: i + t.length - 1 + n } };
  if (s["!ref"]) {
    var h = Ue(s["!ref"]);
    o.e.c = Math.max(o.e.c, h.e.c), o.e.r = Math.max(o.e.r, h.e.r), i == -1 && (i = h.e.r + 1, o.e.r = i + t.length - 1 + n);
  } else
    i == -1 && (i = 0, o.e.r = t.length - 1 + n);
  var x = a.header || [], d = 0;
  t.forEach(function(u, v) {
    Kr(u).forEach(function(_) {
      (d = x.indexOf(_)) == -1 && (x[d = x.length] = _);
      var C = u[_], m = "z", O = "", b = xe({ c: c + d, r: i + v + n });
      l = Pa(s, b), C && typeof C == "object" && !(C instanceof Date) ? s[b] = C : (typeof C == "number" ? m = "n" : typeof C == "boolean" ? m = "b" : typeof C == "string" ? m = "s" : C instanceof Date ? (m = "d", a.cellDates || (m = "n", C = mr(C)), O = a.dateNF || pe[14]) : C === null && a.nullError && (m = "e", C = 0), l ? (l.t = m, l.v = C, delete l.w, delete l.R, O && (l.z = O)) : s[b] = l = { t: m, v: C }, O && (l.z = O));
    });
  }), o.e.c = Math.max(o.e.c, c + x.length - 1);
  var p = ar(i);
  if (n)
    for (d = 0; d < x.length; ++d)
      s[Ye(d + c) + p] = { t: "s", v: x[d] };
  return s["!ref"] = we(o), s;
}
function xv(e, t) {
  return hf(null, e, t);
}
function Pa(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var a = vr(t);
      return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Pa(e, xe(t)) : Pa(e, xe({ r: t, c: r || 0 }));
}
function dv(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function K0() {
  return { SheetNames: [], Sheets: {} };
}
function Y0(e, t, r, a) {
  var n = 1;
  if (!r)
    for (; n <= 65535 && e.SheetNames.indexOf(r = "Sheet" + n) != -1; ++n, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(r) >= 0) {
    var s = r.match(/(^.*?)(\d+)$/);
    n = s && +s[2] || 0;
    var i = s && s[1] || r;
    for (++n; n <= 65535 && e.SheetNames.indexOf(r = i + n) != -1; ++n)
      ;
  }
  if (Zp(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function pv(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = dv(e, t);
  switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[a].Hidden = r;
}
function vv(e, t) {
  return e.z = t, e;
}
function xf(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function gv(e, t, r) {
  return xf(e, "#" + t, r);
}
function mv(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function _v(e, t, r, a) {
  for (var n = typeof t != "string" ? t : Ue(t), s = typeof t == "string" ? t : we(t), i = n.s.r; i <= n.e.r; ++i)
    for (var c = n.s.c; c <= n.e.c; ++c) {
      var f = Pa(e, i, c);
      f.t = "n", f.F = s, delete f.v, i == n.s.r && c == n.s.c && (f.f = r, a && (f.D = !0));
    }
  return e;
}
var sn = {
  encode_col: Ye,
  encode_row: ar,
  encode_cell: xe,
  encode_range: we,
  decode_col: b0,
  decode_row: N0,
  split_cell: Il,
  decode_cell: vr,
  decode_range: ra,
  format_cell: at,
  sheet_add_aoa: vc,
  sheet_add_json: hf,
  sheet_add_dom: cf,
  aoa_to_sheet: ta,
  json_to_sheet: xv,
  table_to_sheet: ff,
  table_to_book: L2,
  sheet_to_csv: uf,
  sheet_to_txt: uv,
  sheet_to_json: o0,
  sheet_to_html: P2,
  sheet_to_formulae: hv,
  sheet_to_row_object_array: o0,
  sheet_get_cell: Pa,
  book_new: K0,
  book_append_sheet: Y0,
  book_set_sheet_visibility: pv,
  cell_set_number_format: vv,
  cell_set_hyperlink: xf,
  cell_set_internal_link: gv,
  cell_add_comment: mv,
  sheet_set_array_formula: _v,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
const Ev = (e) => {
  const t = new Array();
  if (!e["!ref"])
    throw Error("标题获取失败");
  const r = sn.decode_range(e["!ref"]);
  let a;
  const n = r.s.r;
  for (a = r.s.c; a <= r.e.c; ++a) {
    var s = e[sn.encode_cell({ c: a, r: n })], i = "UNKNOWN " + a;
    s && s.t && (i = sn.format_cell(s)), t.push(i);
  }
  return t;
}, Tv = (e) => {
  const t = f0(e, { type: "array", cellDates: !0, cellText: !1 }), r = t.SheetNames[0], a = t.Sheets[r];
  if (!a)
    return null;
  const n = Ev(a), s = sn.sheet_to_json(a, {
    defval: null,
    raw: !1,
    dateNF: "yyyy-MM-dd"
  });
  return {
    columns: un(n, !0),
    tableData: un(s, !0)
  };
}, wv = (e) => new Promise((t, r) => {
  const a = new FileReader();
  a.readAsArrayBuffer(e), a.onerror = (n) => {
    r(n);
  }, a.onload = (n) => {
    var c;
    const s = (c = n.target) == null ? void 0 : c.result, i = Tv(s);
    t(i);
  };
});
var li;
const aa = typeof window < "u", La = (e) => typeof e == "number", kv = (e) => typeof e == "string", yv = () => {
};
aa && ((li = window == null ? void 0 : window.navigator) != null && li.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function q0(e) {
  return typeof e == "function" ? e() : oe(e);
}
function Fv(e) {
  return e;
}
function J0(e) {
  return fo() ? (oo(e), !0) : !1;
}
function Av(e, t = !0) {
  E0() ? Sn(e) : t ? e() : uo(e);
}
function df(e, t, r = {}) {
  const {
    immediate: a = !0
  } = r, n = Be(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function c() {
    n.value = !1, i();
  }
  function f(...l) {
    i(), n.value = !0, s = setTimeout(() => {
      n.value = !1, s = null, e(...l);
    }, q0(t));
  }
  return a && (n.value = !0, aa && f()), J0(c), {
    isPending: lo(n),
    start: f,
    stop: c
  };
}
function pf(e) {
  var t;
  const r = q0(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const vf = aa ? window : void 0;
function gf(...e) {
  let t, r, a, n;
  if (kv(e[0]) || Array.isArray(e[0]) ? ([r, a, n] = e, t = vf) : [t, r, a, n] = e, !t)
    return yv;
  Array.isArray(r) || (r = [r]), Array.isArray(a) || (a = [a]);
  const s = [], i = () => {
    s.forEach((o) => o()), s.length = 0;
  }, c = (o, h, x, d) => (o.addEventListener(h, x, d), () => o.removeEventListener(h, x, d)), f = Cn(() => [pf(t), q0(n)], ([o, h]) => {
    i(), o && s.push(...r.flatMap((x) => a.map((d) => c(o, x, d, h))));
  }, { immediate: !0, flush: "post" }), l = () => {
    f(), i();
  };
  return J0(l), l;
}
function Sv(e, t = !1) {
  const r = Be(), a = () => r.value = Boolean(e());
  return a(), Av(a, t), r;
}
const ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hi = "__vueuse_ssr_handlers__";
ui[hi] = ui[hi] || {};
var xi = Object.getOwnPropertySymbols, Cv = Object.prototype.hasOwnProperty, Ov = Object.prototype.propertyIsEnumerable, Dv = (e, t) => {
  var r = {};
  for (var a in e)
    Cv.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && xi)
    for (var a of xi(e))
      t.indexOf(a) < 0 && Ov.call(e, a) && (r[a] = e[a]);
  return r;
};
function Iv(e, t, r = {}) {
  const a = r, { window: n = vf } = a, s = Dv(a, ["window"]);
  let i;
  const c = Sv(() => n && "ResizeObserver" in n), f = () => {
    i && (i.disconnect(), i = void 0);
  }, l = Cn(() => pf(e), (h) => {
    f(), c.value && n && h && (i = new ResizeObserver(t), i.observe(h, s));
  }, { immediate: !0, flush: "post" }), o = () => {
    f(), l();
  };
  return J0(o), {
    isSupported: c,
    stop: o
  };
}
var di;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(di || (di = {}));
var Rv = Object.defineProperty, pi = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, vi = (e, t, r) => t in e ? Rv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pv = (e, t) => {
  for (var r in t || (t = {}))
    Nv.call(t, r) && vi(e, r, t[r]);
  if (pi)
    for (var r of pi(t))
      bv.call(t, r) && vi(e, r, t[r]);
  return e;
};
const Lv = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Pv({
  linear: Fv
}, Lv);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Mv = Object.prototype.hasOwnProperty, gi = (e, t) => Mv.call(e, t), l0 = (e) => typeof e == "function", Yt = (e) => typeof e == "string", mf = (e) => e !== null && typeof e == "object";
var Bv = typeof global == "object" && global && global.Object === Object && global;
const Uv = Bv;
var Hv = typeof self == "object" && self && self.Object === Object && self, Vv = Uv || Hv || Function("return this")();
const Z0 = Vv;
var $v = Z0.Symbol;
const qt = $v;
var _f = Object.prototype, Wv = _f.hasOwnProperty, Gv = _f.toString, la = qt ? qt.toStringTag : void 0;
function zv(e) {
  var t = Wv.call(e, la), r = e[la];
  try {
    e[la] = void 0;
    var a = !0;
  } catch {
  }
  var n = Gv.call(e);
  return a && (t ? e[la] = r : delete e[la]), n;
}
var Xv = Object.prototype, jv = Xv.toString;
function Kv(e) {
  return jv.call(e);
}
var Yv = "[object Null]", qv = "[object Undefined]", mi = qt ? qt.toStringTag : void 0;
function Ef(e) {
  return e == null ? e === void 0 ? qv : Yv : mi && mi in Object(e) ? zv(e) : Kv(e);
}
function Jv(e) {
  return e != null && typeof e == "object";
}
var Zv = "[object Symbol]";
function Q0(e) {
  return typeof e == "symbol" || Jv(e) && Ef(e) == Zv;
}
function Qv(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
    n[r] = t(e[r], r, e);
  return n;
}
var eg = Array.isArray;
const es = eg;
var rg = 1 / 0, _i = qt ? qt.prototype : void 0, Ei = _i ? _i.toString : void 0;
function Tf(e) {
  if (typeof e == "string")
    return e;
  if (es(e))
    return Qv(e, Tf) + "";
  if (Q0(e))
    return Ei ? Ei.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -rg ? "-0" : t;
}
function wf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tg = "[object AsyncFunction]", ag = "[object Function]", ng = "[object GeneratorFunction]", sg = "[object Proxy]";
function ig(e) {
  if (!wf(e))
    return !1;
  var t = Ef(e);
  return t == ag || t == ng || t == tg || t == sg;
}
var cg = Z0["__core-js_shared__"];
const Yn = cg;
var Ti = function() {
  var e = /[^.]+$/.exec(Yn && Yn.keys && Yn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fg(e) {
  return !!Ti && Ti in e;
}
var og = Function.prototype, lg = og.toString;
function ug(e) {
  if (e != null) {
    try {
      return lg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hg = /[\\^$.*+?()[\]{}|]/g, xg = /^\[object .+?Constructor\]$/, dg = Function.prototype, pg = Object.prototype, vg = dg.toString, gg = pg.hasOwnProperty, mg = RegExp(
  "^" + vg.call(gg).replace(hg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _g(e) {
  if (!wf(e) || fg(e))
    return !1;
  var t = ig(e) ? mg : xg;
  return t.test(ug(e));
}
function Eg(e, t) {
  return e == null ? void 0 : e[t];
}
function kf(e, t) {
  var r = Eg(e, t);
  return _g(r) ? r : void 0;
}
function Tg(e, t) {
  return e === t || e !== e && t !== t;
}
var wg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kg = /^\w*$/;
function yg(e, t) {
  if (es(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Q0(e) ? !0 : kg.test(e) || !wg.test(e) || t != null && e in Object(t);
}
var Fg = kf(Object, "create");
const Ma = Fg;
function Ag() {
  this.__data__ = Ma ? Ma(null) : {}, this.size = 0;
}
function Sg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cg = "__lodash_hash_undefined__", Og = Object.prototype, Dg = Og.hasOwnProperty;
function Ig(e) {
  var t = this.__data__;
  if (Ma) {
    var r = t[e];
    return r === Cg ? void 0 : r;
  }
  return Dg.call(t, e) ? t[e] : void 0;
}
var Rg = Object.prototype, Ng = Rg.hasOwnProperty;
function bg(e) {
  var t = this.__data__;
  return Ma ? t[e] !== void 0 : Ng.call(t, e);
}
var Pg = "__lodash_hash_undefined__";
function Lg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ma && t === void 0 ? Pg : t, this;
}
function Ot(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Ot.prototype.clear = Ag;
Ot.prototype.delete = Sg;
Ot.prototype.get = Ig;
Ot.prototype.has = bg;
Ot.prototype.set = Lg;
function Mg() {
  this.__data__ = [], this.size = 0;
}
function Nn(e, t) {
  for (var r = e.length; r--; )
    if (Tg(e[r][0], t))
      return r;
  return -1;
}
var Bg = Array.prototype, Ug = Bg.splice;
function Hg(e) {
  var t = this.__data__, r = Nn(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Ug.call(t, r, 1), --this.size, !0;
}
function Vg(e) {
  var t = this.__data__, r = Nn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function $g(e) {
  return Nn(this.__data__, e) > -1;
}
function Wg(e, t) {
  var r = this.__data__, a = Nn(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function na(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
na.prototype.clear = Mg;
na.prototype.delete = Hg;
na.prototype.get = Vg;
na.prototype.has = $g;
na.prototype.set = Wg;
var Gg = kf(Z0, "Map");
const zg = Gg;
function Xg() {
  this.size = 0, this.__data__ = {
    hash: new Ot(),
    map: new (zg || na)(),
    string: new Ot()
  };
}
function jg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bn(e, t) {
  var r = e.__data__;
  return jg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Kg(e) {
  var t = bn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yg(e) {
  return bn(this, e).get(e);
}
function qg(e) {
  return bn(this, e).has(e);
}
function Jg(e, t) {
  var r = bn(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function Lt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Lt.prototype.clear = Xg;
Lt.prototype.delete = Kg;
Lt.prototype.get = Yg;
Lt.prototype.has = qg;
Lt.prototype.set = Jg;
var Zg = "Expected a function";
function rs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zg);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], s = r.cache;
    if (s.has(n))
      return s.get(n);
    var i = e.apply(this, a);
    return r.cache = s.set(n, i) || s, i;
  };
  return r.cache = new (rs.Cache || Lt)(), r;
}
rs.Cache = Lt;
var Qg = 500;
function em(e) {
  var t = rs(e, function(a) {
    return r.size === Qg && r.clear(), a;
  }), r = t.cache;
  return t;
}
var rm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tm = /\\(\\)?/g, am = em(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rm, function(r, a, n, s) {
    t.push(n ? s.replace(tm, "$1") : a || r);
  }), t;
});
const nm = am;
function sm(e) {
  return e == null ? "" : Tf(e);
}
function im(e, t) {
  return es(e) ? e : yg(e, t) ? [e] : nm(sm(e));
}
var cm = 1 / 0;
function fm(e) {
  if (typeof e == "string" || Q0(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -cm ? "-0" : t;
}
function om(e, t) {
  t = im(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[fm(t[r++])];
  return r && r == a ? e : void 0;
}
function lm(e, t, r) {
  var a = e == null ? void 0 : om(e, t);
  return a === void 0 ? r : a;
}
function um(e) {
  for (var t = -1, r = e == null ? 0 : e.length, a = {}; ++t < r; ) {
    var n = e[t];
    a[n[0]] = n[1];
  }
  return a;
}
const hm = (e) => e === void 0, u0 = (e) => typeof Element > "u" ? !1 : e instanceof Element, xm = (e) => Yt(e) ? !Number.isNaN(Number(e)) : !1, wi = (e) => Object.keys(e);
class dm extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Pn(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Yt(e) ? new dm(`[${e}] ${t}`) : e;
    console.warn(r);
  }
}
const pm = "utils/dom/style";
function vm(e, t = "px") {
  if (!e)
    return "";
  if (La(e) || xm(e))
    return `${e}${t}`;
  if (Yt(e))
    return e;
  Pn(pm, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.1.0 */
var Mt = (e, t) => {
  let r = e.__vccOpts || e;
  for (let [a, n] of t)
    r[a] = n;
  return r;
}, gm = {
  name: "CircleCheck"
}, mm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _m = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Em = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Tm = [
  _m,
  Em
];
function wm(e, t, r, a, n, s) {
  return ve(), Pe("svg", mm, Tm);
}
var km = /* @__PURE__ */ Mt(gm, [["render", wm], ["__file", "circle-check.vue"]]), ym = {
  name: "CircleCloseFilled"
}, Fm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Am = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), Sm = [
  Am
];
function Cm(e, t, r, a, n, s) {
  return ve(), Pe("svg", Fm, Sm);
}
var yf = /* @__PURE__ */ Mt(ym, [["render", Cm], ["__file", "circle-close-filled.vue"]]), Om = {
  name: "Close"
}, Dm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Im = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Rm = [
  Im
];
function Nm(e, t, r, a, n, s) {
  return ve(), Pe("svg", Dm, Rm);
}
var Ff = /* @__PURE__ */ Mt(Om, [["render", Nm], ["__file", "close.vue"]]), bm = {
  name: "InfoFilled"
}, Pm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lm = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), Mm = [
  Lm
];
function Bm(e, t, r, a, n, s) {
  return ve(), Pe("svg", Pm, Mm);
}
var Af = /* @__PURE__ */ Mt(bm, [["render", Bm], ["__file", "info-filled.vue"]]), Um = {
  name: "SuccessFilled"
}, Hm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vm = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), $m = [
  Vm
];
function Wm(e, t, r, a, n, s) {
  return ve(), Pe("svg", Hm, $m);
}
var Sf = /* @__PURE__ */ Mt(Um, [["render", Wm], ["__file", "success-filled.vue"]]), Gm = {
  name: "UploadFilled"
}, zm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xm = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
  },
  null,
  -1
  /* HOISTED */
), jm = [
  Xm
];
function Km(e, t, r, a, n, s) {
  return ve(), Pe("svg", zm, jm);
}
var Ym = /* @__PURE__ */ Mt(Gm, [["render", Km], ["__file", "upload-filled.vue"]]), qm = {
  name: "WarningFilled"
}, Jm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zm = /* @__PURE__ */ Se(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Qm = [
  Zm
];
function e_(e, t, r, a, n, s) {
  return ve(), Pe("svg", Jm, Qm);
}
var Cf = /* @__PURE__ */ Mt(qm, [["render", e_], ["__file", "warning-filled.vue"]]);
const Of = "__epPropKey", Vr = (e) => e, r_ = (e) => mf(e) && !!e[Of], Df = (e, t) => {
  if (!mf(e) || r_(e))
    return e;
  const { values: r, required: a, default: n, type: s, validator: i } = e, f = {
    type: s,
    required: !!a,
    validator: r || i ? (l) => {
      let o = !1, h = [];
      if (r && (h = Array.from(r), gi(e, "default") && h.push(n), o || (o = h.includes(l))), i && (o || (o = i(l))), !o && h.length > 0) {
        const x = [...new Set(h)].map((d) => JSON.stringify(d)).join(", ");
        ho(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${x}], got value ${JSON.stringify(l)}.`);
      }
      return o;
    } : void 0,
    [Of]: !0
  };
  return gi(e, "default") && (f.default = n), f;
}, Xa = (e) => um(Object.entries(e).map(([t, r]) => [
  t,
  Df(r, t)
])), If = Vr([
  String,
  Object,
  Function
]), t_ = {
  Close: Ff
}, a_ = {
  Close: Ff,
  SuccessFilled: Sf,
  InfoFilled: Af,
  WarningFilled: Cf,
  CircleCloseFilled: yf
}, kn = {
  success: Sf,
  warning: Cf,
  error: yf,
  info: Af
}, Rf = (e, t) => {
  if (e.install = (r) => {
    for (const a of [e, ...Object.values(t ?? {})])
      r.component(a.name, a);
  }, t)
    for (const [r, a] of Object.entries(t))
      e[r] = a;
  return e;
}, Nf = (e, t) => (e.install = (r) => {
  e._context = r._context, r.config.globalProperties[t] = e;
}, e), cn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, n_ = ["", "default", "small", "large"], s_ = (e) => e;
var i_ = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const c_ = (e) => (t, r) => f_(t, r, oe(e)), f_ = (e, t, r) => lm(r, e, e).replace(/\{(\w+)\}/g, (a, n) => {
  var s;
  return `${(s = t == null ? void 0 : t[n]) != null ? s : `{${n}}`}`;
}), o_ = (e) => {
  const t = Ae(() => oe(e).name), r = xo(e) ? e : Be(e);
  return {
    lang: t,
    locale: r,
    t: c_(e)
  };
}, bf = Symbol("localeContextKey"), l_ = (e) => {
  const t = e || Qt(bf, Be());
  return o_(Ae(() => t.value || i_));
}, h0 = "el", u_ = "is-", mt = (e, t, r, a, n) => {
  let s = `${e}-${t}`;
  return r && (s += `-${r}`), a && (s += `__${a}`), n && (s += `--${n}`), s;
}, Pf = Symbol("namespaceContextKey"), h_ = (e) => {
  const t = e || Qt(Pf, Be(h0));
  return Ae(() => oe(t) || h0);
}, ts = (e, t) => {
  const r = h_(t);
  return {
    namespace: r,
    b: (u = "") => mt(r.value, e, u, "", ""),
    e: (u) => u ? mt(r.value, e, "", u, "") : "",
    m: (u) => u ? mt(r.value, e, "", "", u) : "",
    be: (u, v) => u && v ? mt(r.value, e, u, v, "") : "",
    em: (u, v) => u && v ? mt(r.value, e, "", u, v) : "",
    bm: (u, v) => u && v ? mt(r.value, e, u, "", v) : "",
    bem: (u, v, _) => u && v && _ ? mt(r.value, e, u, v, _) : "",
    is: (u, ...v) => {
      const _ = v.length >= 1 ? v[0] : !0;
      return u && _ ? `${u_}${u}` : "";
    },
    cssVar: (u) => {
      const v = {};
      for (const _ in u)
        u[_] && (v[`--${r.value}-${_}`] = u[_]);
      return v;
    },
    cssVarName: (u) => `--${r.value}-${u}`,
    cssVarBlock: (u) => {
      const v = {};
      for (const _ in u)
        u[_] && (v[`--${r.value}-${e}-${_}`] = u[_]);
      return v;
    },
    cssVarBlockName: (u) => `--${r.value}-${e}-${u}`
  };
}, ki = Be(0), Lf = 2e3, Mf = Symbol("zIndexContextKey"), x_ = (e) => {
  const t = e || Qt(Mf, void 0), r = Ae(() => {
    const s = oe(t);
    return La(s) ? s : Lf;
  }), a = Ae(() => r.value + ki.value);
  return {
    initialZIndex: r,
    currentZIndex: a,
    nextZIndex: () => (ki.value++, a.value)
  };
}, d_ = Df({
  type: String,
  values: n_,
  required: !1
}), p_ = Symbol("size"), Bf = Symbol(), yn = Be();
function Uf(e, t = void 0) {
  const r = E0() ? Qt(Bf, yn) : yn;
  return e ? Ae(() => {
    var a, n;
    return (n = (a = r.value) == null ? void 0 : a[e]) != null ? n : t;
  }) : r;
}
function Hf(e, t) {
  const r = Uf(), a = ts(e, Ae(() => {
    var c;
    return ((c = r.value) == null ? void 0 : c.namespace) || h0;
  })), n = l_(Ae(() => {
    var c;
    return (c = r.value) == null ? void 0 : c.locale;
  })), s = x_(Ae(() => {
    var c;
    return ((c = r.value) == null ? void 0 : c.zIndex) || Lf;
  })), i = Ae(() => {
    var c;
    return oe(t) || ((c = r.value) == null ? void 0 : c.size) || "";
  });
  return Vf(Ae(() => oe(r) || {})), {
    ns: a,
    locale: n,
    zIndex: s,
    size: i
  };
}
const Vf = (e, t, r = !1) => {
  var a;
  const n = !!E0(), s = n ? Uf() : void 0, i = (a = t == null ? void 0 : t.provide) != null ? a : n ? Jn : void 0;
  if (!i) {
    Pn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const c = Ae(() => {
    const f = oe(e);
    return s != null && s.value ? v_(s.value, f) : f;
  });
  return i(Bf, c), i(bf, Ae(() => c.value.locale)), i(Pf, Ae(() => c.value.namespace)), i(Mf, Ae(() => c.value.zIndex)), i(p_, {
    size: Ae(() => c.value.size || "")
  }), (r || !yn.value) && (yn.value = c.value), c;
}, v_ = (e, t) => {
  var r;
  const a = [.../* @__PURE__ */ new Set([...wi(e), ...wi(t)])], n = {};
  for (const s of a)
    n[s] = (r = t[s]) != null ? r : e[s];
  return n;
}, g_ = Xa({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Vr(Object)
  },
  size: d_,
  button: {
    type: Vr(Object)
  },
  experimentalFeatures: {
    type: Vr(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Vr(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), x0 = {};
Cr({
  name: "ElConfigProvider",
  props: g_,
  setup(e, { slots: t }) {
    Cn(() => e.message, (a) => {
      Object.assign(x0, a ?? {});
    }, { immediate: !0, deep: !0 });
    const r = Vf(e);
    return () => Ua(t, "default", { config: r == null ? void 0 : r.value });
  }
});
var Ln = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, n] of t)
    r[a] = n;
  return r;
};
const m_ = Xa({
  size: {
    type: Vr([Number, String])
  },
  color: {
    type: String
  }
}), __ = Cr({
  name: "ElIcon",
  inheritAttrs: !1
}), E_ = /* @__PURE__ */ Cr({
  ...__,
  props: m_,
  setup(e) {
    const t = e, r = ts("icon"), a = Ae(() => {
      const { size: n, color: s } = t;
      return !n && !s ? {} : {
        fontSize: hm(n) ? void 0 : vm(n),
        "--color": s
      };
    });
    return (n, s) => (ve(), Pe("i", po({
      class: oe(r).b(),
      style: oe(a)
    }, n.$attrs), [
      Ua(n.$slots, "default")
    ], 16));
  }
});
var T_ = /* @__PURE__ */ Ln(E_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Fn = Rf(T_);
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
function w_(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ba(e, t);
}
function d0(e) {
  return d0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, d0(e);
}
function Ba(e, t) {
  return Ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, Ba(e, t);
}
function k_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fn(e, t, r) {
  return k_() ? fn = Reflect.construct.bind() : fn = function(n, s, i) {
    var c = [null];
    c.push.apply(c, s);
    var f = Function.bind.apply(n, c), l = new f();
    return i && Ba(l, i.prototype), l;
  }, fn.apply(null, arguments);
}
function y_(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function p0(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return p0 = function(a) {
    if (a === null || !y_(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(a))
        return t.get(a);
      t.set(a, n);
    }
    function n() {
      return fn(a, arguments, d0(this).constructor);
    }
    return n.prototype = Object.create(a.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ba(n, a);
  }, p0(e);
}
var F_ = /%[sdj%]/g, $f = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && ($f = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(a) {
    return typeof a == "string";
  }) && console.warn(t, r);
});
function v0(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var a = r.field;
    t[a] = t[a] || [], t[a].push(r);
  }), t;
}
function Ar(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    r[a - 1] = arguments[a];
  var n = 0, s = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(F_, function(c) {
      if (c === "%%")
        return "%";
      if (n >= s)
        return c;
      switch (c) {
        case "%s":
          return String(r[n++]);
        case "%d":
          return Number(r[n++]);
        case "%j":
          try {
            return JSON.stringify(r[n++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return c;
      }
    });
    return i;
  }
  return e;
}
function A_(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Je(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || A_(t) && typeof e == "string" && !e);
}
function S_(e, t, r) {
  var a = [], n = 0, s = e.length;
  function i(c) {
    a.push.apply(a, c || []), n++, n === s && r(a);
  }
  e.forEach(function(c) {
    t(c, i);
  });
}
function yi(e, t, r) {
  var a = 0, n = e.length;
  function s(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var c = a;
    a = a + 1, c < n ? t(e[c], s) : r([]);
  }
  s([]);
}
function C_(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Fi = /* @__PURE__ */ function(e) {
  w_(t, e);
  function t(r, a) {
    var n;
    return n = e.call(this, "Async Validation Error") || this, n.errors = r, n.fields = a, n;
  }
  return t;
}(/* @__PURE__ */ p0(Error));
function O_(e, t, r, a, n) {
  if (t.first) {
    var s = new Promise(function(x, d) {
      var p = function(_) {
        return a(_), _.length ? d(new Fi(_, v0(_))) : x(n);
      }, u = C_(e);
      yi(u, r, p);
    });
    return s.catch(function(x) {
      return x;
    }), s;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], c = Object.keys(e), f = c.length, l = 0, o = [], h = new Promise(function(x, d) {
    var p = function(v) {
      if (o.push.apply(o, v), l++, l === f)
        return a(o), o.length ? d(new Fi(o, v0(o))) : x(n);
    };
    c.length || (a(o), x(n)), c.forEach(function(u) {
      var v = e[u];
      i.indexOf(u) !== -1 ? yi(v, r, p) : S_(v, r, p);
    });
  });
  return h.catch(function(x) {
    return x;
  }), h;
}
function D_(e) {
  return !!(e && e.message !== void 0);
}
function I_(e, t) {
  for (var r = e, a = 0; a < t.length; a++) {
    if (r == null)
      return r;
    r = r[t[a]];
  }
  return r;
}
function Ai(e, t) {
  return function(r) {
    var a;
    return e.fullFields ? a = I_(t, e.fullFields) : a = t[r.field || e.fullField], D_(r) ? (r.field = r.field || e.fullField, r.fieldValue = a, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: a,
      field: r.field || e.fullField
    };
  };
}
function Si(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var a = t[r];
        typeof a == "object" && typeof e[r] == "object" ? e[r] = Tt({}, e[r], a) : e[r] = a;
      }
  }
  return e;
}
var Wf = function(t, r, a, n, s, i) {
  t.required && (!a.hasOwnProperty(t.field) || Je(r, i || t.type)) && n.push(Ar(s.messages.required, t.fullField));
}, R_ = function(t, r, a, n, s) {
  (/^\s+$/.test(r) || r === "") && n.push(Ar(s.messages.whitespace, t.fullField));
}, nn, N_ = function() {
  if (nn)
    return nn;
  var e = "[a-fA-F\\d:]", t = function(O) {
    return O && O.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", a = "[a-fA-F\\d]{1,4}", n = (`
(?:
(?:` + a + ":){7}(?:" + a + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + a + ":){6}(?:" + r + "|:" + a + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + a + ":){5}(?::" + r + "|(?::" + a + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + a + ":){4}(?:(?::" + a + "){0,1}:" + r + "|(?::" + a + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + a + ":){3}(?:(?::" + a + "){0,2}:" + r + "|(?::" + a + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + a + ":){2}(?:(?::" + a + "){0,3}:" + r + "|(?::" + a + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + a + ":){1}(?:(?::" + a + "){0,4}:" + r + "|(?::" + a + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + a + "){0,5}:" + r + "|(?::" + a + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), s = new RegExp("(?:^" + r + "$)|(?:^" + n + "$)"), i = new RegExp("^" + r + "$"), c = new RegExp("^" + n + "$"), f = function(O) {
    return O && O.exact ? s : new RegExp("(?:" + t(O) + r + t(O) + ")|(?:" + t(O) + n + t(O) + ")", "g");
  };
  f.v4 = function(m) {
    return m && m.exact ? i : new RegExp("" + t(m) + r + t(m), "g");
  }, f.v6 = function(m) {
    return m && m.exact ? c : new RegExp("" + t(m) + n + t(m), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", o = "(?:\\S+(?::\\S*)?@)?", h = f.v4().source, x = f.v6().source, d = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", u = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", _ = '(?:[/?#][^\\s"]*)?', C = "(?:" + l + "|www\\.)" + o + "(?:localhost|" + h + "|" + x + "|" + d + p + u + ")" + v + _;
  return nn = new RegExp("(?:^" + C + "$)", "i"), nn;
}, Ci = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, pa = {
  integer: function(t) {
    return pa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return pa.number(t) && !pa.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !pa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ci.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(N_());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ci.hex);
  }
}, b_ = function(t, r, a, n, s) {
  if (t.required && r === void 0) {
    Wf(t, r, a, n, s);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], c = t.type;
  i.indexOf(c) > -1 ? pa[c](r) || n.push(Ar(s.messages.types[c], t.fullField, t.type)) : c && typeof r !== t.type && n.push(Ar(s.messages.types[c], t.fullField, t.type));
}, P_ = function(t, r, a, n, s) {
  var i = typeof t.len == "number", c = typeof t.min == "number", f = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, o = r, h = null, x = typeof r == "number", d = typeof r == "string", p = Array.isArray(r);
  if (x ? h = "number" : d ? h = "string" : p && (h = "array"), !h)
    return !1;
  p && (o = r.length), d && (o = r.replace(l, "_").length), i ? o !== t.len && n.push(Ar(s.messages[h].len, t.fullField, t.len)) : c && !f && o < t.min ? n.push(Ar(s.messages[h].min, t.fullField, t.min)) : f && !c && o > t.max ? n.push(Ar(s.messages[h].max, t.fullField, t.max)) : c && f && (o < t.min || o > t.max) && n.push(Ar(s.messages[h].range, t.fullField, t.min, t.max));
}, Ut = "enum", L_ = function(t, r, a, n, s) {
  t[Ut] = Array.isArray(t[Ut]) ? t[Ut] : [], t[Ut].indexOf(r) === -1 && n.push(Ar(s.messages[Ut], t.fullField, t[Ut].join(", ")));
}, M_ = function(t, r, a, n, s) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || n.push(Ar(s.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || n.push(Ar(s.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, _e = {
  required: Wf,
  whitespace: R_,
  type: b_,
  range: P_,
  enum: L_,
  pattern: M_
}, B_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r, "string") && !t.required)
      return a();
    _e.required(t, r, n, i, s, "string"), Je(r, "string") || (_e.type(t, r, n, i, s), _e.range(t, r, n, i, s), _e.pattern(t, r, n, i, s), t.whitespace === !0 && _e.whitespace(t, r, n, i, s));
  }
  a(i);
}, U_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && _e.type(t, r, n, i, s);
  }
  a(i);
}, H_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (r === "" && (r = void 0), Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && (_e.type(t, r, n, i, s), _e.range(t, r, n, i, s));
  }
  a(i);
}, V_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && _e.type(t, r, n, i, s);
  }
  a(i);
}, $_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), Je(r) || _e.type(t, r, n, i, s);
  }
  a(i);
}, W_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && (_e.type(t, r, n, i, s), _e.range(t, r, n, i, s));
  }
  a(i);
}, G_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && (_e.type(t, r, n, i, s), _e.range(t, r, n, i, s));
  }
  a(i);
}, z_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (r == null && !t.required)
      return a();
    _e.required(t, r, n, i, s, "array"), r != null && (_e.type(t, r, n, i, s), _e.range(t, r, n, i, s));
  }
  a(i);
}, X_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && _e.type(t, r, n, i, s);
  }
  a(i);
}, j_ = "enum", K_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s), r !== void 0 && _e[j_](t, r, n, i, s);
  }
  a(i);
}, Y_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r, "string") && !t.required)
      return a();
    _e.required(t, r, n, i, s), Je(r, "string") || _e.pattern(t, r, n, i, s);
  }
  a(i);
}, q_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r, "date") && !t.required)
      return a();
    if (_e.required(t, r, n, i, s), !Je(r, "date")) {
      var f;
      r instanceof Date ? f = r : f = new Date(r), _e.type(t, f, n, i, s), f && _e.range(t, f.getTime(), n, i, s);
    }
  }
  a(i);
}, J_ = function(t, r, a, n, s) {
  var i = [], c = Array.isArray(r) ? "array" : typeof r;
  _e.required(t, r, n, i, s, c), a(i);
}, qn = function(t, r, a, n, s) {
  var i = t.type, c = [], f = t.required || !t.required && n.hasOwnProperty(t.field);
  if (f) {
    if (Je(r, i) && !t.required)
      return a();
    _e.required(t, r, n, c, s, i), Je(r, i) || _e.type(t, r, n, c, s);
  }
  a(c);
}, Z_ = function(t, r, a, n, s) {
  var i = [], c = t.required || !t.required && n.hasOwnProperty(t.field);
  if (c) {
    if (Je(r) && !t.required)
      return a();
    _e.required(t, r, n, i, s);
  }
  a(i);
}, Fa = {
  string: B_,
  method: U_,
  number: H_,
  boolean: V_,
  regexp: $_,
  integer: W_,
  float: G_,
  array: z_,
  object: X_,
  enum: K_,
  pattern: Y_,
  date: q_,
  url: qn,
  hex: qn,
  email: qn,
  required: J_,
  any: Z_
};
function g0() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var m0 = g0(), ja = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = m0, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(a) {
    var n = this;
    if (!a)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof a != "object" || Array.isArray(a))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(a).forEach(function(s) {
      var i = a[s];
      n.rules[s] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(a) {
    return a && (this._messages = Si(g0(), a)), this._messages;
  }, t.validate = function(a, n, s) {
    var i = this;
    n === void 0 && (n = {}), s === void 0 && (s = function() {
    });
    var c = a, f = n, l = s;
    if (typeof f == "function" && (l = f, f = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, c), Promise.resolve(c);
    function o(u) {
      var v = [], _ = {};
      function C(O) {
        if (Array.isArray(O)) {
          var b;
          v = (b = v).concat.apply(b, O);
        } else
          v.push(O);
      }
      for (var m = 0; m < u.length; m++)
        C(u[m]);
      v.length ? (_ = v0(v), l(v, _)) : l(null, c);
    }
    if (f.messages) {
      var h = this.messages();
      h === m0 && (h = g0()), Si(h, f.messages), f.messages = h;
    } else
      f.messages = this.messages();
    var x = {}, d = f.keys || Object.keys(this.rules);
    d.forEach(function(u) {
      var v = i.rules[u], _ = c[u];
      v.forEach(function(C) {
        var m = C;
        typeof m.transform == "function" && (c === a && (c = Tt({}, c)), _ = c[u] = m.transform(_)), typeof m == "function" ? m = {
          validator: m
        } : m = Tt({}, m), m.validator = i.getValidationMethod(m), m.validator && (m.field = u, m.fullField = m.fullField || u, m.type = i.getType(m), x[u] = x[u] || [], x[u].push({
          rule: m,
          value: _,
          source: c,
          field: u
        }));
      });
    });
    var p = {};
    return O_(x, f, function(u, v) {
      var _ = u.rule, C = (_.type === "object" || _.type === "array") && (typeof _.fields == "object" || typeof _.defaultField == "object");
      C = C && (_.required || !_.required && u.value), _.field = u.field;
      function m(D, w) {
        return Tt({}, w, {
          fullField: _.fullField + "." + D,
          fullFields: _.fullFields ? [].concat(_.fullFields, [D]) : [D]
        });
      }
      function O(D) {
        D === void 0 && (D = []);
        var w = Array.isArray(D) ? D : [D];
        !f.suppressWarning && w.length && e.warning("async-validator:", w), w.length && _.message !== void 0 && (w = [].concat(_.message));
        var L = w.map(Ai(_, c));
        if (f.first && L.length)
          return p[_.field] = 1, v(L);
        if (!C)
          v(L);
        else {
          if (_.required && !u.value)
            return _.message !== void 0 ? L = [].concat(_.message).map(Ai(_, c)) : f.error && (L = [f.error(_, Ar(f.messages.required, _.field))]), v(L);
          var I = {};
          _.defaultField && Object.keys(u.value).map(function(P) {
            I[P] = _.defaultField;
          }), I = Tt({}, I, u.rule.fields);
          var z = {};
          Object.keys(I).forEach(function(P) {
            var K = I[P], fe = Array.isArray(K) ? K : [K];
            z[P] = fe.map(m.bind(null, P));
          });
          var W = new e(z);
          W.messages(f.messages), u.rule.options && (u.rule.options.messages = f.messages, u.rule.options.error = f.error), W.validate(u.value, u.rule.options || f, function(P) {
            var K = [];
            L && L.length && K.push.apply(K, L), P && P.length && K.push.apply(K, P), v(K.length ? K : null);
          });
        }
      }
      var b;
      if (_.asyncValidator)
        b = _.asyncValidator(_, u.value, O, u.source, f);
      else if (_.validator) {
        try {
          b = _.validator(_, u.value, O, u.source, f);
        } catch (D) {
          console.error == null || console.error(D), f.suppressValidatorError || setTimeout(function() {
            throw D;
          }, 0), O(D.message);
        }
        b === !0 ? O() : b === !1 ? O(typeof _.message == "function" ? _.message(_.fullField || _.field) : _.message || (_.fullField || _.field) + " fails") : b instanceof Array ? O(b) : b instanceof Error && O(b.message);
      }
      b && b.then && b.then(function() {
        return O();
      }, function(D) {
        return O(D);
      });
    }, function(u) {
      o(u);
    }, c);
  }, t.getType = function(a) {
    if (a.type === void 0 && a.pattern instanceof RegExp && (a.type = "pattern"), typeof a.validator != "function" && a.type && !Fa.hasOwnProperty(a.type))
      throw new Error(Ar("Unknown rule type %s", a.type));
    return a.type || "string";
  }, t.getValidationMethod = function(a) {
    if (typeof a.validator == "function")
      return a.validator;
    var n = Object.keys(a), s = n.indexOf("message");
    return s !== -1 && n.splice(s, 1), n.length === 1 && n[0] === "required" ? Fa.required : Fa[this.getType(a)] || void 0;
  }, e;
}();
ja.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Fa[t] = r;
};
ja.warning = $f;
ja.messages = m0;
ja.validators = Fa;
const Q_ = Xa({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), e4 = ["textContent"], r4 = Cr({
  name: "ElBadge"
}), t4 = /* @__PURE__ */ Cr({
  ...r4,
  props: Q_,
  setup(e, { expose: t }) {
    const r = e, a = ts("badge"), n = Ae(() => r.isDot ? "" : La(r.value) && La(r.max) ? r.max < r.value ? `${r.max}+` : `${r.value}` : `${r.value}`);
    return t({
      content: n
    }), (s, i) => (ve(), Pe("div", {
      class: Tr(oe(a).b())
    }, [
      Ua(s.$slots, "default"),
      be(T0, {
        name: `${oe(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Me(() => [
          Aa(Se("sup", {
            class: Tr([
              oe(a).e("content"),
              oe(a).em("content", s.type),
              oe(a).is("fixed", !!s.$slots.default),
              oe(a).is("dot", s.isDot)
            ]),
            textContent: Ft(oe(n))
          }, null, 10, e4), [
            [on, !s.hidden && (oe(n) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var a4 = /* @__PURE__ */ Ln(t4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const n4 = Rf(a4), Gf = ["success", "info", "warning", "error"], _r = s_({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: aa ? document.body : void 0
}), s4 = Xa({
  customClass: {
    type: String,
    default: _r.customClass
  },
  center: {
    type: Boolean,
    default: _r.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: _r.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: _r.duration
  },
  icon: {
    type: If,
    default: _r.icon
  },
  id: {
    type: String,
    default: _r.id
  },
  message: {
    type: Vr([
      String,
      Object,
      Function
    ]),
    default: _r.message
  },
  onClose: {
    type: Vr(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: _r.showClose
  },
  type: {
    type: String,
    values: Gf,
    default: _r.type
  },
  offset: {
    type: Number,
    default: _r.offset
  },
  zIndex: {
    type: Number,
    default: _r.zIndex
  },
  grouping: {
    type: Boolean,
    default: _r.grouping
  },
  repeatNum: {
    type: Number,
    default: _r.repeatNum
  }
}), i4 = {
  destroy: () => !0
}, $r = vo([]), c4 = (e) => {
  const t = $r.findIndex((n) => n.id === e), r = $r[t];
  let a;
  return t > 0 && (a = $r[t - 1]), { current: r, prev: a };
}, f4 = (e) => {
  const { prev: t } = c4(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, o4 = (e, t) => $r.findIndex((a) => a.id === e) > 0 ? 20 : t, l4 = ["id"], u4 = ["innerHTML"], h4 = Cr({
  name: "ElMessage"
}), x4 = /* @__PURE__ */ Cr({
  ...h4,
  props: s4,
  emits: i4,
  setup(e, { expose: t }) {
    const r = e, { Close: a } = a_, { ns: n, zIndex: s } = Hf("message"), { currentZIndex: i, nextZIndex: c } = s, f = Be(), l = Be(!1), o = Be(0);
    let h;
    const x = Ae(() => r.type ? r.type === "error" ? "danger" : r.type : "info"), d = Ae(() => {
      const w = r.type;
      return { [n.bm("icon", w)]: w && kn[w] };
    }), p = Ae(() => r.icon || kn[r.type] || ""), u = Ae(() => f4(r.id)), v = Ae(() => o4(r.id, r.offset) + u.value), _ = Ae(() => o.value + v.value), C = Ae(() => ({
      top: `${v.value}px`,
      zIndex: i.value
    }));
    function m() {
      r.duration !== 0 && ({ stop: h } = df(() => {
        b();
      }, r.duration));
    }
    function O() {
      h == null || h();
    }
    function b() {
      l.value = !1;
    }
    function D({ code: w }) {
      w === cn.esc && b();
    }
    return Sn(() => {
      m(), c(), l.value = !0;
    }), Cn(() => r.repeatNum, () => {
      O(), m();
    }), gf(document, "keydown", D), Iv(f, () => {
      o.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: l,
      bottom: _,
      close: b
    }), (w, L) => (ve(), Qe(T0, {
      name: oe(n).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: L[0] || (L[0] = (I) => w.$emit("destroy")),
      persisted: ""
    }, {
      default: Me(() => [
        Aa(Se("div", {
          id: w.id,
          ref_key: "messageRef",
          ref: f,
          class: Tr([
            oe(n).b(),
            { [oe(n).m(w.type)]: w.type && !w.icon },
            oe(n).is("center", w.center),
            oe(n).is("closable", w.showClose),
            w.customClass
          ]),
          style: Zn(oe(C)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: m
        }, [
          w.repeatNum > 1 ? (ve(), Qe(oe(n4), {
            key: 0,
            value: w.repeatNum,
            type: oe(x),
            class: Tr(oe(n).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Fr("v-if", !0),
          oe(p) ? (ve(), Qe(oe(Fn), {
            key: 1,
            class: Tr([oe(n).e("icon"), oe(d)])
          }, {
            default: Me(() => [
              (ve(), Qe(Di(oe(p))))
            ]),
            _: 1
          }, 8, ["class"])) : Fr("v-if", !0),
          Ua(w.$slots, "default", {}, () => [
            w.dangerouslyUseHTMLString ? (ve(), Pe(wt, { key: 1 }, [
              Fr(" Caution here, message could've been compromised, never use user's input as message "),
              Se("p", {
                class: Tr(oe(n).e("content")),
                innerHTML: w.message
              }, null, 10, u4)
            ], 2112)) : (ve(), Pe("p", {
              key: 0,
              class: Tr(oe(n).e("content"))
            }, Ft(w.message), 3))
          ]),
          w.showClose ? (ve(), Qe(oe(Fn), {
            key: 2,
            class: Tr(oe(n).e("closeBtn")),
            onClick: Ii(b, ["stop"])
          }, {
            default: Me(() => [
              be(oe(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Fr("v-if", !0)
        ], 46, l4), [
          [on, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var d4 = /* @__PURE__ */ Ln(x4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let p4 = 1;
const zf = (e) => {
  const t = !e || Yt(e) || Sa(e) || l0(e) ? { message: e } : e, r = {
    ..._r,
    ...t
  };
  if (!r.appendTo)
    r.appendTo = document.body;
  else if (Yt(r.appendTo)) {
    let a = document.querySelector(r.appendTo);
    u0(a) || (Pn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), a = document.body), r.appendTo = a;
  }
  return r;
}, v4 = (e) => {
  const t = $r.indexOf(e);
  if (t === -1)
    return;
  $r.splice(t, 1);
  const { handler: r } = e;
  r.close();
}, g4 = ({ appendTo: e, ...t }, r) => {
  const a = `message_${p4++}`, n = t.onClose, s = document.createElement("div"), i = {
    ...t,
    id: a,
    onClose: () => {
      n == null || n(), v4(o);
    },
    onDestroy: () => {
      ln(null, s);
    }
  }, c = be(d4, i, l0(i.message) || Sa(i.message) ? {
    default: l0(i.message) ? i.message : () => i.message
  } : null);
  c.appContext = r || Jt._context, ln(c, s), e.appendChild(s.firstElementChild);
  const f = c.component, o = {
    id: a,
    vnode: c,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return o;
}, Jt = (e = {}, t) => {
  if (!aa)
    return { close: () => {
    } };
  if (La(x0.max) && $r.length >= x0.max)
    return { close: () => {
    } };
  const r = zf(e);
  if (r.grouping && $r.length) {
    const n = $r.find(({ vnode: s }) => {
      var i;
      return ((i = s.props) == null ? void 0 : i.message) === r.message;
    });
    if (n)
      return n.props.repeatNum += 1, n.props.type = r.type, n.handler;
  }
  const a = g4(r, t);
  return $r.push(a), a.handler;
};
Gf.forEach((e) => {
  Jt[e] = (t = {}, r) => {
    const a = zf(t);
    return Jt({ ...a, type: e }, r);
  };
});
function m4(e) {
  for (const t of $r)
    (!e || e === t.props.type) && t.handler.close();
}
Jt.closeAll = m4;
Jt._context = null;
const Oi = Nf(Jt, "$message"), Xf = [
  "success",
  "info",
  "warning",
  "error"
], _4 = Xa({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: If
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Vr([String, Object]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: Vr(Function),
    default: () => {
    }
  },
  onClose: {
    type: Vr(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...Xf, ""],
    default: ""
  },
  zIndex: {
    type: Number,
    default: 0
  }
}), E4 = {
  destroy: () => !0
}, T4 = ["id"], w4 = ["textContent"], k4 = { key: 0 }, y4 = ["innerHTML"], F4 = Cr({
  name: "ElNotification"
}), A4 = /* @__PURE__ */ Cr({
  ...F4,
  props: _4,
  emits: E4,
  setup(e, { expose: t }) {
    const r = e, { ns: a, zIndex: n } = Hf("notification"), { nextZIndex: s, currentZIndex: i } = n, { Close: c } = t_, f = Be(!1);
    let l;
    const o = Ae(() => {
      const m = r.type;
      return m && kn[r.type] ? a.m(m) : "";
    }), h = Ae(() => r.type && kn[r.type] || r.icon), x = Ae(() => r.position.endsWith("right") ? "right" : "left"), d = Ae(() => r.position.startsWith("top") ? "top" : "bottom"), p = Ae(() => ({
      [d.value]: `${r.offset}px`,
      zIndex: i.value
    }));
    function u() {
      r.duration > 0 && ({ stop: l } = df(() => {
        f.value && _();
      }, r.duration));
    }
    function v() {
      l == null || l();
    }
    function _() {
      f.value = !1;
    }
    function C({ code: m }) {
      m === cn.delete || m === cn.backspace ? v() : m === cn.esc ? f.value && _() : u();
    }
    return Sn(() => {
      u(), s(), f.value = !0;
    }), gf(document, "keydown", C), t({
      visible: f,
      close: _
    }), (m, O) => (ve(), Qe(T0, {
      name: oe(a).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: O[1] || (O[1] = (b) => m.$emit("destroy")),
      persisted: ""
    }, {
      default: Me(() => [
        Aa(Se("div", {
          id: m.id,
          class: Tr([oe(a).b(), m.customClass, oe(x)]),
          style: Zn(oe(p)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: u,
          onClick: O[0] || (O[0] = (...b) => m.onClick && m.onClick(...b))
        }, [
          oe(h) ? (ve(), Qe(oe(Fn), {
            key: 0,
            class: Tr([oe(a).e("icon"), oe(o)])
          }, {
            default: Me(() => [
              (ve(), Qe(Di(oe(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Fr("v-if", !0),
          Se("div", {
            class: Tr(oe(a).e("group"))
          }, [
            Se("h2", {
              class: Tr(oe(a).e("title")),
              textContent: Ft(m.title)
            }, null, 10, w4),
            Aa(Se("div", {
              class: Tr(oe(a).e("content")),
              style: Zn(m.title ? void 0 : { margin: 0 })
            }, [
              Ua(m.$slots, "default", {}, () => [
                m.dangerouslyUseHTMLString ? (ve(), Pe(wt, { key: 1 }, [
                  Fr(" Caution here, message could've been compromised, never use user's input as message "),
                  Se("p", { innerHTML: m.message }, null, 8, y4)
                ], 2112)) : (ve(), Pe("p", k4, Ft(m.message), 1))
              ])
            ], 6), [
              [on, m.message]
            ]),
            m.showClose ? (ve(), Qe(oe(Fn), {
              key: 0,
              class: Tr(oe(a).e("closeBtn")),
              onClick: Ii(_, ["stop"])
            }, {
              default: Me(() => [
                be(oe(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Fr("v-if", !0)
          ], 2)
        ], 46, T4), [
          [on, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var S4 = /* @__PURE__ */ Ln(A4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);
const An = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _0 = 16;
let C4 = 1;
const Zt = function(e = {}, t = null) {
  if (!aa)
    return { close: () => {
    } };
  (typeof e == "string" || Sa(e)) && (e = { message: e });
  const r = e.position || "top-right";
  let a = e.offset || 0;
  An[r].forEach(({ vm: o }) => {
    var h;
    a += (((h = o.el) == null ? void 0 : h.offsetHeight) || 0) + _0;
  }), a += _0;
  const n = `notification_${C4++}`, s = e.onClose, i = {
    ...e,
    offset: a,
    id: n,
    onClose: () => {
      O4(n, r, s);
    }
  };
  let c = document.body;
  u0(e.appendTo) ? c = e.appendTo : Yt(e.appendTo) && (c = document.querySelector(e.appendTo)), u0(c) || (Pn("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), c = document.body);
  const f = document.createElement("div"), l = be(S4, i, Sa(i.message) ? {
    default: () => i.message
  } : null);
  return l.appContext = t ?? Zt._context, l.props.onDestroy = () => {
    ln(null, f);
  }, ln(l, f), An[r].push({ vm: l }), c.appendChild(f.firstElementChild), {
    close: () => {
      l.component.exposed.visible.value = !1;
    }
  };
};
Xf.forEach((e) => {
  Zt[e] = (t = {}) => ((typeof t == "string" || Sa(t)) && (t = {
    message: t
  }), Zt({
    ...t,
    type: e
  }));
});
function O4(e, t, r) {
  const a = An[t], n = a.findIndex(({ vm: l }) => {
    var o;
    return ((o = l.component) == null ? void 0 : o.props.id) === e;
  });
  if (n === -1)
    return;
  const { vm: s } = a[n];
  if (!s)
    return;
  r == null || r(s);
  const i = s.el.offsetHeight, c = t.split("-")[0];
  a.splice(n, 1);
  const f = a.length;
  if (!(f < 1))
    for (let l = n; l < f; l++) {
      const { el: o, component: h } = a[l].vm, x = Number.parseInt(o.style[c], 10) - i - _0;
      h.props.offset = x;
    }
}
function D4() {
  for (const e of Object.values(An))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Zt.closeAll = D4;
Zt._context = null;
const Vt = Nf(Zt, "$notify"), I4 = {
  key: 0,
  style: { "margin-top": "20px" }
}, R4 = { style: { "margin-top": "20px", "text-align": "center" } }, N4 = /* @__PURE__ */ Se("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Wt(" Drop file here or "),
  /* @__PURE__ */ Se("em", null, "click to upload")
], -1), b4 = /* @__PURE__ */ Cr({
  __name: "import-upload",
  props: {
    tips: Array,
    fields: {
      type: Object,
      required: !0
    }
  },
  emits: ["upload"],
  setup(e, { emit: t }) {
    const r = e, a = Qt("goNext"), n = Be([]), s = Be(!1), i = Be({}), c = () => {
      n.value = [];
    }, f = (d) => {
      var v;
      const p = (v = d.name.split(".").pop()) == null ? void 0 : v.toLocaleLowerCase(), u = ["xlsx", "xls", "csv"];
      if (!p)
        throw new Error("未解析文件后缀");
      return u.includes(p);
    }, l = (d, p) => {
      const u = Object.values(p);
      let v = !0;
      return u.forEach((_) => {
        d.includes(_) || (v = !1, Vt.error({ title: "数据出错了", message: _ + "列未找到" }));
      }), v;
    }, o = (d, p) => {
      const u = r.fields;
      return d.map((v) => {
        var _ = {};
        for (const C in u)
          _[C] = v[u[C]];
        return _;
      });
    }, h = (d) => {
      var p = {};
      return d.forEach((u) => {
        let v = u, _ = u;
        p[v] = _;
      }), p;
    }, x = async (d) => {
      if (!s.value) {
        if (!f(d))
          return Vt.error({ title: "上传出错了", message: `文件：${d.name} 文件类型错误，请在模板文件上修改后上传` }), !1;
        s.value = !0;
        try {
          let p = await wv(d);
          if (!p)
            return window.console.error(
              "excel解析异常，可能是时间格式为“X月X日”导致的。"
            ), Vt.error({ title: "上传出错了", message: "文件读取出错，可能是时间格式为“X月X日”导致的，请重新上传。" }), !1;
          const { columns: u, tableData: v } = p;
          if (!(u.length && v.length))
            Vt.error({ title: "上传出错了", message: "请打开模板文件, 并填写数据" });
          else {
            i.value = Object.keys(r.fields).length > 0 ? r.fields : h(u);
            let _ = l(u, r.fields);
            console.log(a), t(
              "upload",
              u,
              o(v, u),
              d.name,
              i.value
            ), a && a(_);
          }
        } catch (p) {
          Vt.error({ title: "上传出错了", message: p.message });
        } finally {
          s.value = !1;
        }
        return !1;
      }
    };
    return (d, p) => {
      const u = pr("el-alert"), v = pr("el-icon"), _ = pr("el-upload");
      return ve(), Pe("div", null, [
        e.tips && e.tips.length ? (ve(), Pe("div", I4, [
          (ve(!0), Pe(wt, null, w0(e.tips, (C, m) => (ve(), Qe(u, {
            type: "warning",
            key: m,
            title: m + 1 + "、" + C,
            "show-icon": "",
            closable: !1
          }, null, 8, ["title"]))), 128))
        ])) : Fr("", !0),
        Se("div", R4, [
          be(_, {
            drag: "",
            accept: ".xls,.xlsx",
            action: "/",
            "before-upload": x,
            fileList: n.value,
            customRequest: c,
            "show-file-list": !1
          }, {
            default: Me(() => [
              be(v, { class: "el-icon--upload" }, {
                default: Me(() => [
                  be(oe(Ym))
                ]),
                _: 1
              }),
              N4
            ]),
            _: 1
          }, 8, ["fileList"])
        ])
      ]);
    };
  }
}), P4 = /* @__PURE__ */ Se("h1", { style: { color: "#f56c6c", "margin-top": "20px" } }, "错误信息展示", -1), L4 = /* @__PURE__ */ Se("h1", { style: { "margin-top": "20px" } }, "数据列表", -1), M4 = /* @__PURE__ */ Se("br", null, null, -1), B4 = /* @__PURE__ */ Cr({
  __name: "import-data",
  props: {
    rules: {
      type: Object,
      default: () => ({})
    },
    fields: {
      type: Object,
      required: !0
    },
    requestFn: {
      type: Function,
      required: !0
    },
    tableData: {
      type: Array,
      default: () => []
    },
    formatter: {
      type: [Function, Object],
      required: !1
    },
    append: Object,
    scroll: {
      type: Number,
      required: !1,
      default: () => 1500
    },
    canNext: {
      type: Boolean,
      default: () => !0
    }
  },
  emits: ["pre"],
  setup(e, { emit: t }) {
    const r = e, a = Qt("goNext"), n = Be(!1), s = Be({});
    Be({
      defaultCurrent: 1,
      defaultPageSize: 10,
      hideOnSinglePage: !0
    });
    const i = Ae(() => {
      const h = s.value, x = new Array();
      for (const p in h) {
        var d = new Array();
        for (const u in h[p])
          h[p][u] && d.push(h[p][u]);
        d.length > 0 && x.push({
          row: Number(p) + 1,
          reason: d.join("、")
        });
      }
      return x;
    }), c = () => {
      if (r.rules) {
        var h = new ja(r.rules);
        const x = new Array();
        r.tableData.forEach((d, p) => {
          r.tableData[p].key = p + 1;
        }), r.tableData.forEach((d, p) => {
          try {
            h.validate(d, (u) => {
              u && (x[p] = [], u.forEach((v) => {
                x[p][v.field] = v.message;
              }));
            });
          } catch (u) {
            x[p] = [], x[p].key = u.message;
          }
        }), s.value = x;
      }
    }, f = () => {
      t("pre");
    }, l = (h) => h, o = async () => {
      if (n.value)
        return;
      if (i.value.length) {
        Vt.error({ title: "提示", message: "请处理完错误后重新上传" });
        return;
      }
      n.value = !0;
      let h = l(r.tableData);
      const x = r.append;
      x && (h = h.map((d) => Object.assign({}, d, x)));
      try {
        await r.requestFn(h), Oi.success("导入完成，导入明细请查看详情！"), a && a();
      } catch (d) {
        Array.isArray(d) && (s.value = d), Oi.error("导入失败, 请重试！");
      } finally {
        n.value = !1;
      }
    };
    return Sn(() => {
      c();
    }), (h, x) => {
      const d = pr("el-table-column"), p = pr("el-table"), u = pr("el-tooltip"), v = pr("el-button"), _ = pr("el-space"), C = go("loading");
      return ve(), Pe("div", null, [
        oe(i).length ? (ve(), Pe(wt, { key: 0 }, [
          P4,
          be(p, {
            data: oe(i),
            border: !0,
            style: { width: "100%", "margin-bottom": "20px" },
            "row-key": "row"
          }, {
            default: Me(() => [
              be(d, {
                label: "错误行号",
                "column-key": "row",
                prop: "row",
                width: 180
              }),
              be(d, {
                label: "错误原因",
                "column-key": "reason",
                prop: "reason"
              })
            ]),
            _: 1
          }, 8, ["data"])
        ], 64)) : Fr("", !0),
        L4,
        Aa((ve(), Qe(p, {
          data: e.tableData,
          border: !0,
          style: { width: "100%" },
          "row-key": "key"
        }, {
          default: Me(() => [
            be(d, {
              align: "center",
              type: "index",
              label: "行号",
              "column-key": "key",
              prop: "key",
              width: "50"
            }),
            (ve(!0), Pe(wt, null, w0(e.fields, (m, O) => (ve(), Qe(d, {
              "column-key": O,
              label: m,
              prop: O,
              align: "left",
              "header-align": "center"
            }, {
              default: Me((b) => [
                s.value[b.$index] && s.value[b.$index][O] ? (ve(), Qe(u, {
                  key: 0,
                  content: s.value[b.$index][O],
                  class: "item",
                  effect: "dark",
                  placement: "top"
                }, {
                  default: Me(() => [
                    Se("div", null, Ft(b.row[O] || " "), 1)
                  ]),
                  _: 2
                }, 1032, ["content"])) : (ve(), Pe(wt, { key: 1 }, [
                  Wt(Ft(b.row[O]), 1)
                ], 64))
              ]),
              _: 2
            }, 1032, ["column-key", "label", "prop"]))), 256))
          ]),
          _: 1
        }, 8, ["data"])), [
          [C, n.value]
        ]),
        M4,
        Se("div", null, [
          be(_, null, {
            default: Me(() => [
              be(v, {
                onClick: f,
                size: "large",
                type: "primary"
              }, {
                default: Me(() => [
                  Wt("重新上传")
                ]),
                _: 1
              }),
              be(v, {
                type: "primary",
                size: "large",
                loading: n.value,
                onClick: o,
                disabled: !e.canNext
              }, {
                default: Me(() => [
                  Wt("下一步")
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), U4 = (e) => (mo("data-v-f99ea3f9"), e = e(), _o(), e), H4 = {
  key: 0,
  class: "m"
}, V4 = { key: 1 }, $4 = { style: { "text-align": "center" } }, W4 = { class: "m" }, G4 = /* @__PURE__ */ U4(() => /* @__PURE__ */ Se("div", null, "导入完成，导入明细请查看详情！", -1)), z4 = /* @__PURE__ */ Cr({
  __name: "import-finish",
  props: {
    //是否显示返回结果列表
    showFinishResult: {
      type: Boolean,
      default: !1
    },
    dataSourceColumns: {
      type: Array
    },
    //返回展示结果集
    dataSource: {
      type: Array
    }
  },
  emits: ["finish"],
  setup(e, { emit: t }) {
    const r = () => {
      t("finish");
    };
    return (a, n) => {
      const s = pr("el-table-column"), i = pr("el-table"), c = pr("el-icon"), f = pr("el-button");
      return e.showFinishResult ? (ve(), Pe("div", H4, [
        be(i, { data: e.dataSource }, {
          default: Me(() => [
            (ve(!0), Pe(wt, null, w0(e.dataSourceColumns, (l) => (ve(), Qe(s, {
              prop: l.dataIndex
            }, {
              default: Me(() => [
                Wt(Ft(l.title), 1)
              ]),
              _: 2
            }, 1032, ["prop"]))), 256))
          ]),
          _: 1
        }, 8, ["data"])
      ])) : (ve(), Pe("div", V4, [
        Se("div", $4, [
          Se("div", W4, [
            be(c, { class: "icon" }, {
              default: Me(() => [
                be(oe(km))
              ]),
              _: 1
            })
          ]),
          G4,
          Se("div", null, [
            be(f, {
              onClick: r,
              type: "primary",
              size: "large"
            }, {
              default: Me(() => [
                Wt("查看详情")
              ]),
              _: 1
            })
          ])
        ])
      ]));
    };
  }
});
const X4 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, n] of t)
    r[a] = n;
  return r;
}, j4 = /* @__PURE__ */ X4(z4, [["__scopeId", "data-v-f99ea3f9"]]), K4 = /* @__PURE__ */ Se("br", null, null, -1), Y4 = /* @__PURE__ */ Cr({
  __name: "import-excel",
  props: {
    scroll: {
      type: Number,
      required: !1,
      default: () => 1500
    },
    filePath: {
      type: String,
      required: !1
    },
    requestFn: {
      type: Function,
      required: !0
    },
    returnFileName: {
      type: Function,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    visible: {
      type: Boolean,
      required: !0
    },
    title: String,
    append: Object,
    tips: Array,
    rules: Object,
    formatter: [Object, Function],
    dialogWidth: {
      type: String,
      default: "80%"
    },
    showFinishResult: {
      type: Boolean,
      default: !1
    },
    finishDataColumns: {
      required: !1,
      type: Array
    },
    finishDataSource: {
      required: !1,
      type: Array
    }
  },
  emits: ["goPre", "close", "finish"],
  setup(e, { emit: t }) {
    const r = e, a = Be([]), n = Be([]), s = Be(1), i = Be(!0), c = Be({}), f = (u, v, _, C) => {
      c.value = C, n.value = u, a.value = v, r.returnFileName && r.returnFileName(_);
    }, l = () => {
      a.value = [], n.value = [], s.value = 1;
    }, o = () => {
      l(), t("close");
    }, h = () => {
      o(), t("finish");
    }, x = (u = !0) => {
      s.value++, i.value = u;
    }, d = () => {
      s.value--;
    }, p = () => {
      a.value = [], n.value = [], d();
    };
    return Jn("goPre", d), Jn("goNext", x), (u, v) => {
      const _ = pr("el-step"), C = pr("el-steps"), m = pr("el-dialog");
      return e.visible ? (ve(), Qe(m, {
        key: 0,
        title: e.title,
        "model-value": e.visible,
        width: e.dialogWidth,
        onClose: o,
        "close-on-click-modal": !1
      }, {
        default: Me(() => [
          be(C, {
            active: s.value,
            "finish-status": "success"
          }, {
            default: Me(() => [
              be(_, { title: "上传文件" }),
              be(_, { title: "确认数据" }),
              be(_, { title: "完成" })
            ]),
            _: 1
          }, 8, ["active"]),
          s.value === 1 ? (ve(), Qe(b4, {
            key: 0,
            fields: c.value,
            tips: e.tips,
            onUpload: f
          }, null, 8, ["fields", "tips"])) : Fr("", !0),
          s.value === 2 ? (ve(), Qe(B4, {
            key: 1,
            append: e.append,
            fields: c.value,
            formatter: e.formatter,
            "request-fn": e.requestFn,
            rules: e.rules,
            "table-data": a.value,
            scroll: e.scroll,
            "can-next": i.value,
            onPre: p
          }, null, 8, ["append", "fields", "formatter", "request-fn", "rules", "table-data", "scroll", "can-next"])) : Fr("", !0),
          K4,
          s.value === 3 ? (ve(), Qe(j4, {
            key: 2,
            onFinish: h,
            "show-finish-result": e.showFinishResult,
            "data-source-columns": e.finishDataColumns,
            "data-source": e.finishDataSource
          }, null, 8, ["show-finish-result", "data-source-columns", "data-source"])) : Fr("", !0)
        ]),
        _: 1
      }, 8, ["title", "model-value", "width"])) : Fr("", !0);
    };
  }
}), J4 = (e) => {
  e.component("ImportView", Y4);
};
export {
  J4 as default
};
