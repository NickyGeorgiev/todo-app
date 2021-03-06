export const deleteTodo = (id) => {

    let url = `https://parseapi.back4app.com/classes/todos/${id}`

    fetch(url, {
        method: 'DELETE',
        headers: {
            "X-Parse-Application-Id": "f6zFRj3t8ITXPfjo6anwDxwoayU89nFrD3v6RYJf",
            "X-Parse-REST-API-Key": "YBH8FD1QgVH0jIwCHwOAlo1VRsjYWOAMJRCeZ4Zb",
            "accept": "application/json"
        },
        redirect: 'follow',
    })
        .then(response => {
            if (response.ok) {
                alert('TODO is Deleted !')
            } else {
                throw new Error()
            }
        })
        .catch(error => alert('Ups... is there problem :(', error));
}