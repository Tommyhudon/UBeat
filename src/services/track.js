import api from "./api";

const getTracks = id => {
  return api.get(`/albums/${id}/tracks`);
};

const getAlbumDescription = id => {
  return api.get(`/albums/${id}`);
};

export default { getTracks, getAlbumDescription };
