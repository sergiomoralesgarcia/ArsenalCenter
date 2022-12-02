import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {

  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) { }

  languageChange() {  
    this.translateService.use(this.language);  
  }

  ngOnInit() {
  }

}
