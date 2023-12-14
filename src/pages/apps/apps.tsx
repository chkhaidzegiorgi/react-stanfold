import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_PaginationState,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { appsActions, appsSelectors } from "@/store/apps";
import { IApp } from "@/types/apps.types";
import { Page } from "@/types/types";

const Apps = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appsActions.getApps());
  }, []);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    console.log(pagination);
  }, [pagination.pageIndex, pagination.pageSize]);

  const data: IApp[] = useAppSelector(appsSelectors.appsListSelector);
  const pager: Page = useAppSelector(appsSelectors.pagerSelector);

  const columns = useMemo<MRT_ColumnDef<IApp>[]>(
    () => [
      {
        accessorKey: "appName",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 200,
      },
      {
        accessorFn: (row) => row.appSources.join(","),
        header: "Connector",
        size: 150,
      },
    ],
    []
  );
  console.log(pager);

  const table = useMaterialReactTable({
    columns,
    data,
    pageCount: pager.total,
    initialState: {
      pagination: { pageSize: pager.length, pageIndex: pager.current },
    },
    manualPagination: true,
    onPaginationChange: setPagination,
  });

  return (
    <>
      <h3>App Inventory</h3>
      <MaterialReactTable table={table} />
    </>
  );
};
export default Apps;
