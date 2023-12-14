import { IApp } from "src/types/apps.types";
import { ListResponse } from "src/types/types";
import { httpClient } from "../http-client";

export async function getApps(): Promise<ListResponse<IApp>> {
  const response = await httpClient.put<ListResponse<IApp>>(
    "/v1/app-service/get-apps",
    {
      pageNumber: 1,
      pageSize: 25,
    }
  );
  return response.data;
}
