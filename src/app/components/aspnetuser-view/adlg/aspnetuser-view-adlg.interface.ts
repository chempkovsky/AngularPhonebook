
import { IaspnetuserView } from './../interfaces/aspnetuser-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IaspnetuserViewAdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IaspnetuserView | null;
        eformNewControlModel: IaspnetuserView | null;
}

