<template xmlns="http://www.w3.org/1999/html">
  <div>
    <v-app-bar
        color="red darken-2 mb-4"
        height="34"
        dense
    >
      <img alt="BannerGif"
           style="max-height: 40px; min-width: 100%;max-width: 100vw;"
           src="https://minisope.vtexassets.com/arquivos/CINTILLODESKTOPMinisoPeru.gif"
      />
    </v-app-bar>
    <div class="d-flex">
      <v-img
          max-width="120"
          height="40"
          alt="Logo"
          class="mr-3 ml-2"
          src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/10f39e67-475c-4ca1-b70d-514d1ff6f2ae___ef69a328b8f540713705bb41b96cb81a.png"
      />
      <v-text-field
          solo
          append-icon="mdi-card-search-outline"
          label="¿Qué estás buscando hoy?"
      />
      <v-spacer></v-spacer>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-penguin</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-shopping-outline</v-icon>
      </v-btn>
    </div>

    <!--v-card cabecera-->
    <v-card
    >
      <v-menu
          offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-tabs
              background-color="white"
              align-with-title
              class="hidden-sm-and-down"
          >
            <v-tabs-slider color="red"></v-tabs-slider>
            <v-tab
                v-bind="attrs"
                v-on="on"
                color="black"
                style="text-transform:capitalize !important; color: black">
              Categorías
            </v-tab>
            <v-tab
                v-for="(categoria,i) in categorias"
                :key="i"
                :style="'text-transform:capitalize !important; color:' + categoria.color"
                :color="categoria.color"
            >
              {{ categoria.cat }}
            </v-tab>
          </v-tabs>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "AppBar.vue",

  setup() {

    const list: boolean = false;

    const categorias = [
      {
        'color': 'red',
        'cat': 'New Arrivals ✨'
      },
      {
        'color': 'black',
        'cat': 'Miniso Wow ✨'
      },
      {
        'color': '#ff0000',
        'cat': 'Outlet 🔥'
      },
      {
        'color': '#52e8f6',
        'cat': 'Colecciones'
      },
      {
        'color': 'black',
        'cat': 'Tiendas'
      },
      {
        'color': 'black',
        'cat': 'Contáctenos'
      }
    ]

    const btns = [
      ['Removed', '0'],

    ]
    const colors = ['deep-purple accent-4']

    const items = ['Hogar','Salud y Belleza', 'Juguetería', 'Tecnología']

    return {
      list,
      categorias, colors, btns, items,
      model: 'tab-2',
      text: 'Hogar',

    }

  }
})
</script>

<style scoped>

</style>