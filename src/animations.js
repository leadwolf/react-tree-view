export const animations = {
    toggle: expanded => ({
        animation: {
            rotateZ: expanded ? 180 : -180,
        },
        duration: 200,
    }),
};
