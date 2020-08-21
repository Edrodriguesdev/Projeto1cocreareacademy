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