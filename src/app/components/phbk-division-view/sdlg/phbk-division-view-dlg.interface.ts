
import { IPhbkDivisionView } from './../interfaces/phbk-division-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IPhbkDivisionViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IPhbkDivisionView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

