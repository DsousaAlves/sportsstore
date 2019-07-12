import {ActionType} from './Types';
import {data as phData} from './placeHolderData';


export const loadData = (dataType) => ({
    type : ActionType.DATA_LOAD,
    payload : {
        dataType : dataType,
        data : phData[dataType]
    }
});