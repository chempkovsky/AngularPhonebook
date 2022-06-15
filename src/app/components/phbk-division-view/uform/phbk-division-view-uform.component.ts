
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

import { IPhbkEnterpriseView } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view.interface';
import { IPhbkEnterpriseViewPage } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view-page.interface';
import { IPhbkEnterpriseViewFilter } from './../../phbk-enterprise-view/interfaces/phbk-enterprise-view-filter.interface';
import { PhbkEnterpriseViewService } from './../../../services/phbk-enterprise-view/phbk-enterprise-view.service';
import { PhbkEnterpriseViewDatasource } from './../../../services/phbk-enterprise-view/phbk-enterprise-view-datasource.class';

import { IPhbkDivisionView } from './../interfaces/phbk-division-view.interface';
import { IPhbkDivisionViewPage } from './../interfaces/phbk-division-view-page.interface';
import { IPhbkDivisionViewFilter } from './../interfaces/phbk-division-view-filter.interface';
import { PhbkDivisionViewService } from './../../../services/phbk-division-view/phbk-division-view.service';
import { PhbkDivisionViewDatasource } from './../../../services/phbk-division-view/phbk-division-view-datasource.class';

import { PhbkEnterpriseViewSdlgComponent } from './../../phbk-enterprise-view/sdlg/phbk-enterprise-view-sdlg.component';
import { IPhbkEnterpriseViewDlg } from './../../phbk-enterprise-view/sdlg/phbk-enterprise-view-dlg.interface';

@Component({
  selector: 'app-phbk-division-view-uform',
  templateUrl: './phbk-division-view-uform.component.html',
  styleUrls: ['./phbk-division-view-uform.component.css']
})
export class PhbkDivisionViewUformComponent implements OnInit, OnDestroy, IEventEmitterPub {
    frases: {[key:string]: string}  = {
        'Not-all-props': $localize`:Not all properties are set@@PhbkDivisionViewUformComponent.Not-all-props:Not all properties are set`,
        'caption': $localize`:Update Division@@PhbkDivisionViewUformComponent.Update-Item:Update Division`,
        'title': $localize`:Select Item@@PhbkDivisionViewUformComponent.SelItem:Select Item`,
        'Not-all-masters': $localize`:Not all masters have been set@@PhbkDivisionViewUformComponent.Not-all-masters:Not all masters have been set`,
        'DivisionId-label': $localize`:Id of the Division@@PhbkDivisionView.DivisionId-label:Id of the Division`,
        'DivisionId-hint': $localize`:Enter Division Id@@PhbkDivisionView.DivisionId-hint:Enter Division Id`,
        'DivisionId-placeholder': $localize`:Id of the Division@@PhbkDivisionView.DivisionId-placeholder:Id of the Division`,
        'DivisionName-label': $localize`:Name of the Division@@PhbkDivisionView.DivisionName-label:Name of the Division`,
        'DivisionName-hint': $localize`:Enter Division Name@@PhbkDivisionView.DivisionName-hint:Enter Division Name`,
        'DivisionName-placeholder': $localize`:Name of the Division@@PhbkDivisionView.DivisionName-placeholder:Name of the Division`,
        'DivisionDesc-label': $localize`:Description of the Division@@PhbkDivisionView.DivisionDesc-label:Description of the Division`,
        'DivisionDesc-hint': $localize`:Enter Enterprise Division Description@@PhbkDivisionView.DivisionDesc-hint:Enter Enterprise Division Description`,
        'DivisionDesc-placeholder': $localize`:Description of the Division@@PhbkDivisionView.DivisionDesc-placeholder:Description of the Division`,
        'EntrprsIdRef-label': $localize`:Id of the Enterprise@@PhbkDivisionView.EntrprsIdRef-label:Id of the Enterprise`,
        'EntrprsIdRef-hint': $localize`:Enter Enterprise  Id@@PhbkDivisionView.EntrprsIdRef-hint:Enter Enterprise  Id`,
        'EntrprsIdRef-placeholder': $localize`:Id of the Enterprise@@PhbkDivisionView.EntrprsIdRef-placeholder:Id of the Enterprise`,
        'EEntrprsName-label': $localize`:Name of the Enterprise@@PhbkDivisionView.EEntrprsName-label:Name of the Enterprise`,
        'EEntrprsName-hint': $localize`:Enter Enterprise Name@@PhbkDivisionView.EEntrprsName-hint:Enter Enterprise Name`,
        'EEntrprsName-placeholder': $localize`:Name of the Enterprise@@PhbkDivisionView.EEntrprsName-placeholder:Name of the Enterprise`,
    }

