import { t as to, a as ao, p as pt } from './index-DxbKn28b.mjs';
import { H as He } from './index-Bf1kAoXe.mjs';
import 'zod';

const g = async (t) => {
  const { messages: o } = await t.request.json();
  return to({ execute: (e) => {
    e.writeData("initialized call"), ao({ model: pt("gpt-4o"), messages: o, onChunk() {
      e.writeMessageAnnotation({ chunk: "123" });
    }, onFinish() {
      e.writeMessageAnnotation({ id: He(), other: "information" }), e.writeData("call completed");
    } }).mergeIntoDataStream(e);
  }, onError: (e) => e instanceof Error ? e.message : String(e) });
};

export { g as POST };
//# sourceMappingURL=index122.mjs.map
