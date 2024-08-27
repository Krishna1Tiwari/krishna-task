import React, { createContext, useState } from 'react';
import { questions } from '../../mock/Questions';
// Create a context for the quiz
export const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const handleAnswerSubmission = (selectedAnswer) => {
        const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedAnswer;
        if (isCorrect) {
            setScore(score + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCompleted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setCompleted(false);
        setIncorrectAnswers(0);
    };

    return (
        <QuizContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                score,
                completed,
                incorrectAnswers,
                handleAnswerSubmission,
                resetQuiz,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
