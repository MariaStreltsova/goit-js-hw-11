import './sass/main.scss';
// import axios from "axios";
import PhotosApiService from './js/photo-service';
import hitsTpl from './templates/hits.hbs'
console.log(hitsTpl)
const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    onLoadMoreBtn: document.querySelector('.load-more'),
}
const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.onLoadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
    e.preventDefault();
    clearHitsGallery();
    photosApiService.query = e.currentTarget.elements.searchQuery.value;
    photosApiService.resetPage();
    photosApiService.fetchPhotos().then(appendHitsMarkup);
}
function onLoadMore() {
    photosApiService.fetchPhotos().then(appendHitsMarkup);
}

function appendHitsMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', hitsTpl(hits) )
}
function clearHitsGallery() {
    refs.gallery.innerHTML = '';
}