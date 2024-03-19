/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const playButton = document.querySelector('header button'); /* take button */
const fieldElement = document.getElementById('field');
const modeElement = document.getElementById('mode');
const gameOverElement = document.getElementById('game-over');
const winElement = document.getElementById('win');
const pointsElement = document.getElementById('points');
const winPointsElement = document.getElementById('win-points')

//console.log(createBox());

playButton.addEventListener('click', function() {
    fieldElement.innerHTML = ''; //reset the field
    let bombClicked = false; //reset bombs
    let points = 0; //reset points
    gameOverElement.classList.add('d-none'); //reset game over
    winElement.classList.add('d-none'); //reset win

    const mode = modeElement.value;
    if (mode === 'medium') {
        let bombs = [];
        bombs = generateArrayOfUniqueRandomNumber(1, 81, bombs, 16);
        console.log(bombs);
        for (let i = 0; i < 81; i++) {
            const boxElement = createBox();
            boxElement.classList.add('medium')
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable            
            let pointsTaken = false; // no multiple click
            boxElement.addEventListener('click', function() {
                if (bombClicked) { return };

                if (bombs.includes(i+1)) {
                    bombClicked = true;

                    const bombImg = document.createElement('img');
                    bombImg.setAttribute('src', 'https://img1.picmix.com/output/stamp/normal/4/5/3/4/2334354_11d70.gif');
                    bombImg.setAttribute('alt', 'Gif bomba');
                    boxElement.appendChild(bombImg);

                    boxElement.classList.add('bomb');

                    pointsElement.innerHTML = points;
                    gameOverElement.classList.remove('d-none');
                } else {                    
                    if (!pointsTaken) {
                        points += 1;
                        pointsElement.innerHTML = points;
                        pointsTaken = true;
                        console.log(points);
                    }
                    boxElement.classList.add('active');
                }                
            })
        }  
    } else if (mode === 'hard') {
        let bombs = [];
        bombs = generateArrayOfUniqueRandomNumber(1, 49, bombs, 16);
        console.log(bombs);
        for (let i = 0; i < 49; i++) {
            const boxElement = createBox();
            boxElement.classList.add('hard')
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable            
            let pointsTaken = false; // no multiple click
            boxElement.addEventListener('click', function() {
                if (bombClicked) { return };

                if (bombs.includes(i+1)) {
                    bombClicked = true;

                    const bombImg = document.createElement('img');
                    bombImg.setAttribute('src', 'https://img1.picmix.com/output/stamp/normal/4/5/3/4/2334354_11d70.gif');
                    bombImg.setAttribute('alt', 'Gif bomba');
                    boxElement.appendChild(bombImg);

                    boxElement.classList.add('bomb');

                    pointsElement.innerHTML = points;
                    gameOverElement.classList.remove('d-none');
                } else {                    
                    if (!pointsTaken) {
                        points += 1;
                        pointsElement.innerHTML = points;
                        winPointsElement.innerHTML = points;
                        pointsTaken = true;
                        console.log(points);
                    }
                    boxElement.classList.add('active');
                    if (points === 49 - 16) {
                        winElement.classList.remove('d-none');
                        bombClicked = true;

                        return;
                    }
                }                
            })
        }  
    } else /* if mode === easy */ {
        let bombs = [];
        bombs = generateArrayOfUniqueRandomNumber(1, 100, bombs, 16);
        console.log(bombs);
        for (let i = 0; i < 100; i++) {
            const boxElement = createBox();
            //console.log(boxElement);
            fieldElement.appendChild(boxElement);
    
            //box clickable            
            let pointsTaken = false; // no multiple click
            boxElement.addEventListener('click', function() {
                if (bombClicked) { return };

                if (bombs.includes(i+1)) {
                    bombClicked = true;

                    const bombImg = document.createElement('img');
                    bombImg.setAttribute('src', 'https://img1.picmix.com/output/stamp/normal/4/5/3/4/2334354_11d70.gif');
                    bombImg.setAttribute('alt', 'Gif bomba');
                    boxElement.appendChild(bombImg);

                    boxElement.classList.add('bomb');

                    pointsElement.innerHTML = points;
                    gameOverElement.classList.remove('d-none');
                } else {                    
                    if (!pointsTaken) {
                        points += 1;
                        pointsElement.innerHTML = points;
                        pointsTaken = true;
                        console.log(points);
                    }
                    boxElement.classList.add('active');
                }                
            })
        }  
    }
})

