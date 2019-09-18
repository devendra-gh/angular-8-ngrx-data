import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export const loadShoppingAction = createAction('[SHOPPING] Load Shopping');

export const loadShoppingSuccessAction = createAction(
    '[SHOPPING] Load Shopping Success', 
    props<{ payload: Array<ShoppingItem> }>()
);

export const loadShoppingFailureAction = createAction(
    '[SHOPPING] Load Shopping Failure', 
    props<{ payload: Error }>()
);

export const addItemAction = createAction(
    '[SHOPPING] Add Item', 
    props<{ payload: ShoppingItem }>()
);

export const addItemSuccessAction = createAction(
    '[SHOPPING] Add Item Success', 
    props<{ payload: ShoppingItem }>()
);

export const addItemFailureAction = createAction(
    '[SHOPPING] Add Item Failure',
    props<{ payload: Error }>()
);

export const deleteItemAction = createAction(
    '[SHOPPING] Delete Item',
    props<{ payload: string }>()
);

export const deleteItemSuccessAction = createAction(
    '[SHOPPING] Delete Item Success',
    props<{ payload: string }>()
);

export const deleteItemFailureAction = createAction(
    '[SHOPPING] Delete Item Failure',
    props<{ payload: Error }>()
);

// export enum ShoppingActionType {
//     LOAD_SHOPPING = '[SHOPPING] Load Shopping',
//     LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
//     LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
//     ADD_ITEM = '[SHOPPING] Add Item',
//     ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
//     ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
//     DELETE_ITEM = '[SHOPPING] Delete Item',
//     DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
//     DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
// }

// export class LoadShoppingAction implements Action {
//     readonly type = ShoppingActionType.LOAD_SHOPPING;
// }

// export class LoadShoppingSuccessAction implements Action {
//     readonly type = ShoppingActionType.LOAD_SHOPPING_SUCCESS;

//     constructor(public payload: Array<ShoppingItem>) { }
// }

// export class LoadShoppingFailureAction implements Action {
//     readonly type = ShoppingActionType.LOAD_SHOPPING_FAILURE;

//     constructor(public payload: Error) { }
// }

// export class AddItemAction implements Action {
//     readonly type = ShoppingActionType.ADD_ITEM;

//     constructor(public payload: ShoppingItem) { }
// }

// export class AddItemSuccessAction implements Action {
//     readonly type = ShoppingActionType.ADD_ITEM_SUCCESS;

//     constructor(public payload: ShoppingItem) { }
// }

// export class AddItemFailureAction implements Action {
//     readonly type = ShoppingActionType.ADD_ITEM_FAILURE;

//     constructor(public payload: Error) { }
// }

// export class DeleteItemAction implements Action {
//     readonly type = ShoppingActionType.DELETE_ITEM;

//     constructor(public payload: string) { }
// }

// export class DeleteItemSuccessAction implements Action {
//     readonly type = ShoppingActionType.DELETE_ITEM_SUCCESS;

//     constructor(public payload: string) { }
// }

// export class DeleteItemFailureAction implements Action {
//     readonly type = ShoppingActionType.DELETE_ITEM_FAILURE;

//     constructor(public payload: Error) { }
// }

// export type ShoppingAction =
//     | LoadShoppingAction
//     | LoadShoppingSuccessAction
//     | LoadShoppingFailureAction
//     | AddItemAction
//     | AddItemSuccessAction
//     | AddItemFailureAction
//     | DeleteItemAction
//     | DeleteItemSuccessAction
//     | DeleteItemFailureAction;

