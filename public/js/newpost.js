const newPost = async (event) => {
     event.preventDefault();

  const title = document.querySelector('.title-newpost').value.trim();
  const content = document.querySelector('.content-newpost').value.trim();

  if (title && content) {
    const response = await fetch('/api/post/newpost', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
};

document.querySelector('.newpost').addEventListener('submit', newPost);

