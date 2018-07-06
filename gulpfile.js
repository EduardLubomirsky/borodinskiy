var gulp       = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'); // Подключаем Browser Sync


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/style/style.css', browserSync.reload);
});

gulp.task('default', ['watch'], function () {
});