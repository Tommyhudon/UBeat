<template>
  <div>
    <table class="album-tracks">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="track in tracks" v-bind:key="track.trackNumber">
          <td v-on:click="() => playAudio(track)">
            <i class="fas fa-lg fa-play-circle"></i>
            <span>{{ track.trackNumber }}</span>
            <audio
              v-bind:id="track.trackId"
              v-bind:src="track.previewUrl"
            ></audio>
          </td>

          <td v-on:click="() => playAudio(track)">{{ track.trackName }}</td>
          <td v-on:click="() => playAudio(track)">
            {{ getTrackDuration(track) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import { milliToMMSS } from "@/utils/time";
import { PLAY_AUDIO } from "../../store/action-types";

export default {
  name: "AlbumTracks",
  props: ["tracks", "playlists"],

  beforeDestroy() {
    // If any preview is playing, stop it before leaving page.
    if (this.audio) {
      this.audio.player.pause();
    }
  },

  methods: {
    getTrackDuration: function(track) {
      return milliToMMSS(track.trackTimeMillis);
    },

    playAudio: function(track) {
      this.$store.dispatch(PLAY_AUDIO, track);
    }
  }
};
</script>

<style lang="scss" scoped>
.add-album {
  float: right;
  margin-bottom: 16px;
}

.album-tracks {
  max-width: 900px;
  width: 100%;

  th {
    background: rgb(54, 54, 54);
    font-weight: bold;
  }

  td,
  th {
    padding: 5px;
    color: rgba(white, 0.9);
  }

  tr {
    border: 1px solid black;

    &:nth-of-type(odd) {
      background-color: $grey-200;
    }
  }

  tbody > tr:hover {
    background-color: rgba(0, 132, 255, 0.308);
    cursor: pointer;
  }

  tr:hover span {
    display: none;
  }

  tr:hover .fa-play-circle {
    display: inline;
  }

  td > .fa-play-circle {
    display: none;
  }

  tr:hover .fa-plus {
    display: inline;
  }

  td > .fa-plus {
    display: none;
  }

  .add-to-playlist {
    .button {
      text-decoration: none !important;
      height: 22px;
      width: 22px;
      font-size: 12px;
    }
  }
}
</style>
