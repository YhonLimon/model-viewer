document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var [Esconder acción].001_Cube.001 = document.getElementById('[Esconder acción].001_Cube.001')
    var [Esconder acción].002_Cube.001 = document.getElementById('[Esconder acción].002_Cube.001')
    var [Esconder acción]_Cube.001 = document.getElementById('[Esconder acción]_Cube.001')
    var box3 = document.getElementById('box3')

    Running.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].001_Cube.001')

    })

    Dance.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción].002_Cube.001')

    })

    Death.addEventListener('click', () =>{

      model.setAttribute('animation-name', '[Esconder acción]_Cube.001')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
