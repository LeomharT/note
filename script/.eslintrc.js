module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module"
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:react-hooks/recommended',
    ],
    rules: {
        //👇关闭eslint内置未使用变量检查,因为它不懂ts
        "no-unused-vars": "off",
        //👇开启ts的no-unused-vars 
        "@typescript-eslint/no-unused-vars": "warn"
    },
    plugins: [
        //👇加入插件名不然找不到插件
        '@typescript-eslint'
    ]
}; 