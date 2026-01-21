document.addEventListener("DOMContentLoaded", function() {
    // 1. Kill Switch
    var expiryDate = new Date('2026-02-15'); 
    if (new Date() > expiryDate) {
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;">Service Suspended</h1>';
        return;
    }

    // 2. Button HTML
    var btnHTML = `
        <div class='tg-container'>
            <a class='tg-btn tg-blue' href='https://t.me/agrodastak' target='_blank'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer)
            </a>
            <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq' target='_blank'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak)
            </a>
        </div>`;

    // 3. Smart Positioning
    var target = document.getElementById('target-container');
    if (target) {
        target.innerHTML = btnHTML;
    } else {
        // Agar ID nahi milti, toh 'Agriculture Quizzes' wale section ke upar auto-insert karega
        var quizSection = document.querySelector('.section-box') || document.querySelector('.main');
        if (quizSection) {
            quizSection.insertAdjacentHTML('beforebegin', btnHTML);
        }
    }
});
