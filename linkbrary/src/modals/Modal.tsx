import React from "react"; // React import 추가
import styled from "styled-components";
import "./Modal.css";
// import closeImgSrc from "../assets/closeIcon.svg";
import AddFolderModal from "./AddFolderModal";
import AddLinkModal from "./AddLinkModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import ShareModal from "./ShareModal";

// ModalProps 타입 정의
interface ModalProps {
  folderData?: Date; // 구체적인 타입으로 대체 필요
  folderMenus?: boolean;
  title: string;
  isShowModal: (callback: (prev: any) => any) => void; // 구체적인 타입으로 대체 필요
  linkAddModal?: boolean;
  folderAddModal?: boolean;
  shareModal?: boolean;
  editModal?: boolean;
  deleteModal?: boolean;
  linkDeleteModal?: boolean;
  dataUrl?: string;
  menusId?: string;
}

const Modal: React.FC<ModalProps> = ({
  folderData,
  folderMenus,
  title,
  isShowModal,
  linkAddModal,
  folderAddModal,
  shareModal,
  editModal,
  deleteModal,
  linkDeleteModal,
  dataUrl,
  menusId,
}) => {
  const handleClickExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    }));
  };
  return (
    <ModalComponenet className="modal">
      <div
        className={linkAddModal ? "modal-container" : "small-modal-container"}
      >
        <ModalTitle>{title}</ModalTitle>
        <CloseButton className="modal-button-close" onClick={handleClickExit}>
          <img src="/assets/closeIcon.svg" alt="닫기" />
        </CloseButton>
        {linkDeleteModal ? <DeleteModal link={dataUrl} /> : null}
        {deleteModal ? <DeleteModal title="폴더 삭제" /> : null}
        {editModal ? <EditModal /> : null}
        {shareModal ? <ShareModal menusId={menusId} /> : null}
        {folderAddModal ? <AddFolderModal /> : null}
        {linkAddModal ? (
          <AddLinkModal folderData={folderData} folderMenus={folderMenus} />
        ) : null}
      </div>
    </ModalComponenet>
  );
};

const ModalComponenet = styled.div`
  position: absolute;
  z-index: 4;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 45%;
  left: 45%;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default Modal;
