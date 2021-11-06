document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var 1 = document.getElementById('[Esconder acción]')
    var 2 = document.getElementById('[Esconder acción].002')
    var 3 = document.getElementById('[Esconder acción].001')
    var box3 = document.getElementById('box3')

    1.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción]')

    })

    2.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].002')

    })

    3.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].001')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
