
import { IaspnetmodelView } from './../interfaces/aspnetmodel-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetmodelViewVdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetmodelView | null;
        eformNewControlModel: IaspnetmodelView | null;
}

