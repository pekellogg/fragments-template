import AddUser from "./components/users/AddUser";

import React, { useState } from "react";

import UsersList from "./components/users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((previousUsersList) => {
      return [
        ...previousUsersList,
        { name: userName,
          age: userAge,
          id: Math.random().toString()
        },
      ];
    });
  };

  return (
    <div className="content">
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
  
}

export default App;