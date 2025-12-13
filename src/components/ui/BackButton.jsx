import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
    return (
        <div className="styled-wrapper mb-8 inline-block">
            <Link to="/" className="btn-back">
                ← Back home
            </Link>
            <style>{`
            .styled-wrapper .btn-back {
                --btn-bg: #0a0a0a;
                --glow-green: rgba(74, 222, 128, 0.5); /* Tailwind green-400 equivalent */
                --glow-white: rgba(255, 255, 255, 0.4);
                
                cursor: pointer;
                padding: 0.6em 1em;
                min-width: 85px;
                min-height: 32px;
                font-size: 0.75rem; /* text-xs */
                font-weight: 500;
                transition: all 0.3s ease;
                background: var(--btn-bg);
                border-radius: 0.5em;
                color: #9ca3af; /* text-gray-400 */
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                
                /* White and Green border effect using box-shadows matching request */
                box-shadow:
                    0px 0px 10px var(--glow-green),
                    inset 1px 1px 1px var(--glow-white),
                    inset -1px -1px 1px var(--glow-green);
            }

            .styled-wrapper .btn-back:hover {
                color: white;
                box-shadow:
                    0px 0px 20px var(--glow-green),
                    inset 1px 1px 2px var(--glow-white),
                    inset -1px -1px 2px var(--glow-green);
                transform: translateY(-1px);
            }
            
            .styled-wrapper .btn-back:active {
                transform: translateY(1px);
                box-shadow:
                    0px 0px 5px var(--glow-green),
                    inset 1px 1px 1px var(--glow-white),
                    inset -1px -1px 1px var(--glow-green);
            }
        `}</style>
        </div>
    );
}

export default BackButton;
