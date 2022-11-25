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
            name: 'FAMAS FR.556',
            type: 'Medium',
            damage:  67,
            precision:55,
            scope:42,
            cadence:61,
            mobility:61,
            image: "https://drive.google.com/uc?export=view&id=1g56LqrevlhL7Os6n-e6rIztuWtuScJk9"
        },
        {
            id: 2,
            name: 'Alejandro Cueto',
            type: 'Friki',
            damage:  13,
            precision:32,
            scope:542,
            cadence:54,
            mobility:54,
            image: "https://drive.google.com/uc?export=view&id=1hItKLZcDnmW_dlxEdCSw63opdT4YzILI"
        },
        {
            id: 3,
            name: 'Alberto Parra',
            type: 'Parringson',
            damage:  13,
            precision:32,
            scope:542,
            cadence:54,
            mobility:54,
            image: "https://drive.google.com/uc?export=view&id=1oCzWNoF1yiDxgA09tzTvC9nEy1DS3Dev"
        },
        {
            id: 4,
            name: 'Álvaro Linero',
            type: 'ElRey',
            damage:  13,
            precision:32,
            scope:542,
            cadence:54,
            mobility:54,
            image: "https://drive.google.com/uc?export=view&id=103p4Uf-nW5VW72qGXq37N9GRruRf1oxC"
        },
        {
            id: 5,
            name: 'David Antúnez',
            type: 'Fernando Alonso',
            damage:  13,
            precision:32,
            scope:542,
            cadence:54,
            mobility:54,
            image: "https://drive.google.com/uc?export=view&id=1n8cnVuQSsdoZ5cjKc4fnua9tHZUhErVf"
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

    updateWeapon(weapon: Weapon) {
        var _weapon = this._weapon.find(p => p.id == weapon.id);
        if (_weapon) {
            _weapon.name = _weapon.name;
            _weapon.type = weapon.type;
            _weapon.damage = weapon.damage;
            _weapon.precision = weapon.precision;
            _weapon.scope = weapon.scope;
            _weapon.cadence = weapon.cadence;
            _weapon.mobility = weapon.mobility;
            _weapon.image = weapon.image;
        }
    }
}