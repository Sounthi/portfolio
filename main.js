import './style.scss'

var hamIcon = document.querySelector('.menu__icon');


hamIcon.addEventListener('click', function() {

    var hamOptions = document.querySelector('.menu__options');
    var hamOptionsDisplay = hamOptions.style.display;
    var menu = document.querySelector('.menu');
    var hamIcon = document.querySelector('.ham-icon');

    
    if (hamOptionsDisplay !== 'flex') {

        hamOptions.style.display = 'flex';
        hamOptions.style.height = '100vh';

        
        menu.style.backgroundColor = '#474448';
        menu.style.color = 'white';
        document.body.style.overflowY = 'hidden';
        hamIcon.style.background = '#F4C3C2';
        
      }
    
      else {
    
        hamOptions.style.display = 'none';
        hamOptions.style.height = '';
        menu.style.backgroundColor = 'rgba(0,0,0, 0.0)';
        document.body.style.overflowY = 'visible';
        hamIcon.style.background = '#474448';
      }
}) 

const videos = document.querySelectorAll('iframe');
const close = document.querySelectorAll('.close');

close.forEach(items=> {
  items.addEventListener('click', () => {
      videos.forEach(i => {
          let source = i.src;
          i.src = '';
          i.src = source;
      })
  })
})