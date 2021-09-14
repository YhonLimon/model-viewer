document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('robot')
    var Idle = document.getElementById('Idle')
    var Dance = document.getElementById('Dance')
    var Death = document.getElementById('Death')
    var box3 = document.getElementById('box3')

    Idle.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Idle')

    })

    Dance.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Dance')

    })

    Death.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Death')

    })

    box3.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Box3')

    })
        
});
        