    @Output('before-submit') beforeSubmit = new EventEmitter();
    @Output('after-submit') afterSubmit = new EventEmitter<IPhbkDivisionView>();
    public doSubmit(): void {
        if (this.mainFormGroup.invalid || (!this.rootDataSource.refreshIsDefined())) {
            this.mainFormGroup.markAllAsTouched();
            this.appGlblSettings.showError('http', {message: this.frases['Not-all-props']});
            return;
        }
        this.beforeSubmit.emit(this.rootDataSource.values2Interface());
        this.rootDataSource.updateone();
    }
    public rootDataSourceOnUpdate(v: IViewModelDatasource): void { 
        this.afterSubmit.emit(this.rootDataSource.values2Interface());
    }
    ngOnDestroy(): void {
        this._Subscriptions.forEach((s: Subscription) => { s.unsubscribe(); });
    }
    ngOnInit(): void {
        this.ngOnInitCalled = true;
        this.rootDataSource.refresh();
        this.eEntrprsNameDtSrc.AfterMasterChanged.emit(this.eEntrprsNameDtSrc);
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
    public rootDataSource: PhbkDivisionViewDatasource | any = null;
    public eEntrprsNameBttnDsnbl: boolean = true;
    public eEntrprsNameDtSrc: PhbkEnterpriseViewDatasource | any = null;

    _Subscriptions : Subscription[] = [];
    // end: variable declaration section

    // start: input variable declaration section
    @Input('eform-control-model') 
        set eformControlModel (inFormControlModel : IPhbkDivisionView | any) {
            let hasChanged: boolean = this.rootDataSource.interface2Values(inFormControlModel, false);
            hasChanged = this.rootDataSource.updateByHiddenFilterFields(false) || hasChanged;
            if(this.ngOnInitCalled && hasChanged) {
                this.rootDataSource.refresh();
            }
        }
        get eformControlModel(): IPhbkDivisionView | any {
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


    constructor(private frmSrvPhbkEnterpriseView: PhbkEnterpriseViewService, private frmSrvPhbkDivisionView: PhbkDivisionViewService, public dialog: MatDialog, protected appGlblSettings: AppGlblSettingsService ) {
        this.appearance = this.appGlblSettings.appearance;
        this.mainFormGroup =  new FormGroup({});
        let locValidators: ValidatorFn[]; 
        let v: any;
        let frmcntrl: FormControl|any;
        locValidators = [ Validators.required,Validators.pattern(/^[-+]?\d+$/),Validators.max(2147483640),Validators.min(-2147483640) ];
        this.mainFormGroup.addControl('divisionId', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(20),Validators.minLength(3) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('divisionName', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('divisionName', val);
        }});
        locValidators = [ Validators.maxLength(250) ];
        frmcntrl = new FormControl({ value: null, disabled: false}, locValidators);
        this.mainFormGroup.addControl('divisionDesc', frmcntrl);
        frmcntrl.valueChanges.subscribe({next: (val: any) => { 
            this.rootDataSource.setValue('divisionDesc', val);
        }});
        locValidators = [ Validators.required,Validators.pattern(/^[-+]?\d+$/),Validators.max(2147483640),Validators.min(-2147483640) ];
        this.mainFormGroup.addControl('entrprsIdRef', new FormControl({ value: null, disabled: false}, locValidators));
        locValidators = [ Validators.required,Validators.maxLength(20),Validators.minLength(3) ];
        this.mainFormGroup.addControl('eEntrprsName', new FormControl({ value: null, disabled: false}, locValidators));
        this.rootDataSource = new PhbkDivisionViewDatasource (this.frmSrvPhbkDivisionView,
            this.appGlblSettings, null, null, ['Enterprise'],'');
        this.rootDataSource.setIsNew(false);
        this._Subscriptions.push(
            this.rootDataSource
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceAfterPropsChanged(v) } })
        );
