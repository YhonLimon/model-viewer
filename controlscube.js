document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var uno = document.getElementById('uno')
    var dos = document.getElementById('dos')
    var tres = document.getElementById('tres')
    var box3 = document.getElementById('box3')

    uno.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción]')

    })

    dos.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].002')

    })

    tres.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].001')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
