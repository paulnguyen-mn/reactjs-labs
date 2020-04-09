import queryString from 'query-string';

// Base request
const request = async (url, options = {}) => {
  try {
    // Headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    // Merge options
    const requestOptions = {
      ...options,
      headers,
    }

    // Send request
    const response = await fetch(url, requestOptions);

    // fetch treats 4xx response as successful
    // so we need to detect and handle error by ourself
    if (response.ok) {
      // Parse reponse to JSON
      return response.json();
    }

    // Handle error
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  } catch (error) {
    // Just throw current error
    throw error
  }
};

// Get single or plural
const get = async (url, params) => {
  const paramsString = params ? `?${queryString.stringify(params)}` : '';
  const requestUrl = `${url}${paramsString}`;

  return request(requestUrl, { method: 'GET' });
};

// Add new
const post = async (url, body) => request(url, { method: 'POST', body: JSON.stringify(body) });

// Update
const patch = async (url, body) => request(url, { method: 'PATCH', body: JSON.stringify(body) });

// Remove
const deleteRequest = async (url) => request(url, { method: 'DELETE' });

const fetchClient = {
  get,
  post,
  patch,
  delete: deleteRequest,
};
export default fetchClient;
