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

//ACCION BOTON ACTUALIZAR DEL APARTADO DE EDITAR USUARIO
document.getElementById("btnActualizar").onclick = function () {
    Swal.fire(
        'Usuario actualizado!',
        'Se ha actualizado el usuario!',
        'success'
    )
}
