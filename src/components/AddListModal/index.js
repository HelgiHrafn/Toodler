import React from 'react'
import Modal from '../Modal'
import CreateListInput from '../CreateListInput'


const AddModal = ({
  isOpen,
  closeModal,
  title,
  addList
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateListInput addList={addList} closeModal={closeModal}></CreateListInput>

    </Modal>
)

export default AddModal
