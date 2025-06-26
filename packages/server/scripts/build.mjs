import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: false,
    platform: 'node',
    packages: 'external',
    format: 'esm',
    outdir: './dist'
})

