// Імпорт  відеоплеєра
import Vimeo from '@vimeo/player';

// Імпорт  throttle
import throttle from 'lodash.throttle';

// Створюємо ключ для зберігання даних у сховищі
const STORAGE_KEY = 'videoplayer-current-time';

// Ініціалізуємо plugin Vimeo
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, currentTime);
}


function insertTime() {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value) {
    const timeValueJSON = JSON.parse(value);
    const { seconds } = timeValueJSON;
    return seconds;
  }
}


player
  .setCurrentTime(insertTime())
  .then(function (seconds) {
  
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
    
        break;

      default:
     
        break;
    }
  });
