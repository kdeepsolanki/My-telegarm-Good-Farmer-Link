document.addEventListener("DOMContentLoaded", function() {
    // 1. PAYMENT SECURITY (KILL SWITCH)
    var expiryDate = new Date('2026-02-15'); 
    var today = new Date();

    if (today > expiryDate) {
        document.body.innerHTML = '<div style="text-align:center; padding:100px; font-family:sans-serif; background:#fff; height:100vh;">' +
            '<h1 style="color:red;">Site Maintenance: Design Service Suspended</h1>' +
            '<p>Please contact the developer to restore services.</p></div>';
        return; // Yahan se script ruk jayegi agar date nikal gayi hai
    }

    // 2. BUTTONS KA STRUCTURE
    var btnHTML = `
        <div class='tg-container'>
            <a class='tg-btn tg-blue' href='https://t.me/agrodastak' target='_blank'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer)
            </a>
            <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq' target='_blank'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak)
            </a>
        </div>`;

    // 3. INSERT BUTTONS IN BLOGGER
    // Pehle purane containers ko dhundta hai, phir target ID ko
    var target = document.getElementById('target-container'); 
    if (target) {
        target.innerHTML = btnHTML;
    } else {
        // Agar ID nahi milti toh fallback: Body ke shuruat mein daal dega
        document.body.insertAdjacentHTML('afterbegin', btnHTML);
    }
});
