const updatePost = async (event) => {
    event.preventDefault();

 const title = document.querySelector('.title-updatepost').value.trim();
 const content = document.querySelector('.content-updatepost').value.trim();

 if (title && content) {
   const response = await fetch('/api/post/:id', {
     method: 'PUT',
     body: JSON.stringify({ title, content }),
     headers: { 'Content-Type': 'application/json' },
   });

 if (response.ok) {
   document.location.replace('postById');
 } else {
   alert(response.statusText);
 }
}
};

document.querySelector('.updatePost').addEventListener('submit', updatePost);

