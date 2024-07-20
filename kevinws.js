document.addEventListener('DOMContentLoaded', function() {
    var lastContentVisible = 'home-content'; // Initialize with the home content as the last visible

    function showContent(contentClass) {
        console.log('Showing content:', contentClass);
        var content = document.querySelector('.' + contentClass);
        if (content) {
            content.style.display = 'block';
        } else {
            console.error('Content not found:', contentClass);
        }
    }

    function hideContent(contentClass) {
        console.log('Hiding content:', contentClass);
        var content = document.querySelector('.' + contentClass);
        if (content) {
            content.style.display = 'none';
        } else {
            console.error('Content not found:', contentClass);
        }
    }

    function tabClickHandler(tabId, contentClass) {
        var tab = document.getElementById(tabId);
        if (!tab) {
            console.error('Tab not found:', tabId);
            return;
        }
        tab.addEventListener('click', function() {
            console.log('Clicked tab:', tabId);
            if (lastContentVisible !== contentClass) {
                if (lastContentVisible) {
                    hideContent(lastContentVisible);
                }
                lastContentVisible = contentClass;
                showContent(contentClass);
            }
        });
    }

    // Initially show the home content only
    showContent('home-content');
    hideContent('portfolio-content');
    hideContent('service-content');
    hideContent('co-op-content');
    hideContent('languages-content');
    hideContent('extras-content');
    hideContent('about-content');
    hideContent('contact-content');

    tabClickHandler('home-tab', 'home-content');
    tabClickHandler('portfolio-tab', 'portfolio-content');
    tabClickHandler('service-tab', 'service-content');
    tabClickHandler('co-op-tab', 'co-op-content');
    tabClickHandler('languages-tab', 'languages-content');
    tabClickHandler('extras-tab', 'extras-content');
    tabClickHandler('about-tab', 'about-content');
    tabClickHandler('contact-tab', 'contact-content');
});


/*=================================================================*/


document.addEventListener('DOMContentLoaded', function() {
    const flagButton = document.querySelector('.flag-button');
    const flagText = document.querySelector('.flag-text');
    const flagImages = flagButton.querySelectorAll('img');
    const lowIcons = document.querySelector('.low-icons');

    const flagImagesSrc = ['united-kingdom.png', 'united-states.png', 'canada.png']; // Original flag image sources
    const newFlags = [
        { src: 'portugal.png', class: 'pt' },
        { src: 'brazil.png', class: 'br' },
        { src: 'angola.png', class: 'an' }
    ];

    flagButton.addEventListener('click', function() {
        // Change text on button click
        const newText = flagText.textContent.includes('Language: English') ? 'Língua: Português' : 'Language: English';
        flagText.textContent = newText;

        // Set class for text
        if (newText.includes('Português')) {
            flagText.classList.add('portuguese-text');
            flagText.classList.remove('english-text');
            lowIcons.classList.add('portuguese-icons');
            lowIcons.classList.remove('english-icons');
        } else {
            flagText.classList.add('english-text');
            flagText.classList.remove('portuguese-text');
            lowIcons.classList.add('english-icons');
            lowIcons.classList.remove('portuguese-icons');
        }
       
        // Change flag images and set classes based on language
        flagImages.forEach((img, index) => {
            if (newText.includes('English')) {
                img.src = flagImagesSrc[index];
                img.classList.remove('br', 'pt', 'an'); // Remove classes added by the JavaScript
            } else {
                img.src = newFlags[index].src;
                img.classList.add(newFlags[index].class);
            }
            img.alt = 'Flag';
        });
    });
});






