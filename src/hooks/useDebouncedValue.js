import { useEffect, useState } from "react";


/**
 * Hook personnalisé pour obtenir une valeur avec un délai de mise à jour (debounce).
 *
 * @param {*} value - La valeur à débouncer.
 * @param {number} [delay=800] - Le délai en millisecondes avant la mise à jour de la valeur.
 * @returns {*} La valeur débouncée après le délai spécifié.
 */
export default function useDebouncedValue(value, delay = 800) {

    const [debouncedValue, setDebouncedValue] = useState(value);
        

    useEffect(() => {
        const id = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);


    return debouncedValue;
}
