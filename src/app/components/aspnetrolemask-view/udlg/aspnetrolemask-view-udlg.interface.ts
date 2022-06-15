
import { IaspnetrolemaskView } from './../interfaces/aspnetrolemask-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetrolemaskViewUdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetrolemaskView | null;
        eformNewControlModel: IaspnetrolemaskView | null;
}

