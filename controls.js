document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('boxer')
    var tpose = document.getElementById('tpose')
    var box1 = document.getElementById('box1')
    var box2 = document.getElementById('box2')
    var box3 = document.getElementById('box3')

    tpose.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'TPose')

    })

    box1.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box1')

    })

    box2.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box2')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
        


