import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Weapon } from '../models/weapon.model';

@Injectable({
    providedIn: 'root'
})
export class weaponService {
    private _weapon: Weapon[] = [
        {
            id: 1,
            name: 'SNIPER RIFLE',
            type: 'Heavy',
            damage: 79,
            accuracy: 82,
            range: 75,
            cadence: 38,
            mobility: 47,
            image: "https://drive.google.com/uc?export=view&id=1nTK6ejIhts2B7nn9kTW9rqhNuQpdUIUH",
            idSound:1
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
            image: "https://drive.google.com/uc?export=view&id=1iZcs9FHP-xlgaq7DdKd-wJV0u0Odr-j1",
            idSound:2
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
            image: "https://drive.google.com/uc?export=view&id=1L7QNOCjsV_Rr-rF6VRhklOuQ70aLhSdZ",
            idSound:3
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
            image: "https://drive.google.com/uc?export=view&id=1vUkAWpEKNfQpEjx0BGEFNCUk5BQA_Moj",
            idSound:4
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
            image: "https://drive.google.com/uc?export=view&id=15wsXzzLJoiZFOqss6KSNFpOqhegA2tsA",
            idSound:5
        }
    ]

    private weaponSubject: BehaviorSubject<Weapon[]> = new BehaviorSubject(this._weapon);
    public weapon$ = this.weaponSubject.asObservable();

    id: number = this._weapon.length + 1;
    constructor() { }

    getWeapon() {
        return this._weapon;
    }

    getWeaponById(id: number) {
        return this._weapon.find(p => p.id == id);
    }

    deleteWeaponById(id: number) {
        this._weapon = this._weapon.filter(p => p.id != id);
    }

    addWeapon(weapon: Weapon) {
        weapon.id = this.id++;
        this._weapon.push(weapon);
    }

    getWeaponBySoundId(idSound: number): Weapon[] {
        return this._weapon.filter(a => a.idSound == idSound);
    }

    updateWeapon(weapon: Weapon) {
        var _weapon = this._weapon.find(p => p.id == weapon.id);
        if (_weapon) {
            _weapon.name = weapon.name;
            _weapon.type = weapon.type;
            _weapon.damage = weapon.damage;
            _weapon.accuracy = weapon.accuracy;
            _weapon.range = weapon.range;
            _weapon.cadence = weapon.cadence;
            _weapon.mobility = weapon.mobility;
            _weapon.image = weapon.image;
            _weapon.idSound = weapon.idSound;
        }
    }
}