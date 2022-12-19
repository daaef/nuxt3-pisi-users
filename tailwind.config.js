
module.exports = {
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: '#2936AC',
                    secondary: '#E8E8F3',
                    accent: '#042343',
                    info: '#547FC9',
                    success: '#05A753',
                    warning: '#FF8F6B',
                    error: '#E51919',
                    'base-content': '#202020'
                }
            },
        ],
    },
    plugins: [require('daisyui')],
    theme: {
        container: {
            center: true,
        },
    },
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ]
};