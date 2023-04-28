
Swal.fire({
    title: "Gracias por el like",
    icon: 'success',
    confirmButtonText: 'Genial',
    footer: 'vuelve pronto',
    timer: 5000,    
    allowOutsideClick: true,    
    stopkeydownPropagation: true,
    confirmButtonColor: '#c34f0c',
    confirmButtonAriaLabel: ''   
})


/*Swal.fire({
    title: 'Custom width, padding, color, background.',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("assets/img/TaiYagami.png")
      left top
      no-repeat
    `
  })
*/


Swal.bindClickHandler()

Swal.mixin({
        toast: true,    
}).bindClickHandler('data-swal-toast-template')


