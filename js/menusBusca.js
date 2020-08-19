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
function validaForm(frm) {

    if ((frm.charCounter.value == "") (frm.charCounter.value == null) (frm.charCounter.value.lenght < 3) (frm.form-control.value.lenght > 140)) {
        alert("Por favor, indique uma hashtag válida.");
        return false;
    }
}
/* Fim validação do campo de busca */