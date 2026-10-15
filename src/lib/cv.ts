import { existsSync } from "node:fs";
import path from "node:path";

/** Evaluated at build time: CV links render only when the PDF is actually shipped. */
export const hasCv = existsSync(path.join(process.cwd(), "public", "cv.pdf"));
