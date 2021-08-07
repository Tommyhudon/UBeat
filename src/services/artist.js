import api from "./api";

const getAlbums = artistId => {
  return api.get(`/artists/${artistId}/albums`);
};

const getArtist = artistId => {
  return api.get(`/artists/${artistId}`);
};

export default {
  getAlbums,
  getArtist
};
