document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('cube01')
    var Running = document.getElementById('0')
    var Dance = document.getElementById('1')
    var Death = document.getElementById('2')
    var box3 = document.getElementById('box3')

    Running.addEventListener('click', () =>{

      model.setAttribute('animation-name', '0')

    })

    Dance.addEventListener('click', () =>{

      model.setAttribute('animation-name', '1')

    })

    Death.addEventListener('click', () =>{

      model.setAttribute('animation-name', '2')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
    
