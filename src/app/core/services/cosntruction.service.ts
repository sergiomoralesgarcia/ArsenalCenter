import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Construction } from "../models/costruction.model";

@Injectable({
    providedIn: 'root'
})
export class ConstructionService {

    private _constructions: Construction[] = [
        {
            id: 1,
            idWeapon: 1,
            idAccessory: 1,
            damage: 0,
            accuracy: 0,
            range: 0,
            cadence: 0,
            mobility: 0,
        },
        {
            id: 2,
            idWeapon: 2,
            idAccessory: 2,
            damage: 0,
            accuracy: 0,
            range: 0,
            cadence: 0,
            mobility: 0,
        }
    ];

    private constructionSubject: BehaviorSubject<Construction[]> = new BehaviorSubject(this._constructions);
    public weapon$ = this.constructionSubject.asObservable();

    id: number = this._constructions.length + 1;
    constructor() { }

    getConstructions() {
        return this._constructions;
    }

    getConstructionById(id: number) {
        return this._constructions.find(a => a.id == id);
    }

    getConstructionsByAccessoryId(idAccessory: number): Construction[] {
        return this._constructions.filter(a => a.idAccessory == idAccessory);
    }

    getConstructionsByWeaponId(idWeapon: number): Construction[] {
        return this._constructions.filter(a => a.idWeapon == idWeapon);
    }

    deleteConstructionById(id: number) {
        this._constructions = this._constructions.filter(a => a.id != id);
    }

    addConstruction(construction: Construction) {
        console.log(this.id++)
        construction.id = this.id++;
        
        this._constructions.push(construction);
    }

    updateConstruction(construction: Construction) {
        var _const = this._constructions.find(a => a.id == construction.id);
        if (_const) {
            _const.idWeapon = construction.idWeapon;
            _const.idAccessory = construction.idAccessory;
            _const.damage = construction.damage;
            _const.accuracy = construction.accuracy;
            _const.range = construction.range;
            _const.cadence = construction.cadence;
            _const.mobility = construction.mobility;
        }

    }
}
