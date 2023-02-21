//ACCIONA UN MODAL DE CONFIRMACION
document.getElementById("btnSalir").onclick = function () {
    Swal.fire({
        title: '¿Está seguro de salir?',
        text: "Usted está a punto de cerrar sesion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Sesion finalizada!',
                'Se ha cerrado la sesión!',
                'success'
            )
        }
    })
}

//ACCION BOTON ELIMINAR DEL APARTADO DE LISTAR USUARIO
document.getElementById("btnEliminar").onclick = function () {
    Swal.fire({
        title: '¿Está seguro de eliminar?',
        text: "Usted está a punto de eliminar este usuario!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Usuario eliminado!',
                'Se ha eliminado el usuario!',
                'success'
            )
        }
    })
}

//ACCION BOTON REGISTRAR DEL APARTADO DE CREAR USUARIO
function registrar() {
    Swal.fire(
        'Usuario registrado!',
        'Se ha registrado el usuario!',
        'success'
    )
}

//ACCION BOTON ACTUALIZAR DEL APARTADO DE LISTAR USUARIO
function actualizar(){
    Swal.fire(
        'Usuario actualizado!',
        'Se ha actualizado el usuario!',
        'success'
    )
}

//ACCION DEL MODAL
var modal = document.getElementById('modalAct');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}