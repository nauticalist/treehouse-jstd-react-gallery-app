import http from "./HttpService";
import config from "../config.json";

/**
 * get photos by http service for requested tags
 *
 * @param {String } tag search tag
 * @returns {Promise<*>} List of photo objects
 */
export async function getPhotosByTag(tag) {
  const requestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.apiKey}&tags=${tag}&safe_search=1&format=json&nojsoncallback=1&per_page=24`;
  const response = await http.get(requestURL);
    return response &&
      response.data.photos.photo.map((photo) => {
          return {
              id: photo.id,
              title: photo.title,
              url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
          };
      });
}
