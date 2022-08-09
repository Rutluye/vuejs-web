// .storybook/main.js
const path = require("path");

module.exports = {
    // Location of our stories
    stories: ['../stories/**/*.stories.(js|ts|mdx)'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-viewport',
        '@storybook/addon-docs',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsconfig: path.resolve(__dirname, '../tsconfig.json')
            }
        },
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "../src/"),
        };
        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    },
                }
            ],
            include: path.resolve(__dirname, "../")
        });

        // keep this if you're doing typescript
        // config.resolve.extensions.push(".ts", ".tsx");
        return config;
    }
};