
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

import { IPhbkDivisionView } from './../../phbk-division-view/interfaces/phbk-division-view.interface';
import { IPhbkDivisionViewPage } from './../../phbk-division-view/interfaces/phbk-division-view-page.interface';
import { IPhbkDivisionViewFilter } from './../../phbk-division-view/interfaces/phbk-division-view-filter.interface';
import { PhbkDivisionViewService } from './../../../services/phbk-division-view/phbk-division-view.service';
import { PhbkDivisionViewDatasource } from './../../../services/phbk-division-view/phbk-division-view-datasource.class';

import { IPhbkEnterpriseView } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view.interface';
import { IPhbkEnterpriseViewPage } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view-page.interface';
import { IPhbkEnterpriseViewFilter } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view-filter.interface';
import { PhbkEnterpriseViewService } from './../../../services/phbk-enterprise-view/phbk-enterprise-view.service';
import { PhbkEnterpriseViewDatasource } from './../../../services/phbk-enterprise-view/phbk-enterprise-view-datasource.class';

import { IPhbkEmployeeView } from './../interfaces/phbk-employee-view.interface';
import { IPhbkEmployeeViewPage } from './../interfaces/phbk-employee-view-page.interface';
import { IPhbkEmployeeViewFilter } from './../interfaces/phbk-employee-view-filter.interface';
import { PhbkEmployeeViewService } from './../../../services/phbk-employee-view/phbk-employee-view.service';
import { PhbkEmployeeViewDatasource } from './../../../services/phbk-employee-view/phbk-employee-view-datasource.class';

import { PhbkDivisionViewSdlgComponent } from './../../phbk-division-view/sdlg/phbk-division-view-sdlg.component';
import { IPhbkDivisionViewDlg } from './../../phbk-division-view/sdlg/phbk-division-view-dlg.interface';
import { PhbkEnterpriseViewSdlgComponent } from './../../phbk-enterprise-view/sdlg/phbk-enterprise-view-sdlg.component';
import { IPhbkEnterpriseViewDlg } from './../../phbk-enterprise-view/sdlg/phbk-enterprise-view-dlg.interface';

@Component({
  selector: 'app-phbk-employee-view-aform',
  templateUrl: './phbk-employee-view-aform.component.html',
  styleUrls: ['./phbk-employee-view-aform.component.css']
})
export class PhbkEmployeeViewAformComponent implements OnInit, OnDestroy, IEventEmitterPub {

