const GameOver = ({resetQuiz, gameScore}) => {

    // const resetQuiz = () => {

    // }

    return(
        <div>
            <h4>GameOver</h4>
            <p>Total Score:{gameScore}</p> 
            <button onClick={resetQuiz}>Reset Quiz</button>
        </div>
    );
}

export default GameOver;
