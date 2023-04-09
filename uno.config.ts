import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTagify,
  presetIcons,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
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
