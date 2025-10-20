// src/App.tsx
import React from "react";
import { Layout, Typography } from "antd";
import TaskList from "./components/TaskList";

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={3}>
          Task Manager Application
        </Title>
      </Header>
      <Content style={{ padding: "20px" }}>
        <TaskList />
      </Content>
    </Layout>
  );
};

export default App;
