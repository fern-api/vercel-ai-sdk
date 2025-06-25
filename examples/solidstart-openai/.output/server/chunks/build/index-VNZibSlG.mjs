import { H as He, P as Pa, a as ae, N as Na, k as kr, u as ue, W as W$1, R as Ra, e as ea, x as xa, b as Wr, S as Sa, l as le, c as Aa, O as Oa } from './index-Bf1kAoXe.mjs';
import { createMemo, createEffect, createSignal, createUniqueId, batch, getListener, onCleanup, DEV } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { isServer } from 'solid-js/web';

var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _a, _e2, _s, _a2, _t, _J_instances, r_fn, _b;
var Le = !isServer && DEV ? { equals: false, name: "trigger" } : { equals: false }, Pe = !isServer && DEV ? { equals: false, internal: true } : Le, ee = (_a = class {
  constructor(t = Map) {
    __privateAdd(this, _e);
    __privateSet(this, _e, new t());
  }
  dirty(t) {
    var _a3;
    isServer || ((_a3 = __privateGet(this, _e).get(t)) == null ? void 0 : _a3.$$());
  }
  dirtyAll() {
    if (!isServer) for (const t of __privateGet(this, _e).values()) t.$$();
  }
  track(t) {
    if (!getListener()) return;
    let e = __privateGet(this, _e).get(t);
    if (e) e.n++;
    else {
      const [a, r] = createSignal(void 0, Pe);
      __privateGet(this, _e).set(t, e = { $: a, $$: r, n: 1 });
    }
    onCleanup(() => {
      e.n-- === 1 && queueMicrotask(() => e.n === 0 && __privateGet(this, _e).delete(t));
    }), e.$();
  }
}, _e = new WeakMap(), _a);
function W(t) {
  const e = typeof t == "function" ? t() : t;
  return Object.entries(e).reduce((a, [r, v]) => (a[r] = createMemo(() => v), a), {});
}
var D = Symbol("track-keys"), J = (_b = class extends Map {
  constructor(t = 10, e) {
    super();
    __privateAdd(this, _J_instances);
    __privateAdd(this, _e2, new ee());
    __privateAdd(this, _s, new ee());
    __privateAdd(this, _a2);
    __privateAdd(this, _t, []);
    if (__privateSet(this, _a2, t), e) for (const [a, r] of e) this.set(a, r);
  }
  has(t) {
    __privateGet(this, _e2).track(t);
    const e = super.has(t);
    return e && __privateMethod(this, _J_instances, r_fn).call(this, t), e;
  }
  get(t) {
    __privateGet(this, _s).track(t);
    const e = super.get(t);
    return e !== void 0 && __privateMethod(this, _J_instances, r_fn).call(this, t), e;
  }
  get size() {
    return __privateGet(this, _e2).track(D), super.size;
  }
  *keys() {
    for (const t of super.keys()) __privateGet(this, _e2).track(t), yield t;
    __privateGet(this, _e2).track(D);
  }
  *values() {
    for (const [t, e] of super.entries()) __privateGet(this, _s).track(t), yield e;
    __privateGet(this, _e2).track(D);
  }
  *entries() {
    for (const t of super.entries()) __privateGet(this, _s).track(t[0]), yield t;
    __privateGet(this, _e2).track(D);
  }
  set(t, e) {
    return batch(() => {
      if (super.has(t)) {
        if (super.get(t) === e) {
          __privateMethod(this, _J_instances, r_fn).call(this, t);
          return;
        }
      } else __privateGet(this, _e2).dirty(t), __privateGet(this, _e2).dirty(D);
      __privateGet(this, _s).dirty(t), super.set(t, e), __privateMethod(this, _J_instances, r_fn).call(this, t);
    }), this;
  }
  delete(t) {
    const e = super.delete(t);
    return e && batch(() => {
      __privateGet(this, _e2).dirty(t), __privateGet(this, _e2).dirty(D), __privateGet(this, _s).dirty(t);
      const a = __privateGet(this, _t).indexOf(t);
      a > -1 && __privateGet(this, _t).splice(a, 1);
    }), e;
  }
  clear() {
    super.size && batch(() => {
      for (const t of super.keys()) __privateGet(this, _e2).dirty(t), __privateGet(this, _s).dirty(t);
      super.clear(), __privateSet(this, _t, []), __privateGet(this, _e2).dirty(D);
    });
  }
  forEach(t) {
    __privateGet(this, _e2).track(D);
    for (const [e, a] of super.entries()) __privateGet(this, _s).track(e), __privateMethod(this, _J_instances, r_fn).call(this, e), t(a, e, this);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}, _e2 = new WeakMap(), _s = new WeakMap(), _a2 = new WeakMap(), _t = new WeakMap(), _J_instances = new WeakSet(), r_fn = function(t) {
  const e = __privateGet(this, _t).indexOf(t);
  if (e > -1 && __privateGet(this, _t).splice(e, 1), __privateGet(this, _t).push(t), __privateGet(this, _t).length > __privateGet(this, _a2)) {
    const a = __privateGet(this, _t).shift();
    this.delete(a);
  }
}, _b), te = new J();
function ze(t = {}) {
  var _a3, _b2, _c, _d, _e3, _f, _g, _h;
  const e = createMemo(() => W(t)), a = createMemo(() => {
    var _a4, _b3;
    return (_b3 = (_a4 = e()).experimental_prepareRequestBody) == null ? void 0 : _b3.call(_a4);
  }), r = createMemo(() => ({ ...e(), experimental_prepareRequestBody: a })), v = createMemo(() => {
    var _a4, _b3, _c2;
    return (_c2 = (_b3 = (_a4 = r()).api) == null ? void 0 : _b3.call(_a4)) != null ? _c2 : "/api/chat";
  }), w = createMemo(() => {
    var _a4, _b3, _c2;
    return (_c2 = (_b3 = (_a4 = r()).generateId) == null ? void 0 : _b3.call(_a4)) != null ? _c2 : He;
  }), C = createMemo(() => {
    var _a4, _b3, _c2;
    return (_c2 = (_b3 = (_a4 = r()).id) == null ? void 0 : _b3.call(_a4)) != null ? _c2 : w()();
  }), $ = createMemo(() => `${v()}|${C()}|messages`), p = createMemo(() => {
    var _a4, _b3, _c2, _d2;
    return (_d2 = (_c2 = te.get($())) != null ? _c2 : (_b3 = (_a4 = r()).initialMessages) == null ? void 0 : _b3.call(_a4)) != null ? _d2 : [];
  }), [x, L] = createStore(Pa(p()));
  createEffect(() => {
    L(reconcile(Pa(p()), { merge: true }));
  });
  const O = (s) => {
    te.set($(), s);
  }, [T, l] = createSignal(void 0), [M, g] = createSignal(void 0), [f, m] = createSignal("ready");
  let o = Pa(p()) || [];
  createEffect(() => {
    o = Pa(p()) || [];
  });
  let i = null, u = { credentials: (_b2 = (_a3 = r()).credentials) == null ? void 0 : _b2.call(_a3), headers: (_d = (_c = r()).headers) == null ? void 0 : _d.call(_c), body: (_f = (_e3 = r()).body) == null ? void 0 : _f.call(_e3) };
  createEffect(() => {
    var _a4, _b3, _c2, _d2, _e4, _f2;
    u = { credentials: (_b3 = (_a4 = r()).credentials) == null ? void 0 : _b3.call(_a4), headers: (_d2 = (_c2 = r()).headers) == null ? void 0 : _d2.call(_c2), body: (_f2 = (_e4 = r()).body) == null ? void 0 : _f2.call(_e4) };
  });
  const R = async (s) => {
    var _a4, _b3, _c2, _d2, _e4, _f2, _g2, _h2, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    l(void 0), m("submitted");
    const c = o.length, d = le((_a4 = s.messages[s.messages.length - 1]) == null ? void 0 : _a4.toolInvocations);
    try {
      i = new AbortController();
      const S = (_d2 = (_c2 = (_b3 = r()).streamProtocol) == null ? void 0 : _c2.call(_b3)) != null ? _d2 : "data", j = (_f2 = (_e4 = r()).onFinish) == null ? void 0 : _f2.call(_e4), de = (_h2 = (_g2 = r()).onResponse) == null ? void 0 : _h2.call(_g2), ue = (_j = (_i = r()).onToolCall) == null ? void 0 : _j.call(_i), he = (_l = (_k = r()).sendExtraMessageFields) == null ? void 0 : _l.call(_k), pe = (_o = (_n = (_m = r()).keepLastMessageOnError) == null ? void 0 : _n.call(_m)) != null ? _o : true, ge = (_q = (_p = r()).experimental_prepareRequestBody) == null ? void 0 : _q.call(_p), fe = o, E = Pa(s.messages);
      O(E);
      const me = (_r = M()) != null ? _r : [], ye = he ? E : E.map(({ role: z, content: P, experimental_attachments: q, data: G, annotations: H, toolInvocations: Q, parts: X }) => ({ role: z, content: P, ...q !== void 0 && { experimental_attachments: q }, ...G !== void 0 && { data: G }, ...H !== void 0 && { annotations: H }, ...Q !== void 0 && { toolInvocations: Q }, ...X !== void 0 && { parts: X } }));
      await Aa({ api: v(), body: (_s2 = ge == null ? void 0 : ge({ id: C(), messages: E, requestData: s.data, requestBody: s.body })) != null ? _s2 : { id: C(), messages: ye, data: s.data, ...u.body, ...s.body }, streamProtocol: S, credentials: u.credentials, headers: { ...u.headers, ...s.headers }, abortController: () => i, restoreMessagesOnFailure() {
        pe || O(fe);
      }, onResponse: de, onUpdate({ message: z, data: P, replaceLastMessage: q }) {
        m("streaming"), O([...q ? E.slice(0, E.length - 1) : E, z]), (P == null ? void 0 : P.length) && g([...me, ...P]);
      }, onToolCall: ue, onFinish: j, generateId: w(), fetch: (_u = (_t2 = r()).fetch) == null ? void 0 : _u.call(_t2), lastMessage: E[E.length - 1] }), i = null, m("ready");
    } catch (S) {
      if (S.name === "AbortError") return i = null, m("ready"), null;
      const j = (_w = (_v = r()).onError) == null ? void 0 : _w.call(_v);
      j && S instanceof Error && j(S), l(S), m("error");
    }
    const b = (_z = (_y = (_x = r()).maxSteps) == null ? void 0 : _y.call(_x)) != null ? _z : 1, I = o;
    Oa({ originalMaxToolInvocationStep: d, originalMessageCount: c, maxSteps: b, messages: I }) && await R({ messages: I });
  }, N = async (s, { data: c, headers: d, body: b, experimental_attachments: I = s.experimental_attachments } = {}) => {
    var _a4, _b3;
    const S = await xa(I), j = o.concat({ ...s, id: (_a4 = s.id) != null ? _a4 : w()(), createdAt: (_b3 = s.createdAt) != null ? _b3 : /* @__PURE__ */ new Date(), experimental_attachments: S.length > 0 ? S : void 0, parts: Wr(s) });
    return R({ messages: j, headers: d, body: b, data: c });
  }, y = async ({ data: s, headers: c, body: d } = {}) => {
    if (o.length === 0) return null;
    const b = o[o.length - 1];
    return R({ messages: b.role === "assistant" ? o.slice(0, -1) : o, headers: c, body: d, data: s });
  }, F = () => {
    i && (i.abort(), i = null);
  }, B = (s) => {
    typeof s == "function" && (s = s(o));
    const c = Pa(s);
    O(c), o = c;
  }, K = (s) => {
    typeof s == "function" && (s = s(M())), g(s);
  }, [Y, V] = createSignal(((_h = (_g = r()).initialInput) == null ? void 0 : _h.call(_g)) || ""), ne = async (s, c = {}, d) => {
    var _a4;
    (_a4 = s == null ? void 0 : s.preventDefault) == null ? void 0 : _a4.call(s);
    const b = Y();
    if (!b && !c.allowEmptySubmit) return;
    const I = await xa(c.experimental_attachments);
    d && (u = { ...u, ...d }), R({ messages: o.concat({ id: w()(), role: "user", content: b, createdAt: /* @__PURE__ */ new Date(), experimental_attachments: I.length > 0 ? I : void 0, parts: [{ type: "text", text: b }] }), headers: c.headers, body: c.body, data: c.data }), V("");
  }, ie = (s) => {
    V(s.target.value);
  }, ce = ({ toolCallId: s, result: c }) => {
    const d = o != null ? o : [];
    if (Ra({ messages: d, toolCallId: s, toolResult: c }), O(d), f() === "submitted" || f() === "streaming") return;
    const b = d[d.length - 1];
    ea(b) && R({ messages: d });
  }, le$1 = createMemo(() => f() === "submitted" || f() === "streaming");
  return { messages: () => x, id: C(), append: N, error: T, reload: y, stop: F, setMessages: B, input: Y, setInput: V, handleInputChange: ie, handleSubmit: ne, isLoading: le$1, status: f, data: M, setData: K, addToolResult: ce };
}
var se = new J();
function Ue(t = {}) {
  var _a3, _b2, _c, _d, _e3, _f, _g, _h, _i;
  const e = createMemo(() => W(t)), a = createMemo(() => {
    var _a4, _b3, _c2;
    return (_c2 = (_b3 = (_a4 = e()).api) == null ? void 0 : _b3.call(_a4)) != null ? _c2 : "/api/completion";
  }), r = createMemo(() => {
    var _a4, _b3, _c2;
    return (_c2 = (_b3 = (_a4 = e()).id) == null ? void 0 : _b3.call(_a4)) != null ? _c2 : `completion-${createUniqueId()}`;
  }), v = createMemo(() => `${a()}|${r()}|completion`), w = createMemo(() => {
    var _a4, _b3, _c2, _d2;
    return (_d2 = (_c2 = se.get(v())) != null ? _c2 : (_b3 = (_a4 = e()).initialCompletion) == null ? void 0 : _b3.call(_a4)) != null ? _d2 : "";
  }), C = (y) => {
    se.set(v(), y);
  }, [$, p] = createSignal(void 0), [x, L] = createSignal(void 0), [O, T] = createSignal(false), [l, M] = createSignal(null);
  let g = { credentials: (_b2 = (_a3 = e()).credentials) == null ? void 0 : _b2.call(_a3), headers: (_d = (_c = e()).headers) == null ? void 0 : _d.call(_c), body: (_f = (_e3 = e()).body) == null ? void 0 : _f.call(_e3) };
  createEffect(() => {
    var _a4, _b3, _c2, _d2, _e4, _f2;
    g = { credentials: (_b3 = (_a4 = e()).credentials) == null ? void 0 : _b3.call(_a4), headers: (_d2 = (_c2 = e()).headers) == null ? void 0 : _d2.call(_c2), body: (_f2 = (_e4 = e()).body) == null ? void 0 : _f2.call(_e4) };
  });
  const f = async (y, F) => {
    var _a4, _b3, _c2, _d2, _e4, _f2, _g2, _h2, _i2, _j, _k, _l, _m;
    const B = (_a4 = x()) != null ? _a4 : [];
    return Sa({ api: a(), prompt: y, credentials: (_c2 = (_b3 = e()).credentials) == null ? void 0 : _c2.call(_b3), headers: { ...g.headers, ...F == null ? void 0 : F.headers }, body: { ...g.body, ...F == null ? void 0 : F.body }, streamProtocol: (_e4 = (_d2 = e()).streamProtocol) == null ? void 0 : _e4.call(_d2), setCompletion: C, setLoading: T, setError: p, setAbortController: M, onResponse: (_g2 = (_f2 = e()).onResponse) == null ? void 0 : _g2.call(_f2), onFinish: (_i2 = (_h2 = e()).onFinish) == null ? void 0 : _i2.call(_h2), onError: (_k = (_j = e()).onError) == null ? void 0 : _k.call(_j), onData: (K) => {
      L([...B, ...K != null ? K : []]);
    }, fetch: (_m = (_l = e()).fetch) == null ? void 0 : _m.call(_l) });
  }, m = () => {
    l() && l().abort();
  }, o = (y) => {
    C(y);
  }, [i, u] = createSignal((_i = (_h = (_g = e()).initialInput) == null ? void 0 : _h.call(_g)) != null ? _i : "");
  return { completion: w, complete: f, error: $, stop: m, setCompletion: o, input: i, setInput: u, handleInputChange: (y) => {
    u(y.target.value);
  }, handleSubmit: (y) => {
    var _a4;
    (_a4 = y == null ? void 0 : y.preventDefault) == null ? void 0 : _a4.call(y);
    const F = i();
    return F ? f(F) : void 0;
  }, isLoading: O, data: x };
}
var qe = () => fetch, re = new J();
function Ae(t) {
  const e = createMemo(() => W(t)), a = createMemo(() => {
    var _a3, _b2, _c;
    return (_c = (_b2 = (_a3 = e()).id) == null ? void 0 : _b2.call(_a3)) != null ? _c : `object-${createUniqueId()}`;
  }), r = createMemo(() => {
    var _a3, _b2, _c;
    return (_c = re.get(a())) != null ? _c : (_b2 = (_a3 = e()).initialValue) == null ? void 0 : _b2.call(_a3);
  }), v = (T) => {
    re.set(a(), T);
  }, [w, C] = createSignal(), [$, p] = createSignal(false);
  let x = null;
  return { submit: async (T) => {
    var _a3, _b2, _c, _d, _e3, _f, _g;
    try {
      v(void 0), p(true), C(void 0);
      const l = new AbortController();
      x = l;
      const g = await (fetch != null ? fetch : qe())(e().api(), { method: "POST", headers: { "Content-Type": "application/json", ...(_b2 = (_a3 = e()).headers) == null ? void 0 : _b2.call(_a3) }, credentials: (_d = (_c = e()).credentials) == null ? void 0 : _d.call(_c), signal: l.signal, body: JSON.stringify(T) });
      if (!g.ok) throw new Error((_e3 = await g.text()) != null ? _e3 : "Failed to fetch the response.");
      if (g.body == null) throw new Error("The response body is empty.");
      let f = "", m;
      await g.body.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({ write(o) {
        f += o;
        const { value: i } = kr(f), u = i;
        ue(m, u) || (m = u, v(u));
      }, close() {
        var _a4, _b3;
        p(false), x = null;
        const o = (_b3 = (_a4 = e()).onFinish) == null ? void 0 : _b3.call(_a4);
        if (o != null) {
          const i = ae({ value: m, schema: Na(e().schema()) });
          o(i.success ? { object: i.value, error: void 0 } : { object: void 0, error: i.error });
        }
      } }));
    } catch (l) {
      if (W$1(l)) return;
      const M = (_g = (_f = e()).onError) == null ? void 0 : _g.call(_f);
      M && l instanceof Error && M(l), p(false), C(l instanceof Error ? l : new Error(String(l)));
    }
  }, object: r, error: w, isLoading: $, stop: () => {
    try {
      x == null ? void 0 : x.abort();
    } catch {
    } finally {
      p(false), x = null;
    }
  } };
}
var We = Ae;

export { Ue as U, We as W, ze as z };
//# sourceMappingURL=index-VNZibSlG.mjs.map
