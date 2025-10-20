// src/tasks.ts
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export interface TaskExecution {
  startTime: string;
  endTime: string;
  output: string;
}

export interface Task {
  id?: string;
  name: string;
  owner: string;
  command: string;
  taskExecutions?: TaskExecution[];
}

// Get all tasks
export const getTasks = () => axios.get<Task[]>(API_URL);

// Search tasks by name
export const searchTasks = (name: string) =>
  axios.get<Task[]>(`${API_URL}/search`, { params: { name } });

// Create a new task
export const createTask = (task: Task) => axios.put(API_URL, task);

// Delete a task
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);

// Run task
export const runTask = (id: string) =>
  axios.put<TaskExecution>(`${API_URL}/${id}/executions`);
