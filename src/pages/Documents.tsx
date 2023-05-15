import { useState } from "react";
import DocumentList from "../components/DocumentList/DocumentList";
import styles from "./Documents.module.scss";
import { FileData } from "../models/fileData";

const Documents = () => {
  const [data] = useState<FileData[]>([
    {
      id: 1,
      fileName: "Rundofase",
      lastEdit: "08/08/2020",
      file: "",
    },
    {
      id: 2,
      fileName: "Genco Pura Olive Oil Company",
      lastEdit: "09/08/2020",
      file: "",
    },
    {
      id: 3,
      fileName: "Bubba Gump",
      lastEdit: "10/08/2020",
      file: "",
    },
  ]);
  return (
    <div className={styles.documents}>
      <DocumentList dataSource={data} />
    </div>
  );
};

export default Documents;
