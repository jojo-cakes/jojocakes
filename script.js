// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        window.scrollTo({
            top: target.offsetTop - navbarHeight, // Accounts for the fixed navbar height
            behavior: 'smooth'
        });
    });
});

// The previous form submission blocker was removed 
// so that the form can successfully send the email to joliana@gmail.com!