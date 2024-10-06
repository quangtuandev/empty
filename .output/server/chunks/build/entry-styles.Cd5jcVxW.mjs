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

const style = "body{background:url(" + buildAssetsURL("body.x1gD1T3q.png") + ") #0d0d0d}a{color:#e4d3b0;text-decoration:none}a:hover{color:#f4e1a1}.fs-20{font-size:20px}";

const entryStyles_Cd5jcVxW = [style];

export { entryStyles_Cd5jcVxW as default };
//# sourceMappingURL=entry-styles.Cd5jcVxW.mjs.map
