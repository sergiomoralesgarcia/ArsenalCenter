import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sound } from '../models/sound.model';

@Injectable({
    providedIn: 'root'
})
export class soundService {
    private _sound: Sound[] = [
        {
            id: 1,
            type: 'Heavy',
            sound: "https://drive.google.com/uc?export=view&id=1MPv4VRNtOwcEbSXR2moeMk7WZAtW8PUX"
        },
        {
            id: 2,
            type: 'Medium 1',
            sound: "https://drive.google.com/uc?export=view&id=1MPv4VRNtOwcEbSXR2moeMk7WZAtW8PUX"
        },
        {
            id: 3,
            type: 'Medium 2',
            sound: ""
        },
        {
            id: 4,
            type: 'Light 1',
            sound: ""
        },
        {
            id: 5,
            type: 'Light 2',
            sound: ""
        }
    ]

    private soundSubject: BehaviorSubject<Sound[]> = new BehaviorSubject(this._sound);
    public sound$ = this.soundSubject.asObservable();

    id: number = this._sound.length + 1;
    constructor() { }

    getSound() {
        return this._sound;
    }

    getSoundById(id: number) {
        return this._sound.find(p => p.id == id);
    }

    deleteSoundById(id: number) {
        this._sound = this._sound.filter(p => p.id != id);
    }

    addSound(sound: Sound) {
        sound.id = this.id++;
        this._sound.push(sound);
    }

    updateSound(sound: Sound) {
        var _sound = this._sound.find(p => p.id == sound.id);
        if (_sound) {
            _sound.type = sound.type; 
            _sound.sound = sound.sound;
        }
    }
}