import { d as defineEventHandler, r as readBody, s as setResponseStatus } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const contact_post = defineEventHandler(async (event) => {
  await readBody(event);
  return setResponseStatus(event, 200, "succrs");
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
