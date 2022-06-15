
import { IPhbkDivisionView } from './../interfaces/phbk-division-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IPhbkDivisionViewAdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IPhbkDivisionView | null;
        eformNewControlModel: IPhbkDivisionView | null;
}

