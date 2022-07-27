<template>
    <v-footer
        padless
    >
      <v-row  class="px-15" style="background:#fadddd; padding: 20px">
        <v-col
            cols="7"
        >
          <v-row
              class="justify-start"
          >
            <h1>¡Que no se te pase ni una!</h1>
            <p>Deja tu correo y entérate de todo lo que pasa en Miniso antes que nadie. Tips, noticias, tendencias, promociones y más.</p>

            <p>Al momento de enviar mi correo acepto los Términos y condiciones y el Aviso de privacidad</p>

          </v-row>
        </v-col>

        <v-col class="d-flex" cols="5">
          <v-row
              class="align-center justify-center"
          >
            <v-text-field
                style="max-width:60%"
                dense
                solo
                label="hola@correo.com"
            >
            </v-text-field>
            <v-btn
                small
                color="#FFC9D3"
                height="40"
            >
              ENVIAR
            </v-btn>


          </v-row>
        </v-col>
      </v-row>
      <v-card
          color="black"
          width="100%"
          class="text-center justify-center"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="py-2 grey--text text-center">
          Miniso Perú. Todos los derechos reservados © 2021 | Términos y Condiciones | Aviso de Privacidad
        </v-card-text>

        <v-card-text class="py-2 grey--text text-center">
          Miniso.pe utiliza cookies para que tengas la mejor experiencia de navegación. Si sigues navegando entendemos que aceptas nuestra política de cookie.
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
data: () =>({
  icons: [
    'mdi-vuetify',
    'mdi-security',
    'mdi-credit-card',
    'mdi-instagram',
  ],
}),

}
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