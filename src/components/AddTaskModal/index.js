import React from 'react';
import Modal from '../Modal';
import CreateTaskInput from '../CreateTaskInput';


const AddTaskModal = ({
    isOpen,
    closeModal,
    title,
    addTask
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateTaskInput addTask={addTask} closeModal={closeModal}></CreateTaskInput>
 
    </Modal>
)

export default AddTaskModal
