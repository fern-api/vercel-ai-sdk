import { r as ro, p as pt } from './index-DxbKn28b.mjs';
import { i } from './schema-BRl9Xhnh.mjs';
import './index-Bf1kAoXe.mjs';
import 'zod';

const f = async ({ request: t }) => {
  const o = await t.json();
  return ro({ model: pt("gpt-4o"), prompt: `Generate 3 notifications for a messages app in this context: ${o}`, schema: i }).toTextStreamResponse();
};

export { f as POST };
//# sourceMappingURL=index152.mjs.map
