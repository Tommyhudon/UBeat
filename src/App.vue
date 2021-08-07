<template>
  <div id="app">
    <div>
      <navigation />

      <div class="content-container">
        <router-view></router-view>
      </div>

      <audio-player v-if="audio" v-bind:audio="audio" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navigation from "@/components/layout/Navigation";
import AudioPlayer from "@/components/audio/AudioPlayer";

export default {
  name: "app",
  components: {
    navigation: Navigation,
    "audio-player": AudioPlayer
  },
  computed: {
    ...mapState({
      audio: state => state.audio.current
    })
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}

.content-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: $grey-200;
}

#app-loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: $grey-100;
  color: white;
  font-size: 36px;
}
</style>
