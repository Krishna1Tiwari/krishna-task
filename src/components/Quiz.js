import React, { useContext, useState } from 'react';
import { QuizContext } from './context/QuizContext';
import { Box, Button, Typography, RadioGroup, FormControlLabel, Radio, Card, CardContent } from '@mui/material';

const Quiz = () => {
    const { questions, currentQuestionIndex, handleAnswerSubmission } = useContext(QuizContext);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer !== '') {
            handleAnswerSubmission(selectedAnswer);
            setSelectedAnswer('');
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ width: 400, padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>{currentQuestion.question}</Typography>
                    <RadioGroup
                        value={selectedAnswer}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    >
                        {currentQuestion.options.map((option, index) => (
                            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                        ))}
                    </RadioGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={!selectedAnswer}
                        fullWidth
                    >
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Quiz;
