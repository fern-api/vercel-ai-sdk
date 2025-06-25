import { a as ao, p as pt } from './index-DxbKn28b.mjs';
import './index-Bf1kAoXe.mjs';
import 'zod';

const i = async (t) => {
  const { prompt: o } = await t.request.json();
  return ao({ model: pt("gpt-4o"), prompt: o }).toDataStreamResponse();
};

export { i as POST };
//# sourceMappingURL=index102.mjs.map
