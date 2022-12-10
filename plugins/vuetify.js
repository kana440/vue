import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin( nuxtApp => {
    const vuetify = createVuetify({
        components,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
    });

    nuxtApp.vueApp.use( vuetify );
});