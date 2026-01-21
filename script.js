document.addEventListener("DOMContentLoaded", function() {
    // 1. Buttons ka HTML (Jo GitHub se deliver hoga)
    var btnHTML = `
        <div class='tg-container' id='secure-buttons'>
          <a class='tg-btn tg-blue' href='https://t.me/agrodastak' target='_blank'>
              <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer) 
          </a>
          <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq' target='_blank'>
              <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak) 
          </a>
        </div>`;

    // 2. Sahi Position ki Talaash (Bina kisi ID ke)
    // Ye line aapke "Agriculture Quizzes" wale box (section-box) ko dhoondti hai
    var target = document.querySelector('.section-box.agri-style') || document.querySelector('.main-content');

    if (target) {
        // Buttons ko Agriculture Quizzes ke bilkul upar insert karega
        target.insertAdjacentHTML('beforebegin', btnHTML);
    }
});
