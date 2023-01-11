const deletePost = async () => {
    const id = document.getElementById('updatebtn2').getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
};

// document.querySelector('.deletebtn').addEventListener('click', deletePost);