
import { IPhbkEmployeeView } from './../interfaces/phbk-employee-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IPhbkEmployeeViewDdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IPhbkEmployeeView | null;
        eformNewControlModel: IPhbkEmployeeView | null;
}

