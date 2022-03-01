document.querySelector('.clear-form-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#contact input, #contact textarea').forEach((nPut) => {
        nPut.value = '';
    })
})
