
export const submitinModal = () => {
    Swal.fire(
        'Cheers!',
        'Submitted your item!',
        'success'
    )
}

export const editedModal = () => {
    Swal.fire(
        'Succes!',
        'Congrats you edited an item!',
        'success'
    )
}

export const deletedModal = () => {
    Swal.fire(
        'Well..',
        'You just deleted an item '
    )
}