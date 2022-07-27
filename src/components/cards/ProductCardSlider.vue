<template>
  <div>
    <v-slide-item
        v-for="(producto,i) in productos"
        :key="i"
    >
      <v-card
        class="mx-auto my-12 mx-5"
        width="285"
      >
        <div class="d-flex justify-space-between px-2 py-2">
          <v-btn
              color="error button_offer"
              depressed
              small
          >
            -50%
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
            :src="producto.src"
        ></v-img>
        <v-card-text>
          <v-spacer></v-spacer>
          <div>{{producto.titulo}}</div>
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
              S/17.90
            </v-btn>

            <v-btn
                text
                disabled
                class="text-decoration-line-through"
            >
              {{producto.precio}}
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
</template>

<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard.vue",
  props:{
    productos: {
      Type: Object
    }
  },

})
</script>

<style scoped>

</style>