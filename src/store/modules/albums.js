import Vue from "vue";

import { GET_ALBUM } from "../action-types";
import { RESET_STATE, SET_CURRENT_ALBUM } from "../mutation-types";
import TrackService from "@/services/track";

const initialState = {
  currentAlbum: null
};

export const state = { ...initialState };

export const actions = {
  async [GET_ALBUM](context, albumId) {
    context.commit(SET_CURRENT_ALBUM, null);

    let {
      data: { results: tracks }
    } = await TrackService.getTracks(albumId);
    const {
      data: {
        results: [description]
      }
    } = await TrackService.getAlbumDescription(albumId);

    // Get 300x300 image -- same url, but with different dimensions.
    description.artworkUrl300 = description.artworkUrl100.replace(
      "/100x100bb.jpg",
      "/300x300bb.jpg"
    );

    context.commit(SET_CURRENT_ALBUM, { tracks, description });

    return { description, tracks };
  }
};

export const mutations = {
  [SET_CURRENT_ALBUM](state, album) {
    state.currentAlbum = album;
  },

  [RESET_STATE](state) {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  tracks(state) {
    return state.tracks;
  },
  description(state) {
    return state.description;
  },
  currentlyPlaying(state) {
    return state.currentlyPlaying;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
