import axios from "axios";
export default class PhotosApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchPhotos() {
        console.log(this);
       return axios(`https://pixabay.com/api/?key=27511871-af3c65d931511896211490940&q=${this.searchQuery}&image_type=photo&orientation=horisontal&safesearch=true&per_page=40&page=${this.page}`)
            .then(response =>  
            {
                 console.log(response.data.hits) 
                this.page += 1;
                console.log(response.data)
                return response.data.hits;
                // const { hits, totalHits } = response.data;
                // return {hits, totalHits};
            }
            );
        
    }
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
         this.searchQuery = newQuery;
    }

    }
