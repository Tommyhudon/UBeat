<template>
  <div id="audio-player">
    <div class="player-header">
      <div class="current-playing">
        <h3>Currently playing:</h3>
        <h3 class="song-name">{{ audio.audioName }}</h3>
      </div>
      <b-button class="close-btn is-dark" @click="closeAudio">X</b-button>
    </div>

    <div id="waveform" />

    <div class="actions">
      <b-button class="is-primary" @click="playPauseAudio"
        >PLAY / PAUSE</b-button
      >
    </div>
  </div>
</template>

<script>
import WaveSurfer from "wavesurfer";
import { STOP_AUDIO } from "../../store/action-types";

export default {
  name: "audio-player",
  props: ["audio"],
  mounted() {
    const wavesurfer = (this.wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#1d81fe",
      progressColor: "#005fd5"
    }));

    wavesurfer.setVolume(0.4);

    wavesurfer.on("ready", function() {
      wavesurfer.play();
    });

    wavesurfer.load(this.audio.audioSrc);
  },

  updated() {
    this.wavesurfer.cancelAjax();
    this.wavesurfer.load(this.audio.audioSrc);
  },

  methods: {
    playPauseAudio: function() {
      this.wavesurfer.playPause();
    },

    closeAudio: function() {
      this.wavesurfer.stop();
      this.$store.dispatch(STOP_AUDIO);
    }
  }
};
</script>

<style lang="scss" scoped>
#audio-player {
  position: fixed;
  right: 50px;
  width: 400px;
  bottom: 50px;
  background-color: #171717;
  border: 1px solid #ffffff3b;
  padding: 8px;
  border-radius: 8px;
}

.player-header {
  display: flex;

  .current-playing {
    color: white;
    opacity: 0.8;
    flex-grow: 1;
    overflow: hidden;

    .song-name {
      opacity: 1;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
