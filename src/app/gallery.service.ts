import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  visibleImages = [];
  getImages(){
    return this.visibleImages = Images.slice(0);
  }
  getImage(id: number) {
    return Images.slice(0).find( image => image.id === id);
  }
}
const Images = [
  { 'id': 1, 'category': 'boats', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img1.jpg'},
  { 'id': 2, 'category': 'boats', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img2.jpg'},
  { 'id': 3, 'category': 'camping', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img3.jpg'},
  { 'id': 4, 'category': 'camping', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img4.jpg'},
  { 'id': 5, 'category': 'library', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img5.jpg'},
  { 'id': 6, 'category': 'library', 'caption': 'view form a boat', 'url': '../assets/img/portfolio/img6.jpg'}
]