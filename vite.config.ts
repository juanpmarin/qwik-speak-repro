import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikSpeakInline } from 'qwik-speak/inline';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      qwikSpeakInline({
        supportedLangs: ['en-US', 'it-IT'],
        defaultLang: 'en-US',
        assetsPath: 'i18n'
      }),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
