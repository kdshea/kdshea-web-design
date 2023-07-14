const DEV_API_URL = 'http://localhost:3001'
const PROD_API_URL = process.env.REACT_APP_API_URL
const API_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL


export default API_URL