/* Função de scroll do header transparente*/
var substMenu = function() {
    var y = window.scrollY;
    if (y >= 300) {
        if (document.querySelector('.menuSup')) {
            document.querySelector('.menuSup').classList.add('menuSupDesf');
            document.querySelector('.menuSup').classList.remove('menuSup');
        }
    } else {
        if (document.querySelector('.menuSupDesf')) {
            document.querySelector('.menuSupDesf').classList.add('menuSup');
            document.querySelector('.menuSupDesf').classList.remove('menuSupDesf');
        }
    }
};
window.addEventListener("scroll", substMenu);
/* Fim da função do scroll do header transparente*/

/* Início validação do campo de busca */
function validar(){
    var campo = formuser.hashTag.value;
    var tamanho = formuser.hashTag.value.length;

    if(campo == ""){
        alert('Preencha o campo nome.');
        formuser.campo.focus();
        return false;
    }
    if(campo == "#"){
    return formuser.hashTag.value("");
    }
    if(tamanho <= 3){
        alert('Digite mais !');
        formuser.hashTag.focus();
        return false;
    }
    
    if(tamanho >= 141){
        alert('tudo isso?');
        formuser.hashTag.focus();
        return false;
    }
}
//Retira a # em qualquer lugar do input//
function caractereEspecial() {
    if(hashTag.value.match(/[#]/)){
    hashTag.value=hashTag.value.replace(/[#]/g,"");
    }
}
/* Fim validação do campo de busca */
