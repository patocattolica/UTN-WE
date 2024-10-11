function getSelectedItemsPerPage(){
    const itemsPerPageSelect = document.querySelector('.pagination select');
    return parseInt(itemsPerPageSelect.value);
};
