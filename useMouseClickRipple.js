export const useMouseClickRipple = () => {
    const refuseRippleEffect = ['a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'ul', 'li', 'span', 'svg', 'img']

    const applyCursorRippleEffect = (e) => {
        if (refuseRippleEffect.includes(e.target.localName) || e.target.className.contains('ripple')) {
            return
        } else {
            const ripple = document.createElement("div")
            ripple.className = "mouse-ripple"
            document.body.appendChild(ripple)
            ripple.style.left = `${e.clientX}px`
            ripple.style.top = `${e.clientY}px`
            ripple.style.animation = `ripple-effect .35s  linear`
            ripple.onanimationend = () => document.body.removeChild(ripple)
        }
    }

    document.onclick = event => applyCursorRippleEffect(event)
}