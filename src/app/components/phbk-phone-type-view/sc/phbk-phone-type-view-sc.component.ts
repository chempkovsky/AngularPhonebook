
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { IEventEmitterData } from './../../../shared/interfaces/event-emitter-data.interface';
import { IEventEmitterPub } from './../../../shared/interfaces/event-emitter-pub.interface';
import { IMenuItemData } from './../../../shared/interfaces/menu-item-data.interface';
import { AppGlblSettingsService } from './../../../shared/services/app-glbl-settings.service';



@Component({
  selector: 'app-phbk-phone-type-view-sc',
  templateUrl: './phbk-phone-type-view-sc.component.html',
  styleUrls: ['./phbk-phone-type-view-sc.component.css']
})
export class PhbkPhoneTypeViewScComponent implements OnInit, IEventEmitterPub {
  frases: {[key:string]: string}  = {
    'caption': $localize`:Phone Types@@PhbkPhoneTypeViewScComponent.caption:Phone Types`,
    'StaticContent': $localize`:Static Content for the view@@PhbkPhoneTypeViewScComponent.StaticContent:Static Content for the view`
  }

    @Input('caption') caption: string = this.frases['caption'];

    StaticContent: string =  this.frases['StaticContent'];

    @Input('filter-max-height')  filterMaxHeight: number | null = null;

    @Output('on-cont-menu-item-click') onContMenuItemEmitter = new EventEmitter<IEventEmitterData>();
    @Input('cont-menu-items') contMenuItems: Array<IMenuItemData> = [];
    onContMenuItemClicked(v: IMenuItemData)  {
        let e: IEventEmitterData = {
            id: v.id,
            sender: this,
            value: v.data
        }
        this.onContMenuItemEmitter.emit(e);
    }

    maxHeightEx: number|null = null;
    protected _maxHeight: number|null = null;
    @Input('max-height')
        get maxHeight(): number|null {
            return this._maxHeight;
        }
      set maxHeight(inp: number|null) {
        this._maxHeight = inp;
        if (!(typeof inp === 'undefined')) {
          if(!(inp === null)) {
            this.maxHeightEx = inp * this.appGlblSettings.tableHeightFactor + this.appGlblSettings.tableHeightAddition;
            this.ovrflw = 'auto';
            if(this.isOnInitCalled) {
              this.cd.detectChanges();
            }
            return;
          }
        }
        this.maxHeightEx = null;
        this.ovrflw = null;
        if(this.isOnInitCalled) {
            this.cd.detectChanges();
        }
      }
    constructor(public appGlblSettings: AppGlblSettingsService, private cd: ChangeDetectorRef) {
    }
    isOnInitCalled: boolean = false;
    public ovrflw: string | null = null;   
    ngOnInit() {
        this.isOnInitCalled = true;
    }
}

