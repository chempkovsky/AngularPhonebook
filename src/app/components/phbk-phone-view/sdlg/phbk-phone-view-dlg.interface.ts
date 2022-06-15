
import { IPhbkPhoneView } from './../interfaces/phbk-phone-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IPhbkPhoneViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IPhbkPhoneView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

