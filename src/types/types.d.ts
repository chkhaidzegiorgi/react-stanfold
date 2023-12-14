import { IApp } from "./apps.types";

interface ListResponse<T> {
  appRows: T[];
  totalCount: number;
}
interface ListResponse<T> {
  appRows: T[];
}

type Page = {
  current: number;
  length: number;
  total: number;
};

// Apps
type IAppsState = {
  apps: IApp[];
  loading: boolean;
  page: Page;
};

interface RootState {
  apps: IAppsState;
}
