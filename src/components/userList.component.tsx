import { useSelector } from "react-redux";
import { IAppState } from "../store/reducer";
import React from 'react';
import User from './user.component';

const UserList = () => {
    const users = useSelector((state: IAppState) => state.users);
    let content;
    if(Array.isArray(users) && users.length > 0){
    content = users.map((user) => <User key = {user.id} user= {user}> </User>)
    } else {
      content = <h1> No repository found for searched user</h1>;
    }
    return (
        <section>
          {content}
        </section>
      )
}

export default UserList;