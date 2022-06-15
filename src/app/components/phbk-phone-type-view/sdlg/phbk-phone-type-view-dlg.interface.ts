
import { IPhbkPhoneTypeView } from './../interfaces/phbk-phone-type-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IPhbkPhoneTypeViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IPhbkPhoneTypeView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

