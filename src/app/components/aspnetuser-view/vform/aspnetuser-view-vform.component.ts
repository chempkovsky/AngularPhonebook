
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators, ValidatorFn, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap,  catchError, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subscription } from 'rxjs';

import { AppGlblSettingsService } from './../../../shared/services/app-glbl-settings.service';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';
import { IEventEmitterData } from './../../../shared/interfaces/event-emitter-data.interface';
import { IMenuItemData } from './../../../shared/interfaces/menu-item-data.interface';
import { IEventEmitterPub } from './../../../shared/interfaces/event-emitter-pub.interface';
import { IViewModelDatasource } from './../../../shared/interfaces/view-model-datasource.interface';

import { IaspnetuserView } from './../interfaces/aspnetuser-view.interface';
import { IaspnetuserViewPage } from './../interfaces/aspnetuser-view-page.interface';
import { IaspnetuserViewFilter } from './../interfaces/aspnetuser-view-filter.interface';
import { AspnetuserViewService } from './../../../services/aspnetuser-view/aspnetuser-view.service';
import { AspnetuserViewDatasource } from './../../../services/aspnetuser-view/aspnetuser-view-datasource.class';


@Component({
  selector: 'app-aspnetuser-view-vform',
  templateUrl: './aspnetuser-view-vform.component.html',
  styleUrls: ['./aspnetuser-view-vform.component.css']
})
export class AspnetuserViewVformComponent implements OnInit, OnDestroy, IEventEmitterPub {

