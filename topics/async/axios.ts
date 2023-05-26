import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/name/deutschland',
  };

// axios.request(options)
// .then(function (response) {
// 	console.log(response.data);
// })
// .catch(function (error) {
// 	console.error(error);
// });

export const getData = async (options: Object) => {
	try { const response = await axios.request(options);
    console.log(response.data) 
    return response
  }
  catch (error){
    console.error(error)
  }
};

const data: Object = getData(options)
expect(data.constructor.length)
