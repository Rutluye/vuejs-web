<template>
  <v-app>
    <router-view name="toolbar" />
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
    <!--Footer Miniso -->
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import { defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'App',
  components: {AppFooter},

  data: () => ({
    //
  }),
});
</script>
