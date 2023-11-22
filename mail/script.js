// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


//creo un array con le mail degli invitati
const invitatiList = ["mail-1", "mail-2", "mail-3", "mail-4", "mail-5", "mail-6",];


//con il bottone mi prendo la mail inserita e inizio il programma
const sendButton = document.getElementById("send");

sendButton.addEventListener("click",

    function(){

        //creo una costante che mi prenda il valore inserito nell' elemento che risponde all'id mailuser e lo stampo in console
        const mailUser = document.getElementById("mailuser").value;
        console.log("mail inserita:", mailUser);
       
        //creo un ciclo che mi legga la lista invitati
        for (let i = 0; i < invitatiList.length; i++) {

            //creo la variabile invitato che e uguale alla posizione i nella invitatilist
            let invitato = invitatiList[i];

            //creo la condizione ceh mi mette a paragone la mail che ho inserito a quelle nella lista. Se la mail inserita è tra quelle nella lista allora stamperà questo messaggio e con il comando return blocco il ciclo
            if (mailUser === invitato) {
                console.log("benvenuto nel party piu fiko del globo terracqueo!");
                return;

            //altrimenti se la mail inserita non è tra quelle dell' array uscirà questo messaggio e blocco il ciclo.
            } else {
                console.log("ahahahah non sei stato invitato sfigato!");
                return;
            }

        }



    }


)