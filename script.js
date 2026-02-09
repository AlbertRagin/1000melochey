// 📱 МОБИЛЬНОЕ МЕНЮ
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        mobileMenuBtn.classList.toggle('active');
    });
}

// 🎯 ПЛАВНАЯ ПРОКРУТКА
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // отступ от хедера
            const position = target.offsetTop - offset;
            
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
            
            // Закрыть мобильное меню после клика
            if (window.innerWidth <= 992 && nav.style.display === 'flex') {
                nav.style.display = 'none';
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// 📞 КНОПКИ ЗВОНКА
document.querySelectorAll('.catalog-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = '+73466221111';
        if (confirm('Позвонить в магазин?')) {
            window.location.href = `tel:${phone}`;
        }
    });
});

// 💬 ТЕЛЕГРАМ КНОПКИ
document.querySelectorAll('.telegram-btn, .contact-telegram').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Можно добавить аналитику или подтверждение
        console.log('Переход в Телеграм');
    });
});

// 🗺️ 2ГИС КНОПКИ
document.querySelectorAll('.map-link, .big-map-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Открываем в новой вкладке
        window.open(btn.href, '_blank');
        e.preventDefault();
    });
});

// 📊 АНАЛИТИКА (опционально)
console.log('Сайт "1000 мелочей" загружен');
console.log('Для интеграции Яндекс.Метрики добавьте код в <head>');

// 🎨 АНИМАЦИИ ПРИ ПРОКРУТКЕ (простые)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за карточками
document.querySelectorAll('.catalog-card, .review-card, .delivery-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// 📱 ДЕТЕКТ МОБИЛЬНОГО УСТРОЙСТВА
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log('Мобильное устройство обнаружено');
    // Можно добавить специфичные действия для мобилок
}

// ✅ ГОТОВО!
console.log('✅ Скрипты инициализированы');