window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://luonghuynh227.github.io/vong-quay-an-nhau/sw-vongquay.js');
  }
}