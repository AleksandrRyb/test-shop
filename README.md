Для запуска нужно зайти в папку server/src и там в файле .env вписать в 
поля DB_USERNAME(Имя пользователя базы Postgres) DB_PASSWORD(Пароль пользователя)
все остальные поля должны быть по умолчанию.
Потом запустить yarn install для установки пакетов и yarn dev для запуска.
Потом пройти по ссылке http://localhost:4000/playground и сделать несколько
мутаций чтоб загрузить данные, можете скопировать нижний пример, так же можете подставить
свои значения price = int, imageUrl = string(ссылка на изображение), name = string. После
всех успешных манипуляций переходите в папку client, набираете команду yarn start и приложуха
работает, надеюсь вам понравится :)

Чтоб зайти в корзину с верху в правом углу соответствующий значок, на странице корзины можно будет нажать на кнопку convert price чтоб получить ценники в разных валютах

Бэк: Typescript, Postgres, TypeORM, GraphqlYoga(Это Express с надстройками под graphql)
Фронт: Typescript, React, Redux, Apollo(Использовал просто для запросов для заполнения Redux Store), Styled-Components(Сильно с красотой ui не работал, а то это  задание могло затянуться надолго)

mutation {
  AddProductToDb (
    name: "Brown Brim"
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png"
    price: 25
  ) {
    ok
    error
    product {
      id
      name
      imageUrl
      price
    }
  }
}

Дополнительные данные которые можно подставить в запрос)

"name": "Green Beanie",
"imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
"price": 19.99
        
"name": "Palm Tree Cap",
"imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
"price": 15.99
        
"name": "Red Beanie",
"imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
"price": 15.99

"name": "Wolf Cap",
"imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
"price": 16.99
