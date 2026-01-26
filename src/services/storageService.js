class StorageService {
    static #instance = null;
    namespace;

    static #get() {
        if (!this.#instance) {
            this.#instance = new StorageService(import.meta.env.VITE_PUBLIC_APP_NAME || 'app');
        }
        return this.#instance;
    }

    constructor(namespace = process.env.VITE_PUBLIC_APP_NAME || 'app') {
        this.namespace = namespace;
    }

    // Vérifie si on est côté client
    isClient() {
        return typeof window !== 'undefined';
    }

    _get(key, callback) {
        if (!this.isClient()) return null;
        
        const fullKey = `${this.namespace}_${key}`;
        let value = localStorage.getItem(fullKey);
        
        if (value) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                // Valeur brute
            }
            if (callback && typeof callback === 'function') callback(value);
        }
        return value;
    }

    _set(key, value){
        if (!this.isClient()) return;
        
        const fullKey = `${this.namespace}_${key}`;
        const toStore = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(fullKey, toStore);
    }

    _remove(key){
        if (!this.isClient()) return;
        
        const fullKey = `${this.namespace}_${key}`;
        localStorage.removeItem(fullKey);
    }

    _clear(){
        if (!this.isClient()) return;
        
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.namespace)) localStorage.removeItem(key);
        });
    }

    static get(key, callback){
        return this.#get()._get(key, callback);
    }
    static set(key, value){
        console.log("test")
        return this.#get()._set(key, value);
    }
    static remove(key){
        return this.#get()._remove(key);
    }
    static clear(){
        return this.#get()._clear();
    }

    get(key, callback){
        return this._get(key, callback);
    }
    set(key, value){
        return this._set(key, value);
    }
    remove(key){
        return this._remove(key);
    }
    clear(){
        return this._clear();
    }
}

export default StorageService;