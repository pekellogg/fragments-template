import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";

import classes from "./AddUser.module.css";

import { useState, useRef } from "react";

const AddUser = (props) => {

  const submittedUsernameRef = useRef();
  const submittedAgeRef = useRef();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const submittedUsername = submittedUsernameRef.current.value;
    const submittedAge = submittedAgeRef.current.value;
    if (submittedUsername.trim().length === 0 || submittedAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+submittedAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(submittedUsername, submittedAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            ref={submittedUsernameRef}
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">
            Age (Years)
          </label>
          <input
            id="age"
            type="number"
            ref={submittedAgeRef}
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );

};

export default AddUser;