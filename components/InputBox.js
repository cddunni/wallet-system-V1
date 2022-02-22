const svgToDataUri = require('mini-svg-data-uri')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { spacing, borderWidth, borderRadius } = defaultTheme

const forms = plugin.withOptions(function (options = { strategy: 'base' }) {
  return function ({ addBase, theme }) {
    const strategy = options.strategy

    const rules = [
      {
        base: [
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
        ],
        class: ['.form-input', '.form-textarea', '.form-select', '.form-multiselect'],
        styles: {
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
      },
      {
        base: ['input::placeholder', 'textarea::placeholder'],
        class: ['.form-input::placeholder', '.form-textarea::placeholder'],
        styles: {
          color: theme('colors.gray.500', colors.gray[500]),
          opacity: '1',
        },
      },
    ]
    addBase(
      rules
        .map((rule) => {
          if (rule[strategy] === null) {
            return null
          }

          return { [rule[strategy]]: rule.styles }
        })
        .filter(Boolean)
    )
  }
})
const InputBox = ({label, type, placeholder}) => {
  return (
        <div className="mt-5 max-w-98">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
                <span className="text-gray-350 font-light">{label}</span>
                <input
                  type={type}
                  className="mt-1 block w-full rounded border-gray-250 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder={placeholder}
                />
            </label>
          </div>
        </div>
  )
}

module.exports = {forms, InputBox}