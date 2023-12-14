import { catchError, concatMap, filter, from, map, of, switchMap } from "rxjs";
import type { Action } from "@reduxjs/toolkit";
import type { Observable } from "rxjs";
import { appsActions } from "./apps.slice";
import { getApps } from "@/core/services/apps/apps";

export const getAppsEpic = (
  actions$: Observable<Action<any>>
): Observable<Action<any>> =>
  actions$.pipe(
    filter(appsActions.getApps.match),
    switchMap(() =>
      from(getApps()).pipe(concatMap((apps) => [appsActions.setApps(apps)]))
    )
  );

export const appsEpics = [getAppsEpic];
