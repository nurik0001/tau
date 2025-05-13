document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Здесь можно добавить отправку данных на сервер
    // Пока просто показываем сообщение
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время! 🎉');
    this.reset();
}); 