    frases: {[key:string]: string}  = {
        'Not-all-props': $localize`:Not all properties are set@@PhbkEmployeeViewAformComponent.Not-all-props:Not all properties are set`,
        'caption': $localize`:Add Employee@@PhbkEmployeeViewAformComponent.Review-Item:Add Employee`,
        'title': $localize`:Select Item@@PhbkEmployeeViewAformComponent.SelItem:Select Item`,
        'Not-all-masters': $localize`:Not all masters have been set@@PhbkEmployeeViewAformComponent.Not-all-masters:Not all masters have been set`,
        'EmployeeId-label': $localize`:Id of the Employee@@PhbkEmployeeView.EmployeeId-label:Id of the Employee`,
        'EmployeeId-hint': $localize`:Enter Employee  Id@@PhbkEmployeeView.EmployeeId-hint:Enter Employee  Id`,
        'EmployeeId-placeholder': $localize`:Id of the Employee@@PhbkEmployeeView.EmployeeId-placeholder:Id of the Employee`,
        'EmpFirstName-label': $localize`:Employee First Name@@PhbkEmployeeView.EmpFirstName-label:Employee First Name`,
        'EmpFirstName-hint': $localize`:Enter Employee First Name@@PhbkEmployeeView.EmpFirstName-hint:Enter Employee First Name`,
        'EmpFirstName-placeholder': $localize`:Employee First Name@@PhbkEmployeeView.EmpFirstName-placeholder:Employee First Name`,
        'EmpLastName-label': $localize`:Employee Last Name@@PhbkEmployeeView.EmpLastName-label:Employee Last Name`,
        'EmpLastName-hint': $localize`:Enter Employee Last Name@@PhbkEmployeeView.EmpLastName-hint:Enter Employee Last Name`,
        'EmpLastName-placeholder': $localize`:Employee Last Name@@PhbkEmployeeView.EmpLastName-placeholder:Employee Last Name`,
        'EmpSecondName-label': $localize`:Employee Second Name@@PhbkEmployeeView.EmpSecondName-label:Employee Second Name`,
        'EmpSecondName-hint': $localize`:Enter Employee Second Name@@PhbkEmployeeView.EmpSecondName-hint:Enter Employee Second Name`,
        'EmpSecondName-placeholder': $localize`:Employee Second Name@@PhbkEmployeeView.EmpSecondName-placeholder:Employee Second Name`,
        'DivisionIdRef-label': $localize`:Id of the Division@@PhbkEmployeeView.DivisionIdRef-label:Id of the Division`,
        'DivisionIdRef-hint': $localize`:Enter Division Id@@PhbkEmployeeView.DivisionIdRef-hint:Enter Division Id`,
        'DivisionIdRef-placeholder': $localize`:Id of the Division@@PhbkEmployeeView.DivisionIdRef-placeholder:Id of the Division`,
        'DDivisionName-label': $localize`:Name of the Division@@PhbkEmployeeView.DDivisionName-label:Name of the Division`,
        'DDivisionName-hint': $localize`:Enter Division Name@@PhbkEmployeeView.DDivisionName-hint:Enter Division Name`,
        'DDivisionName-placeholder': $localize`:Name of the Division@@PhbkEmployeeView.DDivisionName-placeholder:Name of the Division`,
        'DEEntrprsName-label': $localize`:Name of the Enterprise@@PhbkEmployeeView.DEEntrprsName-label:Name of the Enterprise`,
        'DEEntrprsName-hint': $localize`:Enter Enterprise Name@@PhbkEmployeeView.DEEntrprsName-hint:Enter Enterprise Name`,
        'DEEntrprsName-placeholder': $localize`:Name of the Enterprise@@PhbkEmployeeView.DEEntrprsName-placeholder:Name of the Enterprise`,
    }

    @Output('before-submit') beforeSubmit = new EventEmitter();
    @Output('after-submit') afterSubmit = new EventEmitter<IPhbkEmployeeView>();
    public doSubmit(): void {
        if (this.mainFormGroup.invalid || (!this.rootDataSource.refreshIsDefined())) {
            this.mainFormGroup.markAllAsTouched();
            this.appGlblSettings.showError('http', {message: this.frases['Not-all-props']});
            return;
        }
        this.beforeSubmit.emit(this.rootDataSource.values2Interface());
        this.rootDataSource.addone();
    }
    public rootDataSourceOnAdd(v: IViewModelDatasource): void { 
        this.afterSubmit.emit(this.rootDataSource.values2Interface());
    }
    ngOnDestroy(): void {
        this._Subscriptions.forEach((s: Subscription) => { s.unsubscribe(); });
    }
    ngOnInit(): void {
        this.ngOnInitCalled = true;
        this.rootDataSource.setValue('employeeId', 0);
        this.rootDataSource.doEmitEvent(false);
        this.dEEntrprsNameDtSrc.AfterMasterChanged.emit(this.dEEntrprsNameDtSrc);
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
    public rootDataSource: PhbkEmployeeViewDatasource | any = null;
    public dDivisionNameBttnDsnbl: boolean = true;
    public dDivisionNameDtSrc: PhbkDivisionViewDatasource | any = null;
    public dEEntrprsNameBttnDsnbl: boolean = true;
    public dEEntrprsNameDtSrc: PhbkEnterpriseViewDatasource | any = null;

    _Subscriptions : Subscription[] = [];
    // end: variable declaration section

    // start: input variable declaration section
    @Input('eform-control-model') 
        set eformControlModel (inFormControlModel : IPhbkEmployeeView | any) {
            let hasChanged: boolean = this.rootDataSource.interface2Values(inFormControlModel, false);
            hasChanged = this.rootDataSource.updateByHiddenFilterFields(false) || hasChanged;
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.refresh();
            }
        }
        get eformControlModel(): IPhbkEmployeeView | any {
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


    constructor(private frmSrvPhbkDivisionView: PhbkDivisionViewService, private frmSrvPhbkEnterpriseView: PhbkEnterpriseViewService, private frmSrvPhbkEmployeeView: PhbkEmployeeViewService, public dialog: MatDialog, protected appGlblSettings: AppGlblSettingsService ) {
        this.appearance = this.appGlblSettings.appearance;
        this.mainFormGroup =  new FormGroup({});
        let locValidators: ValidatorFn[]; 
        let frmcntrl: FormControl|any;
        locValidators = [ ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('employeeId', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('employeeId', val);
        }});
        locValidators = [ Validators.required,Validators.maxLength(25),Validators.minLength(3) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('empFirstName', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('empFirstName', val);
        }});
        locValidators = [ Validators.required,Validators.maxLength(40),Validators.minLength(3) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('empLastName', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('empLastName', val);
        }});
        locValidators = [ Validators.maxLength(25) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('empSecondName', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('empSecondName', val);
        }});
        locValidators = [ Validators.required,Validators.pattern(/^[-+]?\d+$/),Validators.max(2147483640),Validators.min(-2147483640) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('divisionIdRef', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('divisionIdRef', val);
        }});
        locValidators = [ Validators.required,Validators.maxLength(20),Validators.minLength(3) ];
        this.mainFormGroup.addControl('dDivisionName', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(20),Validators.minLength(3) ];
        this.mainFormGroup.addControl('dEEntrprsName', new FormControl({ value: null, disabled: false}, locValidators));
        this.rootDataSource = new PhbkEmployeeViewDatasource (this.frmSrvPhbkEmployeeView,
            this.appGlblSettings, null, null, ['Division'],'');
        this.rootDataSource.setIsNew(false);
        this._Subscriptions.push(
            this.rootDataSource
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceAfterPropsChanged(v) } })
        );
