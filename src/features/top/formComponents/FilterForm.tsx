import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { AppDispatch } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { Data } from "../../types";
import {
  selectKeyword,
  changeKeyword,
  filterDatas,
  setDefaultData,
  selectDataList,
  refreshDataList,
} from "../topSlice";

const FilterForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const keyword = useSelector(selectKeyword);
  const dataList = useSelector(selectDataList);
  const [result, setResult] = useState(dataList);
  useEffect(() => {
    if (dataList.length !== result.length) {
      dispatch(refreshDataList());
      setResult(dataList);
    }
  }, [dataList]);

  useEffect(() => {
    if (keyword !== "") {
      dispatch(setDefaultData(result));
      dispatch(filterDatas(keyword));
    } else {
      dispatch(setDefaultData(result));
    }
  }, [keyword]);

  return (
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
  );
};

export default FilterForm;
