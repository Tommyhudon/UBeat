<template>
  <b-navbar type="is-dark" class="primary-navigation">
    <template slot="brand">
      <router-link to="/" class="logo-item">
        <img src="../../assets/ubeat.png" alt="UBeat" />
      </router-link>
    </template>
  </b-navbar>
</template>

<script>

export default {
  name: "navigation",
};
</script>

<style lang="scss">
.logo-item {
  img {
    max-height: unset;
    height: 60px;
    margin: 0 24px;
  }
}

.router-link-active:not(.logo-item) {
  border-bottom: 2px solid white;
}
</style>
