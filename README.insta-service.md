# Коментарі інстаграм сервісу для розробників що продовжать роботу

[🔙 Повернутися до головної сторінки](README.md)

- Наразі пости новин додаються з дефолтного файлу defaultPosts.js, це для того щоб в процесі розобки не було постійних запитів до апі інстаграму (кожен раз коли сторінка перезавантажується)

- Для продовження роботи потрібно отримати токен додатку слідуючи
  [Інструкція з налаштування сервісу Instagram News](README.insta.md)

- Далі створюємо в директорії проекту файли .env.development та .env.production за зразком файлу .env.example зі змінною GATSBY_APP_INS_TOKEN до якої в значення додаємо отриманий токен

- Потім в папці src > components > instaFeeds відкриваємо файл InstaFeeds.js

- В useEffect код відповідаючий за запити закоментовано, як показано нижче:

```bash

    useEffect(() => {
        const posts = false; //fetchInstagramPosts();

        // posts.then((resp) => {
        //   console.log(resp);

        //   if (resp?.data?.data) {
        //     setFeedsData(resp?.data?.data);
        //     return;
        //   }

        //   setFeedsData(defaultData);
        // });

        setFeedsData(defaultData);
    }, []);

```

- Міняємо на useEffect з розкоментованим кодом, копіюємо код нижче там замінюємо замість старого

```bash

    useEffect(() => {
    const posts = fetchInstagramPosts();

    posts.then((resp) => {

      if (resp?.data?.data) {
        setFeedsData(resp?.data?.data);
        return;
      }

      setFeedsData(defaultData);
    });
  }, []);

```

- В коді передбачено якщо апі поверне помилку то на сторінці вімалюються дефолтні публікаціїї з файлу defaultPosts.js

- Також для відображення публікцій з відео та збірками зображень потрібно оновити відповідні стилі в "switch-case" в файлі Feed.js тієї ж папки.

[🔙 Повернутися до головної сторінки](README.md)
