import React, { useEffect, useState } from 'react';
import { Modal, message } from 'antd';
import { runTask } from '../api/tasks';

interface Props {
    task: any;
    visible: boolean;
    onClose: () => void;
}

const TaskExecution: React.FC<Props> = ({ task, visible, onClose }) => {
    const [output, setOutput] = useState('');

    useEffect(() => {
        if (visible) {
            runTask(task.id).then(res => {
                setOutput(res.data.output || 'Executed successfully!');
            }).catch(() => {
                message.error('Failed to run task');
            });
        }
    }, [visible, task.id]);

    return (
        <Modal
            title={`Running Task: ${task.name}`}
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <pre>{output}</pre>
        </Modal>
    );
};

export default TaskExecution;
