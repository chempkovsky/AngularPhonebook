
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppGlblSettingsService } from './shared/services/app-glbl-settings.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    apptitle = 'PhoneBook';

    frases: {[key:string]: string}  = {
      'Home': $localize`:Home@@AppComponent.Home:Home`,


      'Phone-Types': $localize`:Phone Types@@AppComponent.Phone-Types:Phone Types`,
      'Phone-Types-Dlg': $localize`:Phone Types@@AppComponent.Phone-Types-Dlg:Phone Types dlg`,

      'Phones': $localize`:Phones@@AppComponent.Phones:Phones`,
      'Phones-Dlg': $localize`:Phones@@AppComponent.Phones-Dlg:Phones dlg`,

      'Enterprises': $localize`:Enterprises@@AppComponent.Enterprises:Enterprises`,
      'Enterprises-Dlg': $localize`:Enterprises@@AppComponent.Enterprises-Dlg:Enterprises dlg`,

      'Divisions': $localize`:Divisions@@AppComponent.Divisions:Divisions`,
      'Divisions-Dlg': $localize`:Divisions@@AppComponent.Divisions-Dlg:Divisions dlg`,

      'Employees': $localize`:Employees@@AppComponent.Employees:Employees`,
      'Employees-Dlg': $localize`:Employees@@AppComponent.Employees-Dlg:Employees dlg`,

      'Features': $localize`:Features@@AppComponent.Features:Features`,
      'Feature-Sample': $localize`:Feature Sample@@AppComponent.Feature-Sample:Feature Sample`,

      'Admin': $localize`:Admin@@AppComponent.Admin:Admin`,

      'Models': $localize`:Models@@AppComponent.Models:Models`,
      'Models-Dlg': $localize`:Models dlg@@AppComponent.Models-Dlg:Models dlg`,
      
      'Roles': $localize`:Roles@@AppComponent.Roles:Roles`,
      'Roles-Dlg': $localize`:Roles dlg@@AppComponent.Roles-Dlg:Roles dlg`,
      
      'Users': $localize`:Users@@AppComponent.Users:Users`,
      'Users-Dlg': $localize`:Users dlg@@AppComponent.Users-Dlg:Users dlg`,

      'Sign-in': $localize`:Sign in@@AppComponent.Sign-in:Sign in`,
      'Sign-out': $localize`:Sign out@@AppComponent.Sign-out:Sign-out`,
      'Registration': $localize`:Registration@@AppComponent.Registration:Registration`,
      'Change-Password': $localize`:Change Password@@AppComponent.Change-Password:Change Password`,
      
  }


    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());

    constructor(private breakpointObserver: BreakpointObserver, protected appGlblSettings: AppGlblSettingsService) {
    //appGlblSettings.appearance = 'fill';
    }

    get userName(): string|null {
        return this.appGlblSettings.userName;
    }  
}

