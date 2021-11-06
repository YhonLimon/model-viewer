document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var [Esconder acción] = document.getElementById('[Esconder acción]')
    var [Esconder acción].002 = document.getElementById('[Esconder acción].002')
    var [Esconder acción].001 = document.getElementById('[Esconder acción].001')
    var box3 = document.getElementById('box3')

    [Esconder acción].addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción]')

    })

    [Esconder acción].002.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].002')

    })

    [Esconder acción].001.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].001')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
