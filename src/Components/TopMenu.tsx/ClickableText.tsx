import React from 'react';

export function ClickableText({ text, isClicked, onClick }: any) {
    return (
        <div
            style={{
                color: 'white',
                fontSize: '10px',
                marginLeft: '10px',
                alignContent: 'center',
                position: 'relative',
                cursor: 'pointer'
            }}
            onClick={onClick}
        >
            {text}
            {isClicked && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0',
                        width: '100%',
                        borderBottom: '2px solid white',
                        fontWeight: 'bold'
                    }}
                />
            )}
        </div>
    );
}
