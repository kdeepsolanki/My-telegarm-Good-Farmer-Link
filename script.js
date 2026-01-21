(function() {
    function injectButtons() {
        // 1. Kill Switch
        var expiryDate = new Date('2026-02-15'); 
        if (new Date() > expiryDate) return;

        // 2. Buttons HTML
        var btnHTML = `
            <div class='tg-container' id='secure-tg-box'>
              <a class='tg-btn tg-blue' href='https://t.me/agrodastak' target='_blank'>
                  <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer) 
              </a>
              <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq' target='_blank'>
                  <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak) 
              </a>
            </div>`;

        // 3. Sahi Position ki Pehchan (Agriculture Quiz ke upar)
        // Hum us section ko dhundhenge jo aapki image_b9a217.png mein line 269 par hai
        var targetSection = document.querySelector('.section-box.agri-style') || 
                            document.querySelector('#agri-sec') || 
                            document.querySelector('.container > b\\:if');

        if (targetSection && !document.getElementById('secure-tg-box')) {
            targetSection.insertAdjacentHTML('beforebegin', btnHTML);
        }
    }

    // Site load hone par chalao
    document.addEventListener("DOMContentLoaded", injectButtons);
    // 2 second baad dobara check karega (agar dost ne delete kiya toh turant wapas layega)
    setInterval(injectButtons, 3000);
})();
