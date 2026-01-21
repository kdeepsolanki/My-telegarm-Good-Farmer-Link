document.addEventListener("DOMContentLoaded", function() {
    // 1. Kill Switch (Optional)
    var expiryDate = new Date('2026-02-15'); 
    if (new Date() > expiryDate) { return; }

    // 2. Buttons ka asli HTML jo wapas aayega
    var btnHTML = `
        <div class='tg-container'>
          <a class='tg-btn tg-blue' href='https://t.me/agrodastak'>
              <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer) 
          </a>
          <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq'>
              <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak) 
          </a>
        </div>`;

    // 3. Auto-Injection (Jahan bhi '.container' class milegi, wahan buttons aa jayenge)
    var target = document.querySelector('.container');
    if (target) {
        // Agar buttons pehle se nahi hain, tabhi insert karega
        if (!document.querySelector('.tg-container')) {
            target.insertAdjacentHTML('afterbegin', btnHTML);
        }
    }
});
