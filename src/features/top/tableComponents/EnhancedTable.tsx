import React, { useEffect } from "react";
import { Data, Order } from "../../types";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {
  selectPage,
  selectRowsPerPage,
  selectOrder,
  changePage,
  changeRowsPerPage,
  changeOrder,
  selectOrderBy,
  changeOrderBy,
  selectDataList,
  refreshDataList,
  selectKeyword,
  changeKeyword,
} from "../topSlice";
import { getComparator, stableSort } from "../utils/sort";
import { AppDispatch } from "../../../app/store";
import EditModal from "../modalComponents/EditModal";
import DeleteModal from "../modalComponents/DeleteModal";

const EnhancedTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const dataList: Data[] = useSelector(selectDataList);
  const order: Order = useSelector(selectOrder);
  const orderBy: keyof Data = useSelector(selectOrderBy);
  const page: number = useSelector(selectPage);
  const rowsPerPage: number = useSelector(selectRowsPerPage);
  const keyword = useSelector(selectKeyword);
  let len = dataList.length;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    dispatch(changeOrder(isAsc ? "desc" : "asc"));
    dispatch(changeOrderBy(property));
  };

  let filterDataList: Data[] = [];
  dataList.map((data) => {
    if (data.title.indexOf(keyword, 0) > -1) {
      filterDataList.push(data);
    }
  });
  console.log(filterDataList);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(changePage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeRowsPerPage(event.target.value));
    dispatch(changePage(0));
  };

  useEffect(() => {
    if (len !== dataList.length) {
      dispatch(refreshDataList());
      len = dataList.length;
    }
  }, [dataList.length]);

  useEffect(() => {
    if (keyword !== "" && keyword) {
      dispatch(refreshDataList());
    }
  }, [keyword]);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid xs={12} spacing={10} style={{ width: "50%" }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Filter"
            value={keyword}
            onChange={(e) => dispatch(changeKeyword(e.target.value))}
          />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {filterDataList &&
                  stableSort(filterDataList, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      if (row.title.indexOf(keyword, 0) > -1) {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.title}
                          >
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.id}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.state}</TableCell>
                            <TableCell align="right">{row.url}</TableCell>
                            <TableCell align="right">
                              {row.created_at}
                            </TableCell>
                            <TableCell align="right">
                              {row.updated_at}
                            </TableCell>
                            <TableCell className={"update"} align="right">
                              <Button>
                                <EditModal
                                  data={{
                                    id: row.id,
                                    title: row.title,
                                    state: row.state,
                                    url: row.url,
                                    created_at: row.created_at,
                                    updated_at: row.updated_at,
                                  }}
                                  index={page * rowsPerPage + index}
                                />
                                {/* <EditModal
                                  data={dataList[page * rowsPerPage + index]}
                                  index={page * rowsPerPage + index}
                                /> */}
                              </Button>
                              <Button>
                                <DeleteModal
                                  data={{
                                    id: row.id,
                                    title: row.title,
                                    state: row.state,
                                    url: row.url,
                                    created_at: row.created_at,
                                    updated_at: row.updated_at,
                                  }}
                                  index={page * rowsPerPage + index}
                                />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      } else {
                        return <></>;
                      }
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={dataList && dataList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default EnhancedTable;
