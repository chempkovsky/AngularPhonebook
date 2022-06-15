
import { IPhbkPhoneTypeView } from './../interfaces/phbk-phone-type-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IPhbkPhoneTypeViewDdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IPhbkPhoneTypeView | null;
        eformNewControlModel: IPhbkPhoneTypeView | null;
}

