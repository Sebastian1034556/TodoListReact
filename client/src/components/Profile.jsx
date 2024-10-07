import { useAuth0 } from "@auth0/auth0-react";
import { getAll, createUser } from "../api/tasks.api";
import { useEffect, useState } from "react";

export function Profile() {
    const { user, isAuthenticated } = useAuth0();
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (isAuthenticated && user) {
            getAll('http://127.0.0.1:8000/api/users/')
                .then(data => {
                    setUsers(data);
                    const userExists = data.some(u => u.username === user.nickname);
                    setIsAlreadyRegistered(userExists);

                    if (!userExists) {
                        createUser({ username: user.nickname }, "mitoken", 'http://127.0.0.1:8000/create-user/')
                            .then(response => {
                                console.log("Usuario creado:", response);
                            })
                            .catch(error => {
                                console.error("Error creando usuario:", error);
                            });
                    }
                })
                .catch(e => {
                    console.error("Error al obtener usuarios:", e);
                });
        }
    }, [isAuthenticated, user]); 

    return (
        isAuthenticated && (
            <div className="bg-blue-950 text-white flex justify-center items-center flex-col">
                <h2>{user.nickname}</h2>
                <img src={user.picture} alt={user.nickname} />
                <p>{user.email}</p>
            </div>
        )
    );
}
