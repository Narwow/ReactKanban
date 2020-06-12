import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./task";
import Application from "./add-app";

const Container = styled.div`
  background-color: rgb(250, 249, 255);
  margin: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 250px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  text-align: center;
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "lightgreen" : "inherit"};
  flex-grow: 1;
  height: 100%;
  overflow: auto;
`;
const Button = styled.button`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin: 0px, 5px, 8px, 5px;
`;

export default class Column extends React.Component {
  state = {
    addApplication: false,
  };

  toggleApp = () => {
    this.setState({
      addApplication: !this.state.addApplication,
    });
  };

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Button onClick={this.toggleApp}>+</Button>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
