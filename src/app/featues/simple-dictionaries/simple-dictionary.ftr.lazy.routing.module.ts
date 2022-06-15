import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleDictionaryFtrModule } from './simple-dictionary.ftr.module';
import { SimpleDictionaryFtrRoutingModule } from './simple-dictionary.ftr.routing.module';


//
// Hint: 
// add the following two lines
//
// {  path: 'simpledictionary', loadChildren: () => import('./featues/simple-dictionaries/simple-dictionary.ftr.lazy.routing.module').then(m => m.SimpleDictionaryFtrLazyRoutingModule), 
//    data: { vn: 'SimpleDictionaryFtrComponent', va: 'l'} }, 
//
// to the array
// const routes: Routes = [ ... ]
//
// of the "app-routing.module.ts"-file
// 
// In the app.component.html-file add the following line
// <mat-nav-list>
//  ...
//    <a mat-list-item [routerLink]="['/simpledictionary']" routerLinkActive="active">Title for SimpleDictionary </a> 
//  ...
// </mat-nav-list>
//
// 
//


@NgModule({
    declarations: [
    ],

    imports: [
        SimpleDictionaryFtrModule,
        SimpleDictionaryFtrRoutingModule,
    ],
    exports: [
    ],
    entryComponents: [
    ]
})
export class SimpleDictionaryFtrLazyRoutingModule { }


