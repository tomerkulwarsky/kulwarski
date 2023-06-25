
var slideIndex = 1;//משתנה לשמירת מספר התמונה שתוצג
//בטעינת הדף תמונה 1 מוצגת לכן בהתחלה משתנה זה שווה לאחד


//פונקציה שמופעלת בעת לחיצה על כפתור הבא או קודם
function nextPreviosFunc(minusPlusNumber) {
    slideIndex += minusPlusNumber;
    updateSlide(slideIndex);
}

//בעת לחיצה על תמונה קטנה מופעלת הפונקציה
function miniImgClickFunc(currentImgNum) {
    slideIndex = currentImgNum;//עדכון מספר התמונה הנוכחית
    updateSlide(slideIndex);//קריאה לפונקציה שמעדכנת את התצוגה
}

function updateSlide(myCurrentImgNum) {//מעדכנת את התמונה הגדולה לפי בחירת המשתמש 
    //יצירת מערך שיכיל את הדיבים של התמונות הגדולות
    var slidesArray = new Array(6);

    //יצירת מערך שיכיל את התמונות המוקטנות
    var miniImagesArray = new Array(6);

    //לולאה שרצה 6 פעמים ומכניסה את התוכן לשני המערכים שיצרתי
    for (var i = 1; i <= 6; i++) {
        slidesArray[i - 1] = document.getElementById("img" + i);
        miniImagesArray[i - 1] = document.getElementById("mini" + i);
    }

    //למקרה שהמשתמש היה בתמונה 6 ולחץ הבא תוצג תמונה 1
    if (myCurrentImgNum > slidesArray.length) {
        slideIndex = 1;
    }

    //למקרה שהמשתמש היה בתמונה 1 ולחץ קודם תוצג תמונה 6
    if (myCurrentImgNum < 1) {
        slideIndex = 6;
    }

    //העלמת כל התמונות הגדולות
    for (var i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = "none";
    }

    // -הגדרת שקיפות של אפס נקודה 6 -העלמת הסימון של כל התמונות הקטנות
    for (var i = 0; i < miniImagesArray.length; i++) {
        //הורדת האקטיב מהקלאס
        miniImagesArray[i].className = miniImagesArray[i].className.replace(" active", "");

    }

    var captionText = document.getElementById("caption");//שמירה של האלמנט של הכותרת לתוך משתנה

    //עדכון העיצוב לפי התמונה הנבחרת
    slidesArray[slideIndex - 1].style.display = "block";//הצגת התמונה הגדולה
    miniImagesArray[slideIndex - 1].className += " active";//סימון התמונה המוקטנת 
    captionText.innerHTML = miniImagesArray[slideIndex - 1].alt;// עדכון הטקסט בכותרת
}