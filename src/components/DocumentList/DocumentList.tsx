import { FC  } from "react";
import { ReactComponent as FileSVG } from "../../assets/File.svg";
import { FileData } from "../../models/fileData";
import styles from "./DocumentList.module.scss";
import Button from "../Button/Button";

type DocumentListProps = {
  dataSource: FileData[];
};

const DocumentList: FC<DocumentListProps> = ({ dataSource }) => {
  const openPDF = (path:string) => {
    window.open(path, '_blank')
  };

  return (
    <ul className={styles.list}>
      {dataSource.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <div className={styles.listItemFile}>
            <div className={styles.listItemFileSVG}>
              <FileSVG width={34} height={46} />
            </div>
            <div className={styles.listItemDescription}>
              <p title={item.fileName} className={styles.listItemName}>
                {item.fileName}
              </p>
              <span className={styles.listItemTimestamp}>
                Last Edited: {item.lastEdit}
              </span>
            </div>
          </div>
          <Button onClick={() => openPDF(item.file)} disabled={!item.file} variant="primary">
            View document
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;
