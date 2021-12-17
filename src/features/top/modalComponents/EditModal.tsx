import React, { useState, useEffect, FormEvent } from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";
import { selectDataList, updateData, refreshDataList } from "../topSlice";
import { Data } from "../../types";
import { AppDispatch } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@mui/icons-material/Edit";
import { LensTwoTone } from "@material-ui/icons";

interface DATA {
  data: Data;
  index: number;
}
Modal.setAppElement("#root");
const EditModal = (props: DATA) => {
  const [modalOpen, setOpenModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [id, setId] = useState(props.data.id);
  const [title, setTitle] = useState(props.data.title);
  const [state, setState] = useState(props.data.state);
  const [url, setUrl] = useState(props.data.url);
  const [created_at, setCreatedAt] = useState(props.data.created_at);
  const [updated_at, setUpdatedAt] = useState(props.data.updated_at);

  function toggleModal() {
    setOpenModal(!modalOpen);
  }
  const updateTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTime = new Date();
    let format_str = "YYYY-MM-DD hh:mm:ss";
    format_str = format_str.replace(
      /YYYY/g,
      updatedTime.getFullYear().toString()
    );
    format_str = format_str.replace(
      /MM/g,
      (updatedTime.getMonth() + 1).toString()
    );
    format_str = format_str.replace(/DD/g, updatedTime.getDate().toString());
    format_str = format_str.replace(/hh/g, updatedTime.getHours().toString());
    format_str = format_str.replace(/mm/g, updatedTime.getMinutes().toString());
    format_str = format_str.replace(/ss/g, updatedTime.getSeconds().toString());

    dispatch(
      updateData({
        data: {
          id: id,
          title: title,
          state: state,
          url: url,
          created_at: created_at,
          updated_at: format_str,
        },
        second: updatedTime.getSeconds(),
      })
    );
    toggleModal();
  };

  return (
    <>
      <Button onClick={toggleModal}>
        <EditIcon />
      </Button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={styles.mymodal}
        overlayClassName={styles.myoverlay}
        closeTimeoutMS={500}
      >
        <Grid container spacing={0} direction="column" alignItems="center">
          <FormControl>
            <form
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                updateTask(event);
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Id"
                value={id}
                disabled={true}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="State"
                variant="outlined"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Url"
                variant="outlined"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Created at"
                variant="outlined"
                value={created_at}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Updated at"
                variant="outlined"
                value={updated_at}
                onChange={(e) => setUpdatedAt(e.target.value)}
              />
              <Button type="submit">Update</Button>
              <Button onClick={toggleModal}>Cancel</Button>
            </form>
          </FormControl>
        </Grid>
      </Modal>
    </>
  );
};

export default EditModal;
