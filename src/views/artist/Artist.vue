<template>
  <div>
    <div v-if="artist">
      <header class="artist-header">
        <div class="artist-header-content">
          <h1 class="artist-name" dir="auto">{{ artist.artistName }}</h1>
          <h3 class="artist-genre">{{ artist.primaryGenreName }}</h3>
          <a
            v-bind:href="artist.artistLinkUrl"
            class="artist-hyperlink"
            target="_blank"
          >
            <img
              src="https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg?hex=000000"
              alt="Itunes Logo"
            />
          </a>
        </div>
      </header>

      <!-- Album list -->
      <div class="artist-album">
        <h1>Albums</h1>

        <div class="albums">
          <div
            v-for="collection in collections"
            v-bind:key="collection.collectionId"
          >
            <router-link
              v-bind:to="`/album/${collection.collectionId}`"
              class="logo-item"
            >
              <figure>
                <p>{{ collection.collectionName }}</p>
                <img
                  class="album-title"
                  alt="Can't display image"
                  v-bind:src="collection.artworkUrl100"
                />
              </figure>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading artist...</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GET_ARTIST, GET_ALBUMS } from "../../store/action-types";

export default {
  name: "artist",
  mounted() {
    this.loadArtist();
  },

  watch: {
    "$route.params.id": function() {
      this.loadArtist();
    }
  },

  methods: {
    loadArtist: function() {
      const artistId = this.$route.params.id;
      this.$store.dispatch(GET_ARTIST, artistId);
      this.$store.dispatch(GET_ALBUMS, artistId);
    }
  },

  computed: {
    ...mapState({
      artist: state => state.artists.artists,
      collections: state => state.artists.collections
    })
  }
};
</script>

<style lang="scss" scoped>
.artist-header {
  background: rgba(black, 0.7);

  .artist-header-content {
    background: rgba(black, 0.7);
    width: 100%;
    height: 100%;
  }

  .artist-name {
    padding-top: 100px;
    font-size: 72px;
    line-height: 82px;
    letter-spacing: -0.005em;
    font-weight: var(--glue-font-weight-black);
    color: #fff;
    text-transform: none;
    text-align: center;
  }

  .artist-genre {
    font-size: 18px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #fff;
    opacity: 0.8;
    padding-top: 20px;
    padding-bottom: 20px;
    display: block;
    text-align: center;
    margin-bottom: 1em;
  }

  h1 {
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .artist-hyperlink {
    display: block;
    overflow: hidden;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;

    img {
      filter: brightness(0) invert(1);
    }
  }
}

.album-title {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
}

.artist-album {
  background: $grey-100;
  text-align: center;
  padding-bottom: 20px;
  color: white;
  padding: 24px 0 44px 0;

  .albums {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    grid-gap: 2rem;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 24px;
  }
}
</style>
