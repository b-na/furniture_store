import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';


let reviews_data = [
    {
        photo: './reviews_pics/review_pic_1.jpeg',
        name: 'Rishi Hardie',
        stars: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        photo: './reviews_pics/review_pic_2.jpeg',
        name: 'Eadwine Sharma',
        stars: 5,
        review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!!!'
    },
    {
        photo: './reviews_pics/review_pic_3.jpeg',
        name: 'Fathima Boyer',
        stars: 4,
        review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        photo: './reviews_pics/review_pic_4.jpeg',
        name: 'Nathalie Reyer',
        stars: 3,
        review: 'Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Nisl purus in mollis nunc sed id semper risus in. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Id consectetur purus ut faucibus pulvinar elementum integer. Vehicula ipsum a arcu cursus vitae. Elit eget gravida cum sociis natoque. Tempor orci dapibus ultrices in iaculis. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Magna eget est lorem ipsum dolor sit amet. Hac habitasse platea dictumst quisque. Egestas integer eget aliquet nibh praesent.'
    },
    {
        photo: './reviews_pics/review_pic_5.jpeg',
        name: 'Harut Pickering',
        stars: 5,
        review: 'Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sed risus pretium quam vulputate dignissim suspendisse in. Nibh praesent tristique magna sit amet purus gravida quis blandit. '
    },
    {
        photo: './reviews_pics/review_pic_6.jpeg',
        name: 'Yasmeen Oliversson',
        stars: 4,
        review: 'Lorem ipsum dolor sit amet.'
    },
    {
        photo: './reviews_pics/review_pic_7.jpeg',
        name: 'Lise Nozawa',
        stars: 5,
        review: 'Sed id semper risus in hendrerit gravida rutrum. Commodo nulla facilisi nullam vehicula ipsum a. Est sit amet facilisis magna etiam. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Tristique magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Id venenatis a condimentum vitae sapien.'
    },
    {
        photo: './reviews_pics/review_pic_8.jpeg',
        name: 'Thomas Gniewek',
        stars: 5,
        review: 'Ridiculus mus mauris vitae ultricies. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Quis varius quam quisque id diam vel.'
    },
    {
        photo: './reviews_pics/review_pic_9.jpeg',
        name: 'Jayendra Rey',
        stars: 4,
        review: 'Mi tempus imperdiet nulla malesuada pellentesque elit eget. Nisl condimentum id venenatis a. Tincidunt praesent semper feugiat nibh. Hendrerit dolor magna eget est lorem ipsum dolor sit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Eu ultrices vitae auctor eu augue ut lectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.'
    },
    {
        photo: './reviews_pics/review_pic_10.jpeg',
        name: 'Maike Trueman',
        stars: 4,
        review: 'Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. In vitae turpis massa sed. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.'
    }
]

function ShowReview({num, func}) {
    let data = reviews_data[num];
    return(
        <div>
            <img className='review_photo' src={data.photo} alt={'profile photo of ' + data.name}></img>
            <p className='review_name'><strong>{data.name}</strong></p>
            <p className='review_stars'><FontAwesomeIcon id='star' icon={faStar} /> {data.stars}/5</p>
            <p className='review_text'><i>"{data.review}"</i></p>
            <button onClick={func}>Next review</button>
        </div>
    )

}

export {ShowReview, reviews_data};