export async function getAllTasks() {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/tasks/');
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}