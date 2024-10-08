import React from 'react'

const ProgressBar = ({ progress, onClose }) => {
    return (
        <div style={styles.container}>
            <span style={styles.closeIcon} onClick={onClose}>
                ✕
            </span>
            <div style={styles.progressBarBackground}>
                <div style={{ ...styles.progressBarFill, width: `${progress}%` }} />
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '8px 0',
    },
    closeIcon: {
        fontSize: '14px',
        color: '#888',
        cursor: 'pointer',
        marginRight: '8px',
    },
    progressBarBackground: {
        backgroundColor: '#E0E0E0',
        borderRadius: '10px',
        height: '12px',
        flex: 1,
        overflow: 'hidden',
    },
    progressBarFill: {
        backgroundColor: '#4CAF50',
        height: '100%',
        borderRadius: '10px 0 0 10px',
        transition: 'width 0.3s ease-in-out',
    },
}

export default ProgressBar