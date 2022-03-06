// import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';
import GameOver from './GameOver';
import QuizCard from './QuizCard';
import "./style.css";
import shuffle from './utils';


function App() {

  const [startGame, setStartGame] = useState(false);
  const [quizzes, setQuizzes] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [gameScore, setGameScore] = useState(0);

  // console.log(correctAnswer, selectedAnswer)


  const startQuiz = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple")
    const {results} = await res.json();

    setStartGame(true);
    setQuizzes(results);

    setSelectedQuestion({
      question: results[0].question, //Here is question Array of shuffle object. because it's come from utils algorithm.
      answers: shuffle(results[0]), //Here is shuffle quiz.correct_answer, ...quiz.incorrect_answers from object of Array.
    })

    setCorrectAnswer(results[0].correct_answer)
    setLoaded(true);

    // console.log(results)
  }

  const navigateNextQuiz = () => {
    // console.log("navigate next Quiz")

    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex

    if(!isLastQuestion) {
      const currentIndex = selectedQuestionIndex + 1
      setSelectedQuestionIndex(currentIndex)
      
      setSelectedQuestion({
      question: quizzes[currentIndex].question, 
      answers: shuffle(quizzes[currentIndex]),
    })
    setCorrectAnswer(quizzes[currentIndex].correct_answer)
    setSelectedAnswer(null)

    } else {
      setEndGame(true)
    }


    // setSelectedQuestionIndex((prevIndex) => prevIndex + 1)
    // setSelectedQuestion({
    //   question: quizzes[selectedQuestionIndex].question, 
    //   answers: shuffle(quizzes[selectedQuestionIndex]),
    // })
  }

  const resetQuiz = () => {
    // console.log("reset")
    setQuizzes(null)
    setSelectedQuestion(null)
    setSelectedQuestionIndex(0)
    setEndGame(false)
    setLoaded(false)
    setStartGame(false)
    setGameScore(0)
  }

  const selectAnswer = (answer) => {
    console.log(answer)
    setSelectedAnswer(answer)
    //Game Score
    if(answer === correctAnswer) {
      setGameScore((prev) => prev + 1)
    }
    // console.log(gameScore)
  }

  return (
    <div className="container">

      {!startGame && <button className="start-quiz" onClick={startQuiz}>Start Quiz</button>}

      {startGame && loaded && !endGame && <QuizCard selectedQuestion={selectedQuestion} navigateNextQuiz={navigateNextQuiz} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} quizzes={quizzes} selectedQuestionIndex={selectedQuestionIndex}/>}
      
      {endGame && <GameOver resetQuiz={resetQuiz} gameScore={gameScore}/>}

    </div>
  );
}

export default App;
