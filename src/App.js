import './App.css';
import { prod_gallery } from './Products';
import DesigneIdeas from './DesignIdeas';
import { ShowReview, reviews_data } from './Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faYoutube, faTiktok, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { useMemo, useState, createContext } from 'react';
import { showCart, addToShoppingCart, removeAllFromShoppingCart } from './Shop'
import { useEffect } from 'react';

function handleSubmit(e) {
  let str = 'Prototype Notification';
  e.preventDefault();
  alert('\n\n' + str.toUpperCase() + ' \n\n Thank you for your interaction! Please note that this is a prototype web page, and your submitted data will not be sent or stored. This is for demonstration purposes only. We appreciate your understanding and hope you enjoy exploring our concept.')
}

function convert(num) {
  let str = Number(num).toFixed(2)
                  .toString()
                  .replace('.', ',');
  let price = [str[str.length - 1], str[str.length - 2], str[str.length - 3]];
  for(let i = 1; i < str.length - 2 ; i++) {
    price.push(str[str.length - 3 - i]);
    ((i % 3 === 0) && (i !== str.length - 3)) && price.push(' ');
  }
  price = price.reverse().join('');
  return price;
}

function Nav() {
  return (
    <>
      <a href='#design_ideas'>Design Ideas</a>
      <a href='#our_products'>Our Products</a>
      <a href='#reviews'>Reviews</a>
      <a href='#newsletter'>Newsletter</a>
    </>
  )
}

function ContactUsVisToggle(visible) {
  let contact = document.getElementById('contact');
  if (visible) {
    contact.style.opacity='1';
    contact.style.visibility='visible';
  } else {
    contact.style.opacity='0'
    setTimeout(() => contact.style.visibility='hidden', 500)
    ;
  }
}

function Gallery({pic, id, setSub, setShip, sub, setNumberOfItems, numberOfItems}) {
  return(
  <div id={id} className='product' >
    <img src={pic.link} alt='' loading='lazy'></img>
    <FontAwesomeIcon className='add' icon={faPlus} onClick={() => addToShoppingCart(pic, id, convert, setSub, setShip, sub, setNumberOfItems, numberOfItems)}/>
    <figcaption><p>{pic.caption}</p><strong className='price'>{convert(pic.price)}</strong><strong> €</strong></figcaption>
  </div>
  )
}

