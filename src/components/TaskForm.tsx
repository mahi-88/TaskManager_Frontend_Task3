import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createTask } from '../api/tasks';

const TaskForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            await createTask(values);
            message.success('Task created!');
            form.resetFields();
        } catch (err) {
            message.error('Failed to create task');
        }
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="id" label="Task ID" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="name" label="Task Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="owner" label="Owner" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="command" label="Command" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Create Task</Button>
            </Form.Item>
        </Form>
    );
};

export default TaskForm;
