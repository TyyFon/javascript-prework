{
    const startButtonRock = document.getElementById('rock'),
        startButtonPaper = document.getElementById('paper'),
        startButtonScissors = document.getElementById('scissors');
   
    startButtonRock.addEventListener('click', buttonClickedRock);
    startButtonScissors.addEventListener('click', buttonClickedScissors);
    startButtonPaper.addEventListener('click', buttonClickedPaper);
}