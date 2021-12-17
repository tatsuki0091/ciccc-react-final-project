import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Order, Data } from "../types";
import { datas } from "./data/dummyData";
interface DataList {
  data: Data;
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: keyof Data;
  registerModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  dataList: Data[];
  keyword: string;
}

const initialState: DataList = {
  data: {
    id: "",
    title: "",
    state: "",
    url: "",
    created_at: "",
    updated_at: "",
  },
  page: 0,
  rowsPerPage: 5,
  order: "asc",
  orderBy: "title",
  registerModal: false,
  editModal: false,
  deleteModal: false,
  dataList: datas,
  keyword: "",
};

export const topSlice = createSlice({
  name: "top",
  initialState: initialState,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changeRowsPerPage(state, action) {
      state.rowsPerPage = parseInt(action.payload, 10);
    },
    changeOrder(state, action) {
      state.order = action.payload;
    },
    changeOrderBy(state, action) {
      state.orderBy = action.payload;
    },
    changeRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    changeEditModal(state) {
      state.editModal = !state.editModal;
    },
    changeDeleteModal(state) {
      state.deleteModal = !state.deleteModal;
    },
    changeKeyword(state, action) {
      state.keyword = action.payload;
    },
    filterDatas(state, action) {
      let newArray: Data[] = [];
      state.dataList.forEach((data) => {
        if (data.title.indexOf(action.payload, 0) > -1) {
          newArray.push(data);
        }
      });
      state.dataList = newArray;
    },
    setDefaultData(state, action) {
      state.dataList = action.payload;
    },
    // editTitle(state, action) {
    //   state.data.title = action.payload;
    // },
    // editState(state, action) {
    //   state.data.state = action.payload;
    // },
    // editUrl(state, action) {
    //   state.data.url = action.payload;
    // },
    // editCreatedAt(state, action) {
    //   state.data.created_at = action.payload;
    // },
    // editUpdatedAt(state, action) {
    //   state.data.updated_at = action.payload;
    // },
    refreshDataList(state) {
      state.dataList = [...state.dataList];
    },
    addData(state, action) {
      state.dataList = [...state.dataList, action.payload];
    },
    updateData(state, action) {
      let newArray: Data[] = [];
      state.dataList.forEach((data, index) => {
        if (data.id === action.payload.data.id) {
          newArray.push(action.payload.data);
        } else {
          newArray.push(data);
        }
      });
      state.dataList = [...newArray];
    },
    deleteData(state, action) {
      state.dataList = state.dataList.filter((x) => x.id !== action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const {
  changePage,
  changeRowsPerPage,
  changeOrder,
  changeOrderBy,
  changeRegisterModal,
  // editId,
  // editTitle,
  // editState,
  // editCreatedAt,
  // editUrl,
  // editUpdatedAt,
  addData,
  changeKeyword,
  updateData,
  deleteData,
  changeEditModal,
  changeDeleteModal,
  refreshDataList,
  filterDatas,
  setDefaultData,
} = topSlice.actions;

export const selectDeleteModalOpen = (state: RootState) =>
  state.top.deleteModal;
export const selectEditModalOpen = (state: RootState) => state.top.editModal;
export const selectDataList = (state: RootState) => state.top.dataList;
export const selectData = (state: RootState) => state.top.data;
export const selectRegisterModal = (state: RootState) =>
  state.top.registerModal;
export const selectPage = (state: RootState) => state.top.page;
export const selectRowsPerPage = (state: RootState) => state.top.rowsPerPage;
export const selectOrder = (state: RootState) => state.top.order;
export const selectOrderBy = (state: RootState) => state.top.orderBy;
export const selectKeyword = (state: RootState) => state.top.keyword;
export default topSlice.reducer;
