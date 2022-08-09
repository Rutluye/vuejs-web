<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
    <!--Footer Miniso -->
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppBar from "@/components/AppBar";
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'App',
  components: {AppBar, AppFooter},

  setup() {

    return {}
  }
});
</script>
