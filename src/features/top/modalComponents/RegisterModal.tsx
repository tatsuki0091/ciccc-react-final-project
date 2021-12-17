import React, { useState, FormEvent } from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";
import { addData } from "../topSlice";
import { Data } from "../../types";
import { AppDispatch } from "../../../app/store";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";

Modal.setAppElement("#root");

const RegisterModal = () => {
  const dispatch: AppDispatch = useDispatch();
  // const data = useSelector(selectData);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [url, setUrl] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [updated_at, setUpdatedAt] = useState("");
  const [modalOpen, setOpenModal] = useState(false);
  function toggleModal() {
    setOpenModal(!modalOpen);
  }
  const registerTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newData: Data = {
      id: id,
      title: title,
      state: state,
      url: url,
      created_at: created_at,
      updated_at: updated_at,
    };
    dispatch(addData(newData));
    toggleModal();
    setId("");
    setTitle("");
    setState("");
    setCreatedAt("");
    setUrl("");
    setUpdatedAt("");
  };

  return (
    <>
      <Button onClick={toggleModal}>+</Button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        contentLabel="Register"
        className={styles.mymodal}
        overlayClassName={styles.myoverlay}
        closeTimeoutMS={500}
      >
        <Grid container spacing={0} direction="column" alignItems="center">
          <FormControl>
            <form
              onSubmit={(event: FormEvent<HTMLFormElement>) =>
                registerTask(event)
              }
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
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
              <Button type="submit">Save</Button>
              <Button onClick={toggleModal}>Cancel</Button>
            </form>
          </FormControl>
        </Grid>
      </Modal>
    </>
  );
};

export default RegisterModal;
