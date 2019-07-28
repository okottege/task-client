import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const { shape, string, arrayOf } = PropTypes;

export default function TaskForm({ task, onChange, onSave, errors }) {
  const hasError = fld => errors.filter(e => e.field === fld).length > 0;

  return (
    <Form>
      <Form.Group controlId="txtTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          value={task.title}
          onChange={onChange}
          isValid={!hasError("txtTitle")}
        />
      </Form.Group>
      <Form.Group controlId="txtDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={task.description}
          onChange={onChange}
          isValid={!hasError("txtDescription")}
        />
      </Form.Group>
      <Form.Group controlId="ddlStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={task.status}
          onChange={onChange}
          defaultValue="created"
          isValid={!hasError("ddlStatus")}
        >
          <option value="created">Created</option>
          <option value="in-progress">In Progress</option>
          <option value="complete">Complete</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSave}>
        Submit
      </Button>
    </Form>
  );
}

TaskForm.propTypes = {
  task: shape({
    title: string,
    description: string,
    dueDate: string,
    status: string
  }).isRequired,
  errors: arrayOf(
    shape({
      field: string,
      message: string
    })
  )
};

TaskForm.defaultProps = {
  errors: []
};
