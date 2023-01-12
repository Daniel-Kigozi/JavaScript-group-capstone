import { postComment, generateComments } from "./comments";
import commentCounter from "./commentscounter";


//Create a function that fetches a movie
export const fetchMovieDetails = async(id) => {
    const BASE_MOVIE_URL ='https://api.tvmaze.com/shows';
    const response = await fetch(`${BASE_MOVIE_URL}/${id}`);
    const data = await response.json();
    return data
}

//Create a function that adds a comment and display it
export const addcommentEvent = async() => {
    console.log('event added');
    const newCommentForm = document.querySelector('#new-comment');
    console.log(newCommentForm);
    const addcommentButton = document.querySelector('.submit-comment');

    newCommentForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        // const addcommentButton = document.querySelector('.submit-comment');
        const user = newCommentForm.elements.name;
        const comment= newCommentForm.elements.comment;
        console.log(addcommentButton.id, user.value, comment.value);
        await postComment(addcommentButton.id, user.value, comment.value);
        const movieCommentDisplay = document.querySelector('.comment-list');
        const movieCommentsDiv = await generateComments(addcommentButton.id);
        movieCommentDisplay.innerHTML ='';
        movieCommentDisplay.append(movieCommentsDiv);

        const commentCountSpan = document.querySelector('.count-comments');
        const commentNumber = commentCounter();
        commentCountSpan.textContent = `${commentNumber}`;

        newCommentForm.reset();
    })
}

//Create a function that closes the popup
const addClosePopUpEvent = ()=> {
    const popUpdiv = document.querySelector('.popup-display');
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', (e)=>{
        e.preventDefault();
    popUpdiv.classList.remove('showpopup');
    popUpdiv.innerHTML = "";
    })
}

//Create a function that creates a popup
export const createPopUp =(movieDetails)=> {
    
    const {name, id, image, genres, runtime, premiered, language} = movieDetails;
    const divElement = document.createElement('div');
    divElement.className = 'popup-container';
    divElement.innerHTML = `
            <nav>
                <p>Movie details page</p>
            </nav>
            <button class="closeBtn">X</button>
            <img src="${image.medium}" alt="Comments image" width="200" height="200">
            <div><h2>${name}</h2></div>
            <div class="classification">
                <h3>Genres: [${genres}]</h3>
                <h3>Runtime: ${runtime} minutes</h3>
                <h3>Premiered: ${premiered}</h3>
                <h3>Language: ${language}</h3>
            </div>
            <h3>Comments (<span class="count-comments"></span>)</h3>
            <div class="comment-list">
            </div>
            <div class="addcomment">
                <h2>Add a comment</h2>
                <form id="new-comment">
                <input class="naming" id="name" type="text" placeholder="Your name">
                <input class="insights" id="comment" type="text" placeholder="Your insights">
                <button class="submit-comment" id="${id}" type="submit">Comment</button>
                </form>
            </div>
            <footer>footer</footer>
              `;
    return divElement;
}

//create a function that displays a popup
export const displayPopUp = async (id)=>{
    const popUpdiv = document.querySelector('.popup-display');
    popUpdiv.innerHTML = '';

    const movieDetails = await fetchMovieDetails(id);
    console.log(movieDetails);
    popUpdiv.append(createPopUp(movieDetails));

    const movieCommentDisplay = document.querySelector('.comment-list');
    const movieCommentsDiv = await generateComments(id);
    movieCommentDisplay.innerHTML ='';
    movieCommentDisplay.append(movieCommentsDiv);

    const commentCountSpan = document.querySelector('.count-comments');
    const commentNumber = commentCounter();
    commentCountSpan.textContent = `${commentNumber}`;

    addcommentEvent();
    
    addClosePopUpEvent();
}

//Create a function that adds event listener to dispaly popup
// export const addPopupEvent = ()=> {
//     const commentsButton = document.querySelectorAll('.comment-btn');
//     commentsButton.forEach((button) =>button.addEventListener("click", (e)=>{
//         console.log(e.target.id);
//         const movieId = e.target.id;
//       //call the display popup function
//       displayPopUp(movieId);
//       }))
// }