import React from 'react'

const useAnimationInStrictMode = () => {
    const [enabled, setEnabled] = React.useState(false);

    React.useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return { enabled }
}

export default useAnimationInStrictMode