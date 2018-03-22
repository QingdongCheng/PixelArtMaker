// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

var N = $('#inputHeight').val();
//$('#inputHeight').attr('value', N);
var M = $('#inputWeight').val();
//$('#inputWeight').attr('value', M);
//alert(N + " " +M);

var row = '';

for (var j = 0; j < M; j++) {
  row += '<td> </td>';
}

row = '<tr>' + row + '</tr>';
var table = $('#pixelCanvas');

table.empty();
for (var i = 0; i < N; i++) {
  table.append(row);
}

}

$( "#submit" ).on('click',function(evt) {
  evt.preventDefault();
  makeGrid();
});

$('table').on('click', 'td', function() {
    var color = $('#colorPicker').val();
   $(this).css('backgroundColor', color);
});

// $('td').on('click', function() {
//   var color = $('#colorPicker').val();
//   $(this).css('backgroundColor', color);
// });
