
import { IaspnetmodelView } from './../interfaces/aspnetmodel-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetmodelViewAdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetmodelView | null;
        eformNewControlModel: IaspnetmodelView | null;
}

