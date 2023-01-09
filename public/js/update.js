const updatePost = async () => {
const title = document.querySelector('.post-title').innerHTML.valueOf()
const content = document.querySelector('.post-content').innerHTML.valueOf()
document.querySelector('.title-updatepost').value = title
document.querySelector('.content-updatepost').value = content
const modal = document.querySelector(".modal");                                     
modal.style.display = "block";
}                                                                                                                                                                                                                                                                                                                                                                                   