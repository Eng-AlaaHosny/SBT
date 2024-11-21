const userButton = document.querySelector('.user-button');
const userPageContainer = document.querySelector('.user-page-container');
const backButton = document.querySelector('.back-button');

// Show the user page and hide the main container
userButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    userPageContainer.style.display = 'block';
});

// Back to the dashboard from the user page
backButton.addEventListener('click', () => {
    userPageContainer.style.display = 'none';
    mainContainer.style.display = 'block';
});
