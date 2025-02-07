import { sassPlugin } from "esbuild-sass-plugin";
import esbuild from "esbuild";

await esbuild.build({
  plugins: [sassPlugin()],
  entryPoints: ["./src/js/index.tsx"],
  outdir: "dist",
  loader: { ".js": "jsx" },
  external: [
    "react",
    "react-dom",
  ],
  bundle: true,
  format: "esm",
  watch: process.env.NODE_ENV === "development",
});
