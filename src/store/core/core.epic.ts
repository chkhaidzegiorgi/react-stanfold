import { filter, map } from "rxjs";
import { coreActions } from "./core.slice";
import type { Action } from "@reduxjs/toolkit";
import type { Observable } from "rxjs";

export const bootstrapAtpEpic = (
  actions$: Observable<Action<any>>
): Observable<Action<any>> =>
  actions$.pipe(
    filter(coreActions.setToken.match),
    map(() => {
      console.log("setToken called");
      return coreActions.updateToken("token token");
    })
  );

export const coreEpics = [bootstrapAtpEpic];
