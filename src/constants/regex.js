

// REGEX contient des expressions régulières pour valider différents formats de données :
const REGEX = Object.freeze({
    // email : valide les adresses email standards (RFC 5322 simplifié)
    email:      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // username : accepte lettres, chiffres, et caractères . @ + - _
    username:   /^[\w.@+-]+$/,
    // password : minimum 8 caractères, au moins une majuscule, une minuscule et un chiffre, caractères spéciaux autorisés
    password:   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
    // phone : valide les numéros de téléphone US/internationaux, avec ou sans séparateurs
    phone:      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    // url : valide les URLs commençant par http, https ou ftp
    url:        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
})

export default REGEX