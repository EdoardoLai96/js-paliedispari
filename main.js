// Creo il prompt dove l'utente può inserire la parola 


// Creo dei contenitori vuoti dove creare raccogliere le lettere che formeranno le parole da analizzare

let scatola = "";
let scatolaReverse = "";

// Creo un ciclo che scorra tutte le lettere della parola inserita nel prompt e la ricostruisca nell'ordine normale delle lettere



// Faccio la stessa cosa ma per far si che la parola venga ricostruita al contrario




// confronto in due valori 





function verifica_se_palindroma(una_certa_parola){
    
    let risultato = "";
    
    for (let i = 0; i < una_certa_parola.length; i++){
        
        
        scatola += una_certa_parola[i];
        
    }
    
    console.log(scatola);
    
    for (let i = una_certa_parola.length - 1; i >= 0; i--){
        
        scatolaReverse += una_certa_parola[i];
        
        
    }
    
    if(scatola == scatolaReverse){
        
        risultato = "Palindroma";
        
    }else{
        
        risultato = "Non palindroma";
    }
    
    
    
    
    return risultato
    
}



parola_da_verificare = prompt("");

verifica = verifica_se_palindroma(parola_da_verificare)

console.log(verifica);