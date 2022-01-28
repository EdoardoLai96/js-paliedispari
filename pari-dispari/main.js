


let inserireNumero = prompt("Inserisci un numero per sapere se è pari o dispari");



function verifica_pari_dispari(un_certo_numero){
    if(un_certo_numero%2 == 0){
        
        
         risultato = ("pari");
    }else{
        console.log("dispari")

         risultato = ("dispari");
    }
        return risultato;
}

let verifica = verifica_pari_dispari(inserireNumero);

alert(verifica);