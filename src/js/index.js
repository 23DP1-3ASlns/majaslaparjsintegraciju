window.onload = fadeIn; 
          
function fadeIn() { 
    var fade = document.getElementById("body"); 
    var opacity = 0; 
    var intervalID = setInterval(function() { 
  
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            fade.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 40); 
}

let popupwindow = document.getElementById('popupwindow');

function openPopupwindow(){
    popupwindow.classList.add('open-popupwindow');
}

function closePopupwindow(){
    popupwindow.classList.remove('open-popupwindow');
}