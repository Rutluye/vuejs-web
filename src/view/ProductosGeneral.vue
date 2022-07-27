<template>
<div>
  <AppBar/>

  <div  style="background:rgb(255,255,255)">
    <v-row>
    <v-col
        cols="2"
    >
      <v-card
          class="mx-auto"
          max-width="500"
      >
        <v-card-text
            color="white"
        >
          <v-card-title>Filtrado por:</v-card-title>

          <v-divider></v-divider>
        </v-card-text>

        <v-list>
          <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="child in item.items"
                :key="child.title"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

        </v-list>
      </v-card>
      <v-range-slider
          dense
          hint="S/17.00 - S/90.00"
          max="50"
          min="-50"
          color="teal accent-4"
      ></v-range-slider>

    </v-col>

      <v-col cols="10">
        <v-row dense>
          <div
              v-if="responseproductsCat == null"
          >
            loading...
          </div>
          <v-col
              v-else
              cols="3"
              v-for="(producto_categoria,i)  in responseproductsCat.getProductArray()"
              :key="i">
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
                elevation="0"
            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    color="grey"
                    left
                    small
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="'data:image/jpeg;charset=utf-8;base64,' +producto_categoria.getProductImage()"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto_categoria.getProductNombre()}}</div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-btn
                      text
                      color="error"
                  >
                    S/{{producto_categoria.getProductPrecio()}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">

                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR A LA BOLSA
                  </v-btn>

                </v-card-actions>

              </v-card-text>

            </v-card>
          </v-col>
        </v-row>

  </v-col>
</v-row>

  </div>

  <AppFooter></AppFooter>

</div>

</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import ProductModel from "@/models/Productos/ProductModel";
import {productsServices} from "@/Services/Productos/ProductsService";

export default defineComponent({
  name: 'home',


  setup(_, context) {
    const modal = null

    const items = [
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195904-800-800?v=637914622171200000&width=800&height=800&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195766-1200-1200?v=637914621650970000&width=1200&height=1200&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195812-1200-1200?v=637914621847030000&width=1200&height=1200&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195813-1200-1200?v=637914621855330000&width=1200&height=1200&aspect=true',
      },
    ]
    const productos = [
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/184251-384-384?v=637811050295670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de cerdito rosa - Miniso',
        precio: 'S/ 39.90'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158311-384-384?v=637389918300670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de husky sakura - Miniso',
        precio : 'S/ 32.90'
      },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/169034-384-384?v=637647528043670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de pinguino gris - Miniso',
        precio : 'S/ 8.95'
      },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/155755-384-384?v=637369026157070000&width=384&height=384&aspect=true',
        titulo : 'Peluche de pinguino azul - Miniso',
        precio : 'S/ 24.90'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/184251-384-384?v=637811050295670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de cerdito - Miniso',
        precio: 'S/ 39.90'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158311-384-384?v=637389918300670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de husky sakura - Miniso',
        precio : 'S/ 32.90'
      },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/169034-384-384?v=637647528043670000&width=384&height=384&aspect=true',
        titulo : 'Peluche de pinguino gris - Miniso',
        precio : 'S/ 8.95'
      },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/155755-384-384?v=637369026157070000&width=384&height=384&aspect=true',
        titulo : 'Peluche de pinguino azul - Miniso',
        precio : 'S/ 24.90'
      }
    ]

    const route = context.root.$route;

     const responseproductsCat : Ref<ProductModel|null> = ref(null);


     const getProductsByCategory = async () =>{

     const response = await productsServices.getProductsByCategory(route.params.categoria);
     responseproductsCat.value = new ProductModel(response)

     }

  onMounted( () => {
    getProductsByCategory();
   })


    return {
      items,
      productos,
      modal,
      getProductsByCategory,
      responseproductsCat
    }

    //...

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