var products = [
  {
    id: '1',
    name: 'product 1',
    describe: 'describe 1',
    img: 'images/1.png',
    price: '100000',
  },
  {
    id: '2',
    name: 'product 2',
    describe: 'describe 2',
    img: 'images/2.png',
    price: '200000',
  },
  {
    id: '3',
    name: 'product 3',
    describe: 'describe 3',
    img: 'images/3.png',
    price: '300000',
  },
  {
    id: '4',
    name: 'product 4',
    describe: 'describe 4',
    img: 'images/4.png',
    price: '400000',
  },
  {
    id: '5',
    name: 'product 5',
    describe: 'describe 5',
    img: 'images/5.png',
    price: '500000',
  },
  {
    id: '6',
    name: 'product 6',
    describe: 'describe 6',
    img: 'images/6.png',
    price: '600000',
  },
  {
    id: '7',
    name: 'product 7',
    describe: 'describe 7',
    img: 'images/7.png',
    price: '700000',
  },
  {
    id: '8',
    name: 'product 8',
    describe: 'describe 1',
    img: 'images/8.png',
    price: '800000',
  }
];
//localStorage.clear();
localStorage.setItem("productvalue", JSON.stringify(products));
var item = [];
item = JSON.parse(localStorage.getItem('productvalue'));

var ul = document.getElementById('js-listproduct');
var properties = ['id', 'img', 'name', 'describe', 'price'];

function displayTable() {
  for (var i = 0; i < item.length; i++) {
    var product = item[i];
    var row = document.createElement('li');  
    var image = document.createElement('div');
    var name = document.createElement('p');
    var describe = document.createElement('p');
    var price = document.createElement('p');
    var btnadd = document.createElement('div');
    image.innerHTML = ('<img src=" ' + product[properties[1]] + ' ">');
    name.innerHTML = product[properties[2]];
    describe.innerHTML = product[properties[3]];
    price.innerHTML = product[properties[4]];
    btnadd.innerHTML = ('<button id="'+product[properties[0]]+'" onclick="addCart('+product[properties[0]]+')" class="btn-primary">Add to cart</button>');

    row.appendChild(image);
    row.appendChild(name);
    row.appendChild(describe);
    row.appendChild(price);
    row.appendChild(btnadd);

    ul.appendChild(row);
  }
}
displayTable();

var addToCart = [];
function addCart(x) {
  addToCart.push(products[x-1]);
  localStorage.setItem('add-cart', JSON.stringify(addToCart));
  var getAddCart= [];
  getAddCart = JSON.parse(localStorage.getItem('add-cart'));
}

  var count = 0;
  var countcart =[];
function countCart(){
  countcart = JSON.parse(localStorage.getItem('add-cart'));
  if (!countcart) break;
  else 
    count = countcart.length;
    document.getElementById("count").innerHTML = count;
  
}

var btnClick = document.getElementsByClassName('btn-primary');
for (var i = 0; i < btnClick.length; i++) {
  var indexBtn = btnClick[i];
  indexBtn.addEventListener('click', function() {
    event.target.setAttribute('disabled', 'disabled');
  });
}

