/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const playButton = document.querySelector('header button'); /* take button */
const fieldElement = document.getElementById('field');
const modeElement = document.getElementById('mode');

//console.log(createBox());

playButton.addEventListener('click', function() {
    fieldElement.innerHTML = ''; //reset the field

    const mode = modeElement.value;
    if (mode === 'medium') {
        for (let i = 0; i < 81; i++) {
            const boxElement = createBox(i + 1);
            boxElement.classList.add('medium')
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable
            boxElement.addEventListener('click', function() {
                boxElement.classList.add('active');
                console.log(i + 1);
            })
        }  
    } else if (mode === 'hard') {
        for (let i = 0; i < 49; i++) {
            const boxElement = createBox(i + 1);
            boxElement.classList.add('hard')
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable
            boxElement.addEventListener('click', function() {
                boxElement.classList.add('active');
                console.log(i + 1);
            })
        }  
    } else /* if mode === easy */ {
        for (let i = 0; i < 100; i++) {
            const boxElement = createBox(i + 1);
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable
            boxElement.addEventListener('click', function() {
                boxElement.classList.add('active');
                console.log(i + 1);
            })
        }
    }
})

