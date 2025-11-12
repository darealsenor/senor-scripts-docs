import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'Senor Scripts',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Senor Scripts',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Scripts',
          items: [
            { label: 'Home', slug: '' },
            { label: 'Airdrops', slug: 'scripts/airdrops' },
            {
              label: 'Squads',
              items: [
                { label: 'Overview', slug: 'scripts/squads' },
                { label: 'Installation', slug: 'scripts/squads/installation' },
                { label: 'Configuration', slug: 'scripts/squads/configuration' },
                {
                  label: 'API Reference',
                  items: [
                    { label: 'Client Exports', slug: 'scripts/squads/api/client-exports' },
                    { label: 'Server Exports', slug: 'scripts/squads/api/server-exports' },
                    { label: 'Client Events', slug: 'scripts/squads/api/client-events' },
                    { label: 'Server Events', slug: 'scripts/squads/api/server-events' },
                  ],
                },
              ],
            },
            { label: 'Chat', slug: 'scripts/chat' },
          ],
        },
      ],
    }),
  ],
})
