import React from 'react';
import Modal from '../Modal';
// import styles from './styles';
import CreateBoardInput from '../CreateBoardInput';


const AddModal = ({
    isOpen,
    closeModal,
    title,
    addBoard
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateBoardInput addBoard={addBoard} closeModal={closeModal}></CreateBoardInput>
 
    </Modal>
)

export default AddModal