    frases: {[key:string]: string}  = {
        'Not-all-props': $localize`:Not all properties are set@@AspnetuserViewVformComponent.Not-all-props:Not all properties are set`,
        'caption': $localize`:Review User@@AspnetuserViewVformComponent.Review-Item:Review User`,
        'title': $localize`:Select Item@@AspnetuserViewVformComponent.SelItem:Select Item`,
        'Not-all-masters': $localize`:Not all masters have been set@@AspnetuserViewVformComponent.Not-all-masters:Not all masters have been set`,
        'Id-label': $localize`:User Id@@aspnetuserView.Id-label:User Id`,
        'Id-hint': $localize`:Enter Id@@aspnetuserView.Id-hint:Enter Id`,
        'Id-placeholder': $localize`:User Id@@aspnetuserView.Id-placeholder:User Id`,
        'UserName-label': $localize`:User Name@@aspnetuserView.UserName-label:User Name`,
        'UserName-hint': $localize`:Enter User Name@@aspnetuserView.UserName-hint:Enter User Name`,
        'UserName-placeholder': $localize`:User Name@@aspnetuserView.UserName-placeholder:User Name`,
        'Email-label': $localize`:User Email@@aspnetuserView.Email-label:User Email`,
        'Email-hint': $localize`:Enter Email@@aspnetuserView.Email-hint:Enter Email`,
        'Email-placeholder': $localize`:User Email@@aspnetuserView.Email-placeholder:User Email`,
        'EmailConfirmed-label': $localize`:Email Confirmed@@aspnetuserView.EmailConfirmed-label:Email Confirmed`,
        'EmailConfirmed-hint': $localize`:Enter Email Confirmed@@aspnetuserView.EmailConfirmed-hint:Enter Email Confirmed`,
        'EmailConfirmed-placeholder': $localize`:Email Confirmed@@aspnetuserView.EmailConfirmed-placeholder:Email Confirmed`,
        'PhoneNumber-label': $localize`:Phone Number@@aspnetuserView.PhoneNumber-label:Phone Number`,
        'PhoneNumber-hint': $localize`:Enter Phone Number@@aspnetuserView.PhoneNumber-hint:Enter Phone Number`,
        'PhoneNumber-placeholder': $localize`:Phone Number@@aspnetuserView.PhoneNumber-placeholder:Phone Number`,
        'PhoneNumberConfirmed-label': $localize`:Phone Number Confirmed@@aspnetuserView.PhoneNumberConfirmed-label:Phone Number Confirmed`,
        'PhoneNumberConfirmed-hint': $localize`:Enter Phone Number Confirmed@@aspnetuserView.PhoneNumberConfirmed-hint:Enter Phone Number Confirmed`,
        'PhoneNumberConfirmed-placeholder': $localize`:Phone Number Confirmed@@aspnetuserView.PhoneNumberConfirmed-placeholder:Phone Number Confirmed`,
        'TwoFactorEnabled-label': $localize`:Two Factor Enabled@@aspnetuserView.TwoFactorEnabled-label:Two Factor Enabled`,
        'TwoFactorEnabled-hint': $localize`:Enter Two Factor Enabled@@aspnetuserView.TwoFactorEnabled-hint:Enter Two Factor Enabled`,
        'TwoFactorEnabled-placeholder': $localize`:Two Factor Enabled@@aspnetuserView.TwoFactorEnabled-placeholder:Two Factor Enabled`,
        'LockoutEnabled-label': $localize`:Lockout Enabled@@aspnetuserView.LockoutEnabled-label:Lockout Enabled`,
        'LockoutEnabled-hint': $localize`:Enter Lockout Enabled@@aspnetuserView.LockoutEnabled-hint:Enter Lockout Enabled`,
        'LockoutEnabled-placeholder': $localize`:Lockout Enabled@@aspnetuserView.LockoutEnabled-placeholder:Lockout Enabled`,
        'AccessFailedCount-label': $localize`:Access Failed Count@@aspnetuserView.AccessFailedCount-label:Access Failed Count`,
        'AccessFailedCount-hint': $localize`:Enter Access Failed Count@@aspnetuserView.AccessFailedCount-hint:Enter Access Failed Count`,
        'AccessFailedCount-placeholder': $localize`:Access Failed Count@@aspnetuserView.AccessFailedCount-placeholder:Access Failed Count`,
        'LockoutEnd-label': $localize`:Lockout End@@aspnetuserView.LockoutEnd-label:Lockout End`,
        'LockoutEnd-hint': $localize`:Enter Lockout@@aspnetuserView.LockoutEnd-hint:Enter Lockout`,
        'LockoutEnd-placeholder': $localize`:Lockout End@@aspnetuserView.LockoutEnd-placeholder:Lockout End`,
    }

    
    @Output('before-submit') beforeSubmit = new EventEmitter();
    @Output('after-submit') afterSubmit = new EventEmitter<IaspnetuserView>();
    public doSubmit(): void {
        if (this.mainFormGroup.invalid || (!this.rootDataSource.refreshIsDefined())) {
            this.mainFormGroup.markAllAsTouched();
            this.appGlblSettings.showError('http', {message: this.frases['Not-all-props']});
            return;
        }
        let data: IaspnetuserView = this.rootDataSource.values2Interface();
        this.beforeSubmit.emit(data);
        this.afterSubmit.emit(data);
    }
    ngOnDestroy(): void {
        this._Subscriptions.forEach((s: Subscription) => { s.unsubscribe(); });
    }
    ngOnInit(): void {
        this.ngOnInitCalled = true;
        this.rootDataSource.refresh();
    }
    public getErrorMessage(fc: AbstractControl): string {
        return this.appGlblSettings.getValidationErrorMessage(fc);
    } 
    // start: variable declaration section
    @Input('caption') caption: string|any = this.frases['caption'];
    @Output('on-cont-menu-item-click') onContMenuItemEmitter = new EventEmitter<IEventEmitterData>();
    @Input('cont-menu-items') contMenuItems: Array<IMenuItemData> = [];
    onContMenuItemClicked(v: IMenuItemData)  {
        let e: IEventEmitterData = {
            id: v.id,
            sender: this,
            value: null
        }
        this.onContMenuItemEmitter.emit(e);
    }
    public appearance: MatFormFieldAppearance = 'outline';
    private ngOnInitCalled: boolean = false;
    public mainFormGroup: FormGroup|any = null;
    public rootDataSource: AspnetuserViewDatasource | any = null;

    _Subscriptions : Subscription[] = [];
    // end: variable declaration section

