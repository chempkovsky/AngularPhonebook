import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatRow } from '@angular/material/table';
import { ProgressBarMode } from '@angular/material/progress-bar';


import { AppGlblSettingsService } from './../../../shared/services/app-glbl-settings.service';
import { IWebServiceFilter } from './../../../shared/interfaces/web-service-filter.interface';
import { IWebServiceFilterDef } from './../../../shared/interfaces/web-service-filter-def.interface';
import { IWebServiceFilterOperator } from './../../../shared/interfaces/web-service-filter-operator.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';
// import { WebServiceFilterComponent } from './../../../shared/components/web-service-filter/web-service-filter.component';
import { PhbkPhoneTypeViewSformComponent } from './../sform/phbk-phone-type-view-sform.component';
import { IEventEmitterData } from './../../../shared/interfaces/event-emitter-data.interface';
import { IMenuItemData } from './../../../shared/interfaces/menu-item-data.interface';
import { IEventEmitterPub } from './../../../shared/interfaces/event-emitter-pub.interface';
import { IItemHeightData } from './../../../shared/interfaces/item-height-data.interface';
import { IMessageDialog } from './../../../shared/components/message-dialog/message-dialog.interface';
import { MessageDialogComponent } from './../../../shared/components/message-dialog/message-dialog.component';


import { IPhbkPhoneTypeView } from './../interfaces/phbk-phone-type-view.interface';
import { IPhbkPhoneTypeViewPage } from './../interfaces/phbk-phone-type-view-page.interface';
import { IPhbkPhoneTypeViewFilter } from './../interfaces/phbk-phone-type-view-filter.interface';
import { PhbkPhoneTypeViewService } from './../../../services/phbk-phone-type-view/phbk-phone-type-view.service';

import { IPhbkPhoneTypeViewVdlg } from './../vdlg/phbk-phone-type-view-vdlg.interface';
import { PhbkPhoneTypeViewVdlgComponent } from './../vdlg/phbk-phone-type-view-vdlg.component';
import { IPhbkPhoneTypeViewAdlg } from './../adlg/phbk-phone-type-view-adlg.interface';
import { PhbkPhoneTypeViewAdlgComponent } from './../adlg/phbk-phone-type-view-adlg.component';
import { IPhbkPhoneTypeViewUdlg } from './../udlg/phbk-phone-type-view-udlg.interface';
import { PhbkPhoneTypeViewUdlgComponent } from './../udlg/phbk-phone-type-view-udlg.component';
import { IPhbkPhoneTypeViewDdlg } from './../ddlg/phbk-phone-type-view-ddlg.interface';
import { PhbkPhoneTypeViewDdlgComponent } from './../ddlg/phbk-phone-type-view-ddlg.component';

@Component({
  selector: 'app-phbk-phone-type-view-lform',
  templateUrl: './phbk-phone-type-view-lform.component.html',
  styleUrls: ['./phbk-phone-type-view-lform.component.css']
})
export class PhbkPhoneTypeViewLformComponent implements OnInit, AfterViewInit, IEventEmitterPub, IItemHeightData {

    @Input('show-multi-selected-row') showMultiSelectedRow: boolean = true;

    @Output('multi-selected-row') multiSelectedRow: EventEmitter<Array<IPhbkPhoneTypeView>> = new EventEmitter<Array<IPhbkPhoneTypeView>>();
    onMultiSelectedRow(e: Array<IPhbkPhoneTypeView>): void {
        this.multiSelectedRow.emit(e);
    }

    @Input('caption') caption: string = 'Phone Type';

    @Input('filter-max-height')  filterMaxHeight: number | any = null;
    @Input('max-height') maxHeight: number | any = null;

    @Output('on-cont-menu-item-click') onContMenuItemEmitter = new EventEmitter<IEventEmitterData>();
    @Input('cont-menu-items') contMenuItems: Array<IMenuItemData> = [];
    onContMenuItemClicked(v: IEventEmitterData)  {
        this.onContMenuItemEmitter.emit(v);
    }


    isOnInitCalled: boolean = false;
    @Input('show-filter') showFilter: boolean = true;
    @Input('show-add-flt-item') showAddFltItem: boolean = true;