function Deco() {
  
  let random = useMemo(() => {
    let arr = [];
      for (let i = 0; i < reviews_data.length; i++) {
        arr.push(i)
      }
      arr.sort(() => Math.random() - 0.5);
      return arr;
  }, [] )

  const [random_review, setRandom_review] = useState(0);
  const [sub, setSub] = useState(0);
  const [ship, setShip] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  
  const [screen, setScreen] = useState(window.innerWidth > 470 ? 'L' : 'S');


  const Context = createContext();

  function nextReview() {
    function toggle() {document.getElementById('review_container').classList.toggle('fadeOut');}
    toggle()
    setTimeout(() =>
    {toggle();
    random_review < random.length - 1 ? setRandom_review(random_review + 1) : setRandom_review(0)}, 200);
  }

  

  useEffect(() => {
    let shop = document.getElementById('shop').classList;
    function toggle() { shop.toggle('smallScreen'); shop.toggle('bigScreen')}
    function screen_resize() {
      window.innerWidth > 470 ? setScreen('L') : setScreen('S');
      ((shop[0] === 'smallScreen' && screen === 'L') || (shop[0] === 'bigScreen' && screen === 'S')) && toggle();
      console.log(shop[0] + ' + ' + screen )
    }
    window.addEventListener('resize', screen_resize);
    return() => window.removeEventListener('resize', screen_resize);
  })

  return (
    <div className="App" id='App'>
      <div id='shop' className=''>
        <div>
          <FontAwesomeIcon id='icon-cart' icon={faCartShopping} onClick={() => showCart(screen)}/>
          <p id='inCart' style={{visibility: (numberOfItems > 0 ? 'visible' : 'hidden')}} numberOfItems={numberOfItems}>{numberOfItems}</p>
          <div id='shopping-list'>
            <FontAwesomeIcon id='x-shopping-list' onClick={() => showCart()} icon={faCircleXmark} />
            <div id='cart'>
              <div className='isEmpty'>Your shopping cart is empty</div>
            </div>
            <div>
              <div><button onClick={() => removeAllFromShoppingCart( setSub, setShip, setNumberOfItems )}><FontAwesomeIcon id='trash_can' icon={faTrashCan} /></button></div>
              <p>Subtotal: <strong>€</strong><strong id='subtotal' sub={sub} className='price'>{convert(sub)}</strong></p>
              <p>Shipping: <strong>€</strong><strong id='shipping' ship={ship} className='price'>{convert(ship)}</strong></p>
              <hr/>
              <p>Total: <strong>€</strong><strong id='total' className='price'>{convert(sub + ship)}</strong></p>
            </div>
            <div className='payment'>
              <button onClick={handleSubmit}>Checkout</button>
              <button onClick={handleSubmit}>Pay</button>
            </div>
          </div>
        </div>
      </div>
      <section id='start'>
          <div id='left' className='content-box'></div>
          <div id='right' className='content-box'>
            <nav id='navbar'>
            <h1>Cozy Home</h1>
              <Nav/>
            </nav>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Neque laoreet suspendisse interdum consectetur. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. 
                Proin libero nunc consequat interdum. A pellentesque sit amet porttitor.</p>
              <a href='#contact' id='contact-btn' onClick={() => ContactUsVisToggle(true)}>Contact Us</a>
            </div>
          </div>
      </section>
      <section id='contact' onClick={(e) => e.target.id === 'contact' && ContactUsVisToggle(false)}>
        <div id='contact_form'>
          <img src='https://images.pexels.com/photos/4050418/pexels-photo-4050418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''></img>
          <FontAwesomeIcon id='x' onClick={() => ContactUsVisToggle(false)} icon={faCircleXmark} />
          <form action="" method="post" onSubmit={handleSubmit}>
              <h3 style={{fontVariant:'small-caps'}}>Contact Us</h3>
              <label for='fname'>First Name <sup>*</sup>:</label>
              <input type="text" id="fname" name="fname" placeholder='Your Name' required/>
              <label for='lname'>Last Name:</label>
              <input type="text" id="lname" name="lname" placeholder='Your Last Name'/>
              <label for='email'>Email <sup>*</sup>:</label>
              <input type="email" id="email" name="email" placeholder='Your Email' required/>
              <label for='subject'>Subject <sup>*</sup>:</label>
              <textarea id="subject" minLength={10} maxLength={500} name="subject" placeholder="Write something.." required></textarea>
              <input id='submit' type="submit" value="Send"/>
          </form>
        </div>
        </section>
      <a id='arrow-up' href='#App'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></a>
      <section id='design_ideas'>
      <div className='header-container'><h2>Design Ideas</h2></div>
        <DesigneIdeas/>
      </section>
      <section id='our_products'>
        <div className='header-container'><h2>Our Products</h2></div>
        <div id='product_container'>
          {prod_gallery.map((pic, i)=> <Gallery pic={pic} id={i} setSub={setSub} setShip={setShip} sub={sub} setNumberOfItems={setNumberOfItems} numberOfItems={numberOfItems} key={i}/>)}{/* beliani.de */}
          <a id='more' href='#our_products' onClick={(e) => { handleSubmit(e) }}><div><strong>See more</strong></div></a>
        </div>
      </section>
      <section id='reviews'>
        <div id='review_container' className={'fadeIn'}>
          <Context.Provider value={nextReview}>
            <ShowReview num={random[random_review]} func={nextReview} />
          </Context.Provider>
        </div>
      </section>
      <section id='newsletter'>
        <div id='nl_form'>
        <form action="" method="post" onSubmit={handleSubmit}>
            <h3 style={{fontVariant:'small-caps'}}>Subscribe</h3>
            <p style={{textAlign:'center'}}>Sign up with your email adress to recive news und updates.</p>
            <input type="text" id="fname" name="fname" placeholder='First Name *' required/>
            <input type="text" id="lname" name="lname" placeholder='Last Name'/>
            <input type="email" id="email" name="email" placeholder='You Email *' required/>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
      </section>
      <footer>
        <div id='follow'>
          <p style={{display:'inline'}}>Follow: </p>
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram}/></a>
          <a href='https://www.tiktok.com/'><FontAwesomeIcon icon={faTiktok} /></a>
          <a href='https://facebook.com/'><FontAwesomeIcon icon={faFacebook}/></a>
          <a href='https://youtube.com/'><FontAwesomeIcon icon={faYoutube}/></a>
          <a href='https://twitter.com/'><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
      </footer>
    </div>
  );
}

export default Deco;
