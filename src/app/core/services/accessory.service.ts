import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Accessory } from '../models/accessory.model';

@Injectable({
    providedIn: 'root'
})
export class accessoryService {
    private _accessory: Accessory[] = [
        {
            id: 1,
            name: 'Charger',
            type: 'Medium',
            damage: 0,
            accuracy: 5,
            range: 2,
            cadence: 0,
            mobility: -6,
            image: "https://drive.google.com/uc?export=view&id=12qZQ-Bdq3_Jg1JJ4ZQaFxr9r_fX4PQ4t"
        },
        {
            id: 2,
            name: 'Butt',
            type: 'Medium',
            damage: 1,
            accuracy: 8,
            range: 0,
            cadence: 0,
            mobility: 2,
            image: "https://drive.google.com/uc?export=view&id=1cUnNzgMOdEpMY47WVNHtEOZEBqinFVpV"
        },
        {
            id: 3,
            name: 'Butt',
            type: 'Light',
            damage: 0,
            accuracy: 6,
            range: 1,
            cadence: 0,
            mobility: 9,
            image: "https://drive.google.com/uc?export=view&id=1vizR9usGtvYUob7DJ8H_jNaPsuCVgQg9"
        },
        {
            id: 4,
            name: 'Sight',
            type: 'Hight',
            damage: 0,
            accuracy: 8,
            range: 2,
            cadence: 3,
            mobility: -2,
            image: "https://drive.google.com/uc?export=view&id=13VZmVQboVQDd6fhRbYavah9dng4DCg2u"
        },
        {
            id: 5,
            name: 'Silencer',
            type: 'Medium',
            damage: -4,
            accuracy: 6,
            range: 4,
            cadence: 0,
            mobility: 0,
            image: "https://drive.google.com/uc?export=view&id=1PgI98X1BdfHrP_xMF4_affZFPqJb9VH9"
        }
    ]

    private accessorySubject: BehaviorSubject<Accessory[]> = new BehaviorSubject(this._accessory);
    public accessory$ = this.accessorySubject.asObservable();

    id: number = this._accessory.length + 1;
    constructor() { }

    getAccessory() {
        return this._accessory;
    }

    getAccessoryById(id: number) {
        return this._accessory.find(p => p.id == id);
    }

    deleteAccessoryById(id: number) {
        this._accessory = this._accessory.filter(p => p.id != id);
    }

    addAccessory(accessory: Accessory) {
        accessory.id = this.id++;
        this._accessory.push(accessory);
    }

    updateAccessory(accessory: Accessory) {
        var _accessory = this._accessory.find(p => p.id == accessory.id);
        if (_accessory) {
            _accessory.name = accessory.name;
            _accessory.type = accessory.type;
            _accessory.damage = accessory.damage;
            _accessory.accuracy = accessory.accuracy;
            _accessory.range = accessory.range;
            _accessory.cadence = accessory.cadence;
            _accessory.mobility = accessory.mobility;
            _accessory.image = accessory.image;
        }
    }
}