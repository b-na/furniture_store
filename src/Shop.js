function showCart(screen) {
  let style = document.getElementById('shop').classList;
  let html = document.getElementsByTagName('html')[0];
  function handleSmallScreen() {
    style.toggle('smallScreen');
    html.style.overflowY = 'hidden';
  }
  if(style[0] !== true) {
    screen === 'L' ? style.toggle('bigScreen') : handleSmallScreen();
  } else {
    style = '';
    html.style.overflowY = 'auto';
  }
  }
  
  function Item(pic, id, convert, setnumber_of_items, setSub, setShip) {
    let item = document.createElement('div');
      item.id = 'item-' + id;
      item.className = 'product inCart';
      item.setAttribute('amound',  '1');
      item.innerHTML = `<p class='amound'></p>
          <img src=${pic.link} alt='' loading='lazy'></img>`;
      let caption = document.createElement('div');
      let figcaption = document.createElement('figcaption');
      figcaption.innerHTML = pic.caption;
      let remove_button = document.createElement('button');
      remove_button.innerText = '-';
      remove_button.onclick = () => removeOneFromShoppingCart(id, pic, convert, setnumber_of_items, setSub, setShip);
      let price = document.createElement('p');
      price.innerHTML = `<strong class='price'>${convert(pic.price)}</strong>
        <strong> €</strong>`
      caption.appendChild(figcaption);
      caption.appendChild(remove_button);
      caption.appendChild(price);
      item.appendChild(caption);
    return item;
  }
  
  function addToShoppingCart(pic, id, convert, setSub, setShip, sub, setnumber_of_items, number_of_items) {
    document.getElementsByClassName('isEmpty')[0].style.display = 'none';
    let element = document.getElementById('item-' + id);
    let amound = 1;
    if (element) {
      amound = Number(element.getAttribute('amound')) + 1;
      element.setAttribute('amound', amound);
      element.getElementsByClassName('amound')[0].innerHTML = amound;
      element.getElementsByClassName('amound')[0].style.visibility = 'visible'
      element.getElementsByClassName('price')[0].innerHTML = convert((pic.price * amound).toFixed(2));
    } else {
      let item = Item(pic, id, convert, setnumber_of_items, setSub, setShip)
      document.getElementById('cart').appendChild(item);
    }
    setSub(sub + Number(pic.price)); 
    setShip(5);
    setnumber_of_items(number_of_items + 1);
  }
  

  function removeOneFromShoppingCart (id, pic, convert, setnumber_of_items, setSub, setShip){
    let element = document.getElementById('item-' + id);
    let amound = Number(element.getAttribute('amound'));
    function remove_one() {
      element.setAttribute('amound', amound - 1); 
      element.getElementsByClassName('amound')[0].innerHTML = amound - 1;
      element.getElementsByClassName('price')[0].innerHTML = convert((pic.price * (amound - 1)).toFixed(2));
    }
    amound === 1 ? element.remove() : remove_one();
    let num = Number(document.getElementById('inCart').getAttribute('number_of_items'));
    setnumber_of_items(num - 1);
    let sub = document.getElementById('subtotal').getAttribute('sub');
    console.log(sub)
    setSub(sub - Number(pic.price));
    num === 1 && setShip(0);
  }

  function removeAllFromShoppingCart( setSub, setShip, setnumber_of_items ) {
    document.getElementById('cart').innerHTML = '<div class="isEmpty" style="display: flex;">Your shopping cart is empty</div>';
    setShip(0);
    setSub(0);
    setnumber_of_items(0)
  }

  export { showCart, addToShoppingCart, removeAllFromShoppingCart}