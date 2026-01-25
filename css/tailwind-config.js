/**
 * Shared Tailwind CSS Configuration
 * Used across all pages
 */

window.tailwindConfig = {
    theme: {
        extend: {
            colors: {
                coral: '#FF6B6B',
                mint: '#4ECDC4',
                green: '#6BCF7F',
                blue: '#4A90E2',
                purple: '#9B59B6',
                yellow: '#FFD93D'
            },
            fontFamily: {
                'habitori': ['JetBrains Mono', 'monospace']
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    },
    darkMode: 'class'
};
