import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styles from "./styles.module.css";
function Content_right({ data }) {
  const [value, setValue] = useState("");
  const [banRo, setBanRo] = useState("");
  useEffect(() => {
    setValue(data);
  }, [data]);
  const giaiMa = () => {
    setBanRo(value);
  };
  return (
    <div className={styles.container}>
      <h3>Giải mã</h3>
      <div className={styles.right}>
        <div className={styles.right_top}>
          <p className={styles.right_top_left}>Bản mã:</p>
          <div className={styles.right_top_mid}>
            <TextareaAutosize
              className={styles.input}
              value={value}
              minRows={3}
              maxRows={8}
            />
          </div>
          <div className={styles.right_top_right}>
            <Button variant="contained" component="label">
              File
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.right_mid}>
        <Button variant="contained" onClick={giaiMa}>
          Giải mã
        </Button>
      </div>
      <div className={styles.right_bottom}>
        <p className={styles.right_bottom_left}>Bản rõ:</p>
        <div className={styles.right_bottom_mid}>
          <TextareaAutosize
            className={styles.input}
            minRows={3}
            maxRows={8}
            value={banRo}
          />
        </div>
        <div className={styles.right_bottom_right}>
          <Button variant="contained">Lưu</Button>
        </div>
      </div>
    </div>
  );
}
export default Content_right;
