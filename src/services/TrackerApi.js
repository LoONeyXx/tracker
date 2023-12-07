import API from './API';

class TrackerApi extends API {
  getSkills() {
    return this._request('/', {
      method: 'GET',
      headers: this._headers,
    });
  }
  editProfessionAndLevel(userID) {
    return this._request(`/${userID}`, {
      method: 'PATCH',
      headers: this._headers,
    });
  }
  getRecommendations(userID) {
    return this._request(`/${userID}/recommendations`, {
      method: 'GET',
      headers: this._headers,
    });
  }
}
const trackerApi = new ApiTracker({
  baseUrl: 'https://localhost:8000/api/v1/tracker',
});
export default trackerApi;
