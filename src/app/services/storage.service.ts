import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
}

/*
  TODO: Impolement this code in TS and use storage module:

    export const storageService = {
        load: loadFromStorage,
        save: saveToStorage,
    }

    function saveToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value) ||null)
    }
    function loadFromStorage(key) {
        let data = localStorage.getItem(key)
        return data ? JSON.parse(data) : undefined
    }
    
*/