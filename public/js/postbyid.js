const postById = async (id) => {

 if (id) {
   const response = await fetch(`/post/${id}`, {
     method: 'GET',
     headers: { 'Content-Type': 'application/json' },
   });

 if (response.ok) {
   document.location.replace('/currentpost');
 } else {
   alert(response.statusText);
 }
}
};


