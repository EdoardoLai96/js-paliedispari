// Creo il prompt dove l'utente può inserire la parola 


// Creo dei contenitori vuoti dove creare raccogliere le lettere che formeranno le parole da analizzare

let scatola = "";
let scatolaReverse = "";

// Creo un ciclo che scorra tutte le lettere della parola inserita nel prompt e la ricostruisca nell'ordine normale delle lettere



// Faccio la stessa cosa ma per far si che la parola venga ricostruita al contrario




// confronto in due valori 

parola = "";


function palindroMania(){
    
    let parola = prompt("");
    
    for (let i = 0; i < parola.length; i++){
        
        
        scatola += parola[i];
        
    }

    console.log(scatola);
    
    for (let i = parola.length - 1; i >= 0; i--){
        
        scatolaReverse += parola[i];
        
        
    }
    
    if(scatola == scatolaReverse){
        

        risultato = alert("palindroma")

    }else{

        alert("non palindroma");
    }
    
    return
    
}


let controllo = palindroMania(parola);