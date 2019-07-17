import {ActionType, DataTypes} from './Types';
//import {data as phData} from './placeHolderData';
import {RestDataSource} from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type : ActionType.DATA_LOAD,
    payload : dataSource.GetData(dataType, params).then(response => ({dataType, data: response.data, total: Number(response.headers["x-total-count"])})),
    params
});

export const setPageSize = (newSize) => ({
    type: ActionType.DATA_SET_PAGESIZE, payload: newSize
});

export const setSortProperty = (newProp) => ({
    type: ActionType.DATA_SET_SORT_PROPERTY, payload: newProp
});

export const placeOrder = (order) => ({
    type: ActionType.DATA_STORE,
    payload : dataSource.StoreData(DataTypes.ORDERS,order).then(response => ({dataType: DataTypes.ORDERS, data: response.data}))
});