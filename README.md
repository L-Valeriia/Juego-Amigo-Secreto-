<h1> Amigo secreto </h1>
- introduction 
Este proyecto es un juego de amigo secreto que utiliza funciones, alerts, prompts y manipulación del DOM. Su código es sencillo y fácil de entender, ideal para personas que están comenzando en el mundo de la programación con JavaScript, Visual Studio Code. Git y Github.

- Descripción
 Es un proyecto donde puedes:
Agregar nombres a una lista.
Evitar nombres vacíos o repetidos.
Ver la lista actualizada en pantalla.
Sortear un nombre aleatoriamente como “Amigo Secreto”.
Reiniciar la lista automáticamente después del sorteo para un nuevo juego.

- funciones utlizadas:

-agregarAmigo():
Obtiene el nombre ingresado.
Verifica que no esté vacío ni repetido.
Si es válido, lo agrega a la lista.
Limpia el campo de texto.
Actualiza la lista visible en pantalla.
También limpia cualquier mensaje previo de resultado.

-actualizarLista():
Limpia la lista visible.
Agrega un <li> por cada amigo en listaDeAmigos.
Limpia el mensaje del resultado anterior.

-sortearAmigo():
Verifica que haya al menos 2 nombres.
Selecciona uno al azar.
Muestra el nombre sorteado como “El amigo secreto es: ...”.
Vacía la lista y limpia la lista visible para reiniciar el juego.

- Cómo usar
1-Ingresa un nombre y haz clic en "Agregar".
2-Repite el paso anterior para añadir al menos dos nombres.
3-Haz clic en "Sortear" para elegir el amigo secreto.
4-El resultado aparecerá en pantalla.
5-La lista se reiniciará para un nuevo juego.