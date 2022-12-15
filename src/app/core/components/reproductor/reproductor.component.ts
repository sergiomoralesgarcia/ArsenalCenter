import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {

  audio = new Audio();
  reproduciendo: boolean = false;

  constructor() {
    this.audio.src = "assets/M16Sound.mp3";
    this.audio.load();
  }

  play(){
    this.audio.load()
    this.audio.play();
    this.reproduciendo = true;
  }

  pause(){
    this.audio.play();
    this.reproduciendo = false;
  }

  ngOnInit() {}

}
