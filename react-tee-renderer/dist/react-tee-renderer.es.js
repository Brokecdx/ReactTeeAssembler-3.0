import ne, { useRef as F, useEffect as A } from "react";
import ie from "styled-components";
var x = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function se() {
  if (Y) return E;
  Y = 1;
  var s = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(t, i, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      o = {};
      for (var h in i)
        h !== "key" && (o[h] = i[h]);
    } else o = i;
    return i = o.ref, {
      $$typeof: s,
      type: t,
      key: l,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return E.Fragment = n, E.jsx = r, E.jsxs = r, E;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function oe() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case H:
          return "Profiler";
        case q:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case G:
            return e.displayName || "Context";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var u = e.render;
            return e = e.displayName, e || (e = u.displayName || u.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return u = e.displayName || null, u !== null ? u : s(e.type) || "Memo";
          case k:
            u = e._payload, e = e._init;
            try {
              return s(e(u));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function r(e) {
      try {
        n(e);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var d = u.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), n(e);
      }
    }
    function t(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var u = s(e);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = _.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (N.call(e, "key")) {
        var u = Object.getOwnPropertyDescriptor(e, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, u) {
      function d() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: d,
        configurable: !0
      });
    }
    function a() {
      var e = s(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function c(e, u, d, f, R, S) {
      var m = d.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: u,
        props: d,
        _owner: f
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, u, d, f, R, S) {
      var m = u.children;
      if (m !== void 0)
        if (f)
          if (te(m)) {
            for (f = 0; f < m.length; f++)
              y(m[f]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(m);
      if (N.call(u, "key")) {
        m = s(e);
        var b = Object.keys(u).filter(function(re) {
          return re !== "key";
        });
        f = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", M[m + f] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          b,
          m
        ), M[m + f] = !0);
      }
      if (m = null, d !== void 0 && (r(d), m = "" + d), l(u) && (r(u.key), m = "" + u.key), "key" in u) {
        d = {};
        for (var I in u)
          I !== "key" && (d[I] = u[I]);
      } else d = u;
      return m && h(
        d,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), c(
        e,
        m,
        d,
        i(),
        R,
        S
      );
    }
    function y(e) {
      v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function v(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var w = ne, P = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), G = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), _ = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, te = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var j, D = {}, $ = w.react_stack_bottom_frame.bind(
      w,
      o
    )(), L = T(t(o)), M = {};
    p.Fragment = C, p.jsx = function(e, u, d) {
      var f = 1e4 > _.recentlyCreatedOwnerStacks++;
      return g(
        e,
        u,
        d,
        !1,
        f ? Error("react-stack-top-frame") : $,
        f ? T(t(e)) : L
      );
    }, p.jsxs = function(e, u, d) {
      var f = 1e4 > _.recentlyCreatedOwnerStacks++;
      return g(
        e,
        u,
        d,
        !0,
        f ? Error("react-stack-top-frame") : $,
        f ? T(t(e)) : L
      );
    };
  }()), p;
}
process.env.NODE_ENV === "production" ? x.exports = se() : x.exports = oe();
var ae = x.exports;
class B {
  constructor(n, r, t, i = 255) {
    this.r = n, this.g = r, this.b = t, this.a = i;
  }
}
const le = (s, n, r) => {
  if (s === void 0)
    return [0, 0, 0];
  let t = (1 - Math.abs(2 * r / 100 - 1)) * (n / 100), i = s / 60, o = t * (1 - Math.abs(i % 2 - 1)), l = 0, h = 0, a = 0;
  i = Math.floor(i), i === 0 ? (l = t, h = o, a = 0) : i === 1 ? (l = o, h = t, a = 0) : i === 2 ? (l = 0, h = t, a = o) : i === 3 ? (l = 0, h = o, a = t) : i === 4 ? (l = o, h = 0, a = t) : i === 5 && (l = t, h = 0, a = o);
  let c = r / 100 - t / 2;
  return l = Math.round((l + c) * 255), h = Math.round((h + c) * 255), a = Math.round((a + c) * 255), [l, h, a];
}, ce = (s = 0, n = 0, r = 0) => {
  s /= 255, n /= 255, r /= 255;
  const t = Math.max(s, n, r), i = t - Math.min(s, n, r), o = i ? t === s ? (n - r) / i : t === n ? 2 + (r - s) / i : 4 + (s - n) / i : 0;
  return [
    60 * o < 0 ? 60 * o + 360 : 60 * o,
    100 * (i ? t <= 0.5 ? i / (2 * t - i) : i / (2 - (2 * t - i)) : 0),
    100 * (2 * t - i) / 2
  ];
}, he = (s) => {
  let n = s.split(",");
  const r = n.map(Number);
  if (r.length < 3 || r.length > 4)
    throw new Error("Minimum and maximum elements: 3, 4");
  for (let i = 0; i < r.length; i++) {
    let o = n[i].match(/\d+/);
    if (!o)
      throw new Error(
        `Invalid RGB color format ${s}
Valid format: '255, 0, 12' or '255, 0, 12, 255'`
      );
    var t = parseInt(o[0]);
    if (t < 0 || t > 255)
      throw new Error(`RGB color ${t} is not between 0 and 255`);
    r[i] = t;
  }
  return r;
}, ue = (s) => {
  let n = s.split(",");
  const r = n.map(Number), t = [360, 100, 100, 255];
  let i;
  if (r.length < 3 || r.length > 4)
    throw new Error("Minimum and maximum elements: 3, 4");
  for (let l = 0; l < r.length; l++) {
    let h = n[l].match(/\d+/);
    if (!h)
      throw new Error(
        `Invalid HSL color format ${s}
Valid format: '360, 100, 100' or '123, 12, 12, 255'`
      );
    var o = parseInt(h[0]);
    if (i = t[l], o < 0 || o > i)
      throw new Error(`RGB color ${o} is not between 0 and ${i}`);
    r[l] = o;
  }
  return r;
}, O = (s) => {
  for (const n of s)
    if (!"1234567890".includes(n))
      return !1;
  return !0;
}, de = (s, n) => {
  let r = [];
  for (let t = 0; t < s.length; t += n)
    r.push(s.slice(t, t + n));
  return r;
}, fe = (s) => {
  if (!O(s))
    throw new Error(
      `Invalid code format ${s}
Valid format: A value encoded on 6 bytes`
    );
  if (parseInt(s) < 0 || parseInt(s) > 16777215)
    throw new Error(
      `Invalid value ${s}
Valid format: an integer (min: 0, max: 0xffffff)`
    );
  s = parseInt(s).toString(16);
  const n = s.length;
  n < 6 && (s = "0".repeat(6 - n) + s);
  var r = de(s, 2).map((t) => parseInt(t, 16));
  return r[0] === 255 && (r[0] = 0), r[0] = r[0] * 360 / 255, r[1] = r[1] * 100 / 255, r[2] = (r[2] / 255 / 2 + 0.5) * 100, r;
}, V = {
  rgb: he,
  hsl: ue,
  code: fe
}, me = (s) => {
  const n = (s.r + s.g + s.b) / 3;
  s.r = n, s.g = n, s.b = n;
}, ge = (s, n) => {
  s.r = s.r * n.r / 255, s.g = s.g * n.g / 255, s.b = s.b * n.b / 255, s.a = s.a * n.a / 255;
}, ye = {
  default: ge,
  grayscale: me
};
class be {
  constructor(n, r, t = {}) {
    this.SKIN = {
      size: {
        width: 256,
        height: 128
      },
      elements: {
        body: [0, 0, 96, 96],
        body_shadow: [96, 0, 96, 96],
        hand: [192, 0, 32, 32],
        hand_shadow: [224, 0, 32, 32],
        foot: [192, 32, 64, 32],
        foot_shadow: [192, 64, 64, 32],
        credits: [0, 96, 64, 32],
        default_eye: [64, 96, 32, 32],
        angry_eye: [96, 96, 32, 32],
        blink_eye: [128, 96, 32, 32],
        happy_eye: [160, 96, 32, 32],
        cross_eye: [192, 96, 32, 32],
        surprised_eye: [224, 96, 32, 32]
      }
    }, this.genRandomID = (o = 16) => {
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let h = "";
      for (let a = 0; a < o; a++) {
        let c = Math.floor(Math.random() * l.length);
        h += l.substring(c, c + 1);
      }
      return h;
    }, this.setContainer = (o) => {
      if (o instanceof HTMLElement) {
        if (this.container = o, this.container.id = this.randomID, this.container.innerHTML = `
        <div class='line'>
          <div class='marker'></div>
        </div>
 
        <div class='body_shadow' body-part></div>
 
        <div class='back_foot_shadow' body-part></div>
        <div class='back_foot' body-part></div>
 
        <div class='body' body-part></div>
 
        <div class='eyes'>
          <div class='lEye' body-part></div>
          <div class='rEye' body-part></div>
        </div>
 
        <div class='front_foot_shadow' body-part></div>
        <div class='front_foot' body-part></div>`, this.config.size) {
          const l = this.config.size.toString();
          this.container.style.fontSize = (parseInt(l) / 100).toString() + "px", this.container.style.height = l + "px", this.container.style.width = l + "px";
        }
        (async () => {
          var l;
          try {
            let h = document.createElement("style"), a = this.config.bodyColor, c = this.config.feetColor;
            await this.getTeeImage(
              a ?? "none",
              c ?? "none",
              this.config.coloringMode
            ), h.innerHTML = `
            #${this.randomID}.tee div[body-part] {
              background-image: url(${this.imageResult});
              background-size: 256em 128em;
              position: absolute;
            }`;
            let g = document.querySelector(`#${this.randomID}.tee style`);
            g && g.remove(), (l = this.container) == null || l.appendChild(h);
          } catch (h) {
            console.error("[TeeSkinRenderer] CRITICAL ERROR: Failed to load or process image:", h);
          }
        })(), this.lookAt(this.eyesAngle);
      } else
        throw Error("Invalid element: container is not of type HTMLElement");
    }, this.teeArray = [], this.teeIDsArray = [], this.randomID = "", this.d = [], this.isBody = !1, this.imageResult = "", this.bodyColor = "", this.feetColor = "", this.coloringMode = "", this.markerCoord = { x: 0, y: 0 }, this.scale = 0, this.isRatioLegal = () => {
      const o = this.SKIN.size.width / this.SKIN.size.height;
      return this.image.width / this.image.height === o;
    }, this.getMultiplier = () => this.image.width / this.SKIN.size.width, this.teeArray.push(this), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d", { willReadFrequently: !0 }), this.elements = {}, this.image = new Image(), this.image.crossOrigin = "anonymous", this.imageLink = n, this.config = t, this.teeEyesVariables = !1, this.eyesAngle = 0;
    const i = () => {
      const o = this.genRandomID();
      this.teeIDsArray.includes(o) ? i() : this.randomID = o;
    };
    i(), this.teeIDsArray.push(this.randomID), r && this.setContainer(r);
  }
  async loadImage(n) {
    await new Promise((r, t) => {
      this.image.onload = r, this.image.onerror = (i) => {
        console.error(`[Tee.ts] Image load error for: ${n}`), t(i);
      }, this.image.src = n;
    }), this.canvas.width = this.image.width, this.canvas.height = this.image.height, this.canvas.style.width = "256px", this.canvas.style.height = "128px", this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
  }
  setColor(n, r) {
    if (this.currentImgData === void 0) return;
    let t = this.currentImgData.data, i, o, l, h, a;
    for (a = 0; a < t.length; a += 4) {
      i = t[a], o = t[a + 1], l = t[a + 2], h = t[a + 3];
      let c = new B(i, o, l, h);
      ye[r](c, n), t[a] = c.r, t[a + 1] = c.g, t[a + 2] = c.b, t[a + 3] = c.a;
    }
    this.setCanvas();
  }
  reorderBody() {
    if (this.currentImgData === void 0) return;
    let n = Array(256).fill(0), r = 0, t = this.currentImgData.data, i;
    const o = 192, l = 255 - o;
    for (i = 0; i < t.length; i += 4)
      t[i + 3] > 128 && n[t[i]]++;
    for (let a = 1; a < 256; a++)
      n[r] < n[a] && (r = a);
    const h = 255 - r;
    for (i = 0; i < t.length; i += 4) {
      let a = t[i];
      a <= r && r == 0 || (a <= r ? a = Math.trunc(a / r * o) : h == 0 ? a = o : a = Math.trunc(
        (a - r) / h * l + o
      ), t[i] = a, t[i + 1] = a, t[i + 2] = a);
    }
    this.setCanvas();
  }
  setCanvas() {
    this.currentCtx === void 0 || this.currentImgData === void 0 || this.currentCtx.putImageData(this.currentImgData, 0, 0);
  }
  getColorArg(n, r) {
    if (!Object.keys(V).includes(r))
      throw new Error(
        `Invalid color format: ${r}
Valid formats: rgb, hsl, code`
      );
    return V[r](n);
  }
  colorLimitForSkin(n, r = 52.5) {
    return n[2] < r && (n[2] = r), n;
  }
  colorConvert(n, r) {
    var t = this.getColorArg(n, r);
    return r === "rgb" && (t = ce(t[0], t[1], t[2])), t = this.colorLimitForSkin(t), t = le(t[0], t[1], t[2]), new B(t[0], t[1], t[2]);
  }
  setColor2(n, r) {
    let t = this.colorConvert(n, r);
    this.setColor(t, "grayscale"), this.isBody && this.reorderBody(), this.setColor(t, "default");
  }
  async getTeeImage(n = "none", r = "none", t = "code") {
    await this.loadImage(this.imageLink), n = n.toString(), r = r.toString();
    let i = Object.keys(this.SKIN.elements);
    if (this.isRatioLegal())
      for (let o in i) {
        let l = i[o];
        this.elements[l] = document.createElement("canvas");
        let h = this.elements[l], a = this.getMultiplier();
        if (this.d = this.SKIN.elements[l].map(
          (c) => c * a
        ), h.width = this.d[2], h.height = this.d[3], this.currentCtx = h.getContext("2d", {
          willReadFrequently: !0
        }), this.currentCtx.putImageData(this.ctx.getImageData(this.d[0], this.d[1], this.d[2], this.d[3]), 0, 0), i[o] === "body" ? this.isBody = !0 : this.isBody = !1, this.currentImgData = this.currentCtx.getImageData(0, 0, this.d[2], this.d[3]), n !== "none" && !l.includes("credits") && !l.includes("foot") ? this.setColor2(n, t) : r !== "none" && l.includes("foot") && this.setColor2(r, t), Object.keys(this.SKIN.elements)[i.length - 1] === l) {
          this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
          for (let c = 0; c < Object.keys(this.SKIN.elements).length; c++) {
            let g = this.SKIN.elements[Object.keys(this.elements)[c]].map((y) => y * a);
            if (this.ctx.drawImage(this.elements[Object.keys(this.elements)[c]], g[0], g[1]), c === Object.keys(this.SKIN.elements).length - 1)
              return this.imageResult = this.canvas.toDataURL(), this.bodyColor = n, this.feetColor = r, this.coloringMode = t, this.imageResult;
          }
        }
      }
    else
      throw new Error("Image has the wrong ratio.");
    return this.imageResult;
  }
  bindContainer(n) {
    this.setContainer(n);
  }
  unbindContainer() {
    this.container && (this.container.innerHTML = "", this.container.removeAttribute("id"), this.container = void 0);
  }
  teeEyesTranslateFunction() {
    this.container !== void 0 && (this.markerCoord = {
      x: this.marker.getBoundingClientRect().x,
      y: this.marker.getBoundingClientRect().y
    }, this.scale = this.container.getBoundingClientRect().width / this.container.offsetWidth, this.teeEyes.style.transform = `translate(${(this.markerCoord.x - this.container.getBoundingClientRect().x) / this.scale}px, ${(this.markerCoord.y - this.container.getBoundingClientRect().y) / this.scale}px)`);
  }
  setTeeEyesVariables() {
    this.teeEyesVariables || !this.container || (this.teeEyesVariables = !0, this.line = document.querySelector(`#${this.randomID}.tee .line`), this.marker = document.querySelector(`#${this.randomID}.tee .marker`), this.teeEyes = document.querySelector(`#${this.randomID}.tee .eyes`));
  }
  lookAtCursor() {
    this.container && (this.setTeeEyesVariables(), this.dontLookAtCursor(), this.moveTeeEyesFunction = (n) => {
      this.line && (this.originCoord = {
        x: this.line.getBoundingClientRect().x.toFixed(),
        y: this.line.getBoundingClientRect().y.toFixed()
      }, this.eyesAngle = Math.atan2(n.clientY - this.originCoord.y, n.clientX - this.originCoord.x) * 180 / Math.PI, this.line.style.transform = `translate(-1em, .5em) rotate(${this.eyesAngle}deg)`, this.teeEyesTranslateFunction());
    }, this.eyeMoveEvent = document.addEventListener("mousemove", this.moveTeeEyesFunction));
  }
  dontLookAtCursor() {
    this.moveTeeEyesFunction && (document.removeEventListener("mousemove", this.moveTeeEyesFunction), this.moveTeeEyesFunction = void 0);
  }
  lookAt(n = 0) {
    this.container && (this.eyesAngle = n, this.setTeeEyesVariables(), this.line && (this.line.style.transform = `translate(-1em, .5em) rotate(${n}deg)`, this.teeEyesTranslateFunction()));
  }
  // --- BUG 1 FIX: New function to set emotion ---
  setEmotion(n = "default_eye") {
    if (!this.container) return;
    const r = this.container.querySelector(".lEye"), t = this.container.querySelector(".rEye");
    if (!r || !t) return;
    let i = this.SKIN.elements[n];
    i || (console.warn(`[Tee.ts] Unknown emotion '${n}', falling back to default.`), i = this.SKIN.elements.default_eye);
    const o = `-${i[0]}em -${i[1]}em`;
    r.style.backgroundPosition = o, t.style.backgroundPosition = o;
  }
}
const ve = ie.div`
  /*
    TeeAssembler 3.0
  */

  /* Base styles */
  font-size: 1px;
  position: relative;
  width: 80px;
  height: 80px;

  /* Handle dynamic size from props */
  ${(s) => s.dynamicSize && `
    font-size: ${s.dynamicSize / 100}px;
    height: ${s.dynamicSize}px;
    width: ${s.dynamicSize}px;
  `}

  /* All other selectors are nested inside */
  .back_foot,
  .back_foot_shadow,
  .front_foot,
  .front_foot_shadow {
    width: 64em;
    height: 32em;
  }

  .back_foot_shadow {
    background-position: -192em -64em;
    top: 52em;
    left: 4em;
    transform: scale(1.2);
  }

  .back_foot {
    background-position: -192em -32em;
    top: 51em;
    left: 7em;
    transform: scale(1.4);
  }

  .body,
  .body_shadow {
    width: 96em;
    height: 96em;
    transform: scale(0.9);
    top: 0;
  }

  .body_shadow {
    background-position: -96em 0;
  }

  .body {
    background-position: 0 0;
  }

  .front_foot_shadow {
    background-position: -192em -64em;
    top: 52em;
    left: 28em;
    transform: scale(1.2);
  }

  .front_foot {
    background-position: -192em -32em;
    top: 51em;
    left: 26em;
    transform: scale(1.35);
  }

  .lEye,
  .rEye {
    display: inline-flex;
    width: 32em;
    height: 32em;
    background-position: -64em -96em; /* This will be overridden by setEmotion */
    filter: brightness(1);
  }

  .lEye {
    left: -22em;
    top: -21em;
    transform: scale(1.08);
  }

  .rEye {
    left: -9em;
    top: -21em;
    transform: scale(1.08) rotateY(-180deg);
  }

  .line {
    width: 9.5em;
    height: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0.5em 0.5em;
    opacity: 0;
  }

  .marker {
    width: 1em;
    height: 1em;
    position: absolute;
    right: -1em;
    opacity: 0;
  }
`;
function we({
  skinImage: s,
  size: n,
  lookMouse: r,
  look: t,
  emotion: i,
  // <-- NEW PROP
  bodyColor: o,
  feetColor: l,
  coloringMode: h = "code"
}) {
  const a = F(null), c = F(null);
  return A(() => {
    if (s && a.current) {
      const g = {
        bodyColor: o ?? "none",
        // Pass 'none' if null
        feetColor: l ?? "none",
        // Pass 'none' if null
        coloringMode: h,
        size: n
      };
      return c.current = new be(s, a.current, g), c.current && (r ? c.current.lookAtCursor() : t !== void 0 && O(t.toString()) ? c.current.lookAt(t) : c.current.lookAt(0), c.current.setEmotion(i)), () => {
        var y, v;
        (y = c.current) == null || y.dontLookAtCursor(), (v = c.current) == null || v.unbindContainer(), c.current = null;
      };
    }
  }, [s, n, o, l, h]), A(() => {
    c.current && (r ? c.current.lookAtCursor() : t !== void 0 && O(t.toString()) ? (c.current.dontLookAtCursor(), c.current.lookAt(t)) : (c.current.dontLookAtCursor(), c.current.lookAt(0)));
  }, [t, r]), A(() => {
    c.current && c.current.setEmotion(i);
  }, [i]), /* @__PURE__ */ ae.jsx(
    ve,
    {
      ref: a,
      dynamicSize: n,
      className: "tee"
    }
  );
}
export {
  we as default
};
