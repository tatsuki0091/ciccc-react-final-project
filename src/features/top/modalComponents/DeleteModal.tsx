import React, { useState, FormEvent } from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";
import { deleteData } from "../topSlice";
import { Data } from "../../types";
import { AppDispatch } from "../../../app/store";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

interface DATA {
  data: Data;
  index: number;
}
Modal.setAppElement("#root");

const DeleteModal = (props: DATA) => {
  const dispatch: AppDispatch = useDispatch();
  //   const data = useSelector(selectData);
  const [modalOpen, setOpenModal] = useState(false);
  //   const modalOpen: boolean = useSelector(selectDeleteModalOpen);
  function toggleModal() {
    // dispatch(changeDeleteModal());
    setOpenModal(!modalOpen);
  }
  const deleteTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(deleteData(props.data.id));
    toggleModal();
  };
  return (
    <>
      <Button onClick={toggleModal}>
        <DeleteIcon />
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
                deleteTask(event);
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Id"
                value={props.data.id}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Title"
                variant="outlined"
                value={props.data.title}
              />
              <TextField
                margin="normal"
                fullWidth
                label="State"
                variant="outlined"
                value={props.data.state}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Url"
                variant="outlined"
                value={props.data.url}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Created at"
                variant="outlined"
                value={props.data.created_at}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Updated at"
                variant="outlined"
                value={props.data.updated_at}
              />
              <Button type="submit">Delete</Button>
              <Button onClick={toggleModal}>Cancel</Button>
            </form>
          </FormControl>
        </Grid>
      </Modal>
    </>
  );
};

export default DeleteModal;
