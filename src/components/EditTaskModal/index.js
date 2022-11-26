import React from 'react'
import Modal from '../Modal'
import EditTaskInput from '../EditTaskInput'

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

        <EditTaskInput original={original} editFunction={editFunction} closeModal={closeModal}></EditTaskInput>

    </Modal>
)

export default EditTaskModal
