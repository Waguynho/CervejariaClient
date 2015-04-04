function retornaObjetoRequest() {
    try {

      return   request = new XMLHttpRequest();
    } catch (microsoft) {

        try {

         return   request = new ActiveXObject("Msxml2.XMLHTTP");

        } catch (outromicrosoft) {
            try {

             return   request = new ActiveXObject("Microsoft.XMLHTTP");

            } catch (falhou) {
                
                alert('Wagner, falhou ao criar objeto de requisição: ' + falhou.message);
                
              return  request = null;
            }
        }
    }

}


