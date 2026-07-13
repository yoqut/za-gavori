/* html-raw loader'ni ro'yxatga oladi:
 *   node --import ./scripts/loaders/register.mjs <skript>
 */
import { register } from "node:module";

register("./html-raw.mjs", import.meta.url);
