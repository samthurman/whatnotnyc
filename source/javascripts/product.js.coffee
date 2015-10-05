$ ->
  $('.product-images__nav-item').on 'click', 'a', (event) ->
    event.preventDefault()

    $('.product-images__image').prop 'src', $(this).prop('href')
    $('.product-images__nav-item--selected').removeClass 'product-images__nav-item--selected'
    $(this).closest('li').addClass 'product-images__nav-item--selected'
