module.exports = {
    apps: [
        {
            name: 'PAPA_WEB',
            cwd: './',
            script: 'node',
            args: '.output/server/index.mjs',
            env: {
                NODE_ENV: 'production',
                NUXT_PORT: 3000,
            },
        },
    ],
}
