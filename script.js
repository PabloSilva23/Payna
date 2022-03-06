const mode = document.querySelector('.mode i');


let contador = 0;

mode.addEventListener('click', () => {
    contador++;
    let svg = document.querySelectorAll('svg path');
    let = modeStatic = document.querySelector('.text-card');
    
    if (contador % 2 === 1) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";
        modeStatic.style.color = "black";
        for (s of svg) {
            s.setAttribute('fill', 'white');
        }
        mode.style.color = "white";
        document.body.style.transition = .2 + 's';
    };
    
    if (contador % 2 === 0) {
        
        for (s of svg) {
            s.setAttribute('fill', 'black');
        }
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode.style.color = "black";
    };
});