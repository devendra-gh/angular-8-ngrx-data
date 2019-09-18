import { ShoppingState } from '../models/shopping-state.model';
import { loadShoppingAction, loadShoppingSuccessAction, loadShoppingFailureAction, addItemAction, addItemSuccessAction, addItemFailureAction, deleteItemAction, deleteItemSuccessAction, deleteItemFailureAction } from '../actions/shopping.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
};

export const shoppingReducer = createReducer(
    initialState,
    on(loadShoppingAction, (state) => ({
        ...state,
        loading: true,
    })),
    on(loadShoppingSuccessAction, (state, action) => ({
        ...state,
        list: action.payload,
        loading: false,
    })),
    on(loadShoppingFailureAction, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
    })),
    on(addItemAction, (state) => ({
        ...state,
        loading: true,
    })),
    on(addItemSuccessAction, (state, action) => ({
        ...state,
        list: [...state.list, action.payload],
        loading: false,
    })),
    on(addItemFailureAction, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
    })),
    on(deleteItemAction, (state) => ({
        ...state,
        loading: true,
    })),
    on(deleteItemSuccessAction, (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false,
    })),
    on(deleteItemFailureAction, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
    })),
  );
  