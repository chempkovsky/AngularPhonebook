
import { IaspnetuserrolesView } from './../interfaces/aspnetuserroles-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetuserrolesViewUdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetuserrolesView | null;
        eformNewControlModel: IaspnetuserrolesView | null;
}

