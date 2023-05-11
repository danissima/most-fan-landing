module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/profile-page/' : '/',
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import '@/assets/scss/mixins.scss';
                    @import '@/assets/scss/variables.scss';
                `,
            },
        },
    },
    lintOnSave: true,
}
