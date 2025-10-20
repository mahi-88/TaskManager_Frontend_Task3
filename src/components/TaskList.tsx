// src/TaskList.tsx
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Modal, Form, notification } from "antd";
import { Task, TaskExecution, getTasks, deleteTask, runTask, searchTasks, createTask } from "../api/tasks";

const { Search } = Input;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [executionModal, setExecutionModal] = useState<{ visible: boolean; execution?: TaskExecution }>({ visible: false });
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const [form] = Form.useForm();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      notification.error({ message: "Failed to fetch tasks" });
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteTask(id);
      notification.success({ message: "Task deleted" });
      fetchTasks();
    } catch (err) {
      notification.error({ message: "Failed to delete task" });
    }
    setLoading(false);
  };

  const handleRun = async (id: string) => {
    setLoading(true);
    try {
      const res = await runTask(id);
      setExecutionModal({ visible: true, execution: res.data });
      fetchTasks();
    } catch (err: any) {
      notification.error({ message: err?.response?.data || "Failed to run task" });
    }
    setLoading(false);
  };

  const handleSearch = async (value: string) => {
    if (!value) return fetchTasks();
    setLoading(true);
    try {
      const res = await searchTasks(value);
      setTasks(res.data);
    } catch {
      setTasks([]);
    }
    setLoading(false);
  };

  const handleCreate = async (values: any) => {
    setLoading(true);
    try {
      await createTask(values);
      notification.success({ message: "Task created" });
      setCreateModalVisible(false);
      form.resetFields();
      fetchTasks();
    } catch (err) {
      notification.error({ message: "Failed to create task" });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
    { title: "Command", dataIndex: "command", key: "command" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Task) => (
        <>
          <Button type="primary" onClick={() => handleRun(record.id!)} style={{ marginRight: 8 }}>
            Run
          </Button>
          <Button danger onClick={() => handleDelete(record.id!)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
        <Search placeholder="Search by name" allowClear enterButton="Search" size="large" onSearch={handleSearch} style={{ maxWidth: 400 }} />
        <Button type="primary" size="large" onClick={() => setCreateModalVisible(true)}>
          Create Task
        </Button>
      </div>
      <Table rowKey="id" columns={columns} dataSource={tasks} loading={loading} />

      {/* Execution Modal */}
      <Modal
        visible={executionModal.visible}
        title={`Execution Result`}
        footer={<Button onClick={() => setExecutionModal({ visible: false })}>Close</Button>}
        onCancel={() => setExecutionModal({ visible: false })}
      >
        {executionModal.execution && (
          <div>
            <p><strong>Start Time:</strong> {executionModal.execution.startTime}</p>
            <p><strong>End Time:</strong> {executionModal.execution.endTime}</p>
            <p><strong>Output:</strong></p>
            <pre>{executionModal.execution.output}</pre>
          </div>
        )}
      </Modal>

      {/* Create Task Modal */}
      <Modal
        title="Create New Task"
        visible={createModalVisible}
        onCancel={() => setCreateModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item name="name" label="Task Name" rules={[{ required: true, message: "Please enter task name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="owner" label="Owner" rules={[{ required: true, message: "Please enter owner" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="command" label="Command" rules={[{ required: true, message: "Please enter command" }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskList;
