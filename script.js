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
    // 1. Check karein ki kya site block karni hai (Kill Switch)
    var expiryDate = new Date('2026-02-15'); 
    var today = new Date();

    if (today > expiryDate) {
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;">Service Suspended</h1>';
        return; // Aage ka code nahi chalega
    }

    // 2. Agar payment ho gayi hai, toh buttons automatic insert karein
    var btnHTML = `
        <div class='tg-container'>
            <a class='tg-btn tg-blue' href='LINK_1'>Join Blue</a>
            <a class='tg-btn tg-orange-glass' href='LINK_2'>Join Orange</a>
        </div>`;
    
    // Ise site ke kisi khaas section mein daalne ke liye (Jaise Footer ya Post ke baad)
    document.body.insertAdjacentHTML('beforeend', btnHTML);
});
