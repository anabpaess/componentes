import React from 'react'

const FeedbackMessage = ({ isCorrect, message, details, onContinue }) => {
    return (
        <div style={isCorrect ? styles.correctContainer : styles.incorrectContainer}>
            <div style={styles.iconCircle}>
                {isCorrect ? (
                    <span style={styles.correctIcon}>✔</span>
                ) : (
                    <span style={styles.incorrectIcon}>✖</span>
                )}
            </div>
            <div style={styles.messageContainer}>
                <p style={isCorrect ? styles.correctMessage : styles.incorrectMessage}>
                    {message}
                </p>
                {!isCorrect && details && (
                    <p style={styles.details}>{details}</p>
                )}
            </div>
            <button
                style={isCorrect ? styles.continueButtonCorrect : styles.continueButtonIncorrect}
                onClick={onContinue}
            >
                CONTINUE
            </button>
        </div>
    )
}

const styles = {
    correctContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#d4edda',
        padding: '16px',
        height: '80px',
        borderRadius: '8px',
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
    },
    incorrectContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8d7da',
        padding: '16px',
        height: '80px',
        borderRadius: '8px',
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
    },
    iconCircle: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    correctIcon: {
        color: '#28a745',
        fontSize: '20px',
    },
    incorrectIcon: {
        color: '#dc3545',
        fontSize: '24px',
    },
    messageContainer: {
        flex: 1,
    },
    correctMessage: {
        fontWeight: 'bold',
        color: '#155724',
        margin: 0,
    },
    incorrectMessage: {
        fontWeight: 'bold',
        color: '#721c24',
        margin: 0,
    },
    details: {
        color: '#721c24',
        fontSize: '12px',
        margin: '4px 0 0 0',
    },
    continueButtonCorrect: {
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '16px',
    },
    continueButtonIncorrect: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '16px',
    },
}

export default FeedbackMessage