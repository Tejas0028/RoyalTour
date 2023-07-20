var markerClusterer = function (t) {
    "use strict";
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
        }
    }
    function n(t, e, n) {
        return e && r(t.prototype, e),
            n && r(t, n),
            t
    }
    function o(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
            e && a(t, e)
    }
    function i(t) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
            ,
            i(t)
    }
    function a(t, e) {
        return a = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e,
                t
        }
            ,
            a(t, e)
    }
    function s(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function u(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = i(t);
            if (e) {
                var o = i(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else
                r = n.apply(this, arguments);
            return s(this, r)
        }
    }
    function c(t, e) {
        return function (t) {
            if (Array.isArray(t))
                return t
        }(t) || function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                return;
            var r = []
                , n = !0
                , o = !1
                , i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
                    !e || r.length !== e); n = !0)
                    ;
            } catch (t) {
                o = !0,
                    i = t
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return r
        }(t, e) || l(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function f(t) {
        return function (t) {
            if (Array.isArray(t))
                return p(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || l(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function l(t, e) {
        if (t) {
            if ("string" == typeof t)
                return p(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(t, e) : void 0
        }
    }
    function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r];
        return n
    }
    var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
        , m = function (t) {
            return t && t.Math == Math && t
        }
        , d = m("object" == typeof globalThis && globalThis) || m("object" == typeof window && window) || m("object" == typeof self && self) || m("object" == typeof h && h) || function () {
            return this
        }() || Function("return this")()
        , g = {}
        , v = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
        , y = !v((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }
        ))
        , b = !v((function () {
            var t = function () { }
                .bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        }
        ))
        , w = b
        , k = Function.prototype.call
        , S = w ? k.bind(k) : function () {
            return k.apply(k, arguments)
        }
        , O = {}
        , x = {}.propertyIsEnumerable
        , M = Object.getOwnPropertyDescriptor
        , P = M && !x.call({
            1: 2
        }, 1);
    O.f = P ? function (t) {
        var e = M(this, t);
        return !!e && e.enumerable
    }
        : x;
    var j, E, C = function (t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }, _ = b, L = Function.prototype, T = L.call, I = _ && L.bind.bind(T, T), A = _ ? I : function (t) {
        return function () {
            return T.apply(t, arguments)
        }
    }
        , N = A, z = N({}.toString), D = N("".slice), R = function (t) {
            return D(z(t), 8, -1)
        }, F = v, Z = R, G = Object, V = A("".split), B = F((function () {
            return !G("z").propertyIsEnumerable(0)
        }
        )) ? function (t) {
            return "String" == Z(t) ? V(t, "") : G(t)
        }
            : G, U = function (t) {
                return null == t
            }, W = U, H = TypeError, q = function (t) {
                if (W(t))
                    throw H("Can't call method on " + t);
                return t
            }, X = B, $ = q, J = function (t) {
                return X($(t))
            }, K = "object" == typeof document && document.all, Y = {
                all: K,
                IS_HTMLDDA: void 0 === K && void 0 !== K
            }, Q = Y.all, tt = Y.IS_HTMLDDA ? function (t) {
                return "function" == typeof t || t === Q
            }
                : function (t) {
                    return "function" == typeof t
                }
        , et = tt, rt = Y.all, nt = Y.IS_HTMLDDA ? function (t) {
            return "object" == typeof t ? null !== t : et(t) || t === rt
        }
            : function (t) {
                return "object" == typeof t ? null !== t : et(t)
            }
        , ot = d, it = tt, at = function (t) {
            return it(t) ? t : void 0
        }, st = function (t, e) {
            return arguments.length < 2 ? at(ot[t]) : ot[t] && ot[t][e]
        }, ut = A({}.isPrototypeOf), ct = d, ft = st("navigator", "userAgent") || "", lt = ct.process, pt = ct.Deno, ht = lt && lt.versions || pt && pt.version, mt = ht && ht.v8;
    mt && (E = (j = mt.split("."))[0] > 0 && j[0] < 4 ? 1 : +(j[0] + j[1])),
        !E && ft && (!(j = ft.match(/Edge\/(\d+)/)) || j[1] >= 74) && (j = ft.match(/Chrome\/(\d+)/)) && (E = +j[1]);
    var dt = E
        , gt = dt
        , vt = v
        , yt = !!Object.getOwnPropertySymbols && !vt((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && gt && gt < 41
        }
        ))
        , bt = yt && !Symbol.sham && "symbol" == typeof Symbol.iterator
        , wt = st
        , kt = tt
        , St = ut
        , Ot = Object
        , xt = bt ? function (t) {
            return "symbol" == typeof t
        }
            : function (t) {
                var e = wt("Symbol");
                return kt(e) && St(e.prototype, Ot(t))
            }
        , Mt = String
        , Pt = function (t) {
            try {
                return Mt(t)
            } catch (t) {
                return "Object"
            }
        }
        , jt = tt
        , Et = Pt
        , Ct = TypeError
        , _t = function (t) {
            if (jt(t))
                return t;
            throw Ct(Et(t) + " is not a function")
        }
        , Lt = _t
        , Tt = U
        , It = S
        , At = tt
        , Nt = nt
        , zt = TypeError
        , Dt = {
            exports: {}
        }
        , Rt = d
        , Ft = Object.defineProperty
        , Zt = function (t, e) {
            try {
                Ft(Rt, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                Rt[t] = e
            }
            return e
        }
        , Gt = Zt
        , Vt = "__core-js_shared__"
        , Bt = d[Vt] || Gt(Vt, {})
        , Ut = Bt;
    (Dt.exports = function (t, e) {
        return Ut[t] || (Ut[t] = void 0 !== e ? e : {})
    }
    )("versions", []).push({
        version: "3.26.1",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Wt = q
        , Ht = Object
        , qt = function (t) {
            return Ht(Wt(t))
        }
        , Xt = qt
        , $t = A({}.hasOwnProperty)
        , Jt = Object.hasOwn || function (t, e) {
            return $t(Xt(t), e)
        }
        , Kt = A
        , Yt = 0
        , Qt = Math.random()
        , te = Kt(1..toString)
        , ee = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + te(++Yt + Qt, 36)
        }
        , re = d
        , ne = Dt.exports
        , oe = Jt
        , ie = ee
        , ae = yt
        , se = bt
        , ue = ne("wks")
        , ce = re.Symbol
        , fe = ce && ce.for
        , le = se ? ce : ce && ce.withoutSetter || ie
        , pe = function (t) {
            if (!oe(ue, t) || !ae && "string" != typeof ue[t]) {
                var e = "Symbol." + t;
                ae && oe(ce, t) ? ue[t] = ce[t] : ue[t] = se && fe ? fe(e) : le(e)
            }
            return ue[t]
        }
        , he = S
        , me = nt
        , de = xt
        , ge = function (t, e) {
            var r = t[e];
            return Tt(r) ? void 0 : Lt(r)
        }
        , ve = function (t, e) {
            var r, n;
            if ("string" === e && At(r = t.toString) && !Nt(n = It(r, t)))
                return n;
            if (At(r = t.valueOf) && !Nt(n = It(r, t)))
                return n;
            if ("string" !== e && At(r = t.toString) && !Nt(n = It(r, t)))
                return n;
            throw zt("Can't convert object to primitive value")
        }
        , ye = TypeError
        , be = pe("toPrimitive")
        , we = function (t, e) {
            if (!me(t) || de(t))
                return t;
            var r, n = ge(t, be);
            if (n) {
                if (void 0 === e && (e = "default"),
                    r = he(n, t, e),
                    !me(r) || de(r))
                    return r;
                throw ye("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"),
                ve(t, e)
        }
        , ke = we
        , Se = xt
        , Oe = function (t) {
            var e = ke(t, "string");
            return Se(e) ? e : e + ""
        }
        , xe = nt
        , Me = d.document
        , Pe = xe(Me) && xe(Me.createElement)
        , je = function (t) {
            return Pe ? Me.createElement(t) : {}
        }
        , Ee = je
        , Ce = !y && !v((function () {
            return 7 != Object.defineProperty(Ee("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }
        ))
        , _e = y
        , Le = S
        , Te = O
        , Ie = C
        , Ae = J
        , Ne = Oe
        , ze = Jt
        , De = Ce
        , Re = Object.getOwnPropertyDescriptor;
    g.f = _e ? Re : function (t, e) {
        if (t = Ae(t),
            e = Ne(e),
            De)
            try {
                return Re(t, e)
            } catch (t) { }
        if (ze(t, e))
            return Ie(!Le(Te.f, t, e), t[e])
    }
        ;
    var Fe = {}
        , Ze = y && v((function () {
            return 42 != Object.defineProperty((function () { }
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
        , Ge = nt
        , Ve = String
        , Be = TypeError
        , Ue = function (t) {
            if (Ge(t))
                return t;
            throw Be(Ve(t) + " is not an object")
        }
        , We = y
        , He = Ce
        , qe = Ze
        , Xe = Ue
        , $e = Oe
        , Je = TypeError
        , Ke = Object.defineProperty
        , Ye = Object.getOwnPropertyDescriptor
        , Qe = "enumerable"
        , tr = "configurable"
        , er = "writable";
    Fe.f = We ? qe ? function (t, e, r) {
        if (Xe(t),
            e = $e(e),
            Xe(r),
            "function" == typeof t && "prototype" === e && "value" in r && er in r && !r.writable) {
            var n = Ye(t, e);
            n && n.writable && (t[e] = r.value,
                r = {
                    configurable: tr in r ? r.configurable : n.configurable,
                    enumerable: Qe in r ? r.enumerable : n.enumerable,
                    writable: !1
                })
        }
        return Ke(t, e, r)
    }
        : Ke : function (t, e, r) {
            if (Xe(t),
                e = $e(e),
                Xe(r),
                He)
                try {
                    return Ke(t, e, r)
                } catch (t) { }
            if ("get" in r || "set" in r)
                throw Je("Accessors not supported");
            return "value" in r && (t[e] = r.value),
                t
        }
        ;
    var rr = Fe
        , nr = C
        , or = y ? function (t, e, r) {
            return rr.f(t, e, nr(1, r))
        }
            : function (t, e, r) {
                return t[e] = r,
                    t
            }
        , ir = {
            exports: {}
        }
        , ar = y
        , sr = Jt
        , ur = Function.prototype
        , cr = ar && Object.getOwnPropertyDescriptor
        , fr = sr(ur, "name")
        , lr = {
            EXISTS: fr,
            PROPER: fr && "something" === function () { }
                .name,
            CONFIGURABLE: fr && (!ar || ar && cr(ur, "name").configurable)
        }
        , pr = tt
        , hr = Bt
        , mr = A(Function.toString);
    pr(hr.inspectSource) || (hr.inspectSource = function (t) {
        return mr(t)
    }
    );
    var dr, gr, vr, yr = hr.inspectSource, br = tt, wr = d.WeakMap, kr = br(wr) && /native code/.test(String(wr)), Sr = Dt.exports, Or = ee, xr = Sr("keys"), Mr = function (t) {
        return xr[t] || (xr[t] = Or(t))
    }, Pr = {}, jr = kr, Er = d, Cr = nt, _r = or, Lr = Jt, Tr = Bt, Ir = Mr, Ar = Pr, Nr = "Object already initialized", zr = Er.TypeError, Dr = Er.WeakMap;
    if (jr || Tr.state) {
        var Rr = Tr.state || (Tr.state = new Dr);
        Rr.get = Rr.get,
            Rr.has = Rr.has,
            Rr.set = Rr.set,
            dr = function (t, e) {
                if (Rr.has(t))
                    throw zr(Nr);
                return e.facade = t,
                    Rr.set(t, e),
                    e
            }
            ,
            gr = function (t) {
                return Rr.get(t) || {}
            }
            ,
            vr = function (t) {
                return Rr.has(t)
            }
    } else {
        var Fr = Ir("state");
        Ar[Fr] = !0,
            dr = function (t, e) {
                if (Lr(t, Fr))
                    throw zr(Nr);
                return e.facade = t,
                    _r(t, Fr, e),
                    e
            }
            ,
            gr = function (t) {
                return Lr(t, Fr) ? t[Fr] : {}
            }
            ,
            vr = function (t) {
                return Lr(t, Fr)
            }
    }
    var Zr = {
        set: dr,
        get: gr,
        has: vr,
        enforce: function (t) {
            return vr(t) ? gr(t) : dr(t, {})
        },
        getterFor: function (t) {
            return function (e) {
                var r;
                if (!Cr(e) || (r = gr(e)).type !== t)
                    throw zr("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }
        , Gr = v
        , Vr = tt
        , Br = Jt
        , Ur = y
        , Wr = lr.CONFIGURABLE
        , Hr = yr
        , qr = Zr.enforce
        , Xr = Zr.get
        , $r = Object.defineProperty
        , Jr = Ur && !Gr((function () {
            return 8 !== $r((function () { }
            ), "length", {
                value: 8
            }).length
        }
        ))
        , Kr = String(String).split("String")
        , Yr = ir.exports = function (t, e, r) {
            "Symbol(" === String(e).slice(0, 7) && (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                r && r.getter && (e = "get " + e),
                r && r.setter && (e = "set " + e),
                (!Br(t, "name") || Wr && t.name !== e) && (Ur ? $r(t, "name", {
                    value: e,
                    configurable: !0
                }) : t.name = e),
                Jr && r && Br(r, "arity") && t.length !== r.arity && $r(t, "length", {
                    value: r.arity
                });
            try {
                r && Br(r, "constructor") && r.constructor ? Ur && $r(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = void 0)
            } catch (t) { }
            var n = qr(t);
            return Br(n, "source") || (n.source = Kr.join("string" == typeof e ? e : "")),
                t
        }
        ;
    Function.prototype.toString = Yr((function () {
        return Vr(this) && Xr(this).source || Hr(this)
    }
    ), "toString");
    var Qr = tt
        , tn = Fe
        , en = ir.exports
        , rn = Zt
        , nn = function (t, e, r, n) {
            n || (n = {});
            var o = n.enumerable
                , i = void 0 !== n.name ? n.name : e;
            if (Qr(r) && en(r, i, n),
                n.global)
                o ? t[e] = r : rn(e, r);
            else {
                try {
                    n.unsafe ? t[e] && (o = !0) : delete t[e]
                } catch (t) { }
                o ? t[e] = r : tn.f(t, e, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return t
        }
        , on = {}
        , an = Math.ceil
        , sn = Math.floor
        , un = Math.trunc || function (t) {
            var e = +t;
            return (e > 0 ? sn : an)(e)
        }
        , cn = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : un(e)
        }
        , fn = cn
        , ln = Math.max
        , pn = Math.min
        , hn = function (t, e) {
            var r = fn(t);
            return r < 0 ? ln(r + e, 0) : pn(r, e)
        }
        , mn = cn
        , dn = Math.min
        , gn = function (t) {
            return t > 0 ? dn(mn(t), 9007199254740991) : 0
        }
        , vn = function (t) {
            return gn(t.length)
        }
        , yn = J
        , bn = hn
        , wn = vn
        , kn = function (t) {
            return function (e, r, n) {
                var o, i = yn(e), a = wn(i), s = bn(n, a);
                if (t && r != r) {
                    for (; a > s;)
                        if ((o = i[s++]) != o)
                            return !0
                } else
                    for (; a > s; s++)
                        if ((t || s in i) && i[s] === r)
                            return t || s || 0;
                return !t && -1
            }
        }
        , Sn = {
            includes: kn(!0),
            indexOf: kn(!1)
        }
        , On = Jt
        , xn = J
        , Mn = Sn.indexOf
        , Pn = Pr
        , jn = A([].push)
        , En = function (t, e) {
            var r, n = xn(t), o = 0, i = [];
            for (r in n)
                !On(Pn, r) && On(n, r) && jn(i, r);
            for (; e.length > o;)
                On(n, r = e[o++]) && (~Mn(i, r) || jn(i, r));
            return i
        }
        , Cn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        , _n = En
        , Ln = Cn.concat("length", "prototype");
    on.f = Object.getOwnPropertyNames || function (t) {
        return _n(t, Ln)
    }
        ;
    var Tn = {};
    Tn.f = Object.getOwnPropertySymbols;
    var In = st
        , An = on
        , Nn = Tn
        , zn = Ue
        , Dn = A([].concat)
        , Rn = In("Reflect", "ownKeys") || function (t) {
            var e = An.f(zn(t))
                , r = Nn.f;
            return r ? Dn(e, r(t)) : e
        }
        , Fn = Jt
        , Zn = Rn
        , Gn = g
        , Vn = Fe
        , Bn = v
        , Un = tt
        , Wn = /#|\.prototype\./
        , Hn = function (t, e) {
            var r = Xn[qn(t)];
            return r == Jn || r != $n && (Un(e) ? Bn(e) : !!e)
        }
        , qn = Hn.normalize = function (t) {
            return String(t).replace(Wn, ".").toLowerCase()
        }
        , Xn = Hn.data = {}
        , $n = Hn.NATIVE = "N"
        , Jn = Hn.POLYFILL = "P"
        , Kn = Hn
        , Yn = d
        , Qn = g.f
        , to = or
        , eo = nn
        , ro = Zt
        , no = function (t, e, r) {
            for (var n = Zn(e), o = Vn.f, i = Gn.f, a = 0; a < n.length; a++) {
                var s = n[a];
                Fn(t, s) || r && Fn(r, s) || o(t, s, i(e, s))
            }
        }
        , oo = Kn
        , io = function (t, e) {
            var r, n, o, i, a, s = t.target, u = t.global, c = t.stat;
            if (r = u ? Yn : c ? Yn[s] || ro(s, {}) : (Yn[s] || {}).prototype)
                for (n in e) {
                    if (i = e[n],
                        o = t.dontCallGetSet ? (a = Qn(r, n)) && a.value : r[n],
                        !oo(u ? n : s + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
                        if (typeof i == typeof o)
                            continue;
                        no(i, o)
                    }
                    (t.sham || o && o.sham) && to(i, "sham", !0),
                        eo(r, n, i, t)
                }
        }
        , ao = R
        , so = A
        , uo = function (t) {
            if ("Function" === ao(t))
                return so(t)
        }
        , co = _t
        , fo = b
        , lo = uo(uo.bind)
        , po = R
        , ho = Array.isArray || function (t) {
            return "Array" == po(t)
        }
        , mo = {};
    mo[pe("toStringTag")] = "z";
    var go = "[object z]" === String(mo)
        , vo = go
        , yo = tt
        , bo = R
        , wo = pe("toStringTag")
        , ko = Object
        , So = "Arguments" == bo(function () {
            return arguments
        }())
        , Oo = vo ? bo : function (t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
                try {
                    return t[e]
                } catch (t) { }
            }(e = ko(t), wo)) ? r : So ? bo(e) : "Object" == (n = bo(e)) && yo(e.callee) ? "Arguments" : n
        }
        , xo = A
        , Mo = v
        , Po = tt
        , jo = Oo
        , Eo = yr
        , Co = function () { }
        , _o = []
        , Lo = st("Reflect", "construct")
        , To = /^\s*(?:class|function)\b/
        , Io = xo(To.exec)
        , Ao = !To.exec(Co)
        , No = function (t) {
            if (!Po(t))
                return !1;
            try {
                return Lo(Co, _o, t),
                    !0
            } catch (t) {
                return !1
            }
        }
        , zo = function (t) {
            if (!Po(t))
                return !1;
            switch (jo(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return Ao || !!Io(To, Eo(t))
            } catch (t) {
                return !0
            }
        };
    zo.sham = !0;
    var Do = !Lo || Mo((function () {
        var t;
        return No(No.call) || !No(Object) || !No((function () {
            t = !0
        }
        )) || t
    }
    )) ? zo : No
        , Ro = ho
        , Fo = Do
        , Zo = nt
        , Go = pe("species")
        , Vo = Array
        , Bo = function (t) {
            var e;
            return Ro(t) && (e = t.constructor,
                (Fo(e) && (e === Vo || Ro(e.prototype)) || Zo(e) && null === (e = e[Go])) && (e = void 0)),
                void 0 === e ? Vo : e
        }
        , Uo = function (t, e) {
            return new (Bo(t))(0 === e ? 0 : e)
        }
        , Wo = function (t, e) {
            return co(t),
                void 0 === e ? t : fo ? lo(t, e) : function () {
                    return t.apply(e, arguments)
                }
        }
        , Ho = B
        , qo = qt
        , Xo = vn
        , $o = Uo
        , Jo = A([].push)
        , Ko = function (t) {
            var e = 1 == t
                , r = 2 == t
                , n = 3 == t
                , o = 4 == t
                , i = 6 == t
                , a = 7 == t
                , s = 5 == t || i;
            return function (u, c, f, l) {
                for (var p, h, m = qo(u), d = Ho(m), g = Wo(c, f), v = Xo(d), y = 0, b = l || $o, w = e ? b(u, v) : r || a ? b(u, 0) : void 0; v > y; y++)
                    if ((s || y in d) && (h = g(p = d[y], y, m),
                        t))
                        if (e)
                            w[y] = h;
                        else if (h)
                            switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return p;
                                case 6:
                                    return y;
                                case 2:
                                    Jo(w, p)
                            }
                        else
                            switch (t) {
                                case 4:
                                    return !1;
                                case 7:
                                    Jo(w, p)
                            }
                return i ? -1 : n || o ? o : w
            }
        }
        , Yo = {
            forEach: Ko(0),
            map: Ko(1),
            filter: Ko(2),
            some: Ko(3),
            every: Ko(4),
            find: Ko(5),
            findIndex: Ko(6),
            filterReject: Ko(7)
        }
        , Qo = v
        , ti = dt
        , ei = pe("species")
        , ri = function (t) {
            return ti >= 51 || !Qo((function () {
                var e = [];
                return (e.constructor = {})[ei] = function () {
                    return {
                        foo: 1
                    }
                }
                    ,
                    1 !== e[t](Boolean).foo
            }
            ))
        }
        , ni = Yo.map;
    function oi(t, e) {
        var r = {};
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
        }
        return r
    }
    io({
        target: "Array",
        proto: !0,
        forced: !ri("map")
    }, {
        map: function (t) {
            return ni(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ii = _t
        , ai = qt
        , si = B
        , ui = vn
        , ci = TypeError
        , fi = function (t) {
            return function (e, r, n, o) {
                ii(r);
                var i = ai(e)
                    , a = si(i)
                    , s = ui(i)
                    , u = t ? s - 1 : 0
                    , c = t ? -1 : 1;
                if (n < 2)
                    for (; ;) {
                        if (u in a) {
                            o = a[u],
                                u += c;
                            break
                        }
                        if (u += c,
                            t ? u < 0 : s <= u)
                            throw ci("Reduce of empty array with no initial value")
                    }
                for (; t ? u >= 0 : s > u; u += c)
                    u in a && (o = r(o, a[u], u, i));
                return o
            }
        }
        , li = {
            left: fi(!1),
            right: fi(!0)
        }
        , pi = v
        , hi = function (t, e) {
            var r = [][t];
            return !!r && pi((function () {
                r.call(null, e || function () {
                    return 1
                }
                    , 1)
            }
            ))
        }
        , mi = "process" == R(d.process)
        , di = li.left
        , gi = dt
        , vi = mi;
    io({
        target: "Array",
        proto: !0,
        forced: !hi("reduce") || !vi && gi > 79 && gi < 83
    }, {
        reduce: function (t) {
            var e = arguments.length;
            return di(this, t, e, e > 1 ? arguments[1] : void 0)
        }
    });
    var yi = Oo
        , bi = go ? {}.toString : function () {
            return "[object " + yi(this) + "]"
        }
        ;
    go || nn(Object.prototype, "toString", bi, {
        unsafe: !0
    });
    var wi = Yo.filter;
    io({
        target: "Array",
        proto: !0,
        forced: !ri("filter")
    }, {
        filter: function (t) {
            return wi(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ki = function () {
        function t(r) {
            var n = r.markers
                , o = r.position;
            e(this, t),
                this.markers = n,
                o && (o instanceof google.maps.LatLng ? this._position = o : this._position = new google.maps.LatLng(o))
        }
        return n(t, [{
            key: "bounds",
            get: function () {
                if (0 !== this.markers.length || this._position)
                    return this.markers.reduce((function (t, e) {
                        return t.extend(e.getPosition())
                    }
                    ), new google.maps.LatLngBounds(this._position, this._position))
            }
        }, {
            key: "position",
            get: function () {
                return this._position || this.bounds.getCenter()
            }
        }, {
            key: "count",
            get: function () {
                return this.markers.filter((function (t) {
                    return t.getVisible()
                }
                )).length
            }
        }, {
            key: "push",
            value: function (t) {
                this.markers.push(t)
            }
        }, {
            key: "delete",
            value: function () {
                this.marker && (this.marker.setMap(null),
                    delete this.marker),
                    this.markers.length = 0
            }
        }]),
            t
    }()
        , Si = function (t, e, r, n) {
            var o = Oi(t.getBounds(), e, n);
            return r.filter((function (t) {
                return o.contains(t.getPosition())
            }
            ))
        }
        , Oi = function (t, e, r) {
            var n = Mi(t, e)
                , o = n.northEast
                , i = n.southWest
                , a = Pi({
                    northEast: o,
                    southWest: i
                }, r);
            return ji(a, e)
        }
        , xi = function (t, e) {
            var r = (e.lat - t.lat) * Math.PI / 180
                , n = (e.lng - t.lng) * Math.PI / 180
                , o = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(t.lat * Math.PI / 180) * Math.cos(e.lat * Math.PI / 180) * Math.sin(n / 2) * Math.sin(n / 2);
            return 6371 * (2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)))
        }
        , Mi = function (t, e) {
            return {
                northEast: e.fromLatLngToDivPixel(t.getNorthEast()),
                southWest: e.fromLatLngToDivPixel(t.getSouthWest())
            }
        }
        , Pi = function (t, e) {
            var r = t.northEast
                , n = t.southWest;
            return r.x += e,
                r.y -= e,
                n.x -= e,
                n.y += e,
            {
                northEast: r,
                southWest: n
            }
        }
        , ji = function (t, e) {
            var r = t.northEast
                , n = t.southWest
                , o = new google.maps.LatLngBounds;
            return o.extend(e.fromDivPixelToLatLng(r)),
                o.extend(e.fromDivPixelToLatLng(n)),
                o
        }
        , Ei = function () {
            function t(r) {
                var n = r.maxZoom
                    , o = void 0 === n ? 16 : n;
                e(this, t),
                    this.maxZoom = o
            }
            return n(t, [{
                key: "noop",
                value: function (t) {
                    var e = t.markers;
                    return _i(e)
                }
            }]),
                t
        }()
        , Ci = function (t) {
            o(i, t);
            var r = u(i);
            function i(t) {
                var n;
                e(this, i);
                var o = t.viewportPadding
                    , a = void 0 === o ? 60 : o
                    , s = oi(t, ["viewportPadding"]);
                return (n = r.call(this, s)).viewportPadding = 60,
                    n.viewportPadding = a,
                    n
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = t.markers
                        , r = t.map
                        , n = t.mapCanvasProjection;
                    return r.getZoom() >= this.maxZoom ? {
                        clusters: this.noop({
                            markers: e,
                            map: r,
                            mapCanvasProjection: n
                        }),
                        changed: !1
                    } : {
                        clusters: this.cluster({
                            markers: Si(r, n, e, this.viewportPadding),
                            map: r,
                            mapCanvasProjection: n
                        })
                    }
                }
            }]),
                i
        }(Ei)
        , _i = function (t) {
            return t.map((function (t) {
                return new ki({
                    position: t.getPosition(),
                    markers: [t]
                })
            }
            ))
        }
        , Li = je("span").classList
        , Ti = Li && Li.constructor && Li.constructor.prototype
        , Ii = Ti === Object.prototype ? void 0 : Ti
        , Ai = Yo.forEach
        , Ni = hi("forEach") ? [].forEach : function (t) {
            return Ai(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
        , zi = d
        , Di = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
        , Ri = Ii
        , Fi = Ni
        , Zi = or
        , Gi = function (t) {
            if (t && t.forEach !== Fi)
                try {
                    Zi(t, "forEach", Fi)
                } catch (e) {
                    t.forEach = Fi
                }
        };
    for (var Vi in Di)
        Di[Vi] && Gi(zi[Vi] && zi[Vi].prototype);
    Gi(Ri);
    var Bi = S;
    io({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function () {
            return Bi(URL.prototype.toString, this)
        }
    });
    var Ui = function t(e, r) {
        if (e === r)
            return !0;
        if (e && r && "object" == typeof e && "object" == typeof r) {
            if (e.constructor !== r.constructor)
                return !1;
            var n, o, i;
            if (Array.isArray(e)) {
                if ((n = e.length) != r.length)
                    return !1;
                for (o = n; 0 != o--;)
                    if (!t(e[o], r[o]))
                        return !1;
                return !0
            }
            if (e.constructor === RegExp)
                return e.source === r.source && e.flags === r.flags;
            if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === r.valueOf();
            if (e.toString !== Object.prototype.toString)
                return e.toString() === r.toString();
            if ((n = (i = Object.keys(e)).length) !== Object.keys(r).length)
                return !1;
            for (o = n; 0 != o--;)
                if (!Object.prototype.hasOwnProperty.call(r, i[o]))
                    return !1;
            for (o = n; 0 != o--;) {
                var a = i[o];
                if (!t(e[a], r[a]))
                    return !1
            }
            return !0
        }
        return e != e && r != r
    }
        , Wi = function (t) {
            o(i, t);
            var r = u(i);
            function i(t) {
                var n;
                e(this, i);
                var o = t.maxDistance
                    , a = void 0 === o ? 4e4 : o
                    , s = t.gridSize
                    , u = void 0 === s ? 40 : s
                    , c = oi(t, ["maxDistance", "gridSize"]);
                return (n = r.call(this, c)).clusters = [],
                    n.maxDistance = a,
                    n.gridSize = u,
                    n.state = {
                        zoom: null
                    },
                    n
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = t.markers
                        , r = t.map
                        , n = t.mapCanvasProjection
                        , o = {
                            zoom: r.getZoom()
                        }
                        , i = !1;
                    return this.state.zoom > this.maxZoom && o.zoom > this.maxZoom || (i = !Ui(this.state, o)),
                        this.state = o,
                        r.getZoom() >= this.maxZoom ? {
                            clusters: this.noop({
                                markers: e,
                                map: r,
                                mapCanvasProjection: n
                            }),
                            changed: i
                        } : {
                            clusters: this.cluster({
                                markers: Si(r, n, e, this.viewportPadding),
                                map: r,
                                mapCanvasProjection: n
                            })
                        }
                }
            }, {
                key: "cluster",
                value: function (t) {
                    var e = this
                        , r = t.markers
                        , n = t.map
                        , o = t.mapCanvasProjection;
                    return this.clusters = [],
                        r.forEach((function (t) {
                            e.addToClosestCluster(t, n, o)
                        }
                        )),
                        this.clusters
                }
            }, {
                key: "addToClosestCluster",
                value: function (t, e, r) {
                    for (var n = this.maxDistance, o = null, i = 0; i < this.clusters.length; i++) {
                        var a = this.clusters[i]
                            , s = xi(a.bounds.getCenter().toJSON(), t.getPosition().toJSON());
                        s < n && (n = s,
                            o = a)
                    }
                    if (o && Oi(o.bounds, r, this.gridSize).contains(t.getPosition()))
                        o.push(t);
                    else {
                        var u = new ki({
                            markers: [t]
                        });
                        this.clusters.push(u)
                    }
                }
            }]),
                i
        }(Ci)
        , Hi = function (t) {
            o(i, t);
            var r = u(i);
            function i(t) {
                e(this, i);
                var n = oi(t, []);
                return r.call(this, n)
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = t.markers
                        , r = t.map
                        , n = t.mapCanvasProjection;
                    return {
                        clusters: this.cluster({
                            markers: e,
                            map: r,
                            mapCanvasProjection: n
                        }),
                        changed: !1
                    }
                }
            }, {
                key: "cluster",
                value: function (t) {
                    return this.noop(t)
                }
            }]),
                i
        }(Ei)
        , qi = En
        , Xi = Cn
        , $i = Object.keys || function (t) {
            return qi(t, Xi)
        }
        , Ji = y
        , Ki = A
        , Yi = S
        , Qi = v
        , ta = $i
        , ea = Tn
        , ra = O
        , na = qt
        , oa = B
        , ia = Object.assign
        , aa = Object.defineProperty
        , sa = Ki([].concat)
        , ua = !ia || Qi((function () {
            if (Ji && 1 !== ia({
                b: 1
            }, ia(aa({}, "a", {
                enumerable: !0,
                get: function () {
                    aa(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b)
                return !0;
            var t = {}
                , e = {}
                , r = Symbol()
                , n = "abcdefghijklmnopqrst";
            return t[r] = 7,
                n.split("").forEach((function (t) {
                    e[t] = t
                }
                )),
                7 != ia({}, t)[r] || ta(ia({}, e)).join("") != n
        }
        )) ? function (t, e) {
            for (var r = na(t), n = arguments.length, o = 1, i = ea.f, a = ra.f; n > o;)
                for (var s, u = oa(arguments[o++]), c = i ? sa(ta(u), i(u)) : ta(u), f = c.length, l = 0; f > l;)
                    s = c[l++],
                        Ji && !Yi(a, u, s) || (r[s] = u[s]);
            return r
        }
            : ia
        , ca = ua;
    io({
        target: "Object",
        stat: !0,
        arity: 2,
        forced: Object.assign !== ca
    }, {
        assign: ca
    });
    var fa = {
        exports: {}
    };
    fa.exports = function () {
        function t(r, n, o, i, a, s) {
            if (!(a - i <= o)) {
                var u = i + a >> 1;
                e(r, n, u, i, a, s % 2),
                    t(r, n, o, i, u - 1, s + 1),
                    t(r, n, o, u + 1, a, s + 1)
            }
        }
        function e(t, n, o, i, a, s) {
            for (; a > i;) {
                if (a - i > 600) {
                    var u = a - i + 1
                        , c = o - i + 1
                        , f = Math.log(u)
                        , l = .5 * Math.exp(2 * f / 3)
                        , p = .5 * Math.sqrt(f * l * (u - l) / u) * (c - u / 2 < 0 ? -1 : 1);
                    e(t, n, o, Math.max(i, Math.floor(o - c * l / u + p)), Math.min(a, Math.floor(o + (u - c) * l / u + p)), s)
                }
                var h = n[2 * o + s]
                    , m = i
                    , d = a;
                for (r(t, n, i, o),
                    n[2 * a + s] > h && r(t, n, i, a); m < d;) {
                    for (r(t, n, m, d),
                        m++,
                        d--; n[2 * m + s] < h;)
                        m++;
                    for (; n[2 * d + s] > h;)
                        d--
                }
                n[2 * i + s] === h ? r(t, n, i, d) : r(t, n, ++d, a),
                    d <= o && (i = d + 1),
                    o <= d && (a = d - 1)
            }
        }
        function r(t, e, r, o) {
            n(t, r, o),
                n(e, 2 * r, 2 * o),
                n(e, 2 * r + 1, 2 * o + 1)
        }
        function n(t, e, r) {
            var n = t[e];
            t[e] = t[r],
                t[r] = n
        }
        function o(t, e, r, n, o, i, a) {
            for (var s, u, c = [0, t.length - 1, 0], f = []; c.length;) {
                var l = c.pop()
                    , p = c.pop()
                    , h = c.pop();
                if (p - h <= a)
                    for (var m = h; m <= p; m++)
                        s = e[2 * m],
                            u = e[2 * m + 1],
                            s >= r && s <= o && u >= n && u <= i && f.push(t[m]);
                else {
                    var d = Math.floor((h + p) / 2);
                    s = e[2 * d],
                        u = e[2 * d + 1],
                        s >= r && s <= o && u >= n && u <= i && f.push(t[d]);
                    var g = (l + 1) % 2;
                    (0 === l ? r <= s : n <= u) && (c.push(h),
                        c.push(d - 1),
                        c.push(g)),
                        (0 === l ? o >= s : i >= u) && (c.push(d + 1),
                            c.push(p),
                            c.push(g))
                }
            }
            return f
        }
        function i(t, e, r, n, o, i) {
            for (var s = [0, t.length - 1, 0], u = [], c = o * o; s.length;) {
                var f = s.pop()
                    , l = s.pop()
                    , p = s.pop();
                if (l - p <= i)
                    for (var h = p; h <= l; h++)
                        a(e[2 * h], e[2 * h + 1], r, n) <= c && u.push(t[h]);
                else {
                    var m = Math.floor((p + l) / 2)
                        , d = e[2 * m]
                        , g = e[2 * m + 1];
                    a(d, g, r, n) <= c && u.push(t[m]);
                    var v = (f + 1) % 2;
                    (0 === f ? r - o <= d : n - o <= g) && (s.push(p),
                        s.push(m - 1),
                        s.push(v)),
                        (0 === f ? r + o >= d : n + o >= g) && (s.push(m + 1),
                            s.push(l),
                            s.push(v))
                }
            }
            return u
        }
        function a(t, e, r, n) {
            var o = t - r
                , i = e - n;
            return o * o + i * i
        }
        var s = function (t) {
            return t[0]
        }
            , u = function (t) {
                return t[1]
            }
            , c = function (e, r, n, o, i) {
                void 0 === r && (r = s),
                    void 0 === n && (n = u),
                    void 0 === o && (o = 64),
                    void 0 === i && (i = Float64Array),
                    this.nodeSize = o,
                    this.points = e;
                for (var a = e.length < 65536 ? Uint16Array : Uint32Array, c = this.ids = new a(e.length), f = this.coords = new i(2 * e.length), l = 0; l < e.length; l++)
                    c[l] = l,
                        f[2 * l] = r(e[l]),
                        f[2 * l + 1] = n(e[l]);
                t(c, f, o, 0, c.length - 1, 0)
            };
        return c.prototype.range = function (t, e, r, n) {
            return o(this.ids, this.coords, t, e, r, n, this.nodeSize)
        }
            ,
            c.prototype.within = function (t, e, r) {
                return i(this.ids, this.coords, t, e, r, this.nodeSize)
            }
            ,
            c
    }();
    var la = fa.exports;
    const pa = {
        minZoom: 0,
        maxZoom: 16,
        minPoints: 2,
        radius: 40,
        extent: 512,
        nodeSize: 64,
        log: !1,
        generateId: !1,
        reduce: null,
        map: t => t
    }
        , ha = Math.fround || (ma = new Float32Array(1),
            t => (ma[0] = +t,
                ma[0]));
    var ma;
    class da {
        constructor(t) {
            this.options = Oa(Object.create(pa), t),
                this.trees = new Array(this.options.maxZoom + 1)
        }
        load(t) {
            const { log: e, minZoom: r, maxZoom: n, nodeSize: o } = this.options;
            e && console.time("total time");
            const i = `prepare ${t.length} points`;
            e && console.time(i),
                this.points = t;
            let a = [];
            for (let e = 0; e < t.length; e++)
                t[e].geometry && a.push(va(t[e], e));
            this.trees[n + 1] = new la(a, xa, Ma, o, Float32Array),
                e && console.timeEnd(i);
            for (let t = n; t >= r; t--) {
                const r = +Date.now();
                a = this._cluster(a, t),
                    this.trees[t] = new la(a, xa, Ma, o, Float32Array),
                    e && console.log("z%d: %d clusters in %dms", t, a.length, +Date.now() - r)
            }
            return e && console.timeEnd("total time"),
                this
        }
        getClusters(t, e) {
            let r = ((t[0] + 180) % 360 + 360) % 360 - 180;
            const n = Math.max(-90, Math.min(90, t[1]));
            let o = 180 === t[2] ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
            const i = Math.max(-90, Math.min(90, t[3]));
            if (t[2] - t[0] >= 360)
                r = -180,
                    o = 180;
            else if (r > o) {
                const t = this.getClusters([r, n, 180, i], e)
                    , a = this.getClusters([-180, n, o, i], e);
                return t.concat(a)
            }
            const a = this.trees[this._limitZoom(e)]
                , s = a.range(wa(r), ka(i), wa(o), ka(n))
                , u = [];
            for (const t of s) {
                const e = a.points[t];
                u.push(e.numPoints ? ya(e) : this.points[e.index])
            }
            return u
        }
        getChildren(t) {
            const e = this._getOriginId(t)
                , r = this._getOriginZoom(t)
                , n = "No cluster with the specified id."
                , o = this.trees[r];
            if (!o)
                throw new Error(n);
            const i = o.points[e];
            if (!i)
                throw new Error(n);
            const a = this.options.radius / (this.options.extent * Math.pow(2, r - 1))
                , s = o.within(i.x, i.y, a)
                , u = [];
            for (const e of s) {
                const r = o.points[e];
                r.parentId === t && u.push(r.numPoints ? ya(r) : this.points[r.index])
            }
            if (0 === u.length)
                throw new Error(n);
            return u
        }
        getLeaves(t, e, r) {
            e = e || 10,
                r = r || 0;
            const n = [];
            return this._appendLeaves(n, t, e, r, 0),
                n
        }
        getTile(t, e, r) {
            const n = this.trees[this._limitZoom(t)]
                , o = Math.pow(2, t)
                , { extent: i, radius: a } = this.options
                , s = a / i
                , u = (r - s) / o
                , c = (r + 1 + s) / o
                , f = {
                    features: []
                };
            return this._addTileFeatures(n.range((e - s) / o, u, (e + 1 + s) / o, c), n.points, e, r, o, f),
                0 === e && this._addTileFeatures(n.range(1 - s / o, u, 1, c), n.points, o, r, o, f),
                e === o - 1 && this._addTileFeatures(n.range(0, u, s / o, c), n.points, -1, r, o, f),
                f.features.length ? f : null
        }
        getClusterExpansionZoom(t) {
            let e = this._getOriginZoom(t) - 1;
            for (; e <= this.options.maxZoom;) {
                const r = this.getChildren(t);
                if (e++,
                    1 !== r.length)
                    break;
                t = r[0].properties.cluster_id
            }
            return e
        }
        _appendLeaves(t, e, r, n, o) {
            const i = this.getChildren(e);
            for (const e of i) {
                const i = e.properties;
                if (i && i.cluster ? o + i.point_count <= n ? o += i.point_count : o = this._appendLeaves(t, i.cluster_id, r, n, o) : o < n ? o++ : t.push(e),
                    t.length === r)
                    break
            }
            return o
        }
        _addTileFeatures(t, e, r, n, o, i) {
            for (const a of t) {
                const t = e[a]
                    , s = t.numPoints;
                let u, c, f;
                if (s)
                    u = ba(t),
                        c = t.x,
                        f = t.y;
                else {
                    const e = this.points[t.index];
                    u = e.properties,
                        c = wa(e.geometry.coordinates[0]),
                        f = ka(e.geometry.coordinates[1])
                }
                const l = {
                    type: 1,
                    geometry: [[Math.round(this.options.extent * (c * o - r)), Math.round(this.options.extent * (f * o - n))]],
                    tags: u
                };
                let p;
                s ? p = t.id : this.options.generateId ? p = t.index : this.points[t.index].id && (p = this.points[t.index].id),
                    void 0 !== p && (l.id = p),
                    i.features.push(l)
            }
        }
        _limitZoom(t) {
            return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1))
        }
        _cluster(t, e) {
            const r = []
                , { radius: n, extent: o, reduce: i, minPoints: a } = this.options
                , s = n / (o * Math.pow(2, e));
            for (let n = 0; n < t.length; n++) {
                const o = t[n];
                if (o.zoom <= e)
                    continue;
                o.zoom = e;
                const u = this.trees[e + 1]
                    , c = u.within(o.x, o.y, s)
                    , f = o.numPoints || 1;
                let l = f;
                for (const t of c) {
                    const r = u.points[t];
                    r.zoom > e && (l += r.numPoints || 1)
                }
                if (l > f && l >= a) {
                    let t = o.x * f
                        , a = o.y * f
                        , s = i && f > 1 ? this._map(o, !0) : null;
                    const p = (n << 5) + (e + 1) + this.points.length;
                    for (const r of c) {
                        const n = u.points[r];
                        if (n.zoom <= e)
                            continue;
                        n.zoom = e;
                        const c = n.numPoints || 1;
                        t += n.x * c,
                            a += n.y * c,
                            n.parentId = p,
                            i && (s || (s = this._map(o, !0)),
                                i(s, this._map(n)))
                    }
                    o.parentId = p,
                        r.push(ga(t / l, a / l, p, l, s))
                } else if (r.push(o),
                    l > 1)
                    for (const t of c) {
                        const n = u.points[t];
                        n.zoom <= e || (n.zoom = e,
                            r.push(n))
                    }
            }
            return r
        }
        _getOriginId(t) {
            return t - this.points.length >> 5
        }
        _getOriginZoom(t) {
            return (t - this.points.length) % 32
        }
        _map(t, e) {
            if (t.numPoints)
                return e ? Oa({}, t.properties) : t.properties;
            const r = this.points[t.index].properties
                , n = this.options.map(r);
            return e && n === r ? Oa({}, n) : n
        }
    }
    function ga(t, e, r, n, o) {
        return {
            x: ha(t),
            y: ha(e),
            zoom: 1 / 0,
            id: r,
            parentId: -1,
            numPoints: n,
            properties: o
        }
    }
    function va(t, e) {
        const [r, n] = t.geometry.coordinates;
        return {
            x: ha(wa(r)),
            y: ha(ka(n)),
            zoom: 1 / 0,
            index: e,
            parentId: -1
        }
    }
    function ya(t) {
        return {
            type: "Feature",
            id: t.id,
            properties: ba(t),
            geometry: {
                type: "Point",
                coordinates: [(e = t.x,
                    360 * (e - .5)), Sa(t.y)]
            }
        };
        var e
    }
    function ba(t) {
        const e = t.numPoints
            , r = e >= 1e4 ? `${Math.round(e / 1e3)}k` : e >= 1e3 ? Math.round(e / 100) / 10 + "k" : e;
        return Oa(Oa({}, t.properties), {
            cluster: !0,
            cluster_id: t.id,
            point_count: e,
            point_count_abbreviated: r
        })
    }
    function wa(t) {
        return t / 360 + .5
    }
    function ka(t) {
        const e = Math.sin(t * Math.PI / 180)
            , r = .5 - .25 * Math.log((1 + e) / (1 - e)) / Math.PI;
        return r < 0 ? 0 : r > 1 ? 1 : r
    }
    function Sa(t) {
        const e = (180 - 360 * t) * Math.PI / 180;
        return 360 * Math.atan(Math.exp(e)) / Math.PI - 90
    }
    function Oa(t, e) {
        for (const r in e)
            t[r] = e[r];
        return t
    }
    function xa(t) {
        return t.x
    }
    function Ma(t) {
        return t.y
    }
    var Pa = function (t) {
        o(i, t);
        var r = u(i);
        function i(t) {
            var n;
            e(this, i);
            var o = t.maxZoom
                , a = t.radius
                , s = void 0 === a ? 60 : a
                , u = oi(t, ["maxZoom", "radius"]);
            return (n = r.call(this, {
                maxZoom: o
            })).superCluster = new da(Object.assign({
                maxZoom: n.maxZoom,
                radius: s
            }, u)),
                n.state = {
                    zoom: null
                },
                n
        }
        return n(i, [{
            key: "calculate",
            value: function (t) {
                var e = !1;
                if (!Ui(t.markers, this.markers)) {
                    e = !0,
                        this.markers = f(t.markers);
                    var r = this.markers.map((function (t) {
                        return {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [t.getPosition().lng(), t.getPosition().lat()]
                            },
                            properties: {
                                marker: t
                            }
                        }
                    }
                    ));
                    this.superCluster.load(r)
                }
                var n = {
                    zoom: t.map.getZoom()
                };
                return e || this.state.zoom > this.maxZoom && n.zoom > this.maxZoom || (e = e || !Ui(this.state, n)),
                    this.state = n,
                    e && (this.clusters = this.cluster(t)),
                {
                    clusters: this.clusters,
                    changed: e
                }
            }
        }, {
            key: "cluster",
            value: function (t) {
                var e = t.map;
                return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map(this.transformCluster.bind(this))
            }
        }, {
            key: "transformCluster",
            value: function (t) {
                var e = c(t.geometry.coordinates, 2)
                    , r = e[0]
                    , n = e[1]
                    , o = t.properties;
                if (o.cluster)
                    return new ki({
                        markers: this.superCluster.getLeaves(o.cluster_id, 1 / 0).map((function (t) {
                            return t.properties.marker
                        }
                        )),
                        position: new google.maps.LatLng({
                            lat: n,
                            lng: r
                        })
                    });
                var i = o.marker;
                return new ki({
                    markers: [i],
                    position: i.getPosition()
                })
            }
        }]),
            i
    }(Ei)
        , ja = {}
        , Ea = y
        , Ca = Ze
        , _a = Fe
        , La = Ue
        , Ta = J
        , Ia = $i;
    ja.f = Ea && !Ca ? Object.defineProperties : function (t, e) {
        La(t);
        for (var r, n = Ta(e), o = Ia(e), i = o.length, a = 0; i > a;)
            _a.f(t, r = o[a++], n[r]);
        return t
    }
        ;
    var Aa, Na = st("document", "documentElement"), za = Ue, Da = ja, Ra = Cn, Fa = Pr, Za = Na, Ga = je, Va = Mr("IE_PROTO"), Ba = function () { }, Ua = function (t) {
        return "<script>" + t + "</" + "script>"
    }, Wa = function (t) {
        t.write(Ua("")),
            t.close();
        var e = t.parentWindow.Object;
        return t = null,
            e
    }, Ha = function () {
        try {
            Aa = new ActiveXObject("htmlfile")
        } catch (t) { }
        var t, e;
        Ha = "undefined" != typeof document ? document.domain && Aa ? Wa(Aa) : ((e = Ga("iframe")).style.display = "none",
            Za.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write(Ua("document.F=Object")),
            t.close(),
            t.F) : Wa(Aa);
        for (var r = Ra.length; r--;)
            delete Ha.prototype[Ra[r]];
        return Ha()
    };
    Fa[Va] = !0;
    var qa = pe
        , Xa = Object.create || function (t, e) {
            var r;
            return null !== t ? (Ba.prototype = za(t),
                r = new Ba,
                Ba.prototype = null,
                r[Va] = t) : r = Ha(),
                void 0 === e ? r : Da.f(r, e)
        }
        , $a = Fe.f
        , Ja = qa("unscopables")
        , Ka = Array.prototype;
    null == Ka[Ja] && $a(Ka, Ja, {
        configurable: !0,
        value: Xa(null)
    });
    var Ya = Sn.includes
        , Qa = function (t) {
            Ka[Ja][t] = !0
        };
    io({
        target: "Array",
        proto: !0,
        forced: v((function () {
            return !Array(1).includes()
        }
        ))
    }, {
        includes: function (t) {
            return Ya(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
        Qa("includes");
    var ts = nt
        , es = R
        , rs = pe("match")
        , ns = function (t) {
            var e;
            return ts(t) && (void 0 !== (e = t[rs]) ? !!e : "RegExp" == es(t))
        }
        , os = TypeError
        , is = Oo
        , as = String
        , ss = function (t) {
            if ("Symbol" === is(t))
                throw TypeError("Cannot convert a Symbol value to a string");
            return as(t)
        }
        , us = pe("match")
        , cs = io
        , fs = function (t) {
            if (ns(t))
                throw os("The method doesn't accept regular expressions");
            return t
        }
        , ls = q
        , ps = ss
        , hs = function (t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (r) {
                try {
                    return e[us] = !1,
                        "/./"[t](e)
                } catch (t) { }
            }
            return !1
        }
        , ms = A("".indexOf);
    cs({
        target: "String",
        proto: !0,
        forced: !hs("includes")
    }, {
        includes: function (t) {
            return !!~ms(ps(ls(this)), ps(fs(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ds = io
        , gs = Sn.indexOf
        , vs = hi
        , ys = uo([].indexOf)
        , bs = !!ys && 1 / ys([1], 1, -0) < 0
        , ws = vs("indexOf");
    ds({
        target: "Array",
        proto: !0,
        forced: bs || !ws
    }, {
        indexOf: function (t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return bs ? ys(this, t, e) || 0 : gs(this, t, e)
        }
    });
    var ks = y
        , Ss = ho
        , Os = TypeError
        , xs = Object.getOwnPropertyDescriptor
        , Ms = ks && !function () {
            if (void 0 !== this)
                return !0;
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).length = 1
            } catch (t) {
                return t instanceof TypeError
            }
        }()
        , Ps = TypeError
        , js = Oe
        , Es = Fe
        , Cs = C
        , _s = Pt
        , Ls = TypeError
        , Ts = io
        , Is = qt
        , As = hn
        , Ns = cn
        , zs = vn
        , Ds = Ms ? function (t, e) {
            if (Ss(t) && !xs(t, "length").writable)
                throw Os("Cannot set read only .length");
            return t.length = e
        }
            : function (t, e) {
                return t.length = e
            }
        , Rs = function (t) {
            if (t > 9007199254740991)
                throw Ps("Maximum allowed index exceeded");
            return t
        }
        , Fs = Uo
        , Zs = function (t, e, r) {
            var n = js(e);
            n in t ? Es.f(t, n, Cs(0, r)) : t[n] = r
        }
        , Gs = function (t, e) {
            if (!delete t[e])
                throw Ls("Cannot delete property " + _s(e) + " of " + _s(t))
        }
        , Vs = ri("splice")
        , Bs = Math.max
        , Us = Math.min;
    Ts({
        target: "Array",
        proto: !0,
        forced: !Vs
    }, {
        splice: function (t, e) {
            var r, n, o, i, a, s, u = Is(this), c = zs(u), f = As(t, c), l = arguments.length;
            for (0 === l ? r = n = 0 : 1 === l ? (r = 0,
                n = c - f) : (r = l - 2,
                    n = Us(Bs(Ns(e), 0), c - f)),
                Rs(c + r - n),
                o = Fs(u, n),
                i = 0; i < n; i++)
                (a = f + i) in u && Zs(o, i, u[a]);
            if (o.length = n,
                r < n) {
                for (i = f; i < c - n; i++)
                    s = i + r,
                        (a = i + n) in u ? u[s] = u[a] : Gs(u, s);
                for (i = c; i > c - n + r; i--)
                    Gs(u, i - 1)
            } else if (r > n)
                for (i = c - n; i > f; i--)
                    s = i + r - 1,
                        (a = i + n - 1) in u ? u[s] = u[a] : Gs(u, s);
            for (i = 0; i < r; i++)
                u[i + f] = arguments[i + 2];
            return Ds(u, c - n + r),
                o
        }
    });
    var Ws = tt
        , Hs = String
        , qs = TypeError
        , Xs = A
        , $s = Ue
        , Js = function (t) {
            if ("object" == typeof t || Ws(t))
                return t;
            throw qs("Can't set " + Hs(t) + " as a prototype")
        }
        , Ks = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1, r = {};
            try {
                (t = Xs(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []),
                    e = r instanceof Array
            } catch (t) { }
            return function (r, n) {
                return $s(r),
                    Js(n),
                    e ? t(r, n) : r.__proto__ = n,
                    r
            }
        }() : void 0)
        , Ys = tt
        , Qs = nt
        , tu = Ks
        , eu = A(1..valueOf)
        , ru = q
        , nu = ss
        , ou = A("".replace)
        , iu = "[\t\n\v\f\r                　\u2028\u2029\ufeff]"
        , au = RegExp("^" + iu + iu + "*")
        , su = RegExp(iu + iu + "*$")
        , uu = function (t) {
            return function (e) {
                var r = nu(ru(e));
                return 1 & t && (r = ou(r, au, "")),
                    2 & t && (r = ou(r, su, "")),
                    r
            }
        }
        , cu = {
            start: uu(1),
            end: uu(2),
            trim: uu(3)
        }
        , fu = y
        , lu = d
        , pu = A
        , hu = Kn
        , mu = nn
        , du = Jt
        , gu = function (t, e, r) {
            var n, o;
            return tu && Ys(n = e.constructor) && n !== r && Qs(o = n.prototype) && o !== r.prototype && tu(t, o),
                t
        }
        , vu = ut
        , yu = xt
        , bu = we
        , wu = v
        , ku = on.f
        , Su = g.f
        , Ou = Fe.f
        , xu = eu
        , Mu = cu.trim
        , Pu = "Number"
        , ju = lu.Number
        , Eu = ju.prototype
        , Cu = lu.TypeError
        , _u = pu("".slice)
        , Lu = pu("".charCodeAt)
        , Tu = function (t) {
            var e = bu(t, "number");
            return "bigint" == typeof e ? e : Iu(e)
        }
        , Iu = function (t) {
            var e, r, n, o, i, a, s, u, c = bu(t, "number");
            if (yu(c))
                throw Cu("Cannot convert a Symbol value to a number");
            if ("string" == typeof c && c.length > 2)
                if (c = Mu(c),
                    43 === (e = Lu(c, 0)) || 45 === e) {
                    if (88 === (r = Lu(c, 2)) || 120 === r)
                        return NaN
                } else if (48 === e) {
                    switch (Lu(c, 1)) {
                        case 66:
                        case 98:
                            n = 2,
                                o = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8,
                                o = 55;
                            break;
                        default:
                            return +c
                    }
                    for (a = (i = _u(c, 2)).length,
                        s = 0; s < a; s++)
                        if ((u = Lu(i, s)) < 48 || u > o)
                            return NaN;
                    return parseInt(i, n)
                }
            return +c
        };
    if (hu(Pu, !ju(" 0o1") || !ju("0b1") || ju("+0x1"))) {
        for (var Au, Nu = function (t) {
            var e = arguments.length < 1 ? 0 : ju(Tu(t))
                , r = this;
            return vu(Eu, r) && wu((function () {
                xu(r)
            }
            )) ? gu(Object(e), r, Nu) : e
        }, zu = fu ? ku(ju) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), Du = 0; zu.length > Du; Du++)
            du(ju, Au = zu[Du]) && !du(Nu, Au) && Ou(Nu, Au, Su(ju, Au));
        Nu.prototype = Eu,
            Eu.constructor = Nu,
            mu(lu, Pu, Nu, {
                constructor: !0
            })
    }
    var Ru = n((function t(r, n) {
        e(this, t),
            this.markers = {
                sum: r.length
            };
        var o = n.map((function (t) {
            return t.count
        }
        ))
            , i = o.reduce((function (t, e) {
                return t + e
            }
            ), 0);
        this.clusters = {
            count: n.length,
            markers: {
                mean: i / n.length,
                sum: i,
                min: Math.min.apply(Math, f(o)),
                max: Math.max.apply(Math, f(o))
            }
        }
    }
    ))
        , Fu = function () {
            function t() {
                e(this, t)
            }
            return n(t, [{
                key: "render",
                value: function (t, e) {
                    var r = t.count
                        , n = t.position
                        , o = r > Math.max(10, e.clusters.markers.mean) ? "#ff0000" : "#0000ff"
                        , i = window.btoa('\n  <svg fill="'.concat(o, '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>'));
                    return new google.maps.Marker({
                        position: n,
                        icon: {
                            url: "data:image/svg+xml;base64,".concat(i),
                            scaledSize: new google.maps.Size(45, 45)
                        },
                        label: {
                            text: String(r),
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "12px"
                        },
                        title: "Cluster of ".concat(r, " markers"),
                        zIndex: Number(google.maps.Marker.MAX_ZINDEX) + r
                    })
                }
            }]),
                t
        }();
    var Zu, Gu = n((function t() {
        e(this, t),
            function (t, e) {
                for (var r in e.prototype)
                    t.prototype[r] = e.prototype[r]
            }(t, google.maps.OverlayView)
    }
    ));
    t.MarkerClustererEvents = void 0,
        (Zu = t.MarkerClustererEvents || (t.MarkerClustererEvents = {})).CLUSTERING_BEGIN = "clusteringbegin",
        Zu.CLUSTERING_END = "clusteringend",
        Zu.CLUSTER_CLICK = "click";
    var Vu = function (t, e, r) {
        r.fitBounds(e.bounds)
    }
        , Bu = function (r) {
            o(a, r);
            var i = u(a);
            function a(t) {
                var r, n = t.map, o = t.markers, s = void 0 === o ? [] : o, u = t.algorithm, c = void 0 === u ? new Pa({}) : u, l = t.renderer, p = void 0 === l ? new Fu : l, h = t.onClusterClick, m = void 0 === h ? Vu : h;
                return e(this, a),
                    (r = i.call(this)).markers = f(s),
                    r.clusters = [],
                    r.algorithm = c,
                    r.renderer = p,
                    r.onClusterClick = m,
                    n && r.setMap(n),
                    r
            }
            return n(a, [{
                key: "addMarker",
                value: function (t, e) {
                    this.markers.includes(t) || (this.markers.push(t),
                        e || this.render())
                }
            }, {
                key: "addMarkers",
                value: function (t, e) {
                    var r = this;
                    t.forEach((function (t) {
                        r.addMarker(t, !0)
                    }
                    )),
                        e || this.render()
                }
            }, {
                key: "removeMarker",
                value: function (t, e) {
                    var r = this.markers.indexOf(t);
                    return -1 !== r && (t.setMap(null),
                        this.markers.splice(r, 1),
                        e || this.render(),
                        !0)
                }
            }, {
                key: "removeMarkers",
                value: function (t, e) {
                    var r = this
                        , n = !1;
                    return t.forEach((function (t) {
                        n = r.removeMarker(t, !0) || n
                    }
                    )),
                        n && !e && this.render(),
                        n
                }
            }, {
                key: "clearMarkers",
                value: function (t) {
                    this.markers.length = 0,
                        t || this.render()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.getMap();
                    if (e instanceof google.maps.Map && this.getProjection()) {
                        google.maps.event.trigger(this, t.MarkerClustererEvents.CLUSTERING_BEGIN, this);
                        var r = this.algorithm.calculate({
                            markers: this.markers,
                            map: e,
                            mapCanvasProjection: this.getProjection()
                        })
                            , n = r.clusters
                            , o = r.changed;
                        (o || null == o) && (this.reset(),
                            this.clusters = n,
                            this.renderClusters()),
                            google.maps.event.trigger(this, t.MarkerClustererEvents.CLUSTERING_END, this)
                    }
                }
            }, {
                key: "onAdd",
                value: function () {
                    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)),
                        this.render()
                }
            }, {
                key: "onRemove",
                value: function () {
                    google.maps.event.removeListener(this.idleListener),
                        this.reset()
                }
            }, {
                key: "reset",
                value: function () {
                    this.markers.forEach((function (t) {
                        return t.setMap(null)
                    }
                    )),
                        this.clusters.forEach((function (t) {
                            return t.delete()
                        }
                        )),
                        this.clusters = []
                }
            }, {
                key: "renderClusters",
                value: function () {
                    var e = this
                        , r = new Ru(this.markers, this.clusters)
                        , n = this.getMap();
                    this.clusters.forEach((function (o) {
                        1 === o.markers.length ? o.marker = o.markers[0] : (o.marker = e.renderer.render(o, r),
                            e.onClusterClick && o.marker.addListener("click", (function (r) {
                                google.maps.event.trigger(e, t.MarkerClustererEvents.CLUSTER_CLICK, o),
                                    e.onClusterClick(r, o, n)
                            }
                            ))),
                            o.marker.setMap(n)
                    }
                    ))
                }
            }]),
                a
        }(Gu);
    return t.AbstractAlgorithm = Ei,
        t.AbstractViewportAlgorithm = Ci,
        t.Cluster = ki,
        t.ClusterStats = Ru,
        t.DefaultRenderer = Fu,
        t.GridAlgorithm = Wi,
        t.MarkerClusterer = Bu,
        t.NoopAlgorithm = Hi,
        t.SuperClusterAlgorithm = Pa,
        t.defaultOnClusterClickHandler = Vu,
        t.distanceBetweenPoints = xi,
        t.extendBoundsToPaddedViewport = Oi,
        t.extendPixelBounds = Pi,
        t.filterMarkersToPaddedViewport = Si,
        t.noop = _i,
        t.pixelBoundsToLatLngBounds = ji,
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t
}({});
//# sourceMappingURL=index.min.js.map
