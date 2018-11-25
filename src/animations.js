export const animations = {
    toggle: expanded => ({
        animation: {
            rotateZ: expanded ? 180 : -180,
        },
        duration: 200,
    }),
    node: (expanded, node) => ({
        enter: {
            animation: 'slideDown',
            duration: 300,
        },
        leave: {
            animation: 'slideUp',
            duration: 300,
        },
    }),
};
