import { httpClient } from "../http-client";

export async function getProviders(): Promise<string[]> {
  const response = await httpClient.get<string[]>("/v2/providers.json");
  return response.data;
}