//        this._Subscriptions.push(this.rootDataSource.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnIsDefinedChanged(v) } }));
        this._Subscriptions.push(this.rootDataSource.OnUpdate.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnUpdate(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnAdd.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnAdd(v) } }));
//        this._Subscriptions.push(this.rootDataSource.OnDelete.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSourceOnDelete(v) } }));
        this.eEntrprsNameDtSrc = new PhbkEnterpriseViewDatasource (this.frmSrvPhbkEnterpriseView,
            this.appGlblSettings, 'PhbkDivisionView', 'Enterprise', [],'Enterprise');
        this.eEntrprsNameDtSrc.setIsNew(false);
//        this._Subscriptions.push(this.eEntrprsNameDtSrc.OnIsDefinedChanged.subscribe({next: (v: IViewModelDatasource) => { this.eEntrprsNameOnIsDefinedChanged(v) } }));
        this._Subscriptions.push(
            this.eEntrprsNameDtSrc
                .AfterPropsChanged.subscribe({next: (v: IViewModelDatasource) => { this.eEntrprsNameAfterPropsChanged(v) } })
        );
        this._Subscriptions.push(
            this.eEntrprsNameDtSrc
                .AfterMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.eEntrprsNameAfterMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.eEntrprsNameDtSrc
                .OnMasterChanged.subscribe({next: (v: IViewModelDatasource) => { this.rootDataSource.submitOnMasterChanged(v) } })
        );
        this._Subscriptions.push(
            this.rootDataSource
            .OnDetailChanged.subscribe({next: (v: IViewModelDatasource) => { this.eEntrprsNameDtSrc.submitOnDetailChanged(v) } })
        );

    }
//    public rootDataSourceOnUpdate(v: IViewModelDatasource): void { }
//    public rootDataSourceOnAdd(v: IViewModelDatasource): void { }
//    public rootDataSourceOnDelete(v: IViewModelDatasource): void { }
//    public rootDataSourceOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public rootDataSourceAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'divisionId': this.rootDataSource.getValue('divisionId')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'divisionName': this.rootDataSource.getValue('divisionName')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'divisionDesc': this.rootDataSource.getValue('divisionDesc')}, {emitEvent: false});
        this.mainFormGroup.patchValue({'entrprsIdRef': this.rootDataSource.getValue('entrprsIdRef')}, {emitEvent: false});
        this.eEntrprsNameBttnDsnbl = this.rootDataSource.isUnderHiddenFilterFields('eEntrprsName');
    }
    
    public eEntrprsNameAfterMasterChanged(v: IViewModelDatasource): void {
        this.eEntrprsNameBttnDsnbl = 
            this.rootDataSource.isUnderHiddenFilterFields('eEntrprsName') ||
            (!this.eEntrprsNameDtSrc.isSetFilterByCurrDirMstrs());
    }
    public eEntrprsNameSrchClck(): void {
        if(!this.eEntrprsNameDtSrc.isSetFilterByCurrDirMstrs()) {
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
        flt.hiddenFilter = this.eEntrprsNameDtSrc.getWSFltrRsltByCurrDirMstrs();
        let w: string = this.appGlblSettings.getDialogWidth('PhbkDivisionView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkDivisionView');
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
                                        this.eEntrprsNameDtSrc.interface2Values(rslt.selectedItems[0], true);
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
//    public eEntrprsNameOnIsDefinedChanged(v: IViewModelDatasource): void { }
    public eEntrprsNameAfterPropsChanged(v: IViewModelDatasource): void {
        this.mainFormGroup.patchValue({'eEntrprsName': this.eEntrprsNameDtSrc.getValue('entrprsName')}, {emitEvent: false});
    }

} // the end of the PhbkDivisionViewUformComponent class body


