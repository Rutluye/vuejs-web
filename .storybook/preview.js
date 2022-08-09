import { addDecorator } from '@storybook/vue';

// Storybook Viewport parameters
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Vue
import Vue from "vue";

// Vuetify
import vuetify from './plugins/vuetify';

Vue.prototype.$vuetify = vuetify.framework;

// Composition API
import './plugins/composition-api';

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};

addDecorator(() => ({
    vuetify,
    template: `
    <v-app id="storybook">
      <v-main>
        <v-container fluid>
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `
}));