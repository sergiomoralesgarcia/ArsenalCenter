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
            name: 'SNIPER RIFLE',
            type: 'Heavy',
            damage: -79,
            accuracy: -82,
            range: -75,
            cadence: -38,
            mobility: -47,
            image: "https://drive.google.com/uc?export=view&id=1nTK6ejIhts2B7nn9kTW9rqhNuQpdUIUH"
        },
        {
            id: 2,
            name: 'M16',
            type: 'Medium',
            damage: 71,
            accuracy: 67,
            range: 67,
            cadence: 48,
            mobility: 67,
            image: "https://drive.google.com/uc?export=view&id=1iZcs9FHP-xlgaq7DdKd-wJV0u0Odr-j1"
        },
        {
            id: 3,
            name: 'P90',
            type: 'Light',
            damage: 72,
            accuracy: 70,
            range: 51,
            cadence: 81,
            mobility: 79,
            image: "https://drive.google.com/uc?export=view&id=1L7QNOCjsV_Rr-rF6VRhklOuQ70aLhSdZ"
        },
        {
            id: 4,
            name: 'AK-47',
            type: 'Medium',
            damage: 77,
            accuracy: 74,
            range: 75,
            cadence: 62,
            mobility: 69,
            image: "https://drive.google.com/uc?export=view&id=1vUkAWpEKNfQpEjx0BGEFNCUk5BQA_Moj"
        },
        {
            id: 5,
            name: 'FAMAS',
            type: 'Medium',
            damage: 44,
            accuracy: 91,
            range: 63,
            cadence: 70,
            mobility: 67,
            image: "https://drive.google.com/uc?export=view&id=15wsXzzLJoiZFOqss6KSNFpOqhegA2tsA"
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