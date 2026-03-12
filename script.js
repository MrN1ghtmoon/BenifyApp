// Управление модальными окнами
function openModal(type) {
    document.getElementById(type + 'Modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(type) {
    document.getElementById(type + 'Modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchToRegister() {
    closeModal('login');
    openModal('register');
}

function switchToLogin() {
    closeModal('register');
    openModal('login');
}

// Обработка входа
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    if (!email || !password) {
        errorElement.textContent = 'Заполните все поля';
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
        return;
    }

    // Здесь будет реальная авторизация
    alert('Демо-режим: вход выполнен (в реальном проекте здесь будет проверка данных)');
    closeModal('login');
}

// Обработка регистрации
function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    const errorElement = document.getElementById('registerError');

    if (!name || !email || !phone || !password || !confirm) {
        errorElement.textContent = 'Заполните все поля';
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
        return;
    }

    if (password !== confirm) {
        errorElement.textContent = 'Пароли не совпадают';
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
        return;
    }

    if (password.length < 6) {
        errorElement.textContent = 'Пароль должен быть не менее 6 символов';
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
        return;
    }

    // Здесь будет реальная регистрация
    alert('Демо-режим: регистрация успешна! Проверьте email для подтверждения.');
    closeModal('register');
}

// Вход через Telegram
function handleTelegramLogin() {
    alert('Демо-режим: вход через Telegram будет доступен в боте @benify_bot');
}

// FAQ
function toggleFaq(element) {
    const item = element.closest('.faq-item');
    item.classList.toggle('active');
    const span = element.querySelector('span');
    if (span) {
        span.textContent = item.classList.contains('active') ? '−' : '+';
    }
}

// Отправка заявки на демо
function submitDemo() {
    const email = document.getElementById('demoEmail').value;
    if (email && email.includes('@')) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('demoEmail').value = '';
    } else {
        alert('Пожалуйста, введите корректный email');
    }
}

// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Закрытие модального окна по клику вне его
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
