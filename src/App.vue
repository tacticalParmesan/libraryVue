<template>
  <TopNavbar />
  <SearchPanel />
  <StatsPanel />
  <LibraryDisplay />
</template>

<script>
import SearchPanel from "./components/SearchPanel.vue";
import TopNavbar from "./components/TopNavbar.vue";
import StatsPanel from "./components/StatsPanel.vue";
import LibraryDisplay from "./components/LibraryDisplay.vue";

export default {
  name: "App",
  components: { TopNavbar, SearchPanel, StatsPanel, LibraryDisplay },
};
</script>

<style>
/* CSS Reset and Variables */
:root {
  font-size: 16px;
  font-family: "Helvetica", sans-serif;
  --platinum: hsla(24, 9%, 89%, 1);
  --silver: hsla(0, 0%, 76%, 1);
  --cocoa-brown: hsla(22, 66%, 50%, 1);
}

* {
  font-size: inherit;
  font-family: inherit;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  overflow-y: hidden;
}
</style>
