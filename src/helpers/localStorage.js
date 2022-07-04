export function setStorage(type, varialvel) {
    localStorage.setItem(`${type}`, varialvel);
}

export function getStorage(type) {
    return localStorage.getItem(`${type}`);
}
