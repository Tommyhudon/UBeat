import Vue from "vue";

import {} from "../action-types";
import { RESET_STATE, SET_ALBUMS, SET_ARTIST } from "../mutation-types";
import { GET_ALBUMS, GET_ARTIST } from "../action-types";
import artistService from "@/services/artist";

const initialState = {
  artists: [],
  collections: []
};

export const state = { ...initialState };

export const actions = {
  async [GET_ALBUMS](context, artistId) {
    context.commit(SET_ALBUMS, []);
    const { data } = await artistService.getAlbums(artistId);
    const filteredData = data.results.filter((v, i, a) => a.findIndex(t => (t.collectionName === v.collectionName)) === i);
    context.commit(SET_ALBUMS, filteredData);
    return data;
  },
  async [GET_ARTIST](context, artistId) {
    context.commit(SET_ARTIST, null);
    const { data } = await artistService.getArtist(artistId);
    context.commit(SET_ARTIST, data.results[0]);
    return data;
  }
};

export const mutations = {
  [SET_ALBUMS](state, collections) {
    state.collections = collections;
  },
  [SET_ARTIST](state, artist) {
    state.artists = artist;
  },
  [RESET_STATE](state) {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  artists(state) {
    return state.artists;
  },
  collections(state) {
    return state.collections;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
