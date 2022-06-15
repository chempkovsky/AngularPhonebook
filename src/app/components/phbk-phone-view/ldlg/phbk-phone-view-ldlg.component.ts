
import { Component,  Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPhbkPhoneViewDlg } from './../sdlg/phbk-phone-view-dlg.interface';
import { PhbkPhoneViewLformComponent } from './../lform/phbk-phone-view-lform.component';
import { IPhbkPhoneView } from './../interfaces/phbk-phone-view.interface';

@Component({
  selector: 'app-phbk-phone-view-ldlg',
  templateUrl: './phbk-phone-view-ldlg.component.html',
  styleUrls: ['./phbk-phone-view-ldlg.component.css']
})
export class PhbkPhoneViewLdlgComponent { 
    constructor(public dialogRef: MatDialogRef<PhbkPhoneViewLdlgComponent>, @Inject(MAT_DIALOG_DATA) public data: IPhbkPhoneViewDlg ) { }
    currentRow: IPhbkPhoneView |null = null;
    onSelectedRow(row:  IPhbkPhoneView | null) {
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


