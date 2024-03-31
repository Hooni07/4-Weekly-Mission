import styled from "styled-components";
import styles from "./kebabMenu.module.css";

interface ModalState {
  linkModal: false;
  folderAddModal: false;
  shareAddModal: false;
  editAddModal: false;
  deleteAddModal: false;
  linkDeleteModal: true;
  dataUrl?: string;
}

// 컴포넌트의 props 타입 정의
interface KebabMenuProps {
  isShowModal: (modalState: (prevState: ModalState) => ModalState) => void;
  dataUrl: string;
}

const KebabMenu: React.FC<KebabMenuProps> = ({ isShowModal, dataUrl }) => {
  const isDeleteModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
      dataUrl: dataUrl,
    }));
    console.log();
  };

  const isFolderAddModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
    }));
  };

  return (
    <div className={styles.container}>
      <div onClick={isDeleteModal}>삭제하기</div>
      <div onClick={isFolderAddModal}>폴더에 추가</div>
    </div>
  );
};

export default KebabMenu;
