
const play = document.querySelector('#play-btn');
play.addEventListener('click',function(){
    const mainGrid = document.querySelector('#grid');
    mainGrid.innerHTML="";
    for(let i = 1; i <= 100; i++) {
                const square = generateSquare(i);
    

        mainGrid.append(square);
    }



})


    
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
        newSquare.addEventListener('click', function() {
           // console.log(document.querySelector('#grid').value);
           alert(number);

        });
        return newSquare;
    }

      //  mainGrid.addEventListener('click', function() {
      //      console.log(document.querySelector('#grid').value);
      //  });