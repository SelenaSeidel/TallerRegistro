
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
