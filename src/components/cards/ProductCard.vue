<template>
    <v-row dense>
      <v-col
          md="3"
          sm="4"
          cols="6"
          v-for="(producto,i)  in responseCategory.getProductArray()"
          :key="i">
        <v-card
            class="mx-auto my-12 mx-5"
            width="285"
            elevation="0"
            :to="'/detalle_producto/' + producto.getProductId()"
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
              :src="'data:image/jpeg;charset=utf-8;base64,' +producto.getProductImage()"
          ></v-img>

          <v-card-text>
            <v-spacer></v-spacer>
            <div>{{producto.getProductNombre()}}</div>
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
                <v-card-subtitle class="text-md-h6 text-sm-subtitle-1 font-weight-bold">S/{{producto.getProductPrecio()}}</v-card-subtitle>
              </v-btn>

            </v-chip-group>
            <v-card-actions class="d-flex justify-space-around">

              <v-btn
                  color="red"
                  dark
              >
                {{ $t('add to bag')}}
              </v-btn>

            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard.vue",
  props:{
    responseCategory:{
      type: Object
    }
  },
  setup() {
    const modal = null

    return {
      modal
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