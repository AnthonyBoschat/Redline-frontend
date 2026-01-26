import { useEffect } from "react"

/**
 * Hook personnalisé qui exécute une fonction lorsque l'utilisateur clique en dehors d'un élément spécifié.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - Référence vers l'élément à surveiller.
 * @param {Function} callback - Fonction à exécuter lorsqu'un clic est détecté en dehors de l'élément.
 *
 * @example
 * const ref = useRef();
 * useCallbackOnClickOutside(ref, () => {
 *   // Action à effectuer lors d'un clic à l'extérieur
 * });
 */
export default function useCallbackOnClickOutside(elementRef, callback) {

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        callback()
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [elementRef, callback])
}