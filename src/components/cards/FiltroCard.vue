<template>
  <div>
  <v-card
      class="mx-auto"
      max-width="500"
  >
    <v-card-text
        color="white"
    >
      <v-breadcrumbs :items="itemData">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-card-title>FILTRADO POR:</v-card-title>
      <v-divider></v-divider>
    </v-card-text>
    <v-list>
      <v-list-group
          v-for="item in items"
          :key="item.title"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content class="px-0">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
            v-for="child in item.items"
            :key="child.title"
            class="pa-0 ml-3"
        >
          <template>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-group>

    </v-list>
  </v-card>
  <v-card-text>Precio</v-card-text>
  <v-range-slider
      dense
      hint="S/17.00 - S/90.00"
      max="50"
      min="-50"
      color="teal accent-4"
  >
  </v-range-slider>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/composition-api";
import {ref, Ref} from "@vue/composition-api/dist/vue-composition-api";


export default defineComponent({
  name: "FiltroCard",

  setup() {

    const modal = null

    const items= ref([
      {
        items: [
          { title: 'Cocina' },
          { title: 'Organizadores' },
          { title: 'Mascotas' },
          { title: 'Termos y Tomatodos' },
          { title: 'Articulos de Meza' },
          { title: 'Baño' },
        ],
        title: 'Categoría',
      },
      {
        items: [
          { title: 'Verde Menta' },
          { title: 'Verde' },
          { title: 'Negro' },
          { title: 'Transparente' },
          { title: 'Gris' },
          { title: 'Blanco' },
        ],
        title: 'Color',
      },
      {
        items: [
          { title: 'We Bare Bears' },
          { title: 'Candy Series' },
          { title: 'Energy Of Fruits' },
          { title: 'Miniso' },
          { title: 'Series' },
        ],
        title: 'Lincencia',
      },
      {
        items: [
          { title: 'Utensilios De Cocina' },
          { title: 'Cubiertos' },
          { title: 'Gancho Para Ropa' },
          { title: 'Taza' },
          { title: 'Sarten' },
          { title: 'Tapete Decorativo' },
        ],
        title: 'Sub-Categoría',
      },
    ])

    const itemData : Ref<any> = ref([
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Hogar',
        disabled: false,
        href: 'breadcrumbs_link_1',
      }
    ])



    return {
      items,
      itemData,
      modal

    }

  }
})

</script>
<style scoped>
.button_offer{
  padding:0 !important;
  margin:0 !important;
}
.v-slide-group__content{
  display:flex !important;
  gap: 15px !important;
}
</style>

