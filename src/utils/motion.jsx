export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x:
                direction === "right"
                    ? "-150%"
                    : direction === "left"
                    ? "150%"
                    : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay, duration) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};



export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            x: 0,
            y: 0,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};