    protected _rowCommands: Array<IMenuItemData> = [];
    @Input('row-commands')  
        get rowCommands():Array<IMenuItemData> {
            return this._rowCommands;
        }
        set rowCommands(v :Array<IMenuItemData>) {
            if (typeof v === 'undefined') {
                this._rowCommands = [];
            } else if (!Array.isArray(v)) {
                this._rowCommands = [];
            } else {
                this._rowCommands =  v;
            }
            if(this.isOnInitCalled) {
                this.onRowMenuItemsData();
                this.cd.detectChanges();
            }
        }

    protected _tableCommands: Array<IMenuItemData> = [];
    @Input('table-commands')  
        get tableCommands(): Array<IMenuItemData> {
            return this._tableCommands;
        }
        set tableCommands(v :Array<IMenuItemData>) {
            if (typeof v === 'undefined') {
                this._tableCommands = [];
            } else if (!Array.isArray(v)) {
                this._tableCommands = [];
            } else {
                this._tableCommands =  v;
            }
            if(this.isOnInitCalled) {
                this.onTableMenuItemsData();
                this.cd.detectChanges();
            }
        }
    

    @Input('hidden-filter') hiddenFilter: Array<IWebServiceFilterRslt>|any = [];


    public currentRow: IPhbkPhoneTypeView | null = null;
    @Output('selected-row') selectedRow: EventEmitter<IPhbkPhoneTypeView> = new EventEmitter<IPhbkPhoneTypeView>();

    protected _canView: boolean = true;
    @Input('can-view') 
        get canView(): boolean|any {
            return this._canView;
        }
        set canView(v: boolean|any) {
            if(typeof v === 'undefined') return;
            if(v === null) return;
            if (v !== this._canView) {
                this._canView = v;
                if(this.isOnInitCalled) {
                    this.tableMenuItemsData[0].enabled = v;
                    this.cd.detectChanges();
                }
            }
        }

    protected _canAdd: boolean = true;
    @Input('can-add') 
        get canAdd(): boolean|any {
            return this._canAdd;
        }
        set canAdd(v: boolean|any) {
            if(typeof v === 'undefined') return;
            if(v === null) return;
            if (v !== this._canAdd) {
                this._canAdd = v;
                if(this.isOnInitCalled) {
                    this.tableMenuItemsData[0].enabled = v;
                    this.cd.detectChanges();
                }
            }
        }
    
    protected _canUpdate: boolean = true;
    @Input('can-update') 
        get canUpdate(): boolean|any {
            return this._canUpdate;
        }
        set canUpdate(v: boolean|any) {

            if(typeof v === 'undefined') return;
            if(v === null) return;
            if (v !== this._canUpdate) {
                this._canUpdate = v;
                if(this.isOnInitCalled) {
                    this.rowMenuItemsData[0].enabled = v;
                    this.cd.detectChanges();
                }
            }
        }

    protected _canDelete: boolean = true;
    @Input('can-delete') 
        get canDelete(): boolean|any {
            return this._canDelete;
        }
        set canDelete(v: boolean|any) {
            if(typeof v === 'undefined') return;
            if(v === null) return;
            if (v !== this._canDelete) {
                this._canDelete = v;
                if(this.isOnInitCalled) {
                    this.rowMenuItemsData[1].enabled = v;
                    this.cd.detectChanges();
                }
            }
        }


    rowMenuItemsData = [
          {id: 'update', caption: 'Modify Item', iconName: 'edit', iconColor: 'primary', enabled: true},
          {id: 'delete', caption: 'Delete Item', iconName: 'delete_forever', iconColor: 'warn', enabled: true},
          {id: 'view', caption: 'View Item', iconName: 'preview', iconColor: 'primary', enabled: true},
        ];
    tableMenuItemsData = [
        {id: 'add', caption: 'Add Item', iconName: 'create', iconColor: 'primary', enabled: true},
        {id: 'delete', caption: 'Delete Selected', iconName: 'delete_forever', iconColor: 'warn', enabled: true},
      ];

    constructor(private  frmRootSrv: PhbkPhoneTypeViewService, protected appGlblSettings: AppGlblSettingsService, public dialog: MatDialog, private cd: ChangeDetectorRef) {
    }
    permMask: number = 0;
    ngOnInit() {
        this.permMask = this.appGlblSettings.getViewModelMask('PhbkPhoneTypeView');
    
        this.onRowMenuItemsData();
        this.onTableMenuItemsData();
        this.isOnInitCalled = true;
    }

