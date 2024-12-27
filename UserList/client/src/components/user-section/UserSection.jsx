import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";

const baseUrl = 'http://localhost:3030/jsonstore'

export default function UserSection(props) {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const usersResults = Object.values(result);
                setUsers(usersResults);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    const AddUserClickHandler = () => {

    }

    return (
        <>
            <section className="card users-container">
                <Search />

                <UserList users={users}/>

                {showAddUser && <UserAdd />}

                <button className="btn-add btn" onClick={AddUserClickHandler}>Add new user</button>

                <Pagination />
            </section>
        </>
    );
}