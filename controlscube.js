document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var [Esconder acción] = document.getElementById('[Esconder acción]')
    var [Esconder acción].001 = document.getElementById('[Esconder acción].001')
    var 3 = document.getElementById('3')
    var box3 = document.getElementById('box3')

    [Esconder acción].addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción]')

    })

    [Esconder acción].001.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].001')

    })

    3.addEventListener('click', () =>{

      model.setAttribute('animation-name', '3')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
