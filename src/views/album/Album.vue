<template>
  <div class="album-page">
    <div v-if="currentAlbum" class="album-container">
      <!-- Album info -->
      <div class="artist-album-header">
        <album-description
          v-bind:album="currentAlbum.description"
          v-bind:playlists="playlists"
        />
      </div>

      <!-- Song list -->
      <div class="tracks-container">
        <album-tracks
          v-bind:tracks="currentAlbum.tracks"
          v-bind:playlists="playlists"
        />
      </div>
    </div>

    <div v-else>Loading album...</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AlbumDescription from "./AlbumDescription";
import AlbumTracks from "./AlbumTracks";
import { GET_ALBUM } from "@/store/action-types";
import { GET_PLAYLISTS } from "../../store/action-types";

export default {
  name: "album",
  components: {
    "album-tracks": AlbumTracks,
    "album-description": AlbumDescription
  },

  mounted() {
    this.loadAlbum();
  },

  watch: {
    "$route.params.id": function() {
      this.loadAlbum();
    }
  },

  methods: {
    loadAlbum: function() {
      const albumId = this.$route.params.id;
      this.$store.dispatch(GET_ALBUM, albumId);
      this.$store.dispatch(GET_PLAYLISTS);
    }
  },
  computed: {
    ...mapState({
      currentAlbum: state => state.albums.currentAlbum
    })
  }
};
</script>

<style lang="scss">
.album-page {
  background-color: $grey-200;
  flex-grow: 1;

  .album-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 44px 0;
    align-items: flex-end;
  }

  .text-label {
    opacity: 0.5;
    margin-right: 8px;
  }

  .artist-album-header {
    display: flex;
    padding: 0 24px;
    padding-top: 100px;
    flex-direction: column;
    color: white;
    font-size: 18px;
    align-items: center;
    min-width: 300px;

    h1 {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .listen-apple {
      margin-top: 24px;
    }
  }

  .album-image {
    width: 300px;
  }

  .img-container {
    position: relative;
    margin-top: 24px;
  }

  .tracks-container {
    min-width: 800px;
    padding: 100px 24px 0;
  }
}

@media screen and (max-width: 950px) {
  .album-page {
    .artist-album-header {
      padding-top: 0;
    }

    .album-container {
      flex-direction: column;

      .album-description {
        display: flex;
        flex-direction: row;
        align-items: center;

        .description {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