    onRowMenuItemsData() {
        let tmp: Array<IMenuItemData> = [
          {id: 'update', caption: 'Modify Item', iconName: 'edit', iconColor: 'primary', enabled: true },
          {id: 'delete', caption: 'Delete Item', iconName: 'delete_forever', iconColor: 'warn', enabled: true},
          {id: 'view', caption: 'View Item', iconName: 'preview', iconColor: 'primary', enabled: true },
        ];
        tmp = tmp.concat(this._rowCommands);
        tmp[0].enabled = this._canUpdate && ((this.permMask & 4) === 4)  ;
        tmp[1].enabled = this._canDelete && ((this.permMask & 2) === 2) ;
        tmp[2].enabled = this._canView ;
        this.rowMenuItemsData = tmp;
    }
    onTableMenuItemsData() {
        let tmp: Array<IMenuItemData> = [
            {id: 'add', caption: 'Add Item', iconName: 'create', iconColor: 'primary', enabled: true},
            {id: 'delete', caption: 'Delete Item', iconName: 'delete_forever', iconColor: 'warn', enabled: true},
        ];
        tmp = tmp.concat(this._tableCommands);
        tmp[0].enabled = this._canAdd && ((this.permMask & 8) === 8) ;
        tmp[1].enabled = this._canDelete && ((this.permMask & 2) === 2) ;
        this.tableMenuItemsData = tmp;
    }
    
    ngAfterViewInit() {
    }    


    onSelectRow(e: IPhbkPhoneTypeView|any) {
        this.selectedRow.emit(e);
    }


    onView(e: IPhbkPhoneTypeView) {
        let locdata: IPhbkPhoneTypeViewVdlg = {
            title: 'View item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkPhoneTypeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkPhoneTypeView');
        let dialogRef = this.dialog.open(PhbkPhoneTypeViewVdlgComponent, {
              data: locdata,
              maxWidth: mw,
              width: w,
            });
        dialogRef.afterClosed().subscribe(rslt => {
        });
    }


    onAdd(sender: PhbkPhoneTypeViewSformComponent) {
        let locdata: IPhbkPhoneTypeViewAdlg = {
            title: 'Add item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: null,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkPhoneTypeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkPhoneTypeView');
        let dialogRef = this.dialog.open(PhbkPhoneTypeViewAdlgComponent, {
              data: locdata,
              maxWidth: mw,
              width: w,
            });
        dialogRef.afterClosed().subscribe(rslt => {
            if (!(typeof rslt === 'undefined')) {
                if (!(rslt === null)) {
                    if (!( typeof rslt.eformNewControlModel === 'undefined') ) {
                        if (!( rslt.eformNewControlModel === null) ) {
                            if (!Array.isArray(sender.dataSource)) {
                                sender.dataSource = [];
                            }
                            sender.dataSource.splice(0, 0, rslt.eformNewControlModel);
                            sender.dataSource = sender.dataSource.slice(0);
                            let isNDef = true;
                            if (!(typeof sender.currentRow === 'undefined')) {
                                if (!(sender.currentRow === null)) {
                                    isNDef = false;
                                }
                            }
                            if(isNDef) {
                                sender.onSelectRow(rslt.eformNewControlModel);
                            }
                        }
                    }
                }
            }
        });
    }

    onEdit(e: IPhbkPhoneTypeView) {
        let locdata: IPhbkPhoneTypeViewUdlg = {
            title: 'Modify item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkPhoneTypeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkPhoneTypeView');
        let dialogRef = this.dialog.open(PhbkPhoneTypeViewUdlgComponent, {
              data: locdata,
              maxWidth: mw,
              width: w,
            });
        dialogRef.afterClosed().subscribe(rslt => {
            if (!(typeof rslt === 'undefined')) {
                if (!(rslt === null)) {
                    if (!((typeof rslt.eformControlModel === 'undefined') || (typeof rslt.eformNewControlModel === 'undefined'))) {
                        if (!((rslt.eformControlModel === null) || (rslt.eformNewControlModel === null))) {
                            this.frmRootSrv.src2dest(rslt.eformNewControlModel, rslt.eformControlModel);
                        }
                    }
                }
            }
        });
    }

