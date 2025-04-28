// Главный JavaScript файл для сайта Neon Reverie

document.addEventListener('DOMContentLoaded', function() {
    // Добавление фонового вейпорвейв эффекта
    addVaporwaveBackground();
    
    // Инициализация видео контролов
    initVideoControls();
    
    // Анимация для элементов при прокрутке
    initScrollAnimations();
    
    // Эффект неоновых текстов
    initNeonTextEffect();
  });
  
  // Функция для создания и добавления вейпорвейв фона
  function addVaporwaveBackground() {
    // Проверяем, существует ли уже фоновый элемент
    if (!document.querySelector('.vaporwave-bg')) {
      const bgElement = document.createElement('div');
      bgElement.className = 'vaporwave-bg';
      
      const gridElement = document.createElement('div');
      gridElement.className = 'grid-overlay';
      
      document.body.prepend(bgElement);
      document.body.prepend(gridElement);
    }
  }
  
  // Инициализация контролов видео
  function initVideoControls() {
    const playButtons = document.querySelectorAll('.btn-play');
    const volumeButtons = document.querySelectorAll('.btn-volume');
    const fullscreenButtons = document.querySelectorAll('.btn-fullscreen');
    
    // Обработчики для кнопок воспроизведения
    playButtons.forEach(button => {
      button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-play')) {
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
          // Здесь будет логика для воспроизведения видео
        } else {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
          // Здесь будет логика для паузы видео
        }
      });
    });
    
    // Обработчики для кнопок громкости
    volumeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-volume-up')) {
          icon.classList.remove('fa-volume-up');
          icon.classList.add('fa-volume-mute');
          // Логика для отключения звука
        } else {
          icon.classList.remove('fa-volume-mute');
          icon.classList.add('fa-volume-up');
          // Логика для включения звука
        }
      });
    });
    
    // Обработчики для кнопок полноэкранного режима
    fullscreenButtons.forEach(button => {
      button.addEventListener('click', function() {
        const videoContainer = this.closest('.video-item').querySelector('.embed-responsive');
        if (videoContainer) {
          if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => {
              console.warn(`Не удалось перейти в полноэкранный режим: ${err.message}`);
            });
          } else {
            document.exitFullscreen();
          }
        }
      });
    });
  }
  
  // Анимация при прокрутке страницы
  function initScrollAnimations() {
    window.addEventListener('scroll', function()) {
      // Выделение активного пункта меню при прокрутке
      const scrollPosition = window.scrollY;
      
      // Добавление эффектов для элементов, которые
    }}