import React from 'react';

const Chip = ({ icon, logo, text, href, tooltip }) => {
    const iconElement = logo ? (
        <img src={logo} alt={text} className="w-6 h-6 object-contain rounded-full" />
    ) : icon ? (
        <span className="text-lg leading-none flex items-center justify-center w-6 h-6">{icon}</span>
    ) : null;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1c1c1c] hover:bg-[#2a2a2a] text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors align-middle mx-1 relative group h-9"
                title={tooltip}
            >
                {iconElement}
                <span>{text}</span>
                {tooltip && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-gray-700">
                        {tooltip}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></span>
                    </span>
                )}
            </a>
        );
    }
    return (
        <span className="inline-flex items-center gap-2 bg-[#1c1c1c] text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium align-middle mx-1 relative group h-9" title={tooltip}>
            {iconElement}
            <span>{text}</span>
            {tooltip && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-gray-700">
                    {tooltip}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></span>
                </span>
            )}
        </span>
    );
};

export default Chip;
