import fetchClient from "./fetchClient.js";
import AppConstants from '../appConstants.js';

class PostApi {
  constructor() {
    this.resourceName = 'posts';
  }

  /**
   * Get a list of posts with pagination, sort, filter supported
   * @param {object} params 
   */
  getAll(params = { _page: AppConstants.DEFAULT_PAGE, _limit: AppConstants.DEFAULT_LIMIT }) {
    const url = `${AppConstants.API_URL}/${this.resourceName}`;
    return fetchClient.get(url, params);
  }

  /**
   * Get a post by id
   * @param {string} postId 
   */
  getById(postId) {
    const url = `${AppConstants.API_URL}/${this.resourceName}/${postId}`;
    return fetchClient.get(url);
  }

  /**
   * Add a new post
   * @param {object} post 
   */
  addNewPost(post) {
    const url = `${AppConstants.API_URL}/${this.resourceName}`;
    return fetchClient.post(url, post);
  }

  /**
   * Update a post
   * @param {object} post 
   */
  updatePost(post) {
    // Require id to process further
    if (!post.id) throw new Error('Missing id in post object');

    const url = `${AppConstants.API_URL}/${this.resourceName}/${post.id}`;
    return fetchClient.patch(url, post);
  }

  /**
   * Remove a post by id
   * @param {object} postId 
   */
  removePost(postId) {
    const url = `${AppConstants.API_URL}/${this.resourceName}/${postId}`;
    return fetchClient.delete(url);
  }
}

const postApi = new PostApi();
export default postApi;