    onDelete(e: IPhbkPhoneTypeView , sender: PhbkPhoneTypeViewSformComponent ) {
        let locdata: IPhbkPhoneTypeViewDdlg = {
            title: 'Delete item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkPhoneTypeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkPhoneTypeView');
        let dialogRef = this.dialog.open(PhbkPhoneTypeViewDdlgComponent, {
              data: locdata,
              maxWidth: mw,
              width: w,
            });
        dialogRef.afterClosed().subscribe(rslt => {
            if (!(typeof rslt === 'undefined')) {
                if (!(rslt === null)) {
                    if (!((typeof rslt.eformControlModel === 'undefined') || (typeof rslt.eformNewControlModel === 'undefined'))) {
                        if (!((rslt.eformControlModel === null) || (rslt.eformNewControlModel === null))) {
                            if (!Array.isArray(sender.dataSource)) {
                                sender.dataSource = [];
                            }
                            let i: number = sender.dataSource.indexOf(rslt.eformControlModel);
                            if (i > -1) {
                                if (!(sender.currentRow === null)) {
                                    if (sender.currentRow === rslt.eformControlModel) {
                                        if (i > 0) {
                                            sender.onSelectRow(sender.dataSource[i-1]);
                                        } else if (i < sender.dataSource.length-1) {
                                            sender.onSelectRow(sender.dataSource[i+1]);
                                        } else {
                                            sender.onSelectRow(null);
                                        }
                                    }
                                }
                                sender.dataSource.splice(i, 1);
                                sender.dataSource = sender.dataSource.slice(0);
                            } 
                        }
                    }
                }
            }
        });
    }

    @Output('on-row-command') onRowCommand: EventEmitter<IEventEmitterData> = new EventEmitter<IEventEmitterData>();
    @Output('on-table-command') onTableCommand: EventEmitter<IEventEmitterData> = new EventEmitter<IEventEmitterData>();

    onDeleteMultiple(sender: PhbkPhoneTypeViewSformComponent) {
        let locdata: IMessageDialog = {
            title: 'Delete Items',
            message: 'Delete Selected Items ?',
            iconname: 'warning',
            iconcolor: 'warn'
        };
        let dialogRef = this.dialog.open(MessageDialogComponent, {
              data: locdata,
            });
        dialogRef.afterClosed().subscribe(async rslt => {
            if (typeof rslt === 'undefined') return;
            if (rslt === null) return;
            let currRowsCp: Array<IPhbkPhoneTypeView> = sender.currentMultiRow.slice();
            let deletedRows: Array<IPhbkPhoneTypeView> = [];
            for(let row of currRowsCp) {
                try {
                    // let data: IPhbkPhoneTypeView  =  
                    await firstValueFrom<IPhbkPhoneTypeView>(this.frmRootSrv.deleteone(  row.phoneTypeId ));
                    deletedRows.push(row);
                } catch (error) {
                    this.appGlblSettings.showError('http', error)
                }
            }
            sender.deselectRows(deletedRows);
            deletedRows.forEach((r: IPhbkPhoneTypeView) => {
                let i: number = sender.dataSource.indexOf(r); 
                if(i > -1) sender.dataSource.splice(i, 1);
            });
            sender.dataSource = sender.dataSource.slice(0);
            if ((deletedRows.indexOf( sender.currentRow  as IPhbkPhoneTypeView) > -1) && (sender.dataSource.length > 0)) sender.onSelectRow(sender.dataSource[0]);
        });
    }

    rowCommand(v: IEventEmitterData) {
        if(v.id === 'update') {
            this.onEdit(v.value);
        } else if(v.id === 'delete') {
            this.onDelete(v.value, v.sender);
        } else if(v.id === 'view') {
            this.onView(v.value);
        } else {
            this.onRowCommand.emit(v);
        }
    }
    tableCommand(v: IEventEmitterData) {
        if(v.id === 'add') {
           this.onAdd( v.sender );
        } else if (v.id === 'delete') {
            this.onDeleteMultiple( v.sender );
        } else {
            this.onTableCommand.emit(v);
        }
    }
}


