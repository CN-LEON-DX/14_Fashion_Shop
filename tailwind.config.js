tailwind.config = {
    theme: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1240px',                                    
        '2xl': '1240px',                              
      },
      extend: {
        colors: {
          primary: '#000000',
          secondary: '#F57F20'
        },
        fontFamily: {
          roboto:  ['Be Vietnam Pro', 'sans-serif'],
          //robotoCo: ['Roboto Condensed', 'sans-serif']
          font_awsome: ['Font Awesome 6 Pro'],
        }
      }
    }
  }