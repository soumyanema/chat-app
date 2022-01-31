import React from 'react';
import { Modal } from 'rsuite';
import { useModelState } from '../../../misc/custom-hooks';

const ImgBtnModal = ({ src, fileName }) => {
  const { isOpen, close, open } = useModelState();
  return (
    <>
      <input
        type="image"
        src={src}
        onClick={open}
        alt="file"
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={src} alt="file" height="100%" width="100%" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href={src} target="_blank" rel="noopener noreferrer">
            View Original
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImgBtnModal;
