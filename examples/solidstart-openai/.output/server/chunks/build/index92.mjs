import { a as ao, p as pt } from './index-DxbKn28b.mjs';
import './index-Bf1kAoXe.mjs';
import 'zod';

const g = async (s) => {
  const { messages: t } = await s.request.json();
  return ao({ model: pt("gpt-4-turbo"), messages: t, async onFinish({ text: r, toolCalls: n, toolResults: i, usage: m, finishReason: l }) {
  } }).toDataStreamResponse();
};

export { g as POST };
//# sourceMappingURL=index92.mjs.map
