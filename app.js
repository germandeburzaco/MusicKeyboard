window.addEventListener('keydown', (e)=>{
//    console.log(e)
    var teclaPresionada=e.key
    teclaPresionada=teclaPresionada.toLowerCase()
    console.log(teclaPresionada)

    var teclaSeleccionada = document.getElementsByClassName(`tecla${teclaPresionada}`)
    console.log(teclaSeleccionada)

    song = document.getElementById(teclaPresionada)
   // console.log(song)
    if (!song) return
    song.currentTime = 0;
    song.play();

    teclaSeleccionada[0].classList.add("presionada");
    setTimeout(function() {
        teclaSeleccionada[0].classList.remove("presionada");
      }, 100);
})


document.addEventListener('click', function (event) {
    var teclaPresionada = event.target.innerHTML 
    teclaPresionada=teclaPresionada.toLowerCase()
   // console.log(teclaPresionada)

    var teclaSeleccionada = document.getElementsByClassName(`tecla${teclaPresionada}`)
    //console.log(teclaSeleccionada)

    song = document.getElementById(teclaPresionada)
   // console.log(song)
    if (!song) return
    song.currentTime = 0;
    song.play();

    teclaSeleccionada[0].classList.add("presionada");
   
    setTimeout(function() {
        teclaSeleccionada[0].classList.remove("presionada");       
      }, 100);


}, false);
