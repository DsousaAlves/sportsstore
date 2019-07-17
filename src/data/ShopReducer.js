import {ActionType} from './Types';

export const ShopReducer = (storeData, action) => {
    
    switch(action.type){
        case ActionType.DATA_LOAD :
            return {
                ...storeData,
                [action.payload.dataType] : action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params
            }
        case ActionType.DATA_SET_PAGESIZE :
            return {...storeData, pageSize: action.payload};
        case ActionType.DATA_SET_SORT_PROPERTY :
            return {...storeData, sortKey: action.payload};
        default :
            return storeData || {};
    }
}