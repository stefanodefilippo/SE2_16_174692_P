# SE2_16_174692_P
## Implementazione del sistema di distribuzione dei pasti
Il mockup di riferimento si trova presso https://pastiadomicilio.mybalsamiq.com/projects/pasti/prototype/Home?key=e682954ea8f12fe791b20bc58c7580dad59cfbc1.  
L'applicazione heroku si trova al link https://boiling-stream-93035.herokuapp.com/login.  
Per utilizzare l'applicazione localmente aprire un terminale, posizionarsi nella directory del progetto e dare node index.js, e digitare in un browser "http://127.0.0.1:1337/login".  
Gli utenti già registrati nell'applicazione (utilizzabili per fare il login) sia su heroku sia in locale sono i seguenti:

| username      |   password    |
| ------------- | ------------- |
| gigi          |  hh           |
| t_deluca      |  giu          |
| v_benvenuti   |  cheiHis8k    |
| f_lucchesi    |  2010         |
| a_ricci       |  Blu          |

L'idea è che la compagnia di distribuzione dei pasti fornisca ai propri clienti username e password per l'accesso all'applicazione.

## Note
Dopo 30 minuti di inattività il server si "addormenta", perciò i vari dati che sono stati inseriti dagli utenti, essendo memorizzati in liste di javascript, vengono perduti.

## Code review
Il link del code review è il seguente: https://docs.google.com/document/d/1O-rvaok9CRKEZfsaoc4u3mUB3bRf6iOU3PcQoSw7694/edit?usp=sharing