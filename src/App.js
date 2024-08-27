import React, { useContext } from 'react';
import { QuizProvider, QuizContext } from './components/context/QuizContext';
import Quiz from './components/Quiz';
import ScoreScreen from './components/ScoreScreen';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
    const { completed } = useContext(QuizContext);

    return (<>
     <Container>
            <CssBaseline />
            {completed ? <ScoreScreen /> : <Quiz />}
        </Container>
    
    </>
       
    );
};

const AppWrapper = () => (
    <QuizProvider>
        <App />
    </QuizProvider>
);

export default AppWrapper;
