function deleteItem(productId) {
    confirm(`Are you sure you want to delete this item ${productId}`);
    fetch(`/delete-product/${productId}`, {
        method: 'POST',
    })
        .then((res) => {
            if (res.ok) {
                location.reload();
        }
    })
}