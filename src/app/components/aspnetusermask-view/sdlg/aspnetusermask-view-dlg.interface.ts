
import { IaspnetusermaskView } from './../interfaces/aspnetusermask-view.interface';
import { IWebServiceFilterRslt } from './../../../shared/interfaces/web-service-filter-rslt.interface';


export interface IaspnetusermaskViewDlg {
        title : string | null; 
        showFilter: boolean;
        canAdd ? : boolean;
        canUpdate ? : boolean;
        canDelete ? : boolean;
        canView ? : boolean;
        hiddenFilter: Array<IWebServiceFilterRslt> | null;
        selectedItems: Array<IaspnetusermaskView> | null;
        maxHeight: number | null;
        filterMaxHeight: number | null;
}

