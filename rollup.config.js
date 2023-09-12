import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import postcss from "postcss";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

const input = ["src/index.js"];

export default {
  input,
  output: [
    {
      // Output for the browser
      file: "dist/js-scroll-animations.js",
      format: "umd",
      name: "jsScrollAnimations",
    },
    {
      // Output for Node.js/CommonJS
      file: "dist/js-scroll-animations.cjs.js",
      format: "cjs",
    },
    {
      // Output for ES module
      file: "dist/js-scroll-animations.mjs",
      format: "es",
    },
  ],
  plugins: [
    scss({
      fileName: "styles.css",
      outputStyle: "compressed",
      processor: () => postcss([autoprefixer()]),
    }),
    babel({
      babelHelpers: "bundled",
    }),
    terser(),
  ],
};
