export interface Data {
  id: string;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";
export interface EnhancedTableProps {
  //   numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  //   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  //   rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}
