!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function (e, t, n) {
    "use strict";
    var o,
      i = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      r = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function s(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function c(e, t) {
      for (var n = {}, o = [], i = 0; i < e.length; i++) {
        var r = e[i],
          c = t.base ? r[0] + t.base : r[0],
          l = n[c] || 0,
          d = "".concat(c, " ").concat(l);
        n[c] = l + 1;
        var p = s(d),
          u = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== p
          ? (a[p].references++, a[p].updater(u))
          : a.push({ identifier: d, updater: m(u, t), references: 1 }),
          o.push(d);
      }
      return o;
    }
    function l(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var i = n.nc;
        i && (o.nonce = i);
      }
      if (
        (Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = r(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var d,
      p =
        ((d = []),
        function (e, t) {
          return (d[e] = t), d.filter(Boolean).join("\n");
        });
    function u(e, t, n, o) {
      var i = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = p(t, i);
      else {
        var r = document.createTextNode(i),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
      }
    }
    function f(e, t, n) {
      var o = n.css,
        i = n.media,
        r = n.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        r &&
          "undefined" != typeof btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var b = null,
      h = 0;
    function m(e, t) {
      var n, o, i;
      if (t.singleton) {
        var r = h++;
        (n = b || (b = l(t))),
          (o = u.bind(null, n, r, !1)),
          (i = u.bind(null, n, r, !0));
      } else
        (n = l(t)),
          (o = f.bind(null, n, t)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else i();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = i());
      var n = c((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var i = s(n[o]);
            a[i].references--;
          }
          for (var r = c(e, t), l = 0; l < n.length; l++) {
            var d = s(n[l]);
            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
          }
          n = r;
        }
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var i =
                    ((a = o),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(c, " */")),
                  r = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(r).concat([i]).join("\n");
              }
              var a, s, c;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, o) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (o)
            for (var r = 0; r < this.length; r++) {
              var a = this[r][0];
              null != a && (i[a] = !0);
            }
          for (var s = 0; s < e.length; s++) {
            var c = [].concat(e[s]);
            (o && i[c[0]]) ||
              (n &&
                (c[2]
                  ? (c[2] = "".concat(n, " and ").concat(c[2]))
                  : (c[2] = n)),
              t.push(c));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    e.exports = n(3);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(4),
      n(6),
      n(8),
      n(10);
  },
  function (e, t, n) {
    var o = n(0),
      i = n(5);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(i, r);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    (t = n(1)(!1)).push([
      e.i,
      '.header_title{font-family:"Cabin Sketch",cursive;font-size:58px;margin:0 0 0 0}.header_sns{display:flex;flex-wrap:wrap;justify-content:center;margin-left:-8px;margin-right:-8px;font-size:48px}.header_sns_icons{flex-basis:50%;padding-left:8px;padding-right:8px}.header_sns_icons_memorandum{position:relative;top:2px}.header_sns_icons_lapras{position:relative;top:0px}.header_sns_icons_diary{position:relative;top:0px}.header_sns_icons_amazon{position:relative;top:1px}.header_sns_icons_stackexchange{position:relative;top:-1px}.header_sns_icons a{text-decoration:none}.header_sns_icons img{width:1em;height:1em}@media only screen and (max-width: 500px){.header_title{font-size:10.25vw}}',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    var o = n(0),
      i = n(7);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(i, r);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    (t = n(1)(!1)).push([
      e.i,
      '.block{font-size:18px;display:flex;flex-direction:column;min-height:100vh;border:8px solid #000}.block-header{text-align:center}.block-main{padding:1rem;margin:0 10%;min-height:60vh}.block-main_icons{height:1em;position:relative;top:-2px;left:-5px}.block-footer{background-color:#000;height:5vh;padding:0 10vw;margin-top:auto;margin-bottom:0}.block-footer small{font-size:12px;color:#fff}.block-footer small::before{content:"©";font-size:1.8em;position:relative;top:4px;padding-right:.1em}',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    var o = n(0),
      i = n(9);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(i, r);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    (t = n(1)(!1)).push([
      e.i,
      "html{height:100%}body{height:100%}a{color:#000}a::after{color:#000}",
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    var o = n(0),
      i = n(11);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(i, r);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    (t = n(1)(!1)).push([
      e.i,
      "/*! destyle.css v1.0.13 | MIT License | https://github.com/nicolas-cusan/destyle.css */*{box-sizing:border-box}::before,::after{box-sizing:inherit}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:bold}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:1px solid;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none;vertical-align:bottom}embed,object,iframe{border:0;vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;border:0;background:transparent;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}[type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}[type=radio]{-webkit-appearance:radio;appearance:radio}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{cursor:pointer;-webkit-appearance:none;appearance:none}button[disabled],[type=button][disabled],[type=reset][disabled],[type=submit][disabled]{cursor:default}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}option{padding:0}fieldset{margin:0;padding:0;border:0;min-width:0}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}table{border-collapse:collapse;border-spacing:0}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:bold}template{display:none}[hidden]{display:none}",
      "",
    ]),
      (e.exports = t);
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2hlYWRlci5zY3NzP2VkNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9ibG9jay5zY3NzPzBjMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2Jsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3V0aWxpdHkuc2Nzcz9lZTFiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS91dGlsaXR5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2Rlc3R5bGUuc2Nzcz80MmU3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZXN0eWxlLnNjc3MiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJtZW1vIiwiaXNPbGRJRSIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFsbCIsImF0b2IiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJsZW5ndGgiLCJtb2R1bGVzVG9Eb20iLCJsaXN0Iiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsIml0ZW0iLCJpZCIsImJhc2UiLCJjb3VudCIsImNvbmNhdCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsInB1c2giLCJhZGRTdHlsZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJub25jZSIsImtleXMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsInRleHRTdG9yZSIsInJlcGxhY2VUZXh0IiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJqb2luIiwiYXBwbHlUb1NpbmdsZXRvblRhZyIsInJlbW92ZSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3NzTm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwbHlUb1RhZyIsInJlbW92ZUF0dHJpYnV0ZSIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaXJzdENoaWxkIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJwYXJlbnROb2RlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwibmV3T2JqIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsInRvU3RyaW5nIiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJzcGxpY2UiLCJ1c2VTb3VyY2VNYXAiLCJ0aGlzIiwibWFwIiwiY29udGVudCIsImNzc01hcHBpbmciLCJzb3VyY2VNYXBwaW5nIiwiYmFzZTY0IiwiZGF0YSIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImFwaSIsImRlZmF1bHQiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2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T0MsRUFBSXlILEVBQVMsTUFHOUMsSUFBSW5FLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQZ0YsRUFBSWIsRUFBU25FLEdBSTFCdkQsRUFBT0QsUUFBVTJILEVBQVFlLFFBQVUsSSxpQkNoQm5DMUksRUFEa0MsRUFBUSxFQUNoQzJJLEVBQTRCLElBRTlCcEUsS0FBSyxDQUFDdEUsRUFBT0MsRUFBSSxneEZBQWl4RixLQUUxeUZELEVBQU9ELFFBQVVBIiwiZmlsZSI6InNjcmlwdHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9zdHlsZS9oZWFkZXIuc2Nzc1wiKTtcbnJlcXVpcmUoXCIuL3N0eWxlL2Jsb2NrLnNjc3NcIik7XG5yZXF1aXJlKFwiLi9zdHlsZS91dGlsaXR5LnNjc3NcIik7XG5yZXF1aXJlKFwiLi9zdHlsZS9kZXN0eWxlLnNjc3NcIik7XG4vLyDjgZPjgZPjgavkvZXjgYvlh6bnkIbjgpLov73liqDjgZnjgovkuojlrprjgafjgZlcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlcl90aXRsZXtmb250LWZhbWlseTpcXFwiQ2FiaW4gU2tldGNoXFxcIixjdXJzaXZlO2ZvbnQtc2l6ZTo1OHB4O21hcmdpbjowIDAgMCAwfS5oZWFkZXJfc25ze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1sZWZ0Oi04cHg7bWFyZ2luLXJpZ2h0Oi04cHg7Zm9udC1zaXplOjQ4cHh9LmhlYWRlcl9zbnNfaWNvbnN7ZmxleC1iYXNpczo1MCU7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweH0uaGVhZGVyX3Nuc19pY29uc19tZW1vcmFuZHVte3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoycHh9LmhlYWRlcl9zbnNfaWNvbnNfbGFwcmFze3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowcHh9LmhlYWRlcl9zbnNfaWNvbnNfZGlhcnl7cG9zaXRpb246cmVsYXRpdmU7dG9wOjBweH0uaGVhZGVyX3Nuc19pY29uc19hbWF6b257cG9zaXRpb246cmVsYXRpdmU7dG9wOjFweH0uaGVhZGVyX3Nuc19pY29uc19zdGFja2V4Y2hhbmdle3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4fS5oZWFkZXJfc25zX2ljb25zIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmhlYWRlcl9zbnNfaWNvbnMgaW1ne3dpZHRoOjFlbTtoZWlnaHQ6MWVtfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpey5oZWFkZXJfdGl0bGV7Zm9udC1zaXplOjEwLjI1dnd9fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ibG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJsb2Nre2ZvbnQtc2l6ZToxOHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLWhlaWdodDoxMDB2aDtib3JkZXI6OHB4IHNvbGlkICMwMDB9LmJsb2NrLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcn0uYmxvY2stbWFpbntwYWRkaW5nOjFyZW07bWFyZ2luOjAgMTAlO21pbi1oZWlnaHQ6NjB2aH0uYmxvY2stbWFpbl9pY29uc3toZWlnaHQ6MWVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMnB4O2xlZnQ6LTVweH0uYmxvY2stZm9vdGVye2JhY2tncm91bmQtY29sb3I6IzAwMDtoZWlnaHQ6NXZoO3BhZGRpbmc6MCAxMHZ3O21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOjB9LmJsb2NrLWZvb3RlciBzbWFsbHtmb250LXNpemU6MTJweDtjb2xvcjojZmZmfS5ibG9jay1mb290ZXIgc21hbGw6OmJlZm9yZXtjb250ZW50OlxcXCLCqVxcXCI7Zm9udC1zaXplOjEuOGVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDo0cHg7cGFkZGluZy1yaWdodDouMWVtfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlsaXR5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se2hlaWdodDoxMDAlfWJvZHl7aGVpZ2h0OjEwMCV9YXtjb2xvcjojMDAwfWE6OmFmdGVye2NvbG9yOiMwMDB9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBkZXN0eWxlLmNzcyB2MS4wLjEzIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vbmljb2xhcy1jdXNhbi9kZXN0eWxlLmNzcyAqLyp7Ym94LXNpemluZzpib3JkZXItYm94fTo6YmVmb3JlLDo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fWh0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9Ym9keXttYXJnaW46MH1tYWlue2Rpc3BsYXk6YmxvY2t9cCx0YWJsZSxibG9ja3F1b3RlLGFkZHJlc3MscHJlLGlmcmFtZSxmb3JtLGZpZ3VyZSxkbHttYXJnaW46MH1oMSxoMixoMyxoNCxoNSxoNntmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bWFyZ2luOjB9dWwsb2x7bWFyZ2luOjA7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZX1kdHtmb250LXdlaWdodDpib2xkfWRke21hcmdpbi1sZWZ0OjB9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlcjowO2JvcmRlci10b3A6MXB4IHNvbGlkO21hcmdpbjowO2NsZWFyOmJvdGg7Y29sb3I6aW5oZXJpdH1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6aW5oZXJpdH1hZGRyZXNze2ZvbnQtc3R5bGU6aW5oZXJpdH1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6aW5oZXJpdH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZTppbmhlcml0fXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotMC4yNWVtfXN1cHt0b3A6LTAuNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZTt2ZXJ0aWNhbC1hbGlnbjpib3R0b219ZW1iZWQsb2JqZWN0LGlmcmFtZXtib3JkZXI6MDt2ZXJ0aWNhbC1hbGlnbjpib3R0b219YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzowO21hcmdpbjowO291dGxpbmU6MDtib3JkZXItcmFkaXVzOjA7dGV4dC1hbGlnbjppbmhlcml0fVt0eXBlPWNoZWNrYm94XXstd2Via2l0LWFwcGVhcmFuY2U6Y2hlY2tib3g7YXBwZWFyYW5jZTpjaGVja2JveH1bdHlwZT1yYWRpb117LXdlYmtpdC1hcHBlYXJhbmNlOnJhZGlvO2FwcGVhcmFuY2U6cmFkaW99YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRde2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1idXR0b25bZGlzYWJsZWRdLFt0eXBlPWJ1dHRvbl1bZGlzYWJsZWRdLFt0eXBlPXJlc2V0XVtkaXNhYmxlZF0sW3R5cGU9c3VibWl0XVtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfWJ1dHRvbjotbW96LWZvY3VzcmluZyxbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fW9wdGlvbntwYWRkaW5nOjB9ZmllbGRzZXR7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO21pbi13aWR0aDowfWxlZ2VuZHtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hde291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWxhYmVsW2Zvcl17Y3Vyc29yOnBvaW50ZXJ9ZGV0YWlsc3tkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9Y2FwdGlvbnt0ZXh0LWFsaWduOmxlZnR9dGQsdGh7dmVydGljYWwtYWxpZ246dG9wO3BhZGRpbmc6MH10aHt0ZXh0LWFsaWduOmxlZnQ7Zm9udC13ZWlnaHQ6Ym9sZH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9
