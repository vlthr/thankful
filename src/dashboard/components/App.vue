<template lang="pug">
v-app
  v-navigation-drawer(app v-model="drawer" :mini-variant="mini")
    v-list.pa-1
      // https://vuetifyjs.com/en/components/navigation-drawers
      v-list-tile(v-if="mini" @click.stop="mini = !mini")
        v-list-tile-action
          v-icon chevron_right

      v-list-tile(tag="div" to="/")
        v-list-tile-avatar
          v-icon home
        v-list-tile-content
          | Dashboard
        v-list-tile-action(v-if="!mini")
          v-btn(icon @click.stop="mini = !mini")
            v-icon chevron_left

      v-list-tile(avatar tag="div" to="/activity")
        v-list-tile-avatar
          v-icon history
        v-list-tile-content
          v-list-tile-title Activity

      v-list-tile(avatar tag="div" to="/donations")
        v-list-tile-avatar
          v-icon favorite
        v-list-tile-content
          v-list-tile-title Donations

  v-toolbar(app dark color="primary")
    v-btn(icon @click="drawer = !drawer")
      v-icon menu
    v-toolbar-title
      h1 #[router-link(to="/" style="color: #FFF; text-decoration: none") Thankful]
    v-toolbar-items
      div.pl-4.pt-3
        h3 We're in alpha
        div
          | We're still figuring things out.
          | Please report any issues #[a(href='https://github.com/SuperuserLabs/thankful/issues' style="color: #fff") here].
    v-spacer
    v-toolbar-items

      div.pt-2
        net-info
  v-content
    v-container(fluid)
      router-view
</template>
<script>
import NetInfo from './NetInfo.vue';

export default {
  components: {
    'net-info': NetInfo,
  },
  data: function() {
    return {
      drawer: false,
      mini: false,
    };
  },
};
</script>
