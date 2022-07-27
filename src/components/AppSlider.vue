<template>
  <v-container fluid style="background:rgba(245,241,241,0.93)">
    <v-container>
      <h1 class="text-center">Miniso Wow ✨</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <v-slide-item
              v-for="(producto,i) in productos"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
                :to="'/detalle_producto/' + producto.producto_id"

            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-btn
                    color="error button_offer"
                    depressed
                    small
                >
                  {{producto.producto_descuento}}%
                </v-btn>
                <v-btn
                    icon
                    color="grey"
                    left
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="'data:image/jpeg;charset=utf-8;base64,' +producto.producto_img"
              />
              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto.producto_nombre}}</div>
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
                   <v-card-subtitle class="text-md-h6 text-sm-subtitle-1 font-weight-bold">S/{{ producto.precio_final }}</v-card-subtitle>
                  </v-btn>

                  <v-btn
                      text
                      disabled
                      class="text-decoration-line-through"
                  >
                   S/{{producto.producto_precio}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>

        </div>
      </v-slide-group>

    </v-container>
  </v-container>

</template>

<script>

import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "AppSlider.vue",
  props:{
    productos:{
      Type : Object
    }
  },

  setup (){
    const modal = null
    return {
      modal,

    }
  }

});
</script>

<style scoped>

</style>