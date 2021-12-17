import React from "react";
import { EnhancedTableToolbarProps } from "../../types";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

// TODO ファイル自体を削除の可能性あり
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    ></Toolbar>
  );
};

export default EnhancedTableToolbar;
