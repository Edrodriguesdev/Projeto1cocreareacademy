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
    function validarForm() {
        if (
            document.getElementsByName ("hashTag").value ==  null ||
            document.getElementsByName ("hashTag").value.lenght <= 3 ||
            document.getElementsByName ("hashTag").value.lenght >= 141 )
            {
                alert("Por favor, indique uma hashtag válida.");
                console.log('Form Invalido');
                return false;
            }
            else{
                console.log('Form valido');
                return;
            }
        }
/* Fim validação do campo de busca */