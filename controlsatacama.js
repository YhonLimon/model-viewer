document.addEventListener("DOMContentLoaded", function(event) { 
      
    var model = document.getElementById('miniatacama')
    var uno = document.getElementById('uno')
    var dos = document.getElementById('dos')
    var tres = document.getElementById('tres')
    var cuatro = document.getElementById('cuatro')

    uno.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Robot_Idle_RobotArmature.001')

    })

    dos.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Robot_WalkJump')

    })

    tres.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Robot_Running')

    })

    cuatro.addEventListener('click', () =>{

      model.setAttribute('animation-name', 'Robot_Dance_RobotArmature.001')

    })
        
});

