
import { IPhbkEnterpriseView } from './../interfaces/phbk-enterprise-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IPhbkEnterpriseViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IPhbkEnterpriseView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

