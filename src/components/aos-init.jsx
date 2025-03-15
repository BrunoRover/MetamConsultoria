import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function AosInit() {

    useEffect(() => {
        Aos.init({ duration: 800, once: false, offset: 200, })
        Aos.refresh();
    }, [])

    return null
}