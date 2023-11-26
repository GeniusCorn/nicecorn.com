import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTagify,
  presetIcons,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'btn': 'p-2 rounded text-black hover:text-white cursor-pointer transition'
  },
  presets: [
    presetUno({
      dark: 'class'
    }),
    presetAttributify(),
    presetTagify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Arimo',
        display: [
          {
            name: 'Tilt Warp',
            italic: true
          }
        ]
      }
    })
  ]
})
