import api from "./apiConfig";

export const getAllReviews = async () => {
  const resp = await api.get("/reviews");
  return resp.data;
};

export const addReview = async (reviewId, postId) => {
  const resp = await api.put(`/reviews/${reviewId}/posts/${postId}`);
  return resp.data;
};
