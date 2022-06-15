
import { Component,  Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPhbkPhoneTypeViewDlg } from './../sdlg/phbk-phone-type-view-dlg.interface';
import { PhbkPhoneTypeViewLformComponent } from './../lform/phbk-phone-type-view-lform.component';
import { IPhbkPhoneTypeView } from './../interfaces/phbk-phone-type-view.interface';

@Component({
  selector: 'app-phbk-phone-type-view-ldlg',
  templateUrl: './phbk-phone-type-view-ldlg.component.html',
  styleUrls: ['./phbk-phone-type-view-ldlg.component.css']
})
export class PhbkPhoneTypeViewLdlgComponent { 
    constructor(public dialogRef: MatDialogRef<PhbkPhoneTypeViewLdlgComponent>, @Inject(MAT_DIALOG_DATA) public data: IPhbkPhoneTypeViewDlg ) { }
    currentRow: IPhbkPhoneTypeView |null = null;
    onSelectedRow(row:  IPhbkPhoneTypeView | null) {
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


