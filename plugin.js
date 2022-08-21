const svgToDataUri = require('mini-svg-data-uri');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const [
  baseFontSize,
  { lineHeight: baseLineHeight },
] = defaultTheme.fontSize.base;
const { spacing, borderWidth, borderRadius } = defaultTheme;

module.exports = plugin(
  function({ addBase, theme }) {
    addBase({
      [[
        "[type='text']",
        "[type='email']",
        "[type='url']",
        "[type='password']",
        "[type='number']",
        "[type='date']",
        "[type='datetime-local']",
        "[type='month']",
        "[type='search']",
        "[type='tel']",
        "[type='time']",
        "[type='week']",
        '[multiple]',
        'textarea',
        'select',
      ]]: {
        appearance: 'none',
        'background-color': '#fff',
        'border-color': theme('colors.gray.500', colors.gray[500]),
        'border-width': borderWidth['DEFAULT'],
        'border-radius': borderRadius.none,
        'padding-top': spacing[2],
        'padding-right': spacing[3],
        'padding-bottom': spacing[2],
        'padding-left': spacing[3],
        'font-size': baseFontSize,
        'line-height': baseLineHeight,
        '--tw-shadow': '0 0 #0000',
        '&:focus': {
          outline: '2px solid transparent',
          'outline-offset': '2px',
          '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
          '--tw-ring-offset-width': '0px',
          '--tw-ring-offset-color': '#fff',
          '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
          '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
          '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
          'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
          'border-color': theme('colors.blue.600', colors.blue[600]),
        },
      },
      [['input::placeholder', 'textarea::placeholder']]: {
        color: theme('colors.gray.500', colors.gray[500]),
        opacity: '1',
      },
      ['::-webkit-datetime-edit-fields-wrapper']: {
        padding: '0',
      },
      ['::-webkit-date-and-time-value']: {
        'min-height': '1.5em',
      },
      ['select']: {
        'background-image': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
            'colors.gray.500',
            colors.gray[500]
          )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
        )}")`,
        'background-position': `right ${spacing[2]} center`,
        'background-repeat': `no-repeat`,
        'background-size': `1.5em 1.5em`,
        'padding-right': spacing[10],
        'print-color-adjust': `exact`,
      },
      ['[multiple]']: {
        'background-image': 'initial',
        'background-position': 'initial',
        'background-repeat': 'unset',
        'background-size': 'initial',
        'padding-right': spacing[3],
        'print-color-adjust': 'unset',
      },
      [[`[type='checkbox']`, `[type='radio']`]]: {
        appearance: 'none',
        padding: '0',
        'print-color-adjust': 'exact',
        display: 'inline-block',
        'vertical-align': 'middle',
        'background-origin': 'border-box',
        'user-select': 'none',
        'flex-shrink': '0',
        height: spacing[4],
        width: spacing[4],
        color: theme('colors.blue.600', colors.blue[600]),
        'background-color': '#fff',
        'border-color': theme('colors.gray.500', colors.gray[500]),
        'border-width': borderWidth['DEFAULT'],
        '--tw-shadow': '0 0 #0000',
      },
      [`[type='checkbox']`]: {
        'border-radius': borderRadius['none'],
      },
      [`[type='radio']`]: {
        'border-radius': '100%',
      },
      [[`[type='checkbox']:focus`, `[type='radio']:focus`]]: {
        outline: '2px solid transparent',
        'outline-offset': '2px',
        '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
        '--tw-ring-offset-width': '2px',
        '--tw-ring-offset-color': '#fff',
        '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
        '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
      },
      [[
        `[type='checkbox']:checked`,
        `[type='radio']:checked`,
        `.dark [type='checkbox']:checked`,
        `.dark [type='radio']:checked`,
      ]]: {
        'border-color': `transparent`,
        'background-color': `currentColor`,
        'background-size': `100% 100%`,
        'background-position': `center`,
        'background-repeat': `no-repeat`,
      },
      [`[type='checkbox']:checked`]: {
        'background-image': `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
        )}")`,
      },
      [`[type='radio']:checked`]: {
        'background-image': `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
        )}")`,
      },
      [`[type='checkbox']:indeterminate`]: {
        'background-image': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
        )}")`,
        'border-color': `transparent`,
        'background-color': `currentColor`,
        'background-size': `100% 100%`,
        'background-position': `center`,
        'background-repeat': `no-repeat`,
      },
      [[
        `[type='checkbox']:indeterminate:hover`,
        `[type='checkbox']:indeterminate:focus`,
      ]]: {
        'border-color': 'transparent',
        'background-color': 'currentColor',
      },
      [`[type='file']`]: {
        background: 'unset',
        'border-color': 'inherit',
        'border-width': '0',
        'border-radius': '0',
        padding: '0',
        'font-size': 'unset',
        'line-height': 'inherit',
      },
      [`[type='file']:focus`]: {
        outline: `1px solid ButtonText`,
        outline: `1px auto inherit`,
      },
      [[`input[type=file]::file-selector-button`]]: {
        color: 'white',
        background: theme('colors.gray.800', colors.gray[800]),
        border: 0,
        'font-weight': theme('fontWeight.medium'),
        'font-size': theme('fontSize.sm'),
        cursor: 'pointer',
        'padding-top': spacing[2.5],
        'padding-bottom': spacing[2.5],
        'padding-left': spacing[8],
        'padding-right': spacing[4],
        'margin-inline-start': '-1rem',
        'margin-inline-end': '1rem',
        '&:hover': {
          background: theme('colors.gray.700', colors.gray[700]),
        },
      },
      [[`.dark input[type=file]::file-selector-button`]]: {
        color: 'white',
        background: theme('colors.gray.600', colors.gray[600]),
        '&:hover': {
          background: theme('colors.gray.500', colors.gray[500]),
        },
      },
      [[`input[type="range"]::-webkit-slider-thumb`]]: {
        height: spacing[5],
        width: spacing[5],
        background: theme('colors.blue.600', colors.blue[600]),
        'border-radius': borderRadius.full,
        border: 0,
        appearance: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        cursor: 'pointer',
      },
      [[`input[type="range"]:disabled::-webkit-slider-thumb`]]: {
        background: theme('colors.gray.400', colors.gray[400]),
      },
      [[`.dark input[type="range"]:disabled::-webkit-slider-thumb`]]: {
        background: theme('colors.gray.500', colors.gray[500]),
      },
      [[`input[type="range"]:focus::-webkit-slider-thumb`]]: {
        outline: '2px solid transparent',
        'outline-offset': '2px',
        '--tw-ring-offset-shadow':
          'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
        '--tw-ring-shadow':
          'var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        'box-shadow':
          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
        '--tw-ring-opacity': 1,
        '--tw-ring-color': 'rgb(164 202 254 / var(--tw-ring-opacity))',
      },
      [[`input[type="range"]::-moz-range-thumb`]]: {
        height: spacing[5],
        width: spacing[5],
        background: theme('colors.blue.600', colors.blue[600]),
        'border-radius': borderRadius.full,
        border: 0,
        appearance: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        cursor: 'pointer',
      },
      [[`input[type="range"]:disabled::-moz-range-thumb`]]: {
        background: theme('colors.gray.400', colors.gray[400]),
      },
      [[`.dark input[type="range"]:disabled::-moz-range-thumb`]]: {
        background: theme('colors.gray.500', colors.gray[500]),
      },
      [[`input[type="range"]::-moz-range-progress`]]: {
        background: theme('colors.blue.500', colors.blue[500]),
      },
      [[`input[type="range"]::-ms-fill-lower`]]: {
        background: theme('colors.blue.500', colors.blue[500]),
      },
      [[`input[type="range"].range-sm::-webkit-slider-thumb`]]: {
        height: spacing[4],
        width: spacing[4],
      },
      [[`input[type="range"].range-lg::-webkit-slider-thumb`]]: {
        height: spacing[6],
        width: spacing[6],
      },
      [[`input[type="range"].range-sm::-moz-range-thumb`]]: {
        height: spacing[4],
        width: spacing[4],
      },
      [[`input[type="range"].range-lg::-moz-range-thumb`]]: {
        height: spacing[6],
        width: spacing[6],
      },
      // remove from v2.x+
      ['.toggle-bg:after']: {
        content: '""',
        position: 'absolute',
        top: spacing[0.5],
        left: spacing[0.5],
        background: 'white',
        'border-color': theme('colors.gray.300', colors.gray[300]),
        'border-width': borderWidth['DEFAULT'],
        'border-radius': borderRadius.full,
        height: theme('height.5'),
        width: theme('width.5'),
        'transition-property':
          'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter',
        'transition-duration': '.15s',
        'box-shadow':
          'var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
      },
      ['input:checked + .toggle-bg:after']: {
        transform: 'translateX(100%);',
        'border-color': 'white',
      },
      ['input:checked + .toggle-bg']: {
        background: theme('colors.blue.600', colors.gray[600]),
        'border-color': theme('colors.blue.600', colors.gray[600]),
      },
      // remove from v2.x+ END
      [['.tooltip-arrow', '.tooltip-arrow:before']]: {
        position: 'absolute',
        width: '8px',
        height: '8px',
        background: 'inherit',
      },
      ['.tooltip-arrow']: {
        visibility: 'hidden',
      },
      ['.tooltip-arrow:before']: {
        content: '""',
        visibility: 'visible',
        transform: 'rotate(45deg)',
      },
      [`[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before`]: {
        'border-style': 'solid',
        'border-color': colors.gray[200],
      },
      [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before`]: {
        'border-bottom-width': '1px',
        'border-right-width': '1px',
      },
      [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before`]: {
        'border-bottom-width': '1px',
        'border-left-width': '1px',
      },
      [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before`]: {
        'border-top-width': '1px',
        'border-left-width': '1px',
      },
      [`[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before`]: {
        'border-top-width': '1px',
        'border-right-width': '1px',
      },
      [`.tooltip[data-popper-placement^='top'] > .tooltip-arrow`]: {
        bottom: '-4px',
      },
      [`.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow`]: {
        top: '-4px',
      },
      [`.tooltip[data-popper-placement^='left'] > .tooltip-arrow`]: {
        right: '-4px',
      },
      [`.tooltip[data-popper-placement^='right'] > .tooltip-arrow`]: {
        left: '-4px',
      },
      ['.tooltip.invisible > .tooltip-arrow:before']: {
        visibility: 'hidden',
      },
      [['[data-popper-arrow]', '[data-popper-arrow]:before']]: {
        position: 'absolute',
        width: '8px',
        height: '8px',
        background: 'inherit',
      },
      ['[data-popper-arrow]']: {
        visibility: 'hidden',
      },
      ['[data-popper-arrow]:before']: {
        content: '""',
        visibility: 'visible',
        transform: 'rotate(45deg)',
      },
      ['[data-popper-arrow]:after']: {
        content: '""',
        visibility: 'visible',
        transform: 'rotate(45deg)',
        position: 'absolute',
        width: '9px',
        height: '9px',
        background: 'inherit',
      },
      [`[role="tooltip"] > [data-popper-arrow]:before`]: {
        'border-style': 'solid',
        'border-color': colors.gray[200],
      },
      [`.dark [role="tooltip"] > [data-popper-arrow]:before`]: {
        'border-style': 'solid',
        'border-color': colors.gray[600],
      },
      [`[role="tooltip"] > [data-popper-arrow]:after`]: {
        'border-style': 'solid',
        'border-color': colors.gray[200],
      },
      [`.dark [role="tooltip"] > [data-popper-arrow]:after`]: {
        'border-style': 'solid',
        'border-color': colors.gray[600],
      },
      [`[role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before`]: {
        'border-bottom-width': '1px',
        'border-right-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after`]: {
        'border-bottom-width': '1px',
        'border-right-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before`]: {
        'border-bottom-width': '1px',
        'border-left-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after`]: {
        'border-bottom-width': '1px',
        'border-left-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before`]: {
        'border-top-width': '1px',
        'border-left-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after`]: {
        'border-top-width': '1px',
        'border-left-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before`]: {
        'border-top-width': '1px',
        'border-right-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after`]: {
        'border-top-width': '1px',
        'border-right-width': '1px',
      },
      [`[role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]`]: {
        bottom: '-5px',
      },
      [`[role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]`]: {
        top: '-5px',
      },
      [`[role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]`]: {
        right: '-5px',
      },
      [`[role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]`]: {
        left: '-5px',
      },
      ['[role="tooltip"].invisible > [data-popper-arrow]:before']: {
        visibility: 'hidden',
      },
      ['[role="tooltip"].invisible > [data-popper-arrow]:after']: {
        visibility: 'hidden',
      },
    });
  },
  {
    darkMode: 'class', // or 'media' or 'class',
    theme: {
      extend: {
        height: {
          modal: 'calc(100% - 2rem)',
        },
        boxShadow: {
          'sm-light': '0 2px 5px 0px rgba(255, 255, 255, 0.08)',
        },
        colors: {
          transparent: 'transparent',
          white: '#ffffff',
          black: '#000000',
          purple: {
            DEFAULT: '#8247E5',
            100: '#EDDAFD',
            200: '#D8B6FC',
            300: '#BE90F7',
            400: '#A673EF',
            500: '#8247E5',
            600: '#6433C4',
            700: '#4A23A4',
            800: '#331684',
            900: '#220D6D',
          },
          green: {
            DEFAULT: '#5FC92E',
            100: '#EBFCD5',
            200: '#D4F9AC',
            300: '#B1EE80',
            400: '#8FDE5D',
            500: '#5FC92E',
            600: '#44AC21',
            700: '#2D9017',
            800: '#1A740E',
            900: '#0D6008',
          },
          blue: {
            DEFAULT: '#2561ED',
            100: '#D3E5FE',
            200: '#A7C9FD',
            300: '#7BA8F9',
            400: '#598CF4',
            500: '#2561ED',
            600: '#1B4ACB',
            700: '#1236AA',
            800: '#0B2589',
            900: '#071971',
          },
          yellow: {
            DEFAULT: '#FFAD0D',
            100: '#FFF5CE',
            200: '#FFE89E',
            300: '#FFD76D',
            400: '#FFC749',
            500: '#FFAD0D',
            600: '#DB8C09',
            700: '#B76F06',
            800: '#935404',
            900: '#7A4102',
          },
          red: {
            DEFAULT: '#FF3236',
            100: '#FFE3D6',
            200: '#FFC0AD',
            300: '#FF9783',
            400: '#FF6F65',
            500: '#FF3236',
            600: '#DB2438',
            700: '#B71938',
            800: '#930F35',
            900: '#7A0933',
          },
          dark: {
            DEFAULT: '#0F1D40',
            100: '#747c90',
            200: '#656E85',
            300: '#5C657D',
            400: '#525C76',
            500: '#49536E',
            600: '#3A4662',
            700: '#2C3857',
            800: '#192648',
            900: '#0F1D40',
          },
          light: {
            DEFAULT: '#FAFAFB',
            100: '#FAFAFB',
            200: '#F5F6F7',
            300: '#EEEFF2',
            400: '#E2E4E8',
            500: '#CACDD5',
            600: '#B2B7C2',
            700: '#A4A9B6',
            800: '#959CAB',
            900: '#8C93A3',
          },
        },
        fontSize: {
          '6xl': ['56px', { lineHeight: '78px', letterSpacing: '0em' }],
          '5xl': ['42px', { lineHeight: '63px', letterSpacing: '0em' }],
          '4xl': ['36px', { lineHeight: '54px', letterSpacing: '0em' }],
          '3xl': ['32px', { lineHeight: '48px', letterSpacing: '0em' }],
          '2xl': ['24px', { lineHeight: '36px', letterSpacing: '0em' }],
          xl: ['20px', { lineHeight: '32px', letterSpacing: '0em' }],
          lg: ['18px', { lineHeight: '29px', letterSpacing: '0em' }],
          base: ['16px', { lineHeight: '26px', letterSpacing: '0em' }],
          sm: ['14px', { lineHeight: '22px', letterSpacing: '0em' }],
          xs: ['12px', { lineHeight: '19px', letterSpacing: '0em' }],
        },
      },
    },
  }
);
