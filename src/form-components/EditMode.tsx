import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked)
    }
    function updateUserName (event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateIsStudent (event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Group controlId = "formChooseEditMode">
                <Form.Check
                    type = "switch"
                    id = "edit-mode-check"
                    label = "Edit Mode?"
                    checked = {editMode}
                    onChange = {updateEditMode}
                />
            </Form.Group>
            {editMode ?  (
                <div>
                    <Form.Group controlId = "formEditUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type = "text"
                            value = {userName}
                            onChange = {updateUserName}
                        />
                    </Form.Group>
                    <Form.Group controlId = "formEditIsStudent">

                        <Form.Check
                            type = "switch"
                            label = "Student?"
                            id = "formEditIsStudent"
                            checked = {isStudent}
                            onChange = {updateIsStudent}
                        />
                    </Form.Group>
                </div>
            ) : undefined}
            <div>{userName} is {isStudent ? "" : "not "}a student</div>
        </div>
    );
}
