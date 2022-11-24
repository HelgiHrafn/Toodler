import React from 'react';
import Modal from '../Modal';
// import styles from './styles';
import CreateBoardInput from '../CreateBoardInput';


const AddModal = ({
    isOpen,
    closeModal,
    title
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateBoardInput></CreateBoardInput>

    </Modal>
)

export default AddModal