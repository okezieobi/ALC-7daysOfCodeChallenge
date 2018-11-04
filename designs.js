$(document).ready(function() {
  // makes functions is available after document loads
  const size = $('#sizePicker'); // Select size input
  size.click(function makeGrid(grid) {
    // When size is submitted by the user, call makeGrid() to generate grid from inputs
    // Your code goes here!
    $('table tr').remove(); // prevents making more grid after initial creation
    const height = $('#inputHeight').val(); // height input to make grid
    const width = $('#inputWidth').val(); // width unput to make grid
    let heightIndex = 1;
    while (heightIndex <= height) {
      // iterating upto input height
      $('table').append('<tr></tr>'); // appending column part of grid to table
      for (let widthIndex = 1; widthIndex <= width; widthIndex++) {
        // iterating upto input width
        $('tr:last').append('<td></td>'); // appending row to grid column
        $('td').addClass('unitBox'); // add class
        $('.unitBox').css({ background: 'white' });
      }
      heightIndex++;
    }
    grid.preventDefault(); //stops default action of makeGrid

    $('.unitBox').click(function() {
      // add or remove selected background color to each cells
      let color = $('#colorPicker').val(); // select color input
      if ($(this).attr('data-click-state') == 1) {
        // toggles between input and white default background color for class unitBox of each cell
        $(this).attr('data-click-state', 0);
        $(this).css('background-color', 'white');
      } else {
        $(this).attr('data-click-state', 1);
        $(this).css('background-color', color);
      }
    });
  });
});
