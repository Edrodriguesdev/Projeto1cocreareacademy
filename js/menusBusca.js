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

function validaForm(frm) {

    if ((frm.charCounter.value == “””) (frm.charCounter.value == null) (frm.charCounter.value.lenght < 3) (frm.form-control.value.lenght > 140)) {
        alert(“Por favor, indique uma hashtag valida.“);
        return false;
    }
    
  
window.addEventListener("scroll", substMenu);
/* Fim da função de scroll do header transparente*/