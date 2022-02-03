module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            text_blue: 'var(--color-text_blue)',
            nav_black: 'var(--color-black)',
            dark_gray: 'var(--color-dark_gray)',
            btn_primary: 'var(--btn_primary)',
            btn_secondary: 'var(--btn_secondary)',
            text_secondary: 'var(--color-text_secondary)',
            btn_orange: 'var(--btn_orange)',
            btn_yellow: 'var(--btn_yellow)',
         },

         container: {
            center: true,
            padding: {
               DEFAULT: '1.25rem',
            },
         },

         boxShadow: {
            shadow_btn: 'var(--shadow_btn)'
         },

         fontFamily: {
            sans: ['Arial', "Segoe UI", "'Fira Sans'", "sans-serif"]
         },

         fontSize: {
            'tn': 'var(--font-tiny)',
            'sm': 'var(--font-sm)',
            'main': 'var(--font-main)',
            'md': 'var(--font-md)',
            'lg': 'var(--font-lg)',
            'xl': 'var(--font-xl)',
         },

         animation: {
            load: 'load 0.75s cubic-bezier(0.5, 0, 0.5, 1) infinite',
         },

         keyframes: {
            load: {
               '0%': {
                  transform: 'rotate(0deg)'
               },

               '100%': {
                  transform: 'rotate(360deg)'
               }
            }
         }
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
}