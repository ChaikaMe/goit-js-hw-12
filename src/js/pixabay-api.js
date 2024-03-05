import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';


const KEY = '42676528-15736482ad411b0a23089de5b';
axios.defaults.baseURL = 'https://pixabay.com/';


export async function getImages(query,pageNumber) {
    return await axios.get('api/', {
        params: {
            key: KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: pageNumber,
            per_page: '15',
        }
    })
        .then(response => {
            if (response.data.total === 0) {
                iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                });
            }
            return response.data;
        })
        .catch (error => console.log(error))
}