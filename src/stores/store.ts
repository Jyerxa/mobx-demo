import ItemStore from './itemStore';
import {createContext, useContext} from 'react';

// Add new stores to this interface and the const below.
interface Store {
    itemStore: ItemStore
}

export const store: Store = {
    itemStore: new ItemStore()
}


export const StoreContext = createContext(store);

// Custom hook providing store.
export function useStore() {
    return useContext(StoreContext);
}
