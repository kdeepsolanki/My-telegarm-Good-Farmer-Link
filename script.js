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
