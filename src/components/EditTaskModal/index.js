import React from 'react'
import Modal from '../Modal'
import EditBoardInput from '../EditInput'

const EditTaskModal = ({
  isOpen,
  closeModal,
  title,
  editFunction,
  original
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>

        <EditBoardInput original={original} editFunction={editFunction} closeModal={closeModal}></EditBoardInput>

    </Modal>
)

export default EditTaskModal