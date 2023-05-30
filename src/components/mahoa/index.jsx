import styles from "./styles.module.css";
import Content_left from "../Content_left";
import Content_right from "../Content_right";
import { useState } from "react";
function Mahoa() {
  const [data, setData] = useState("");
  const switchData = (data) => {
    setData(data);
  };
  return (
    <div className={styles.container}>
      <Content_left switchData={switchData} />
      <Content_right data={data} />
    </div>
  );
}

export default Mahoa;
