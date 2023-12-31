import { createContext, useState } from "react";

export const FavUsersContext = createContext({
  users: [],
  favUsersIds: [],
  createUser: (data) => {},
  removeUser: (id) => {},
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// we have to create a provider to wrap our application within
const FavUsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [favUsersIds, setFavUsersIds] = useState([]);
  const createUser = (userData) => {
    if (userData != "") {
      setUsers((prevState) => [
        ...prevState,
        { name: userData, key: Math.random().toString() },
      ]);
    }
    console.log(users);
  };
  const removeUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.key !== id);
    });
  };
  const addFavorite = (id) => {
    setFavUsersIds((prevState) => [...prevState, id]);
  };
  const removeFavorite = (id) => {
    setFavUsersIds((prevState) => prevState.filter((favId) => favId !== id));
  };
  const value = {
    users: users,
    favUsersIds: favUsersIds,
    createUser: createUser,
    removeUser: removeUser,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavUsersContext.Provider value={value}>
      {children}
    </FavUsersContext.Provider>
  );
};

export default FavUsersContextProvider;
