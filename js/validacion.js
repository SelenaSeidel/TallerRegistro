
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//chequeo contraseña
document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("regBtn");  
    boton.addEventListener("click", function(){         //al hacer click 
        let pass1=document.getElementById("password1");
        let pass2=document.getElementById("password2");
        if (pass1.value==pass2.value){   //compara contraseñas
            showAlertSuccess();
        }else{
            showAlertError();
        }
  })
  });
// contraseña min 6 caracteres
document.addEventListener("DomContentLoaded", function() {
    let boton = document.getelementById("regBtn");
    let password1=document.getElementById("password1");
    boton.addEventListener("click", function(){
        let pass1= document.getElementById("password1")
        if (password1.minlength < password1.value.length){   
            showAlertSuccess();
        }else {
            showAlertError();
        }
    })
});


    