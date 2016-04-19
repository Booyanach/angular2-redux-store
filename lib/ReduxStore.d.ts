export declare abstract class ReduxStore {
    private store;
    static initialized: boolean;
    constructor(store: any);
    getState(): any;
    dispatch(action: any): any;
    subscribe(listener: Function): any;
}
