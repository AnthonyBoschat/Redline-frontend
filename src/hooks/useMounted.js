import { useEffect, useState } from "react";

/**
 * Hook React personnalisé qui retourne un booléen indiquant si le composant est monté.
 *
 * @returns {boolean} - `true` si le composant est monté, sinon `false`.
 */
export default function useMounted(){
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted
}