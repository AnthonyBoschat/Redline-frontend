/**
 * Génère dynamiquement une chaîne de classes CSS à partir d'une liste d'arguments.
 *
 * Cette fonction permet d'ajouter des classes conditionnelles facilement dans les composants React.
 * Elle filtre les valeurs falsy (false, null, undefined, 0, '', etc.) et ne garde que les classes valides.
 *
 * @param  {...any} args - Liste de classes (string, booléen, null, undefined, etc.)
 * @returns - Chaîne de classes CSS séparées par un espace
 *
 * @example
 * // Exemple d'utilisation dans un composant React :
 * 
 * const error = true;
 * const animation = true;
 * 
 *  <h1 className={withClass(
        "p-8 outline outline-black", 
        error ? "text-red-500" : "text-blue-800",
        animation && "animate-bounce"
    )}>
        test
    </h1>

 * // Si error = true && animation = true 
 * // Résultat : "p-8 outline outline-black text-red-500 animate-bounce"
 * 
 * // Si error = false && animation = false 
 * // Résultat : "p-8 outline outline-black text-blue-800"
 * 
 * // Si error = false && animation = true 
 * // Résultat : "p-8 outline outline-black text-blue-800 animate-bounce"
 */
function withClass(...args) {
    return args.filter(Boolean).join(' ');
}

export default withClass;