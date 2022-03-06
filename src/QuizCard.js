import AnswerCard from "./AnswerCard";

const QuizCard = ({selectedQuestion, navigateNextQuiz, selectAnswer, selectedAnswer, correctAnswer, selectedQuestionIndex, quizzes}) => {
     console.log(selectedQuestion)

    const {question, answers} = selectedQuestion;

    const navigateNext = () => {
        navigateNextQuiz()
    }
    
    // console.log(question);

    return(
        <div className="question-card">
            <h1>Quiz Question Answers</h1>
            <p>
                Question: {selectedQuestionIndex + 1} / {quizzes.length}
            </p>

            <h2>{question}</h2>

            {answers.map((answer, index) => <AnswerCard key={index} answer={answer} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} />)}

            <button onClick={navigateNext}>Next Question</button>

        </div>
    );
}

export default QuizCard;