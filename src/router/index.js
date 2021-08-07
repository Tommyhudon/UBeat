import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/home/Home";
import Album from "@/views/album/Album";
import Artist from "@/views/artist/Artist";


Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/artist/:id",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/album/:id",
      name: "Album",
      component: Album,
    },
    {
      path: "*",
      redirect: '/',
    }
  ]
});

export default router;
