import styles from "./styles.module.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { useState } from "react";
function Content_left({ switchData }) {
  const [banRo, setBanRo] = useState("");
  const [banMa, setBanMa] = useState("");
  const onChangeText = (e) => {
    setBanRo(e.target.value);
  };
  const maHoa = () => {
    setBanMa(banRo);
  };
  const switchTo = () => {
    switchData(banMa);
  };
  // const handleOnChangeFile = (e) => {
  //   var selectorFiles = e.target.files;
  //   console.log("ten file", selectorFiles);
  //   const fileReader = new FileReader();
  //   fileReader.readAsText(selectorFiles[0]);
  //   fileReader.onload = (e) => {
  //     const contents = e.target.result;
  //     setBanRo(contents);
  //     console.log(contents);
  //   };
  // };
  const handleOnChangeFile = (e) => {
    console.log("showfile", e);
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      console.log("content", content);
      var doc = new Docxtemplater(new PizZip(content), {
        delimiters: {
          start: "12op1j2po1j2poj1po",
          end: "op21j4po21jp4oj1op24j",
        },
      });
      var text = doc.getFullText();
      setBanRo(text);
    };

    reader.readAsBinaryString(e.target.files[0]);
  };
  return (
    <div className={styles.container}>
      <h3>MÃ HÓA</h3>
      <div className={styles.left}>
        <div className={styles.left_top}>
          <p className={styles.left_top_left}>Bản rõ:</p>
          <div className={styles.left_top_mid}>
            <TextareaAutosize
              className={styles.input}
              value={banRo}
              minRows={3}
              maxRows={8}
              onChange={onChangeText}
            />
          </div>
          <div className={styles.left_top_right}>
            <Button variant="contained" component="label">
              File
              <input type="file" hidden onChange={handleOnChangeFile} />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.left_mid}>
        <Button variant="contained" onClick={maHoa}>
          Mã hóa
        </Button>
      </div>
      <div className={styles.left_bottom}>
        <p className={styles.left_bottom_left}>Bản mã:</p>
        <div className={styles.left_bottom_mid}>
          <TextareaAutosize
            value={banMa}
            className={styles.input}
            minRows={3}
            maxRows={8}
          />
        </div>
        <div className={styles.left_bottom_right}>
          <Button variant="contained" onClick={switchTo}>
            Chuyển
          </Button>
          <Button variant="contained" style={{ marginTop: "10px" }}>
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Content_left;
