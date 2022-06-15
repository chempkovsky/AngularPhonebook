
import { Component,  Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPhbkEnterpriseViewDlg } from './phbk-enterprise-view-dlg.interface';
//import { PhbkEnterpriseViewSdlgComponent } from './../sform/phbk-enterprise-view-sform.component';
import { IPhbkEnterpriseView } from './../interfaces/phbk-enterprise-view.interface';

@Component({
  selector: 'app-phbk-enterprise-view-sdlg',
  templateUrl: './phbk-enterprise-view-sdlg.component.html',
  styleUrls: ['./phbk-enterprise-view-sdlg.component.css']
})

export class PhbkEnterpriseViewSdlgComponent { 
    constructor(public dialogRef: MatDialogRef<PhbkEnterpriseViewSdlgComponent>, @Inject(MAT_DIALOG_DATA) public data: IPhbkEnterpriseViewDlg ) { }
    currentRow: IPhbkEnterpriseView |null = null;
    showMultiSelectedRow: boolean = false;
    onSelectedRow(row:  IPhbkEnterpriseView | null) {
        this.currentRow = row;
    }
    onCancel() {
        this.dialogRef.close(null);
    }
    onOk() {
        if(typeof this.currentRow == 'undefined') return;
        if(this.currentRow == null) return;
        this.data.selectedItems =  [this.currentRow];
        this.dialogRef.close(this.data);
    }
}


