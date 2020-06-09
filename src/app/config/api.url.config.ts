const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS = {
  PRODUCTS_URL : BASE + ':' + PORT + PATH + '/product',
  USER_URL : BASE + ':' + PORT + PATH + '/user',
  USER_CRUD_URL : BASE + ':' + PORT + '/crud_user'

}
