
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

import { IPhbkPhoneTypeView } from './../interfaces/phbk-phone-type-view.interface';
import { IPhbkPhoneTypeViewPage } from './../interfaces/phbk-phone-type-view-page.interface';
import { IPhbkPhoneTypeViewFilter } from './../interfaces/phbk-phone-type-view-filter.interface';
import { PhbkPhoneTypeViewService } from './../../../services/phbk-phone-type-view/phbk-phone-type-view.service';
import { PhbkPhoneTypeViewDatasource } from './../../../services/phbk-phone-type-view/phbk-phone-type-view-datasource.class';


@Component({
  selector: 'app-phbk-phone-type-view-dform',
  templateUrl: './phbk-phone-type-view-dform.component.html',
  styleUrls: ['./phbk-phone-type-view-dform.component.css']
})
export class PhbkPhoneTypeViewDformComponent implements OnInit, OnDestroy, IEventEmitterPub {
    frases: {[key:string]: string}  = {
        'Not-all-props': $localize`:Not all properties are set@@PhbkPhoneTypeViewDformComponent.Not-all-props:Not all properties are set`,
        'caption': $localize`:Delete Phone Type@@PhbkPhoneTypeViewDformComponent.Delete-Item:Delete Phone Type`,
        'title': $localize`:Select Item@@PhbkPhoneTypeViewDformComponent.SelItem:Select Item`,
        'Not-all-masters': $localize`:Not all masters have been set@@PhbkPhoneTypeViewDformComponent.Not-all-masters:Not all masters have been set`,
        'PhoneTypeId-label': $localize`:Phone Type Id@@PhbkPhoneTypeView.PhoneTypeId-label:Phone Type Id`,
        'PhoneTypeId-hint': $localize`:Enter Phone Type Id@@PhbkPhoneTypeView.PhoneTypeId-hint:Enter Phone Type Id`,
        'PhoneTypeId-placeholder': $localize`:Phone Type Id@@PhbkPhoneTypeView.PhoneTypeId-placeholder:Phone Type Id`,
        'PhoneTypeName-label': $localize`:Phone Type Name@@PhbkPhoneTypeView.PhoneTypeName-label:Phone Type Name`,
        'PhoneTypeName-hint': $localize`:Enter Phone Type Name@@PhbkPhoneTypeView.PhoneTypeName-hint:Enter Phone Type Name`,
        'PhoneTypeName-placeholder': $localize`:Phone Type Name@@PhbkPhoneTypeView.PhoneTypeName-placeholder:Phone Type Name`,
        'PhoneTypeDesc-label': $localize`:Phone Type Description@@PhbkPhoneTypeView.PhoneTypeDesc-label:Phone Type Description`,
        'PhoneTypeDesc-hint': $localize`:Enter Phone Type Description@@PhbkPhoneTypeView.PhoneTypeDesc-hint:Enter Phone Type Description`,
        'PhoneTypeDesc-placeholder': $localize`:Phone Type Description@@PhbkPhoneTypeView.PhoneTypeDesc-placeholder:Phone Type Description`,
    }
    @Output('before-submit') beforeSubmit = new EventEmitter();
    @Output('after-submit') afterSubmit = new EventEmitter<IPhbkPhoneTypeView>();
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
    public rootDataSource: PhbkPhoneTypeViewDatasource | any = null;

    _Subscriptions : Subscription[] = [];
    // end: variable declaration section

    // start: input variable declaration section
    @Input('eform-control-model') 
        set eformControlModel (inFormControlModel : IPhbkPhoneTypeView | any) {
            let hasChanged: boolean = this.rootDataSource.interface2Values(inFormControlModel, false);
            hasChanged = this.rootDataSource.updateByHiddenFilterFields(false) || hasChanged;
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.refresh();
            }
        }
        get eformControlModel(): IPhbkPhoneTypeView | any {
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


    constructor(private frmSrvPhbkPhoneTypeView: PhbkPhoneTypeViewService, public dialog: MatDialog, protected appGlblSettings: AppGlblSettingsService ) {
        this.appearance = this.appGlblSettings.appearance;
        this.mainFormGroup =  new FormGroup({});
        let locValidators: ValidatorFn[]; 
        locValidators = [ Validators.required,Validators.pattern(/^[-+]?\d+$/),Validators.max(2147483640),Validators.min(-2147483640) ];
        this.mainFormGroup.addControl('phoneTypeId', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(20),Validators.minLength(3) ];
        this.mainFormGroup.addControl('phoneTypeName', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.maxLength(250) ];
        this.mainFormGroup.addControl('phoneTypeDesc', new FormControl({ value: null, disabled: false}, locValidators));
        this.rootDataSource = new PhbkPhoneTypeViewDatasource (this.frmSrvPhbkPhoneTypeView,
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
        this.mainFormGroup.patchValue({'phoneTypeId': this.rootDataSource.getValue('phoneTypeId')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'phoneTypeName': this.rootDataSource.getValue('phoneTypeName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'phoneTypeDesc': this.rootDataSource.getValue('phoneTypeDesc')}, {emitEvent: false});
    }
    

} // the end of the PhbkPhoneTypeViewDformComponent class body


