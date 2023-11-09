async function showUserDetails(id: number): Promise<void> {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const user = await response.json();
        console.log('User details:', user);
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

fetch('https://reqres.in/api/users/')
    .then(response => response.json())
    .then(data => {
        const userList: HTMLDivElement = document.getElementById('user-list') as HTMLDivElement;

        data.data.forEach((user: any) => {
            const userDiv: HTMLDivElement = document.createElement('div');
            userDiv.innerHTML = `
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>Email: ${user.email}</p>
                <img key=${user.avatar} src=${user.avatar}>
                <hr />
            `;
            userDiv.onclick = () => showUserDetails(user.id);
            userList.appendChild(userDiv);
        });
    });

