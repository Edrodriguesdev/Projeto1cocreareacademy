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
function validarForm(Form) {

    if (
       document.getElementsByName ('hashTag').value == "" || 
       document.getElementsByName ('hashTag').value ==  null ||
       document.getElementsByName ('hashTag').values < 3 ||
       document.getElementsByName ('hashTag').values > 140) 

       {
        console.log('Form Invalido')
        return false;
        alert("Por favor, indique uma hashtag válida.");
       }
       {
           
        console.log('Form valido')
        return true;
}
}

/* Fim validação do campo de busca */