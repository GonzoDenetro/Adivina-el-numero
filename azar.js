/* 
1.- Obtener datos de usuario
2.- Crear número aleatorio de la maquina
3.- Comparar resultado de usuario y maquina
4.- Mostrar resultados
*/

const button = document.getElementById("boton");
const user_result = document.getElementById("user");
const machine_result = document.getElementById("machine");
var lose_win = document.getElementById("ganapierde");
var numero_usuario = document.getElementById('user-number');

const random = (min, max) => Math.round(Math.random() * (max - min) + min)

button.addEventListener("click", comparar);


function comparar(){
    var maquina_resultado = random(1, 10);
    let usuario = numero_usuario.value;

    if(usuario == maquina_resultado) {
      user_result.innerHTML = usuario;
      machine_result.innerHTML = maquina_resultado;  
      lose_win.innerHTML = `Ganaste`;
      console.log(`Ganaste`);
    }
    else {
        user_result.innerHTML = usuario;
        machine_result.innerHTML = maquina_resultado;
        lose_win.innerHTML = `Perdiste`;
        console.log(`Perdiste ${maquina_resultado}`)
    }
}
