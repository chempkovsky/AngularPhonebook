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
import { PhbkEmployeeViewSformComponent } from './../sform/phbk-employee-view-sform.component';
import { IEventEmitterData } from './../../../shared/interfaces/event-emitter-data.interface';
import { IMenuItemData } from './../../../shared/interfaces/menu-item-data.interface';
import { IEventEmitterPub } from './../../../shared/interfaces/event-emitter-pub.interface';
import { IItemHeightData } from './../../../shared/interfaces/item-height-data.interface';
import { IMessageDialog } from './../../../shared/components/message-dialog/message-dialog.interface';
import { MessageDialogComponent } from './../../../shared/components/message-dialog/message-dialog.component';


import { IPhbkEmployeeView } from './../interfaces/phbk-employee-view.interface';
import { IPhbkEmployeeViewPage } from './../interfaces/phbk-employee-view-page.interface';
import { IPhbkEmployeeViewFilter } from './../interfaces/phbk-employee-view-filter.interface';
import { PhbkEmployeeViewService } from './../../../services/phbk-employee-view/phbk-employee-view.service';

import { IPhbkEmployeeViewVdlg } from './../vdlg/phbk-employee-view-vdlg.interface';
import { PhbkEmployeeViewVdlgComponent } from './../vdlg/phbk-employee-view-vdlg.component';
import { IPhbkEmployeeViewAdlg } from './../adlg/phbk-employee-view-adlg.interface';
import { PhbkEmployeeViewAdlgComponent } from './../adlg/phbk-employee-view-adlg.component';
import { IPhbkEmployeeViewUdlg } from './../udlg/phbk-employee-view-udlg.interface';
import { PhbkEmployeeViewUdlgComponent } from './../udlg/phbk-employee-view-udlg.component';
import { IPhbkEmployeeViewDdlg } from './../ddlg/phbk-employee-view-ddlg.interface';
import { PhbkEmployeeViewDdlgComponent } from './../ddlg/phbk-employee-view-ddlg.component';

@Component({
  selector: 'app-phbk-employee-view-lform',
  templateUrl: './phbk-employee-view-lform.component.html',
  styleUrls: ['./phbk-employee-view-lform.component.css']
})
export class PhbkEmployeeViewLformComponent implements OnInit, AfterViewInit, IEventEmitterPub, IItemHeightData {

    @Input('show-multi-selected-row') showMultiSelectedRow: boolean = true;

    @Output('multi-selected-row') multiSelectedRow: EventEmitter<Array<IPhbkEmployeeView>> = new EventEmitter<Array<IPhbkEmployeeView>>();
    onMultiSelectedRow(e: Array<IPhbkEmployeeView>): void {
        this.multiSelectedRow.emit(e);
    }

    @Input('caption') caption: string = 'Employee';

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


    public currentRow: IPhbkEmployeeView | null = null;
    @Output('selected-row') selectedRow: EventEmitter<IPhbkEmployeeView> = new EventEmitter<IPhbkEmployeeView>();

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

    constructor(private  frmRootSrv: PhbkEmployeeViewService, protected appGlblSettings: AppGlblSettingsService, public dialog: MatDialog, private cd: ChangeDetectorRef) {
    }
    permMask: number = 0;
    ngOnInit() {
        this.permMask = this.appGlblSettings.getViewModelMask('PhbkEmployeeView');
    
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


    onSelectRow(e: IPhbkEmployeeView|any) {
        this.selectedRow.emit(e);
    }


    onView(e: IPhbkEmployeeView) {
        let locdata: IPhbkEmployeeViewVdlg = {
            title: 'View item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkEmployeeViewVdlgComponent, {
              data: locdata,
              maxWidth: mw,
              width: w,
            });
        dialogRef.afterClosed().subscribe(rslt => {
        });
    }


    onAdd(sender: PhbkEmployeeViewSformComponent) {
        let locdata: IPhbkEmployeeViewAdlg = {
            title: 'Add item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: null,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkEmployeeViewAdlgComponent, {
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

    onEdit(e: IPhbkEmployeeView) {
        let locdata: IPhbkEmployeeViewUdlg = {
            title: 'Modify item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkEmployeeViewUdlgComponent, {
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

    onDelete(e: IPhbkEmployeeView , sender: PhbkEmployeeViewSformComponent ) {
        let locdata: IPhbkEmployeeViewDdlg = {
            title: 'Delete item',
            hiddenFilter: this.hiddenFilter,
            eformControlModel: e,
            eformNewControlModel: null
        };
        let w: string = this.appGlblSettings.getDialogWidth('PhbkEmployeeView');
        let mw: string = this.appGlblSettings.getDialogMaxWidth('PhbkEmployeeView');
        let dialogRef = this.dialog.open(PhbkEmployeeViewDdlgComponent, {
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

    onDeleteMultiple(sender: PhbkEmployeeViewSformComponent) {
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
            let currRowsCp: Array<IPhbkEmployeeView> = sender.currentMultiRow.slice();
            let deletedRows: Array<IPhbkEmployeeView> = [];
            for(let row of currRowsCp) {
                try {
                    // let data: IPhbkEmployeeView  =  
                    await firstValueFrom<IPhbkEmployeeView>(this.frmRootSrv.deleteone(  row.employeeId ));
                    deletedRows.push(row);
                } catch (error) {
                    this.appGlblSettings.showError('http', error)
                }
            }
            sender.deselectRows(deletedRows);
            deletedRows.forEach((r: IPhbkEmployeeView) => {
                let i: number = sender.dataSource.indexOf(r); 
                if(i > -1) sender.dataSource.splice(i, 1);
            });
            sender.dataSource = sender.dataSource.slice(0);
            if ((deletedRows.indexOf( sender.currentRow  as IPhbkEmployeeView) > -1) && (sender.dataSource.length > 0)) sender.onSelectRow(sender.dataSource[0]);
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


