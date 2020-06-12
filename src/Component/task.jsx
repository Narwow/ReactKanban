import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragging ? "pink" : "white")};
`;

export default class Task extends React.Component {
  render() {
    return (
      <div>
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.task.content}
              <br />
              {this.props.task.company}
            </Container>
          )}
        </Draggable>
      </div>
    );
  }
}
