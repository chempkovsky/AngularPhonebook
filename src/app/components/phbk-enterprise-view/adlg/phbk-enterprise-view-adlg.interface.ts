
import { IPhbkEnterpriseView } from './../interfaces/phbk-enterprise-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';

export interface IPhbkEnterpriseViewAdlg {
        title : string | null; 
        hiddenFilter: Array<IWebServiceFilterRslt>;
        eformControlModel: IPhbkEnterpriseView | null;
        eformNewControlModel: IPhbkEnterpriseView | null;
}

