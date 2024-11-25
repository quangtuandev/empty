import { a as buildAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import 'vue';
import '@unhead/shared';

const style = "body{background:url(" + buildAssetsURL("body.x1gD1T3q.png") + ") #0d0d0d}@media screen and (max-width:768px){body{background-size:contain}}a{color:#e4d3b0;text-decoration:none}a:hover{color:#f4e1a1}.fs-20{font-size:20px}.bg-dark__theme{background:#0d0d0d}";

const entryStyles_BNTvV8UK = [style];

export { entryStyles_BNTvV8UK as default };
//# sourceMappingURL=entry-styles.BNTvV8UK.mjs.map
