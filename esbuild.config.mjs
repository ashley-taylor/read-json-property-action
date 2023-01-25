import { analyzeMetafile, build } from "esbuild";

(async () => {
  try {
    const result = await build({
      entryPoints: ["./index.js"],
      outfile: "dist/index.js",
      metafile: true,
      bundle: true,
      platform: "node",
      target: ["node16"],
    });

    const analysis = await analyzeMetafile(result.metafile);
    console.info(`📝 Bundle Analysis:${analysis}`);
  } catch (error) {
    console.error(error.message);
    console.debug(error.stack);
    process.exit(1);
  }
})();
