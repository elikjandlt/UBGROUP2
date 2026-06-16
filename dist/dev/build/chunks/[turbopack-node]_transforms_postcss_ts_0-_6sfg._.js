module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/output/ub-group/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/02vl__pnpm_0vg763g._.js",
  "chunks/[root-of-the-server]__085q5xe._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/output/ub-group/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];