import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  shortcuts: [
    {
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'flex-h-end': 'justify-end',
    },
    { flexb: 'flex items-center justify-between' },
    { flexc: 'flex items-center justify-center' },
    { btn: 'rounded-5px text-center cursor-pointer select-none' },
    { 'text-btn': 'text-center cursor-pointer select-none' },
  ],
  presets: [presetUno({ attributifyPseudo: true }), presetAttributify()],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue'],
  rules: [
    [
      /^truncate-(\d+)$/,
      ([, d]) => ({
        overflow: 'hidden',
        display: '-webkit-box',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': d,
        '-webkit-box-orient': 'vertical',
      }),
    ],
    [
      /^center-text-(\d+)$/,
      ([, d]) => ({
        height: `${d}px`,
        'align-items': 'center',
        'line-height': `${Number(d) - 2}px`,
      }),
    ],
    [
      /^wh-(\d+)$/,
      ([, d]) => ({
        width: `${d}px`,
        height: `${d}px`,
      }),
    ],
  ],
});

