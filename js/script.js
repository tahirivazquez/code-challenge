function enviarForm() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNac = document.getElementById('fechaNac').value;

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
    console.error('Ha habido un error:', error);
  });
};

function authenticate() {
  enviarForm();
};

