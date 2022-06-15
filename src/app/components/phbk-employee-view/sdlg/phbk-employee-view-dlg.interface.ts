
import { IPhbkEmployeeView } from './../interfaces/phbk-employee-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IPhbkEmployeeViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IPhbkEmployeeView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

