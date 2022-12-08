# Проєкт Нейрончики

## Google API

1. Щоб отримати Google Maps API Key, необхідно мати обліковий запис Google. Переходимо на платформу за [посиланням](https://cloud.google.com/maps-platform) і натискаємо кнопку «Get Started». Заповнюємо всі дані, в тому числі для банківської картки. Користування Картами умовно безкоштовне (більш детально про цінову політику [тут](https://developers.google.com/maps/documentation/javascript/usage-and-billing) і [тут](https://mapsplatform.google.com/intl/ru_ALL/pricing/). Тип облікового запису залежить від того, як ви плануєте оплачувати (навіть якщо не плануєте). Виберіть Бізнес, якщо платитимете від імені компанії, організації або навчального закладу. В інших випадках підійде варіант Особистий.

2. Далі необхідно створити проєкт. Вводимо назву проєкту, погоджуємося з умовами. На вкладці APIs вибираємо Geolocation API, Maps Javascript API та Places API, натискаємо "Enable"

3. Далі необхідно отримати API ключ, що необхідно скопіювати та зберегти для подальшого використання. Його можна знову відкрити в розділі Credentials - API keys.

4. Також необхідно налаштувати обмеження для вашого ключа, аби ключ був недійсним, якщо потрапить до третіх осіб. В розділі Credentials вибираємо "Restrict API". У вкладці допустимий тип програм вибираємо HTTP-джерела переходу, і вставляємо ваш сайт у необхідному форматі, обов'язково враховуйте, чи доступний ваш сайт за HTTP або HTTPS та WWW піддоменом, при необхідності додайте всі варіанти доменів та піддоменів. Наприклад додаємо сайт у вигляді: https://vashdomain.com/*.
   Якщо поле залишити порожнім — ключ API буде доступний для використання з будь-яким сайтом.
