import { PLAY_AUDIO, STOP_AUDIO } from "../action-types";
import {
  SET_CURRENTLY_PLAYING,
  CLEAR_CURRENTLY_PLAYING,
  RESET_STATE
} from "../mutation-types";

const initialState = {
  current: null
};

export let state = { ...initialState };

export const actions = {
  [PLAY_AUDIO](context, track) {
    context.commit(SET_CURRENTLY_PLAYING, track);
  },

  [STOP_AUDIO](context) {
    context.commit(CLEAR_CURRENTLY_PLAYING);
  }
};

export const mutations = {
  [SET_CURRENTLY_PLAYING](state, track) {
    state.current = {
      audioId: track.trackId,
      audioName: track.trackName,
      audioSrc: track.previewUrl
    };
  },

  [CLEAR_CURRENTLY_PLAYING](state) {
    state.current = null;
  },

  [RESET_STATE]() {
    state = { ...initialState };
  }
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};
