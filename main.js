import './style.scss'

var hamIcon = document.querySelector('.menu__icon');


hamIcon.addEventListener('click', function() {

    var hamOptions = document.querySelector('.menu__options');
    var hamOptionsDisplay = hamOptions.style.display;
    var menu = document.querySelector('.menu')
    
    if (hamOptionsDisplay !== 'flex') {

        hamOptions.style.display = 'flex';
        hamOptions.style.height = '100vh';
        menu.style.backgroundColor = 'rgba(244,195,194, 1)';
        document.body.style.overflow = "hidden";
      }
    
      else {
    
        hamOptions.style.display = 'none';
        hamOptions.style.height = '';
        menu.style.backgroundColor = 'rgba(0,0,0, 0.0)';
        document.body.style.overflow = "visible";
      }
}) 