
const displayModal = async () => {
    const title = document.querySelector('.post-title').innerHTML.valueOf()
    const content = document.querySelector('.post-content').innerHTML.valueOf()
    document.querySelector('.title-updatepost').value = title
    document.querySelector('.content-updatepost').value = content
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
}

const updatePost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('.title-updatepost').value
    const content = document.querySelector('.content-updatepost').value
    const id = document.getElementById('updatebtn2').getAttribute('data-id');
    alert(id)
    if (title && content) {
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response)

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("Please update the content or title or return to dashboard!")
    }
}

document.querySelector('.myForm').addEventListener('submit', updatePost);
