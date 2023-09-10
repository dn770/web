
// הגדרת מערך של תמונות עם כותרת ותיאור
    const images = [
        {
            title: "Lubavitcher Rebbe",
            source: "https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/442907-screen-shot-2014-07-17-at-11-27-21-am.png;w=696;h=699;mode=crop",
            description: "The seventh Rebbe of Chabad Chasidism"
        },
        {
        title: "Rav Kadury",
            source: "https://dafyomireview.com/advisor-images/kadouri01.jpg",
            description: "Was a renowned Mizrahi Haredi rabbi and kabbalist who devoted his life to Torah study and prayer on behalf of the Jewish people."
        },
        {
            title: "Rav Kook",
            source: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Avraham_Issac_Kook_portrait_cropped.JPG",
            description: "was an Orthodox rabbi, and the first Ashkenazi Chief Rabbi of British Mandatory Palestine. He is considered to be one of the fathers of religious Zionism and is known for founding the Mercaz HaRav Yeshiva."
        }
    ];



    let currentIndex = 0;
    let intervalId; // משתנה לשמירת הזיהוי של setInterval
    let start = false;

    const titleElement = document.getElementById('title');
    const imageElement = document.getElementById('image');
    const descElement = document.getElementById('desc');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const playButton = document.getElementById('play');
    
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateDisplay();
    });
    
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateDisplay();
    });
    
    function updateDisplay() {
        const currentImage = images[currentIndex];
        titleElement.textContent = currentImage.title;
        imageElement.src = currentImage.source;
        descElement.textContent = currentImage.description;
    }
    
    updateDisplay();
    
// הגדרת הפונקציה המעדכנת את התמונה
    function updateImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateDisplay();
    }

// הגדרת פונקציה להתחיל את הפעילות של העדכון בפרקי זמן קבועים
    function startImageLoop(interval) {
        intervalId = setInterval(updateImage, interval);
    }
    
    function stopImageLoop() {
        clearInterval(intervalId);
    }

    playButton.addEventListener('click', function() {
        if (playButton.innerHTML === "Play") {
            playButton.innerHTML = "Pause";
            start = true;
            nextButton.style.visibility = 'hidden';
            prevButton.style.visibility = 'hidden';
            startImageLoop(2000);
        }
        else {
            playButton.innerHTML = "Play";
            start = false;
            nextButton.style.visibility = 'visible';
            prevButton.style.visibility = 'visible';
            stopImageLoop();
        }
        });


    imageElement.addEventListener('mouseenter', function() {
        stopImageLoop();
    });
    
    // הוספת אירוע mouseleave לתמונה
    imageElement.addEventListener('mouseleave', function() {
        if (start){
        startImageLoop(2000);
    }});