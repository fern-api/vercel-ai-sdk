import { a as ao, p as pt } from './index-DxbKn28b.mjs';
import './index-Bf1kAoXe.mjs';
import 'zod';

const l = async (s) => {
  const { messages: t, data: o } = await s.request.json(), a = t.slice(0, -1), e = t[t.length - 1];
  return ao({ model: pt("gpt-4o-mini"), messages: [...a, { ...e, content: [{ type: "text", text: e.content }, { type: "image", image: new URL(o.imageUrl) }] }] }).toDataStreamResponse();
};

export { l as POST };
//# sourceMappingURL=index142.mjs.map
