import React from 'react'
import treasureChest from '../img/bau.png'

const DailyQuest = () => {
    const currentPoints = 0
    const maxPoints = 10
    const progressPercentage = (currentPoints / maxPoints) * 100

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Questões Diárias</h3>
            <p style={styles.subtitle}>Consiga {maxPoints} Pontos</p>
            <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: `${progressPercentage}%` }}></div>
                <span style={styles.progressText}>
                    {currentPoints} / {maxPoints}
                </span>
                <img src={treasureChest} alt="Baú" style={styles.chestImage} />
            </div>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        width: '300px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '18px',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '8px',
    },
    subtitle: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px',
    },
    progressContainer: {
        backgroundColor: '#E0E0E0',
        borderRadius: '4px',
        height: '20px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'visible',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4CAF50',
        transition: 'width 0.3s ease-in-out',
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#000',
        zIndex: 2,
    },
    chestImage: {
        position: 'absolute',
        right: '-45px', 
        top: '-30px', 
        width: '905x', 
        height: '70px', 
        zIndex: 3, 
    },
}

export default DailyQuest