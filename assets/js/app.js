document.addEventListener('DOMContentLoaded', cargarPosteos);
//Metodo con AJAX
/*
function cargarPosteos(e) {
    e.preventDefault();
    // Crear el objeto
    const xhr = new XMLHttpRequest();
    //Creamos Conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/', true);
    //Cargar y leer datos
    xhr.onload = function () {
        if (this.status === 200) {
            const respuestas = JSON.parse(this.responseText);
            let posteos = '';
            respuestas.forEach(post => {
                posteos += 
                `
                    <div class='card tarjeta' style="width: 20vw; height: 20vw;">
                        <div class='card-body'>
                            <h5 class='card-title' style="font-weight:bold;">${post.title}</h5>
                            <h6 class='card-subtitle' style="font-weight:bold;">${post.id}</h6>
                            <p class='card-text'>${post.body}</p>
                        </div>
                    </div>
                
                `
                document.getElementById('listadoDePosts').innerHTML = posteos;
            });
        }
    }
    //Enviamos la conexion
    xhr.send();
}
*/
function cargarPosteos(e) {
    e.preventDefault();
    var url = 'https://jsonplaceholder.typicode.com/posts/';
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function(data) {
            let posteos = '';
            data.forEach(post => {
                posteos += `
                <div class='card tarjeta' style="width: 20vw; height: 20vw;">
                        <div class='card-body'>
                            <h5 class='card-title' style="font-weight:bold;">${post.title}</h5>
                            <h6 class='card-subtitle' style="font-weight:bold;">${post.id}</h6>
                            <p class='card-text'>${post.body}</p>
                        </div>
                    </div>
                `;
                document.getElementById('listadoDePosts').innerHTML = posteos;
            });
        })
        .catch(function (error) {
            console.log('te equivocaste' , error);
        })
        
}