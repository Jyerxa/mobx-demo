import {makeAutoObservable} from 'mobx';

export default class ItemStore {
    gadgetCount = 0;
    widgetCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    get totalCount() {
        return this.gadgetCount + this.widgetCount;
    }

    addGadget = () => {
        this.gadgetCount ++;
    }

    removeGadget = () => {
        if (this.gadgetCount > 0)
            this.gadgetCount --;
    }

    addWidget = () => {
        this.widgetCount ++;
    }

    removeWidget = () => {
        if (this.widgetCount > 0)
            this.widgetCount --;
    }
}
