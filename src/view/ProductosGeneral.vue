<template>
    <div v-if="!responseCategory">

    <v-progress-circular
        style="height:400px; display:flex; align-content: center; justify-content: center"
        indeterminate
        color="red"
    ></v-progress-circular>
    </div>
    <div v-else>
      <v-row class="pa-3">
        <v-img
            :src="'data:image/jpeg;charset=utf-8;base64,' + responseCategory.getCategoryImage()"
        ></v-img>
      </v-row>
      <v-row>
        <v-col
            cols="2"
            class="hidden-sm-and-down"
        >
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
        </v-col>

        <v-col
            md="10"
            cols="12"
        >
          <ProductCard :response-category="responseCategory"/>
        </v-col>
        <v-row class="pa-5">
          <v-col
              cols="12"
              class="hidden-sm-and-down">
            <v-divider></v-divider>
            <v-card-title>{{ responseCategory.getCategoryNombre() }}</v-card-title>
            <v-card-text>
              {{responseCategory.getCategoryDescripcion()}}
            </v-card-text>
          </v-col>
        </v-row>
      </v-row>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import CategoryModel from "@/models/CategoryModel/CategoryModel";
import {productsServices} from "@/Services/Productos/ProductsService";
import ProductCard from "@/components/cards/ProductCard.vue";

export default defineComponent({
  name: 'ProductosGeneral',
  components:{
    ProductCard
  },
  setup(_, context) {
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

    const route = context.root.$route;


    const responseCategory : Ref<CategoryModel|null> = ref(null);

    const getProductsByCategory = async () =>{

      const response = await productsServices.getProductsByCategory(route.params.categoria);

      responseCategory.value = new CategoryModel(response)

    }

    onMounted( () => {
      getProductsByCategory();
    })


    return {
      items,
      itemData,
      modal,
      getProductsByCategory,
      responseCategory
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