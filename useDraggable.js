import React from "react";
import useWindowSize from "components/tools/hooks/useWindowSize";

const useDraggable = () => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [xTranslate, setXTranslate] = React.useState(0);
    const [yTranslate, setYTranslate] = React.useState(0);
    const [initialMousePosition, setInitialMousePosition] = React.useState({});

    const { width: windowWidth, height: windowHeight } = useWindowSize()

    const onMouseDown = ({ clientX, clientY }) => {
        setInitialMousePosition({ x: clientX, y: clientY });
        setIsDragging(true);
    };

    React.useEffect(() => {
        const onMouseMove = (e) => {
            if (windowWidth > e.clientX && e.clientX > 0) {
                setXTranslate(xTranslate + e.clientX - initialMousePosition.x);
            }
            if (windowHeight > e.clientY && e.clientY > 0) {
                setYTranslate(yTranslate + e.clientY - initialMousePosition.y);
            }
        };
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
        }
        return () => window.removeEventListener("mousemove", onMouseMove);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging, initialMousePosition]);

    React.useEffect(() => {
        const onMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", onMouseUp);
        return () => window.removeEventListener("mouseup", onMouseUp);
    }, []);

    return { style: { transform: `translate(${xTranslate}px,${yTranslate}px)` }, onMouseDown }
};

export default useDraggable;