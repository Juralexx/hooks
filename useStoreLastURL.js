import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useStoreLastURL = () => {
    const location = useLocation()
    const [history, setHistory] = useState([localStorage?.getItem('prevUrl')])

    useEffect(() => {
        setHistory(urls => [location.pathname, ...urls])

        if (history.length > 1) {
            localStorage.setItem('prevUrl', history[0])
        }
    }, [location.pathname])

    return { history }
}