
var obj_ajax = [
    {id: 1, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 2, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 3, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 4, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 5, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 6, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 7, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 8, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 9, tag: "hashtagname", data: "data", hora: "hora"},
    {id: 10, tag: "tag final", data: "data final", hora: "data final"},
    
]

function addnovoitem(){
    for(let k = 0; k < obj_ajax.length; k++){
        let tr = document.createElement("tr");
        let conteudo = "<td style='color:black;'>"+obj_ajax[k].tag+"</td><td>"+obj_ajax[k].data+"</td><td>"+obj_ajax[k].hora+"</td>";
        tr.innerHTML = conteudo;
        document.querySelector("#paginacao").append(tr)

    }

}

addnovoitem();

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      
            addnovoitem()
    }
};
