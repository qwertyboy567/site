// Меню-бургер
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Данные курсов
const courses = {
    1: {
        title: "Программирование для детей",
        description: "Курс включает изучение основ Python и Scratch. Дети научатся создавать игры и простые приложения в игровой форме.",
        price: "15000 рублей",
        image: "https://via.placeholder.com/300x200"
    },
    2: {
        title: "Английский язык",
        description: "Курс для всех уровней: от начинающих до продвинутых. Занятия с носителями языка и интерактивные уроки.",
        price: "12000 рублей",
        image: "https://via.placeholder.com/300x200"
    },
    3: {
        title: "Искусство и творчество",
        description: "Курс охватывает рисование, дизайн и рукоделие. Подходит для детей и взрослых, развивает креативность.",
        price: "10000 рублей",
        image: "https://via.placeholder.com/300x200"
    }
};

// Модальное окно
const modal = document.getElementById('course-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');
const detailsButtons = document.querySelectorAll('.details-btn');
const payButton = document.querySelector('.pay-btn');

// Открытие модального окна
detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.parentElement.getAttribute('data-course-id');
        const course = courses[courseId];
        
        modalTitle.textContent = course.title;
        modalImage.src = course.image;
        modalImage.alt = course.title;
        modalDescription.textContent = course.description;
        modalPrice.textContent = `Цена: ${course.price}`;
        
        modal.style.display = 'flex';
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне контента
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка оплаты (заглушка)
payButton.addEventListener('click', () => {
    alert('Переход к оплате курса. Интеграция с платежной системой не реализована.');
    // Здесь можно добавить интеграцию с платежной системой, например, Stripe
});

// Обработка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами скоро.');
    e.target.reset();
});