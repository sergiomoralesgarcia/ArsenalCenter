import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) { }

  languageChange() {  
    this.translateService.use(this.language); 
  }
  ngOnInit() {
  }

}
