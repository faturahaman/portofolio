const photoAlbum = document.querySelector('.photo-album');

photoAlbum.addEventListener('mouseenter', () => {
  photoAlbum.style.animationPlayState = 'paused';
});

photoAlbum.addEventListener('mouseleave', () => {
  photoAlbum.style.animationPlayState = 'running';
});