//        this._Subscriptions.push(this.rootDataSource.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnIsDefinedChanged(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnUpdate.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnUpdate(v) } }));
        this._Subscriptions.push(this.rootDataSource.OnAdd.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnAdd(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnDelete.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnDelete(v) } }));
        this.dDivisionNameDtSrc = new PhbkDivisionViewDatasource (this.frmSrvPhbkDivisionView,
            this.appGlblSettings, 'PhbkEmployeeView', 'Division', ['Enterprise'],'Division');
        this.dDivisionNameDtSrc.setIsNew(false);
        this.dEEntrprsNameDtSrc = new PhbkEnterpriseViewDatasource (this.frmSrvPhbkEnterpriseView,
            this.appGlblSettings, 'PhbkDivisionView', 'Enterprise', [],'Division.Enterprise');
        this.dEEntrprsNameDtSrc.setIsNew(false);
//        this._Subscriptions.push(this.dDivisionNameDtSrc.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.dDivisionNameOnIsDefinedChanged(v) } }));
        this._Subscriptions.push(
            this.dDivisionNameDtSrc
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.dDivisionNameAfterPropsChanged(v) } })
        );
        this._Subscriptions.push(
            this.dDivisionNameDtSrc
                .AfterMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.dDivisionNameAfterMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.dDivisionNameDtSrc
                .OnMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSource.submitOnMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.rootDataSource
            .OnDetailChanged.subscribe({next: (v: IViewModelDatasource) => { this.dDivisionNameDtSrc.submitOnDetailChanged(v) } })
        );

//        this._Subscriptions.push(this.dEEntrprsNameDtSrc.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.dEEntrprsNameOnIsDefinedChanged(v) } }));
        this._Subscriptions.push(
            this.dEEntrprsNameDtSrc
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.dEEntrprsNameAfterPropsChanged(v) } })
        );
        this._Subscriptions.push(
            this.dEEntrprsNameDtSrc
                .AfterMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.dEEntrprsNameAfterMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.dEEntrprsNameDtSrc
                .OnMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.dDivisionNameDtSrc.submitOnMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.dDivisionNameDtSrc
            .OnDetailChanged.subscribe({next: (v: IViewModelDatasource) => { this.dEEntrprsNameDtSrc.submitOnDetailChanged(v) } })
        );
    }
