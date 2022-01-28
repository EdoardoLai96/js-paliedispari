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
    
    
    for (let i = una_certa_parola.length - 1; i >= 0; i--){
        
        scatolaReverse += una_certa_parola[i];
        
        
    }
    
    if(scatola == scatolaReverse){
        
        risultato = "è palindroma";
        
    }else{
        
        risultato = "non è palindroma";
    }
    
    scatola ="";
    scatolaReverse= "";
    
    
    return risultato
    
}






// parola_da_verificare = prompt("");

 let parola_da_verificare = document.getElementById("parola");


bottone.addEventListener("click", 

function() {
    
    isNaN(parola_da_verificare.value) == true;

    let verifica = verifica_se_palindroma(parola_da_verificare.value);
    
    if(parola_da_verificare.value == "" || isNaN(parola_da_verificare.value) == false){
        
        
        alert("Errore, non hai inserito un valore corretto")
    } else {
        let mostra_risultato = document.getElementById("mostra_risultato");
        mostra_risultato.innerHTML = ("La parola che hai scelto " + verifica)
        
    }
    bottone.innerHTML="Verifica un'altra parola";
    
    }
    )



// verifica = verifica_se_palindroma(parola_da_verificare)




