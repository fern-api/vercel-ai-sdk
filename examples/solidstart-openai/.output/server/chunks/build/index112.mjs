import { a as ao, p as pt } from './index-DxbKn28b.mjs';
import './index-Bf1kAoXe.mjs';
import 'zod';

const R = async (s) => {
  const { message: e } = await s.request.json(), o = [...[], e];
  return ao({ model: pt("gpt-4o-mini"), messages: o, async onFinish({ text: i, toolCalls: m, toolResults: p, usage: l, finishReason: u }) {
  } }).toDataStreamResponse();
};

export { R as POST };
//# sourceMappingURL=index112.mjs.map
