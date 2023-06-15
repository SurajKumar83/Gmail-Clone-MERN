import axios from "axios";

/*
Method1 for axios use
  using axios.get(url),axios.post(url,data),axios.delete(url),axios.put(url,data);

Method2  concept of interceptors
  
  axios.interceptors.request.use(function(config)){

  }
  axios.interceptors.response.use(function(response))

Method3 using axios as a function
 
here we can pass the object in argument
  axios({

  })

*/
const API_URL = "";

const API_GMAIL = async (urlObject, payload,type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    // use data as payload
    data: payload,
  });
};
export default API_GMAIL;
