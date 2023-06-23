/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-default': 'linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)'
            },
            boxShadow: {
                xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
                sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
                md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
                lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
                xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
                button:'0 4px 14px 0 rgb(104 112 118 / 0.18)'
            },
            dropShadow: {
                xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
                sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
                md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04)),',
                lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
                xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))',
            },
            colors: {
                'neutral': '#889096',
                'primary': '#0072F5',
                'hover': '#747bff',
                'secondary': '#7828C8',
                'success': '#17C964',
                'warning': '#F5A524',
                'error': '#F31260',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            minHeight:{
                '640px':'640px'
            }
        },
    },
    plugins: [],
}

