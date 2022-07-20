import { createTodoFetch } from '../fetchService/createTodoFetch';
import { useNavigate } from "react-router-dom";

export const CreateTodo = () => {

    let navigate = useNavigate();

    const createNewTodo = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let todoData = {
            title: formData.get('title'),
            subtitle: formData.get('subtitle'),
            description: formData.get('description'),
            owner: sessionStorage.getItem('userId')
        }
        createTodoFetch(todoData);
        navigate('/')
    }

    return (
        <div className="create">CREATE TODO
            <form className="add-todo" onSubmit={createNewTodo}>
                <label htmlFor="title">ToDo Name *</label><br />
                <input type="text" id="title" name="title" /><br />
                <label htmlFor="subtitle">ToDo Subtitle</label><br />
                <input type="text" id="subtitle" name="subtitle" /><br />
                <label htmlFor="subtitle">ToDo Description</label><br />
                <textarea type="textarea" id="description" name="description" /><br />
                <input className="submit" type="submit" value="Add new ToDo" />
            </form>
        </div>
    )
}