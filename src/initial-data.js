const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "123", company: "Apple" },
    "task-2": { id: "task-2", content: "456", company: "Google" },
    "task-3": { id: "task-3", content: "789", company: "Amazon" },
    "task-4": { id: "task-4", content: "abcdefg", company: "Facebook" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Applied",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Interview",
      taskIds: ["task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Rejected",
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
