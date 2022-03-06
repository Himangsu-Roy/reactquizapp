const AnswerCard = ({answer, selectAnswer, selectedAnswer, correctAnswer}) => { 
  
  const isRightAnswer = selectedAnswer && answer === correctAnswer
  const isWrongAnswer = selectedAnswer && answer !== correctAnswer
  const correctClass = isRightAnswer ? "correct-answer" : ""
  const wrongClass = isWrongAnswer ? "incorrect-answer" : ""
  const disableClass = selectedAnswer ? "disable-answer" : ""
  // console.log(isRightAnswer)

  return(
    <div>
      <p className={`${correctClass} ${wrongClass} ${disableClass}`} onClick={() => selectAnswer(answer)}>{answer}</p> 
    </div>
  )
}

export default AnswerCard;