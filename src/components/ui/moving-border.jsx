import React from "react";

export const Button = ({
    borderRadius = "1.75rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration = 4000,
    className,
    ...otherProps
}) => {
    return (
        <Component
            className={`relative text-xl overflow-hidden ${containerClassName}`}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0 rounded-full z-0"
                style={{
                    padding: "3px",
                }}
            >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div
                        className="absolute h-[200%] w-[200%] animate-spin-slow"
                        style={{
                            background: `conic-gradient(transparent, transparent, transparent, #22c55e, transparent, transparent)`,
                            animationDuration: `${duration}ms`,
                            left: "-50%",
                            top: "-50%",
                        }}
                    />
                </div>
            </div>

            <div
                className={`relative z-10 bg-[#111] backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased ${className}`}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
};
