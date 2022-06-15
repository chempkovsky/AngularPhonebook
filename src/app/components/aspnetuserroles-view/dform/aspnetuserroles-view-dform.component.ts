
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

import { IaspnetuserrolesView } from './../interfaces/aspnetuserroles-view.interface';
import { IaspnetuserrolesViewPage } from './../interfaces/aspnetuserroles-view-page.interface';
import { IaspnetuserrolesViewFilter } from './../interfaces/aspnetuserroles-view-filter.interface';
import { AspnetuserrolesViewService } from './../../../services/aspnetuserroles-view/aspnetuserroles-view.service';
import { AspnetuserrolesViewDatasource } from './../../../services/aspnetuserroles-view/aspnetuserroles-view-datasource.class';


@Component({
  selector: 'app-aspnetuserroles-view-dform',
  templateUrl: './aspnetuserroles-view-dform.component.html',
  styleUrls: ['./aspnetuserroles-view-dform.component.css']
})
export class AspnetuserrolesViewDformComponent implements OnInit, OnDestroy, IEventEmitterPub {
    frases: {[key:string]: string}  = {
        'Not-all-props': $localize`:Not all properties are set@@AspnetuserrolesViewDformComponent.Not-all-props:Not all properties are set`,
        'caption': $localize`:Delete User Role@@AspnetuserrolesViewDformComponent.Delete-Item:Delete User Role`,
        'title': $localize`:Select Item@@AspnetuserrolesViewDformComponent.SelItem:Select Item`,
        'Not-all-masters': $localize`:Not all masters have been set@@AspnetuserrolesViewDformComponent.Not-all-masters:Not all masters have been set`,
        'UserId-label': $localize`:User Id@@aspnetuserrolesView.UserId-label:User Id`,
        'UserId-hint': $localize`:Enter Id@@aspnetuserrolesView.UserId-hint:Enter Id`,
        'UserId-placeholder': $localize`:User Id@@aspnetuserrolesView.UserId-placeholder:User Id`,
        'UUserName-label': $localize`:User Name@@aspnetuserrolesView.UUserName-label:User Name`,
        'UUserName-hint': $localize`:Enter User Name@@aspnetuserrolesView.UUserName-hint:Enter User Name`,
        'UUserName-placeholder': $localize`:User Name@@aspnetuserrolesView.UUserName-placeholder:User Name`,
        'RoleId-label': $localize`:Role Id@@aspnetuserrolesView.RoleId-label:Role Id`,
        'RoleId-hint': $localize`:Enter Id@@aspnetuserrolesView.RoleId-hint:Enter Id`,
        'RoleId-placeholder': $localize`:Role Id@@aspnetuserrolesView.RoleId-placeholder:Role Id`,
        'RName-label': $localize`:Role Name@@aspnetuserrolesView.RName-label:Role Name`,
        'RName-hint': $localize`:Enter RoleName@@aspnetuserrolesView.RName-hint:Enter RoleName`,
        'RName-placeholder': $localize`:Role Name@@aspnetuserrolesView.RName-placeholder:Role Name`,
        'ULockoutEnd-label': $localize`:Lockout End@@aspnetuserrolesView.ULockoutEnd-label:Lockout End`,
        'ULockoutEnd-hint': $localize`:Enter Lockout@@aspnetuserrolesView.ULockoutEnd-hint:Enter Lockout`,
        'ULockoutEnd-placeholder': $localize`:Lockout End@@aspnetuserrolesView.ULockoutEnd-placeholder:Lockout End`,
    }
    @Output('before-submit') beforeSubmit = new EventEmitter();
    @Output('after-submit') afterSubmit = new EventEmitter<IaspnetuserrolesView>();
    public doSubmit(): void {
        if (this.mainFormGroup.invalid || (!this.rootDataSource.refreshIsDefined())) {
            this.mainFormGroup.markAllAsTouched();
            this.appGlblSettings.showError('http', {message: this.frases['Not-all-props']});
            return;
        }
        this.beforeSubmit.emit(this.rootDataSource.values2Interface());
        this.rootDataSource.deleteone();
    }
    public rootDataSourceOnDelete(v: IViewModelDatasource): void { 
        this.afterSubmit.emit(this.rootDataSource.values2Interface());
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
    public rootDataSource: AspnetuserrolesViewDatasource | any = null;

    _Subscriptions : Subscription[] = [];
    // end: variable declaration section

    // start: input variable declaration section
    @Input('eform-control-model') 
        set eformControlModel (inFormControlModel : IaspnetuserrolesView | any) {
            let hasChanged: boolean = this.rootDataSource.interface2Values(inFormControlModel, false);
            hasChanged = this.rootDataSource.updateByHiddenFilterFields(false) || hasChanged;
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.refresh();
            }
        }
        get eformControlModel(): IaspnetuserrolesView | any {
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
                this.rootDataSource.doEmitEvent(false);
            }
        } 

    // end: input variable declaration section


    constructor(private frmSrvaspnetuserrolesView: AspnetuserrolesViewService, public dialog: MatDialog, protected appGlblSettings: AppGlblSettingsService ) {
        this.appearance = this.appGlblSettings.appearance;
        this.mainFormGroup =  new FormGroup({});
        let locValidators: ValidatorFn[]; 
        locValidators = [ ];
        this.mainFormGroup.addControl('userId', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.maxLength(256),Validators.minLength(1) ];
        this.mainFormGroup.addControl('uUserName', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(128),Validators.minLength(1) ];
        this.mainFormGroup.addControl('roleId', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(128),Validators.minLength(1) ];
        this.mainFormGroup.addControl('rName', new FormControl({ value: null, disabled: false}, locValidators));
        this.rootDataSource = new AspnetuserrolesViewDatasource (this.frmSrvaspnetuserrolesView,
            this.appGlblSettings, null, null, [],'');
        this.rootDataSource.setIsNew(false);
        this._Subscriptions.push(
            this.rootDataSource
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceAfterPropsChanged(v) } })
        );
//        this._Subscriptions.push(this.rootDataSource.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnIsDefinedChanged(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnUpdate.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnUpdate(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnAdd.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnAdd(v) } }));
        this._Subscriptions.push(this.rootDataSource.OnDelete.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnDelete(v) } }));
    }
//    public rootDataSourceOnUpdate(v: IViewModelDatasource): void { }
//    public rootDataSourceOnAdd(v: IViewModelDatasource): void { }
//    public rootDataSourceOnDelete(v: IViewModelDatasource): void { }
//    public rootDataSourceOnIsDefinedChanged(v: IViewModelDatasource): void { }

    public rootDataSourceAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'userId': this.rootDataSource.getValue('userId')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'uUserName': this.rootDataSource.getValue('uUserName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'roleId': this.rootDataSource.getValue('roleId')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'rName': this.rootDataSource.getValue('rName')}, {emitEvent: false});
    }
    

} // the end of the AspnetuserrolesViewDformComponent class body