//    public rootDataSourceOnUpdate(v: IViewModelDatasource): void { }
//    public rootDataSourceOnAdd(v: IViewModelDatasource): void { }
//    public rootDataSourceOnDelete(v: IViewModelDatasource): void { }
//    public rootDataSourceOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public rootDataSourceAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'employeeId': this.rootDataSource.getValue('employeeId')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'empFirstName': this.rootDataSource.getValue('empFirstName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'empLastName': this.rootDataSource.getValue('empLastName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'empSecondName': this.rootDataSource.getValue('empSecondName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'divisionIdRef': this.rootDataSource.getValue('divisionIdRef')}, {emitEvent: false});
        this.dDivisionNameBttnDsnbl = this.rootDataSource.isUnderHiddenFilterFields('dDivisionName');
        this.dEEntrprsNameBttnDsnbl = this.rootDataSource.isUnderHiddenFilterFields('dEEntrprsName');
    }
    
    public dDivisionNameAfterMasterChanged(v: IViewModelDatasource): void {
        this.dDivisionNameBttnDsnbl = 
            this.rootDataSource.isUnderHiddenFilterFields('dDivisionName') ||
            (!this.dDivisionNameDtSrc.isSetFilterByCurrDirMstrs());
    }
    public dDivisionNameSrchClck(): void {
        if(!this.dDivisionNameDtSrc.isSetFilterByCurrDirMstrs()) {
            this.appGlblSettings.showError('http', {message:this.frases['Not-all-masters'],});
            return;
        }
        let flt: IPhbkDivisionViewDlg = {
            title: this.frases['title'],
            showFilter: true,
            canAdd: false,
            canUpdate: false,
            canDelete: false,
            hiddenFilter: [], // Array<IWebServiceFilterRslt>
            selectedItems: null,
            maxHeight: 6,
            filterMaxHeight: 2
        };
        flt.hiddenFilter = this.dDivisionNameDtSrc.getWSFltrRsltByCurrDirMstrs();
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkDivisionViewSdlgComponent, {
            data: flt,
            maxWidth: mw,
            width: w,
        });
        dialogRef.afterClosed()
            .subscribe({
                next: (rslt) => {
                    if (!(typeof rslt === 'undefined')) {
                        if (!(rslt === null)) {
                            if (!(rslt.selectedItems === 'undefined')) {
                                if(Array.isArray(rslt.selectedItems)) {
                                    if(rslt.selectedItems.length > 0) {
                                        this.dDivisionNameDtSrc.interface2Values(rslt.selectedItems[0], true);
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
//    public dDivisionNameOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public dDivisionNameAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'dDivisionName': this.dDivisionNameDtSrc.getValue('divisionName')}, {emitEvent: false});
    }
    public dEEntrprsNameAfterMasterChanged(v: IViewModelDatasource): void {
        this.dEEntrprsNameBttnDsnbl = 
            this.rootDataSource.isUnderHiddenFilterFields('dEEntrprsName') ||
            (!this.dEEntrprsNameDtSrc.isSetFilterByCurrDirMstrs());
    }
    public dEEntrprsNameSrchClck(): void {
        if(!this.dEEntrprsNameDtSrc.isSetFilterByCurrDirMstrs()) {
            this.appGlblSettings.showError('http', {message:this.frases['Not-all-masters'],});
            return;
        }
        let flt: IPhbkEnterpriseViewDlg = {
            title: this.frases['title'],
            showFilter: true,
            canAdd: false,
            canUpdate: false,
            canDelete: false,
            hiddenFilter: [], // Array<IWebServiceFilterRslt>
            selectedItems: null,
            maxHeight: 6,
            filterMaxHeight: 2
        };
        flt.hiddenFilter = this.dEEntrprsNameDtSrc.getWSFltrRsltByCurrDirMstrs();
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkEnterpriseViewSdlgComponent, {
            data: flt,
            maxWidth: mw,
            width: w,
        });
        dialogRef.afterClosed()
            .subscribe({
                next: (rslt) => {
                    if (!(typeof rslt === 'undefined')) {
                        if (!(rslt === null)) {
                            if (!(rslt.selectedItems === 'undefined')) {
                                if(Array.isArray(rslt.selectedItems)) {
                                    if(rslt.selectedItems.length > 0) {
                                        this.dEEntrprsNameDtSrc.interface2Values(rslt.selectedItems[0], true);
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
//    public dEEntrprsNameOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public dEEntrprsNameAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'dEEntrprsName': this.dEEntrprsNameDtSrc.getValue('entrprsName')}, {emitEvent: false});
    }

} // the end of the PhbkEmployeeViewAformComponent class body


