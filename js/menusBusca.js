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

    if (frm.hashTag.value == “”” || frm.hashTag.value == null || frm.hashTag.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert(“Por favor, indique o seu nome.“);
       //Foi definido um focus no campo.
        frm.nome.focus();
       //o form não é enviado.
        return false;
    }
    
  
window.addEventListener("scroll", substMenu);
/* Fim da função de scroll do header transparente*/