import React from 'react'
import Modal from '../Modal'
import EditListInput from '../EditListInput'

const EditListModal = ({
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

        <EditListInput original={original} editFunction={editFunction} closeModal={closeModal}></EditListInput>

    </Modal>
)

export default EditListModal
