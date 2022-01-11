import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: any;

  constructor(private translateService: TranslateService) { }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value)
  }

  /* ngOnInit(): void {
    var btnContainer = document.getElementById("myDIV");
    var btns = btnContainer!.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click",  () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  } */
}
