const newPost = async () => {
    const response = await fetch('/api/users/newpost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/newpost');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('.newpost').addEventListener('click', newPost);
  