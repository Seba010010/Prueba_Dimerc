document.addEventListener('DOMContentLoaded', function() {

    const usuarios = document.getElementById("listaUsuarios");


    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(result => {
        console.log(result)
        result.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = usuario.name;
            console.log(li)
            usuarios.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });




    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        const primerNombre = document.getElementById("primerNombre").value;
        const segundoNombre = document.getElementById("segundoNombre").value;
        const primerApellido = document.getElementById("primerApellido").value;
        const segundoApellido = document.getElementById("segundoApellido").value;

        const nuevoUsuario = {
            primerNombre: primerNombre,
            segundoNombre: segundoNombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido
        };

        console.log("Nuevo usuario:", nuevoUsuario);

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(nuevoUsuario),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log("Usuario creado:", result);

            const li = document.createElement("li");
            li.textContent = result.primerNombre + " " + result.primerApellido ; 
            usuarios.appendChild(li);

            const alertDiv = document.createElement("div");
            alertDiv.classList.add("alert", "alert-success");
            alertDiv.textContent = "Usuario creado exitosamente.";
            document.body.appendChild(alertDiv);
            setTimeout(() => {
                alertDiv.remove();
            }, 3000);
        })
        .catch(error => {
        console.error("Error:", error);
        });
    
    });
});
