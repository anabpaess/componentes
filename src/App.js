import React, { useState } from 'react'
import DailyQuest from './components/DailyQuest'
import ProgressBar from './components/ProgressBar'
import FeedbackMessage from './components/FeedbackMessage'

const App = () => {
    const [progress, setProgress] = useState(60)
    const [showFeedback, setShowFeedback] = useState({ show: false, isCorrect: true })

    const handleProgressClose = () => {
        alert('Fechar barra de progresso')
    };

    const handleContinue = () => {
        alert('Continuar para a próxima questão.')
        setShowFeedback({ show: false, isCorrect: true })
    };

    return (
        <div style={styles.appContainer}>
            <div style={styles.section}>
                <DailyQuest />
            </div>

            <div style={styles.section}>
                <ProgressBar 
                    progress={progress} 
                    onClose={handleProgressClose} 
                />
            </div>

            <div style={styles.feedbackSection}>
                {showFeedback.show && (
                    <FeedbackMessage 
                        isCorrect={showFeedback.isCorrect}
                        message={showFeedback.isCorrect ? "Parabéns!" : "Resposta Incorreta"}
                        details={!showFeedback.isCorrect ? "A resposta é React" : null}
                        onContinue={handleContinue}
                    />
                )}
            </div>

            <div style={styles.section}>
                <button style={styles.button} onClick={() => setShowFeedback({ show: true, isCorrect: true })}>
                    Mostrar Feedback Correto
                </button>
                <button style={styles.button} onClick={() => setShowFeedback({ show: true, isCorrect: false })}>
                    Mostrar Feedback Incorreto
                </button>
            </div>
        </div>
    )
}

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
    },
    section: {
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        justifyContent: 'center',
    },
    feedbackSection: {
        width: '100%',
        maxWidth: '400px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px',
        fontSize: '14px',
    },
}

export default App