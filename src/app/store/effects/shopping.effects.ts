import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { ShoppingService } from '../../service/shopping.service';
import { loadShoppingAction, loadShoppingSuccessAction, loadShoppingFailureAction, addItemAction, addItemSuccessAction, addItemFailureAction, deleteItemAction, deleteItemSuccessAction, deleteItemFailureAction } from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {
    constructor(
        private actions$: Actions,
        private shoppingService: ShoppingService
    ) { }

    loadShoppingAction = createEffect(() => this.actions$.pipe(
        ofType(loadShoppingAction),
        mergeMap(
            () => this.shoppingService.getShoppingItems()
                .pipe(
                    map(data => loadShoppingSuccessAction({ payload: data })),
                    catchError(error => of(loadShoppingFailureAction(error)))
                ),
        ),
    ));

    addItemAction = createEffect(() => this.actions$.pipe(
        ofType(addItemAction),
        mergeMap(
            (data) => this.shoppingService.addShoppingItems(data.payload)
                .pipe(
                    map(() => addItemSuccessAction({ payload: data.payload })),
                    catchError(error => of(addItemFailureAction({ payload: error })))
                ),
        ),
    ));

    deleteItemAction = createEffect(() => this.actions$
        .pipe(
            ofType(deleteItemAction),
            mergeMap(
                (data) => this.shoppingService.deleteShoppingItems(data.payload)
                    .pipe(
                        map(() => deleteItemSuccessAction({payload: data.payload})),
                        catchError(error => of(deleteItemFailureAction({payload: error})))
                    ),
            ),
    ));
}