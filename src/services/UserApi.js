import API from './API';

class ApiUser extends API {
  validation() {
    return this._request('/activation/', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    });
  }
}

const userApi = new ApiUser({
  baseUrl: 'https://localhost:8000/api/v1/users',
});
export default userApi;
