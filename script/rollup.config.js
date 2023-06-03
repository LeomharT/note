export default {
    plugins: [
        /** 解决node_modules依赖插件 */
        nodeResolve({
            /** 如果出现重复依赖添加这个,是这个plugin的配置我还以为是全局rollup配置呢😜 */
            preferBuiltins: false
        }),
        /** 如果插件是个commonjs那么需要用这个插件 */
        commonjs(),
        /** 打包json文件插件 */
        json()
    ],
    input: 'build/index.js',
    output: {
        file: 'bundle.mjs',
        /** 如果是Nodejs加一下这个就好啦,是在output的对象上面 */
        format: 'es'
    }
}
