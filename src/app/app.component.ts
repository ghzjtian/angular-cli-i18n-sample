import {Component, LOCALE_ID, Inject} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-cli-i18n-sample';
    myLocaleId: string;
    languages = [
        {code: 'en', label: 'English'},
        {code: 'zh', label: '中文'}
    ];

    constructor(@Inject(LOCALE_ID) protected localeId: string) {
        console.log(`localeId:${this.localeId}`);
        console.log(`constructor`);
        this.myLocaleId = this.localeId ;
    }

}
