import './style.scss'

var hamIcon = document.querySelector('.menu__icon');


hamIcon.addEventListener('click', function() {

    var hamOptions = document.querySelector('.menu__options');
    var hamOptionsDisplay = hamOptions.style.display;
    var menu = document.querySelector('.menu')
    
    if (hamOptionsDisplay !== 'flex') {

        hamOptions.style.display = 'flex';
        hamOptions.style.height = '100vh';
        menu.style.backgroundColor = 'rgba(244,195,194, 0.8)';
      }
    
      else {
    
        hamOptions.style.display = 'none';
        hamOptions.style.height = '';
      }
}) 