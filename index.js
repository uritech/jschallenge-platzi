const valorCine = 49;

function compararCostos() {
    var peliculas = document.getElementById('peliculas');
    var numeroPeliculas = parseInt(peliculas.value);
    var costoCine = numeroPeliculas * valorCine;
    var costoStreaming = calcularStreamings();
    if (costoStreaming > costoCine){
        document.getElementById('resultado').innerHTML = 'Te conviene el Cine';
    } else {
        document.getElementById('resultado').innerHTML = 'Tu mejor opción es el streaming';
    }
}

function calcularStreamings(){
    var costoTotal = 0;
    const streamings = ['netflix', 'prime_video', 'hbo_max', 'disney'];
    for (i = 0; i < streamings.length; i++){
        if (document.getElementById(streamings[i]).checked){
            costoTotal += parseInt(document.getElementById(streamings[i]).value);
        }
    }
    return costoTotal;
}

