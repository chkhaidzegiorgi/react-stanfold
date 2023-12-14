import { concatMap, filter, from, map, switchMap } from "rxjs";
import { coreActions } from "./core.slice";
import type { Action } from "@reduxjs/toolkit";
import type { Observable } from "rxjs";
import { getProviders } from "src/core/services/example/providers";

export const setTokenEpic = (
  actions$: Observable<Action<any>>
): Observable<Action<any>> =>
  actions$.pipe(
    filter(coreActions.setToken.match),
    map(() => {
      console.log("setToken called");
      return coreActions.updateToken("token token");
    })
  );

export const setProvidersEpic = (
  actions$: Observable<Action<any>>
): Observable<Action<any>> =>
  actions$.pipe(
    filter(coreActions.setProviders.match),
    switchMap(() =>
      from(getProviders()).pipe(
        concatMap((data) => [coreActions.updateProviders(data)])
      )
    )
  );

export const coreEpics = [setTokenEpic, setProvidersEpic];
