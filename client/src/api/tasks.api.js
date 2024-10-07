export async function getAll(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}
export function updateTask(field, value, id, ...extraFieldsAndValues) {
    const url = 'http://127.0.0.1:8000/api/tasks/' + id + "/";

    const updatedValues = {
        [field]: value
    };

    for (let i = 0; i < extraFieldsAndValues.length; i += 2) {
        const extraField = extraFieldsAndValues[i];
        const extraValue = extraFieldsAndValues[i + 1];
        updatedValues[extraField] = extraValue;
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedValues)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => console.log('Task updated:', data))
        .catch(error => console.error('Error updating task:', error));
}

export function deleteTask(id) {
    const url = 'http://127.0.0.1:8000/api/tasks/' + id + "/";

    const opciones = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(url, opciones)
}
export function createTask(newTask) {
    const url = 'http://127.0.0.1:8000/api/tasks/'

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
    };
    fetch(url, opciones)
}
export async function createUser(userData, token, url) {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData)
    };

    try {
        const response = await fetch(url, opciones);

        if (!response.ok) {
            console.log(response);
            throw new Error('Error en la creación del usuario');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}


//aplicacióon :
// async function handleCreateUser() {
//     try {
//         const data = await createUser({ name: 'John Doe' }, 'tu_token_aqui', 'https://api.example.com/users');
//         console.log('User created successfully:', data);
//     } catch (error) {
//         console.error('Error creating user:', error);
//     }
// }
