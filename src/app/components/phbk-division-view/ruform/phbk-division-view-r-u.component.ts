
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, UrlSegment, ActivatedRouteSnapshot } from '@angular/router';

import { PhbkDivisionViewUformComponent } from './../uform/phbk-division-view-uform.component';
import { AppGlblSettingsService } from './../../../shared/services/app-glbl-settings.service';
import { PhbkDivisionViewService } from './../../../services/phbk-division-view/phbk-division-view.service';
import { IPhbkDivisionView } from './../interfaces/phbk-division-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';
import { IEventEmitterData } from './../../../shared/interfaces/event-emitter-data.interface';
import { IMenuItemData } from './../../../shared/interfaces/menu-item-data.interface';
import { IEventEmitterPub } from './../../../shared/interfaces/event-emitter-pub.interface';

@Component({
  selector: 'app-phbk-division-view-r-u',
  templateUrl: './phbk-division-view-r-u.component.html',
  styleUrls: ['./phbk-division-view-r-u.component.css']
})

export class PhbkDivisionViewRUComponent implements OnInit, IEventEmitterPub {
    frases: {[key:string]: string}  = {
        'title': $localize`:Update Division@@PhbkDivisionViewRUComponent.UpdatePhbkDivisionView:Update Division`,
    };

    title: string|any = this.frases['title'];
    np: string|any = '';
    outletNm : string = 'primary';
    oltParent: string = '';

    @Output('on-cont-menu-item-click') onContMenuItemEmitter = new EventEmitter<IEventEmitterData>();
    @Input('cont-menu-items') contMenuItems: Array<IMenuItemData> = [];
    onContMenuItemClicked(v: IEventEmitterData)  {
        this.onContMenuItemEmitter.emit(v);
    }
    hf: string = 'hf1';
    id: string = 'id1';
    depth: number = 1;
    @ViewChild(PhbkDivisionViewUformComponent) childForm: PhbkDivisionViewUformComponent | any;
    hiddenFilter: Array<IWebServiceFilterRslt> = [];
    eformControlModel: IPhbkDivisionView | null = null;
    constructor(protected route: ActivatedRoute, protected router: Router, protected appGlblSettings: AppGlblSettingsService, protected frmRootSrv: PhbkDivisionViewService) { }
    isdtl: boolean = false;
    ngOnInit() {
        if (!(typeof this.route.snapshot.data === 'undefined')) {
            if (!(this.route.snapshot.data === null)) {
                if (!(typeof this.route.snapshot.data['title'] === 'undefined')) {
                    this.title = this.route.snapshot.data['title'];
                }
                if (!(typeof this.route.snapshot.data['dp'] === 'undefined')) {
                    this.depth = this.route.snapshot.data['dp'];
                }
                if (!(typeof this.route.snapshot.data['hf'] === 'undefined')) {
                    this.hf = this.route.snapshot.data['hf'];
                }
                if (!(typeof this.route.snapshot.data['id'] === 'undefined')) {
                    this.id = this.route.snapshot.data['id'];
                }
                if (!(typeof this.route.snapshot.data['np'] === 'undefined')) {
                    this.np = this.route.snapshot.data['np'];
                }
/*
                if (!(typeof this.route.snapshot.data['oltn'] === 'undefined')) {
                    this.outletNm = this.route.snapshot.data['oltn'];
                }
*/
                if (!(typeof this.route.snapshot.data['isdtl'] === 'undefined')) {
                    this.isdtl = this.route.snapshot.data['isdtl'];
                }
/*
                if (!(typeof this.route.snapshot.data['oltp'] === 'undefined')) {
                    this.oltParent = this.route.snapshot.data['oltp'];
                }
*/
            }
        }
        if (!(typeof this.route.snapshot.params[this.hf] === 'undefined')) {
            this.hiddenFilter = this.frmRootSrv.getHiddenFilterAsFltRslt(JSON.parse(this.route.snapshot.params[this.hf]));
        }
        if (!(typeof this.route.snapshot.params[this.id] === 'undefined')) {
            this.eformControlModel =  JSON.parse(this.route.snapshot.params[this.id]);
        }
    }
    onAfterSubmit(newVal: IPhbkDivisionView) {
      
        let flt: any = {};
      
        flt['divisionId'] = newVal.divisionId;
      
        let qp: any = {
            mode: 'Upd',
            item:  JSON.stringify(flt)
        };
        this.router.navigate(['../../../'], {queryParams: qp, relativeTo: this.route});
/*
        if(this.outletNm === 'primary') {
            this.router.navigate(['../../../'], {queryParams: qp, relativeTo: this.route});
        } else {
            let qp0: string[] = [];
            qp0.push(this.oltParent);
            if (!(typeof this.route.snapshot.params[this.hf] === 'undefined')) {
                qp0.push(this.route.snapshot.params[this.hf])
            } else {
                qp0.push(JSON.stringify({}));
            }
            this.router.navigate([{outlets: { [this.outletNm]: null}}], {relativeTo: this.route.parent!.parent}).then(
                ()=> {
                    this.router.navigate([{ outlets: { [this.outletNm]: qp0 }}], {queryParams: qp, relativeTo: this.route.parent!.parent})
                }
            );
        }
*/
    }

    onCancel() {
        this.router.navigate(['../../../'], {relativeTo: this.route});
/*
        if(this.outletNm === 'primary') {
            this.router.navigate(['../../../'], {relativeTo: this.route});
        } else {
            let qp: string[] = [];
            qp.push(this.oltParent);
            if (!(typeof this.route.snapshot.params[this.hf] === 'undefined')) {
                qp.push(this.route.snapshot.params[this.hf])
            } else {
                qp.push(JSON.stringify({}));
            }
            this.router.navigate([{outlets: { [this.outletNm]: null}}], {relativeTo: this.route.parent!.parent}).then(
                ()=> {
                    this.router.navigate([{ outlets: { [this.outletNm]: qp }}], {relativeTo: this.route.parent!.parent})
                }
            );
        }
*/
    }
    onOk() {
        if (typeof this.childForm === 'undefined') return;
        if (this.childForm === null) return;
        this.childForm.doSubmit();
    }
}


