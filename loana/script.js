let lista = [];
const atualizar_tela = () =>{
    if(lista.length > 0){
        let nomes = "";
        for(let i = 0; i < lista.length; i++){
            nomes += lista[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "<h1>Lista Vazia</h1>";
}
function inserir_primeiro(){
    let nome = document.getElementById("nome")
    if(** != nome){
        lista.unshift(nome);
        atualizar_tela();
    }
}
function deletar_primeiro(){
    if(lista.length > 0){
        lista.shift();
        atualizar_tela();
    }
}
function deletar_primeiro(){
    if(lista.length > 0){
        lista.pop();
        atualizar_tela();
    }
}
function limpar_lista(){
  lista = [];
    atualizar_tela();
}

    