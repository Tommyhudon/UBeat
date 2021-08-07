<template>
  <div class="album-description">
    <div class="description">
      <h1>{{album.collectionName}}</h1>
      <p>
        <span class="text-label">Artist:</span>
        <router-link v-bind:to="`/artist/${album.artistId}`">
          <a>{{album.artistName}}</a>
        </router-link>
      </p>

      <p>
        <span class="text-label">Released:</span>
        {{formatReleaseDate(album.releaseDate)}}
      </p>

      <p>
        <span class="text-label">Genre:</span>
        {{album.primaryGenreName}}
      </p>

      <p>
        <span class="text-label">Tracks:</span>
        {{album.trackCount}}
      </p>

      <a
        class="listen-apple"
        target="_blank"
        href="https://geo.music.apple.com/ca/album/hollywoods-bleeding/1477880265?mt=1&app=music"
        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-09-06&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
      ></a>
    </div>

    <div class="img-container">
      <img class="album-image" v-bind:src="album.artworkUrl300" alt="Can't display image" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AlbumDescription",
  props: ["album"],
  methods: {
    formatReleaseDate: function(date) {
      return new Date(date).toDateString().slice(4);
    }
  }
};
</script>