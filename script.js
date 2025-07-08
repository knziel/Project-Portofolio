tailwind.config = {
    theme: {
        extend: {
            colors: {
                'dark-blue': '#0A0E1A',
                'electric-blue': '#00D4FF',
                'navy': '#1A1F2E',
                'slate-blue': '#2D3748',
                'neon-pink': '#FF0080',
                'cyber-green': '#00FF88'
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.getElementById('typewriter-text');
    if (!typewriterText) return;

    const phrases = ["Hello, I'm Kenzie.", "Frontend Developer", "UI/UX Designer", "Game Developer", "Tech Enthusiast"];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;
    let typingSpeed = 100, deletingSpeed = 50, pauseBetween = 2000;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        typewriterText.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else if (!isDeleting) {
            setTimeout(() => { isDeleting = true; type(); }, pauseBetween);
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }
    type();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(anchor.getAttribute('href').substring(1));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function toggleMobileMenu() {
    const navLinks = document.createElement('div');
    navLinks.className = 'md:hidden fixed inset-0 bg-dark-blue/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-8';
    navLinks.innerHTML = `
        <button class="absolute top-4 right-4 text-electric-blue" onclick="this.parentElement.remove()">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <a href="#home" class="text-2xl text-electric-blue hover:text-cyan-300 transition-colors">Home</a>
        <a href="#about" class="text-2xl text-electric-blue hover:text-cyan-300 transition-colors">About</a>
        <a href="#projects" class="text-2xl text-electric-blue hover:text-cyan-300 transition-colors">Projects</a>
        <a href="#contact" class="text-2xl text-electric-blue hover:text-cyan-300 transition-colors">Contact</a>
    `;
    document.body.appendChild(navLinks);
}
