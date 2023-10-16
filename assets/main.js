document.getElementById("telefone");
let numero = telefone;

function maascaraDeTelefone(numero) {
  if (numero.value.length == 0) {
    numero.value = "(" + numero.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
  }

  if (numero.value.length == 3) {
    numero.value = numero.value + ") "; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
  }

  if (numero.value.length == 10) {
    numero.value = numero.value + "-"; //Quanto tiver 10 caracteres (contando com os parenteses), o script irá inserir um tracinho, para melhor visualização do telefone.
  }
}
