import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { z as ze } from './index-VNZibSlG.mjs';
import { For, Show } from 'solid-js';
import './index-Bf1kAoXe.mjs';
import 'zod';
import 'solid-js/store';

const g = ["<div", ' class="flex flex-col w-full max-w-md py-24 mx-auto stretch"><!--$-->', '<!--/--><form><input class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"', ' placeholder="Say something..."></form></div>'], h = ["<div", ' class="whitespace-pre-wrap"><strong>', "</strong><!--$-->", "<!--/--><br></div>"], v = ["<div", ' class="text-gray-500"><!--$-->', '<!--/--><div class="flex gap-2"><button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Yes</button><button class="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">No</button></div></div>'], m = ["<div", ' class="text-gray-500">Location access allowed: <!--$-->', "<!--/--></div>"], f = ["<div", ' class="text-gray-500">Getting location...</div>'], w = ["<div", ' class="text-gray-500">Location: <!--$-->', "<!--/--></div>"], I = ["<pre", ">", "</pre>"], x = ["<div", ' class="text-gray-500">Getting weather information for <!--$-->', "<!--/-->...</div>"], y = ["<div", ' class="text-gray-500">Weather in <!--$-->', "<!--/-->: <!--$-->", "<!--/--></div>"];
function L() {
  const { messages: c, input: u } = ze({ api: "/api/use-chat-tools", maxSteps: 5, async onToolCall({ toolCall: a }) {
    if (a.toolName === "getLocation") {
      const t = ["New York", "Los Angeles", "Chicago", "San Francisco"];
      return t[Math.floor(Math.random() * t.length)];
    }
  } });
  return ssr(g, ssrHydrationKey(), escape(createComponent(For, { get each() {
    return c();
  }, children: (a) => ssr(h, ssrHydrationKey(), `${escape(a.role)}: `, escape(createComponent(For, { get each() {
    return a.parts;
  }, children: (t) => [createComponent(Show, { get when() {
    return t.type === "text";
  }, get children() {
    return t.text;
  } }), createComponent(Show, { get when() {
    return t.type === "tool-invocation";
  }, get children() {
    return [createComponent(Show, { get when() {
      return t.toolInvocation.toolName === "askForConfirmation";
    }, get children() {
      return [createComponent(Show, { get when() {
        return t.toolInvocation.state === "call";
      }, get children() {
        return ssr(v, ssrHydrationKey() + ssrAttribute("data-key", escape(t.toolInvocation.toolCallId, true), false), escape(t.toolInvocation.args.message));
      } }), createComponent(Show, { get when() {
        return t.toolInvocation.state === "result";
      }, get children() {
        return ssr(m, ssrHydrationKey() + ssrAttribute("data-key", escape(t.toolInvocation.toolCallId, true), false), escape(t.toolInvocation.result));
      } })];
    } }), createComponent(Show, { get when() {
      return t.toolInvocation.toolName === "getLocation";
    }, get children() {
      return [createComponent(Show, { get when() {
        return t.toolInvocation.state === "call";
      }, get children() {
        return ssr(f, ssrHydrationKey());
      } }), createComponent(Show, { get when() {
        return t.toolInvocation.state === "result" && t.toolInvocation.result;
      }, get children() {
        return ssr(w, ssrHydrationKey(), escape(t.toolInvocation.result));
      } })];
    } }), createComponent(Show, { get when() {
      return t.toolInvocation.toolName === "getWeatherInformation";
    }, get children() {
      return [createComponent(Show, { get when() {
        return t.toolInvocation.state === "partial-call";
      }, get children() {
        return ssr(I, ssrHydrationKey(), escape(JSON.stringify(t.toolInvocation, null, 2)));
      } }), createComponent(Show, { get when() {
        return t.toolInvocation.state === "call";
      }, get children() {
        return ssr(x, ssrHydrationKey(), escape(t.toolInvocation.args.city));
      } }), createComponent(Show, { get when() {
        return t.toolInvocation.state === "result";
      }, get children() {
        return ssr(y, ssrHydrationKey(), escape(t.toolInvocation.args.city), escape(t.toolInvocation.result));
      } })];
    } })];
  } })] }))) })), ssrAttribute("value", escape(u(), true), false));
}

export { L as default };
//# sourceMappingURL=index62.mjs.map
