import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Tour of Heroes';

  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['ru', 'de']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    /* const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang!) */
  }

  ngOnInit() {
    this.user = { firstName: 'Sammy', lastName: 'Shark' };
    this.welcome = this.translateService.instant('welcomeMessage', { firstName: this.user.firstName });
    this.translateService.get(['login.username', 'login.password'])
      .subscribe(translations => {
        this.usernameLabel = translations['login.username'];
        this.passwordLabel = translations['login.password'];
      });
  }
  
}
