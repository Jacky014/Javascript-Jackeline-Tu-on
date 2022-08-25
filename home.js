function placementTest (){


    let nombre= prompt ("Ingresa tu nombre");
    alert (`Bienvenida/o, ${nombre}`);
    
    alert ("Con solo unas simples preguntas podrás saber si necesitas trabajar en tus celos o si tu pareja no se tiene que preocupar por ofenderte");

    function validacionRespuesta(){
        while(respuesta){
        alert("¡Ya vamos con una respuesta positiva! ");
        break;
    }
    while(respuesta == false) {
        alert("Oooops! tu respuesta me da miedo");
        break;
    }}

let respuesta;

let pregunta1 = parseInt(prompt(" Estás en casa, viendo tranquilamente la tele, y tu pareja empieza a hablar con alguien por el whatsapp. ¿Qué piensas?\n\n 1.- Me enfado con él. Estamos viendo la tele y ya tendrá tiempo para contestar... Me da igual que sea importante\n\n 2.- Cojo el móvil para consultar mi whatsapp también\n \n3.- No me preocupa. Es libre de usar su movil, ¿no?\n\n Ingresa tu respuesta"));

if(pregunta1 == 3) {
    respuesta = true;
} else {
    respuesta = false;
}
validacionRespuesta();


let pregunta2 = parseInt(prompt("Te das cuenta que ese alguien con quien estaba hablando por el whatsapp es una chica! \n\n 1.-¿Otra vez hablando con esa zorra? Vas a tener que compensarme...\n\n 2.- Fijo que es esa fresca que está detrás de él... \n\n 3.- Que hable con ella. No me preocupa ya que confío plenamente en él. \n\n Ingresa tu respuesta"));

if(pregunta2 == 3) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

let pregunta3 = parseInt(prompt("Has salido de fiesta con tus amigas y te has llevado al novio. Ves que una de ellas está hablando mucho con él. ¿Qué piensas?\n\n 1.-Es mi amiga y yo confío en mi novio, no hay problema \n\n 2.- Muy simpática está mi amiguita ahora...\n\n 3.- Qué coño hace hablando tanto mi amiga con él? de qué va? \n\n Ingresa tu respuesta"));

if(pregunta3 == 1) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

let pregunta4 = parseInt(prompt("Habéis quedado en un sitio intermedio entre su casa y la tuya. Él llega tarde. ¿Qué piensas?\n\n 1.- Aiss... mi chico tardón... ^^.\n\n 2.- Fijo que se ha retrasado porque se ha encontrado a alguna de sus amiguitas y se ha parado a hablar \n\n 3.- ya me vuelve a tocar esperar... \n\n Ingresa tu respuesta"));

if(pregunta4 == 1) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

let pregunta5 = parseInt(prompt("¿Cuántos apodos cariñosos tienes para él?\n\n 1.- Me preocupan más los apodos que le ponen esas amiguitas suyas ¬¬\n \n2.- He perdido la cuenta jeje \n\n 3.- ¿Apodos? Cari y va que jode\n\n Ingresa tu respuesta"));

if(pregunta5 == 2) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();


document.write("<b>RESULTADOS</b>:<br><br><br> 5 Respuestas que den miedo: <br><br><b>Novia/o celosa</b><br>Eres muy posesiva y formas parte del colectivo de mujeres que opinan que no existe la amistad entre hombres y mujeres (sino solo atracción). Tu pareja no es un ser libre, sino algo de tu propiedad. No orinas sobre él para marcar territorio porque estaría mal visto. Ten cuidado, ya que los celos excesivos agobian y puede acabar mal la cosa. <br><br><br> 2 o 3 Respuestas positivas:<br><br><b>Novia/o normal</b><br> ¡Enhorabuena! Eres una novia/o normal, es decir, no formas parte del colectivo de novias/os celosas/empalagosas/interesadas. No obstante, aún puedes mejorar de cara a la relación.<br><br><br> 3 Respuestas o más negativas que den miedo: <br><br><b>Novia empalagosa</b><br>Necesitas estar encima (no literalmente ^_^) de tu pareja a todas horas. Te encantan los mimos y las chorraditas. En los casos más extremos, soléis crear un dialecto en el que os comunicáis, además de tener varios apodos cariñosos que dan bastante miedo si salen a la luz Necesitas que tu pareja centre toda su atención en ti. Cuando esto no sucede, debes buscar la manera de enterarte, o bien acosándole a él, o bien a través de terceras personas.<br><br><br> 5 Respuestas positivas: <br><br><b>Novia/o perfecta</b><br>¡Enhorabuena! Tu compromiso es fuerte y tu relación está basada, en gran medida, en el respeto y el amor. Darías cualquier cosa por tu pareja. Tu novio/a tiene mucha suerte de estar contigo. Como tú hay poco/as ¡Sigue así! ¡Vales mucho!<br><br><br><br> Gracias por examinarte! :) Siempre es buena la paz mental. <br><br> O tienes o nó madera de novia, si no es así metele amor a tus celos y déjalos ir para vivir felíz!<br><br><br><br> Cuando estés lista/o puedes intentarlo de nuevo, actualizando la página ")
}