    // start: input variable declaration section
    @Input('eform-control-model') 
        set eformControlModel (inFormControlModel : IaspnetuserView | any) {
            let hasChanged: boolean = this.rootDataSource.interface2Values(inFormControlModel, false);
            hasChanged = this.rootDataSource.updateByHiddenFilterFields(false) || hasChanged;
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.refresh();
            }
        }
        get eformControlModel(): IaspnetuserView | any {
            return this.rootDataSource.values2Interface();
        } // end of get eformControlModel
    @Input('hidden-filter') 
        get hiddenFilter(): Array<IWebServiceFilterRslt> {
          return this.rootDataSource.getHiddenFilterAsFltRslt();
        }
        set hiddenFilter(inDef: Array<IWebServiceFilterRslt>) {
            this.rootDataSource.setHiddenFilter(this.rootDataSource.getHiddenFilterByFltRslt(inDef));
            let hasChanged: boolean = this.rootDataSource.updateByHiddenFilterFields(false);
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.doEmitEvent();
            }
        } 

    // end: input variable declaration section


    constructor(private frmSrvaspnetuserView: AspnetuserViewService, public dialog: MatDialog, protected appGlblSettings: AppGlblSettingsService ) {
        this.appearance = this.appGlblSettings.appearance;
        this.mainFormGroup =  new FormGroup({});
        let locValidators: ValidatorFn[]; 
        locValidators = [ ];
        this.mainFormGroup.addControl('id', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.maxLength(256),Validators.minLength(1) ];
        this.mainFormGroup.addControl('userName', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.maxLength(256),Validators.minLength(0) ];
        this.mainFormGroup.addControl('email', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ ];
        this.mainFormGroup.addControl('emailConfirmed', new FormControl({ value: false, disabled: false}, locValidators));
        locValidators = [  ];
        this.mainFormGroup.addControl('phoneNumber', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ ];
        this.mainFormGroup.addControl('phoneNumberConfirmed', new FormControl({ value: false, disabled: false}, locValidators));
        locValidators = [ ];
        this.mainFormGroup.addControl('twoFactorEnabled', new FormControl({ value: false, disabled: false}, locValidators));
        locValidators = [ ];
        this.mainFormGroup.addControl('lockoutEnabled', new FormControl({ value: false, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.pattern(/^[-+]?\d+$/),Validators.max(2147483640),Validators.min(-2147483640) ];
        this.mainFormGroup.addControl('accessFailedCount', new FormControl({ value: null, disabled: false}, locValidators));
        this.rootDataSource = new AspnetuserViewDatasource (this.frmSrvaspnetuserView,
            this.appGlblSettings, null, null, [],'');
        this.rootDataSource.setIsNew(false);
        this._Subscriptions.push(
            this.rootDataSource
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceAfterPropsChanged(v) } })
        );
//        this._Subscriptions.push(this.rootDataSource.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnIsDefinedChanged(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnUpdate.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnUpdate(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnAdd.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnAdd(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnDelete.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnDelete(v) } }));
    }
//    public rootDataSourceOnUpdate(v: IViewModelDatasource): void { }
//    public rootDataSourceOnAdd(v: IViewModelDatasource): void { }
//    public rootDataSourceOnDelete(v: IViewModelDatasource): void { }
//    public rootDataSourceOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public rootDataSourceAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'id': this.rootDataSource.getValue('id')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'userName': this.rootDataSource.getValue('userName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'email': this.rootDataSource.getValue('email')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'emailConfirmed': this.rootDataSource.getValue('emailConfirmed')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'phoneNumber': this.rootDataSource.getValue('phoneNumber')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'phoneNumberConfirmed': this.rootDataSource.getValue('phoneNumberConfirmed')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'twoFactorEnabled': this.rootDataSource.getValue('twoFactorEnabled')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'lockoutEnabled': this.rootDataSource.getValue('lockoutEnabled')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'accessFailedCount': this.rootDataSource.getValue('accessFailedCount')}, {emitEvent: false});
    }
    

} // the end of the AspnetuserViewVformComponent class body


