import { Data } from "../../types";

function createData(
  id: string,
  title: string,
  state: string,
  url: string,
  created_at: string,
  updated_at: string
): Data {
  return {
    id,
    title,
    state,
    url,
    created_at,
    updated_at,
  };
}

export const datas = [
  createData(
    "1",
    "test A",
    "open",
    "https://www.yahoo.co.jp/1",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "2",
    "test B",
    "open",
    "https://www.yahoo.co.jp/2",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "3",
    "test C",
    "open",
    "https://www.yahoo.co.jp/3",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "4",
    "test D",
    "open",
    "https://www.yahoo.co.jp/4",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "5",
    "test E",
    "open",
    "https://www.yahoo.co.jp/5",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "6",
    "test F",
    "open",
    "https://www.yahoo.co.jp/6",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "7",
    "test G",
    "open",
    "https://www.yahoo.co.jp/7",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "8",
    "test H",
    "open",
    "https://www.yahoo.co.jp/8",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "9",
    "test I",
    "open",
    "https://www.yahoo.co.jp/9",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "10",
    "test K",
    "open",
    "https://www.yahoo.co.jp/10",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "11",
    "test L",
    "open",
    "https://www.yahoo.co.jp/11",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "12",
    "test M",
    "open",
    "https://www.yahoo.co.jp/12",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
  createData(
    "13",
    "test N",
    "open",
    "https://www.yahoo.co.jp/13",
    "2021-12-13T21:15:55Z",
    "2021-12-13T21:15:55Z"
  ),
];
