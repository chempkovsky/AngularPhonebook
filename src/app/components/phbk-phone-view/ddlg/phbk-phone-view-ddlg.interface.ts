
import { IPhbkPhoneView } from './../interfaces/phbk-phone-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IPhbkPhoneViewDdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IPhbkPhoneView | null;
        eformNewControlModel: IPhbkPhoneView | null;
}

