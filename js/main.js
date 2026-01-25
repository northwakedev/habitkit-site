/**
 * Habitori Website - Shared JavaScript
 * Theme toggle, expandable sections, and scroll animations
 */

(function() {
    'use strict';

    /**
     * Initialize theme toggle functionality
     */
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        if (!themeToggle) return;
        
        // Get saved theme or detect system preference
        function getInitialTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            // Detect system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        // Apply theme
        function setTheme(theme) {
            if (theme === 'dark') {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
        
        // Initialize theme
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
        
        // Listen for system theme changes (optional - only if no manual preference set)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-update if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    /**
     * Initialize expandable sections (info buttons)
     */
    function initExpandables() {
        const expandButtons = document.querySelectorAll('[data-expandable-toggle]');
        
        expandButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-expandable-toggle');
                const target = document.getElementById(targetId);
                
                if (!target) return;
                
                // Toggle aria-expanded
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle classes
                target.classList.toggle('max-h-[200px]');
                target.classList.toggle('opacity-100');
                target.classList.toggle('mt-6');
                target.classList.toggle('pt-4');
            });
        });
    }

    /**
     * Initialize scroll animations using Intersection Observer
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('[data-animate]').forEach((el) => {
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    }

    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
        initThemeToggle();
        initExpandables();
        initScrollAnimations();
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
