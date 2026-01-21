document.addEventListener("DOMContentLoaded", function() {
    // ---- PAYMENT SECURITY (KILL SWITCH) ----
    // Yahan wo date daalein jab tak aap wait karenge
    var expiryDate = new Date('2026-02-15'); 
    var today = new Date();

    if (today > expiryDate) {
        // 1. Buttons ko gayab kar dega
        var containers = document.querySelectorAll('.tg-container');
        containers.forEach(function(el) {
            el.style.display = 'none';
        });

        // 2. Ya fir poori site par message dikhayega
        document.body.innerHTML = '<div style="text-align:center; padding:100px; font-family:sans-serif;">' +
            '<h1 style="color:red;">Site Maintenance: Design Service Suspended</h1>' +
            '<p>Please contact the developer to restore services.</p></div>';
        document.body.style.background = '#ffffff';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Payment Security (Kill Switch)
    var expiryDate = new Date('2026-02-15'); 
    var today = new Date();
    if (today > expiryDate) {
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;">Service Suspended</h1>';
        return;
    }

    // 2. Buttons ka Structure
    var btnHTML = `
        <div class='tg-container'>
            <a class='tg-btn tg-blue' href='https://t.me/agrodastak'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Good Farmer)
            </a>
            <a class='tg-btn tg-orange-glass' href='https://t.me/agriculturesupervisorpyq'>
                <i class='fa-brands fa-telegram'></i> Join Telegram (Agro Dastak)
            </a>
        </div>`;

    // 3. Position Set Karna (Sabse Zaroori)
    var target = document.getElementById('target-container'); 
    if (target) {
        target.innerHTML = btnHTML;
    }
});
