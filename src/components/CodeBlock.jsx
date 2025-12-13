import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCopy, FaCheck } from 'react-icons/fa';

const CodeBlock = ({ inline, className, children, ...props }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [copied, setCopied] = useState(false);

    const match = /language-(\w+)/.exec(className || '');
    // If no language match, we use our dynamic text
    const language = match ? match[1] : (isCollapsed ? 'click to expand' : 'click to collapse');

    // If inline code (single backtick), render simple span/code
    if (inline) {
        return (
            <code className="bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono text-gray-200" {...props}>
                {children}
            </code>
        );
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="my-8 rounded-xl overflow-hidden border border-gray-800 bg-black shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-gray-800">
                <div
                    className="flex-1 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity select-none"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-gray-500 tracking-wider font-mono">
                        {language}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-1.5 text-gray-500 hover:text-white transition-colors rounded-md bg-transparent hover:bg-white/5"
                        title="Copy code"
                        aria-label="Copy code"
                    >
                        {copied ? <FaCheck size={14} className="text-green-500" /> : <FaCopy size={14} />}
                    </button>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                    >
                        {isCollapsed ? (
                            <>
                                <span>Expand</span>
                                <FaChevronDown size={10} />
                            </>
                        ) : (
                            <>
                                <span>Collapse</span>
                                <FaChevronUp size={10} />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {!isCollapsed && (
                <div className="p-5 overflow-x-auto bg-black">
                    <code
                        className={`font-mono text-sm !text-gray-400 leading-relaxed block whitespace-pre-wrap !bg-transparent !p-0 before:!content-none after:!content-none ${className || ''}`}
                        {...props}
                    >
                        {children}
                    </code>
                </div>
            )}
        </div>
    );
};

export default CodeBlock;
