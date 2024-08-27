import React, { useContext } from 'react';
import { QuizContext } from './context/QuizContext';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

const ScoreScreen = () => {
    const { score, questions, incorrectAnswers, resetQuiz } = useContext(QuizContext);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ width: 400, padding: 2, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>Quiz Completed!</Typography>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                        Your Score: {score} / {questions.length}
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Incorrect Answers: {incorrectAnswers}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={resetQuiz}
                        fullWidth
                    >
                        Try Again
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ScoreScreen;
