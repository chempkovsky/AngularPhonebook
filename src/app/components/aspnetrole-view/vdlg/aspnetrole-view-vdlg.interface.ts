
import { IaspnetroleView } from './../interfaces/aspnetrole-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetroleViewVdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetroleView | null;
        eformNewControlModel: IaspnetroleView | null;
}

