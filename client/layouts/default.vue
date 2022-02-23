<template>
  <v-app dark>
    <v-card
      color="grey lighten-4"
      tile
      fixed
    >
      <v-toolbar
        extended

      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/">
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <router-link to="/CreateUser">
            <v-icon>mdi-account-plus</v-icon>
          </router-link>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>


</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
