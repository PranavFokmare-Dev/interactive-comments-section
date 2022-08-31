export enum ResponseStatus{
    none=0,
    loading=1,
    success=2,
    failure=3
 
}
export interface ApiResponse<T>{
    result:T;
    status:ResponseStatus
}