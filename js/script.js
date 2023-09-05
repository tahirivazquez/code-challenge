function enviarForm() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const fechaNac = document.getElementById('fechaNac');

    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNac
    };

  const datosJSON = JSON.stringify(datos);

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: datosJSON
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error);
  });
}

function authenticate() {
  enviarDatos();
}
