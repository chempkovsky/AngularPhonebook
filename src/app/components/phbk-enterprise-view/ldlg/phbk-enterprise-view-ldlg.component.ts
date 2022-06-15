
import { Component,  Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPhbkEnterpriseViewDlg } from './../sdlg/phbk-enterprise-view-dlg.interface';
import { PhbkEnterpriseViewLformComponent } from './../lform/phbk-enterprise-view-lform.component';
import { IPhbkEnterpriseView } from './../interfaces/phbk-enterprise-view.interface';

@Component({
  selector: 'app-phbk-enterprise-view-ldlg',
  templateUrl: './phbk-enterprise-view-ldlg.component.html',
  styleUrls: ['./phbk-enterprise-view-ldlg.component.css']
})
export class PhbkEnterpriseViewLdlgComponent { 
    constructor(public dialogRef: MatDialogRef<PhbkEnterpriseViewLdlgComponent>, @Inject(MAT_DIALOG_DATA) public data: IPhbkEnterpriseViewDlg ) { }
    currentRow: IPhbkEnterpriseView |null = null;
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


