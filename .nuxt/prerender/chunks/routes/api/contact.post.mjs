import { defineEventHandler, readBody, setResponseStatus } from 'file:///Users/macos/working/duanyu/papa/node_modules/h3/dist/index.mjs';

const contact_post = defineEventHandler(async (event) => {
  await readBody(event);
  return setResponseStatus(event, 200, "succrs");
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
