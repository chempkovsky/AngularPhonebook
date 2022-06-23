
## AngularPhonebook
- Demo - **телефонный справочник**
- [См. Детальные пошаговые инструкции создания данного приложения](https://github.com/chempkovsky/CS82ANGULAR/wiki)
- [ Docker compose файл для MsSql ](#docker-compose-файл-для-MsSql)
- Если вы освоились с [CS82ANGULAR](https://github.com/chempkovsky/CS82ANGULAR) средством, то создание такого приложения потребует порядка 8 часов!!!
  - Создание Docker образов еще два или три часа (включая тестирование).
- Если попытаться написать руками такое приложение, то это отнимет порядка двух-трех месяцев!!!
- Серверная часть проекта находится в [отдельной репозитории](https://github.com/chempkovsky/PhonebookSolution)

### [ Модули ](#Модули)
### [ Функциональные части решения ](#Функциональные-части-решения)
- #### [ Замечание о пользователях и сотрудниках ](#Замечание-о-пользователях-и-сотрудниках)
### [ Базы данных приложения ](#Базы-данных-приложения)
### [ Микросервисы ](#Микросервисы)
### [ Ресурсы поиска ](#Ресурсы-поиска)
### [ Интерфейс пользователя ](#Интерфейс-пользователя)
- #### [ Стоимость производства ](#Стоимость-производства)
### [ Ленивая загрузка ](#Ленивая-загрузка)
### [ MsSQL ](#MsSQL)
### [ PostgreSQL ](#PostgreSQL)
### [ MySQL ](#MySQL)
### [ Стартовая страница приложения ](#Стартовая-страница-приложения)
- #### [ Переключение языков ](#Переключение-языков)
- #### [ Несанкционированный доступ ](#Несанкционированный-доступ)
- #### [ Регистрация ](#Регистрация)
- #### [ Выход из приложения ](#Выход-из-приложения)
- #### [ Войти как Admin ](#Войти-как-Admin)
- #### [ После входа как Admin ](#После-входа-как-Admin)
- #### [ После входа как Guest ](#После-входа-как-Guest)
- #### [ Навигация от Master к Detail ](#Навигация-от-Master-к-Detail)
- #### [ Один ко многим ](#Один-ко-многим)
- #### [ Один ко многим при редактировании ](#Один-ко-многим-при-редактировании)
- #### [ Валидация ](#Валидация)
- #### [ Автозаполнение ](#Автозаполнение)
- #### [ Добавить роль пользователю ](#Добавить-роль-пользователю)
- #### [ Фильтрация с использованием Ресурсов поиска ](#Фильтрация-с-использованием-Ресурсов-поиска)
- #### [ Фильтрация Full Scan ](#Фильтрация-Full-Scan)
- #### [ Features ](#Features)

### [ Как быстро понять структуру и компоненты Angular проекта ](#Как-быстро-понять-структуру-и-компоненты-Angular-проекта)
- #### [ Папка shared ](#Папка-shared)
  - #### [ Компонента WebServiceFilter ](#Компонента-WebServiceFilter)
- #### [ Папки components и services ](#Папки-components-и-services)
- #### [ Категория ViewModel ](#Категория-ViewModel)
- #### [ Сервисы для ViewModel ](#Сервисы-для-ViewModel)
- #### [ DataSource для ViewModel ](#DataSource-для-ViewModel)
- #### [ Sform для ViewModel ](#Sform-для-ViewModel)
- #### [ sdlg для ViewModel ](#sdlg-для-ViewModel)
- #### [ vform для ViewModel ](#vform-для-ViewModel)
- #### [ vdlg для ViewModel ](#vdlg-для-ViewModel)
- #### [ rvform для ViewModel ](#rvform-для-ViewModel)
- #### [ aform для ViewModel ](#aform-для-ViewModel)
- #### [ adlg для ViewModel ](#adlg-для-ViewModel)
- #### [ raform для ViewModel ](#raform-для-ViewModel)
- #### [ uform для ViewModel ](#uform-для-ViewModel)
- #### [ udlg для ViewModel ](#udlg-для-ViewModel)
- #### [ ruform для ViewModel ](#ruform-для-ViewModel)
- #### [ dform для ViewModel ](#dform-для-ViewModel)
- #### [ ddlg для ViewModel ](#ddlg-для-ViewModel)
- #### [ rdform для ViewModel ](#rdform-для-ViewModel)
- #### [ rlist для ViewModel ](#rlist-для-ViewModel)
- #### [ rdlist для ViewModel ](#rdlist-для-ViewModel)
### [ Proxy и Балансировщик нагрузки ](#Proxy-и-Балансировщик-нагрузки)


## Модули
- FrontEnd модуль
  - Это данный модуль 
  - реализован под **Angular 13** + **Angular Material**
- BackEnd модуль
  - Находится в отдельном репозитории [PhonebookSolution](https://github.com/chempkovsky/PhonebookSolution)
  - реализован под **Net 6** с использованием VS 2022
  
## Функциональные части решения
- **Телефонный Справочник**
  - реализация в рамках требования:
   - Типы телефонов
   - Предприятия
   - Подразделения предприятия
   - Сотрудники подразделения
   - Телефоны сотрудников
- **Админка**
  - управление пользователями, зарегистрированными в данном приложении
  - Перечень ресурсов приложения (= таблицы БД)
  - Роли в приложении
  - Права для Роли на ресурсы приложении
  - Присваивание одной или нескольких ролей зарегистрированному пользователю
 
#### Замечание о пользователях и сотрудниках
**"Зарегистрированные пользователи"** и **"Сотрудники подразделения"** - это разные сущности, которые находятся в отдельных базах и ни как не связаны между собой.

## Базы данных приложения
- [телефонный справочник](https://github.com/chempkovsky/PhonebookSolution/blob/master/PhBkContext/PhBk/PhbkDbContext.cs)
- [Identity](https://github.com/chempkovsky/PhonebookSolution/blob/master/PhBkContext/AspNetReg/AspNetRegistrationDbContext.cs)
   - Pеализации AspNet Identity 
   - Безопасность на серверрной стороне (Role-based security). Защита сервисов от несанкционированного использования.
- [Управление правами пользователя](https://github.com/chempkovsky/PhonebookSolution/blob/master/PhBkContext/Auth/aspnetchckdbcontext.cs)
  - Реализация безопасности на клиетской стороне (Angular модуль)
  - Запрещение или разрешение доступа к Web-страницам
   - Реализация "безопасности" на клиентской стороне, носит косметический характер и только для удобства пользователя
   - **Удобство пользователя означает:** страница открылась, а данных на странице нету, т.к. сервер отказал в данных. Чтобы такого не происходило, ссылки на страницы с запрещенными данными недоступны.
- LookUp Resources
  - [Подразделений](https://github.com/chempkovsky/PhonebookSolution/blob/master/LpPhBkContext/PhBk/LpPhnPhBkContext.cs)
  - [Сотрудников](https://github.com/chempkovsky/PhonebookSolution/blob/master/LpPhBkContext/PhBk/LpEmpPhBkContext.cs)
  - [Телефонов](https://github.com/chempkovsky/PhonebookSolution/blob/master/LpPhBkContext/PhBk/LpPhnPhBkContext.cs)

## Микросервисы
- Ясно, что данное приложение реализовано в рамках микросервисной архитектуры. Мы говорим о WebApi приложениях. Monolithic app как правило включает ровно один контерст данных и одно большое WebApi-приложение. В случае данного Demo приложения мы имеем шесть контекстов данных и естественное деление на микросервисы - это WebApi приложение на каждый контекст данных. Еще одно естественное разделение на микросервисы - это вынесение каждого Service Bus consumer в выделенный микроервис (выделенное WebApi приложение).
- В силу того, что это Demo приложение, было создано только два WebApi модуля с ассинхронной репликацией данных между ними. Этого достаточно, чтобы подчеркнуть микросервисную архитектуру.

## Ресурсы поиска
- Ресурсы поиска - это программный механизм позволяющий 
  - предоставить конечному пользователю **богатый** поисковый механизм, с одной стороны
  - с другой стороны, реализовать выборку данных из БД  только по **первичным** или **уникальным ключам**
    - последнее 
      - потребляет минимальное количество серверных ресурсов
      - дает минимальное время отклика
  - если поисковый ресурс разместить на выделенном Sql-сервере, то это снимает нагрузку с основного Sql-сервера.
    - Основной Sql-сервер получает запросы на выборку только по первичным ключам
  - ясно, что последнее требует реализации механизма ассинхронной репликации изменений данных на **основном** сервере на **сервер Ресурсов поиска**
  - В данном Demo-приложении такой механизм реализован с использованием **шины данных** (MassTransit)
  - Ресурс поиска реализован для
    - Подразделений предприятия
    - Сотрудников подразделения
    - Телефонов сотрудников
  - Ресурс поиска НЕ реализован для ([см. нашу статью с пояснениями](https://github.com/chempkovsky/CS82ANGULAR/wiki/033-Problem-with-full-table-scan#current-implementation))
    - Типов телефонов
    - Предприятий
- Мы не обсуждаем redis или etcd как альтернативу для реализации быстрого доступа к данным. Если ваша БД вырастает до полу терабайта и выше, то кэширование данных как общий подход не даст результата.
- Вернемся к **ресурсам поиска**
  - Для таблицы с огромным числом записей мы можем создать один или несколько ресурсов поиска
  - Назовем такую таблицу *Исходной таблицей*
  - Для *Исходной таблицы*, **Ресурс поиска** всегда реализуется минимум на двух дополнительных таблицах
    - первая таблица ресурса - это *словарь уникальных данных* выбранного столбца *Исходной таблицы*
    - вторая таблица ресурса - это *таблица ссылок*
      - одна группа полей таблицы ссылок используется как указатели на первичные ключи *словарей уникальных данных*
      - вторая группа полей держит первичный ключ *Исходной таблицы*
  - Важные свойства таблиц ресурса поиска
    - *словарь уникальных данных* - это всегда два столбца
      - первичный ключ
      - столбец уникальных данных
    - *таблица ссылок*
      - первичный ключ такой таблицы включает все поля этой таблицы
  - В общем случае **Ресурс поиска** может влючать более одного *словаря уникальных данных* и более одной *таблицы ссылок*
    - К примеру, в нашем Demo app, поиск по Фамилии, Имени и Отчетву будет включать
      - три *словаря уникальных данных*
      - две *таблицы ссылок*
        - одна таблица будет использоваться для поиска сотрудников без привязки к конкретному подразделению
        - вторая таблица будет использоваться для поиска сотрудников в разрезе по подразделениям
- Осталось заметить, что код репликаций (взаимодействия с шиной), код WebApi контроллеров, код UI интерфейса и т.п. писать не надо:
  - Необходимо задать перечень полей для создания **ресурса поиска** и сгенерить классы реализации решения.
- Так, как `Full scan`-запросы иногда должны быть доступны для системного администратора, то реализован механизм разрешения(запрещения) использования `Full scan`-запросов для данной таблицы и для выбранной роли.
- В нашем Demo app `Full scan`-запросы запрещены для Guest-роли и разрешены для Admin-роли на следующих таблицах
  - Подразделений предприятия
  - Сотрудников подразделения
  - Телефонов сотрудников
- После старта приложения можно переопределить доступ для любой роли приложения.
- Перейдите к пункту [ Фильтрация с использованием Ресурсов поиска ](#Фильтрация-с-использованием-Ресурсов-поиска), который домонстрирует использование поискового ресурса.

## Интерфейс пользователя
- По факту **Angular модуль** состоит из двух приложений. Это сделано для демонстрации возможностей инструментария, который использовался для построения решения.

- **Form-based интерфейс:** каждая функция предъявляется на отдельной странице. Это показано на изображении 1
<details>
  <summary>Показать изображение 1</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn001.png)
</details>

- **Dialog-based интерфейс:** каждая функция предъявляется в виде блока диалога. Это показано на изображении 2

<details>
  <summary>Показать изображение 2</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn002.png)
</details>

### Стоимость производства
- Стоимость производства выраженная в человекочасах является **одинаковой** и занимает минуты
  - или для **Form-based** 
  - или для **Dialog-based**  
  - или для **Form-based** и **Dialog-based** одновременной
  
## Ленивая загрузка
- **Замечание:** Плохо спроектированные и реализованные SPA приложения могут очень долго загружать первую станицу. Время расходуется на загрузку java-кода. 
- **LazyLoading** решает эту проблему. В нашем случа именно этот подход и используется [см. главный модуль]( https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/app-routing.module.ts) и [см. один из дополнительных модулей](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/components/phbk-employee-view/phbk-employee-view-rl.routing.module.ts). 
- Вообще говоря, данный подход позволяет строить не просто большие, но позволяет строить **огромные** приложения, которые по функционалу не уступают Decktop-приложениям.
- **В сухом остатке**: В данном приложении каждая страница открывается очень быстро, вне зависимости от того, сколько этих страниц реализовано в приложении (или десять или сто или тысячи). А вот данные на страницу могут приходить с задержкой. Это зависит от того как загружен SQL-сервер, который находится позади WebApi-сервер. В нашем случае, это [BackEnd модуль](#Модули). 

## MsSQL
- Данное Demo app использует MsSQL как сервер БД
  - [LpPhBkWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/LpPhBkWebApp)
  - [PhBkWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkWebApp)

## PostgreSQL
- PostgreSQL может использоваться как сервер БД. [См. нашу статью](https://github.com/chempkovsky/CS82ANGULAR/wiki/260-PostgreSQL-Support)
  - [LpPhBkPostgreSqlWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/LpPhBkPostgreSqlWebApp)
  - [PhBkPostgreSqlWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkPostgreSqlWebApp)
  - 
## MySQL
- MySQL может использоваться как сервер БД. [См. нашу статью](https://github.com/chempkovsky/CS82ANGULAR/wiki/250-MySQL-Support)
  - [LpPhBkMySqlWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/LpPhBkMySqlWebApp)
  - [PhBkMySqlWebApp](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkMySqlWebApp)
  - 
## Стартовая страница приложения
- при запуске приложения открывается главная страца приложения с пунктами меню разделенными на две ргуппы. Пункты меню предметной области и пункты меню администратора. Это показано на изображении 3. 
  - Стартовая страница может быть открыта или в Английской версии или Русской. Это зависит от настроек вашего браузера.
<details>
  <summary>Показать изображение 3</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk01.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk02.png)

</details>

- Каждый пункт меню предъявляется парой [Как упоминалось выше, решение содержит два приложения](#Интерфейс-пользователя)

### Переключение языков
- Кликните шестеренку в верхнем правом углу страницы и выберите язык 
<details>
  <summary>Показать изображение</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk03.png)

</details>


### Несанкционированный доступ
- При попытке активировать меню без входа в приложение, выдается сообщение. Это показано на изображении 4

<details>
  <summary>Показать изображение 4</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk04.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk05.png)

</details>


### Регистрация
- Кликните шестеренку в верхнем правом углу страницы и выберите язык "Регистрация". Это показано на изображении 5

<details>
  <summary>Показать изображение 5</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk06.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk07.png)

</details>

- Появится форма для регистрации нового пользователя. Это показано на изображении 6
  - Зарегистриркйтесть пользователем `z@gmail.com` с паролем `5Z@gmail.com`


<details>
  <summary>Показать изображение 6</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk08.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk09.png)

</details>

- После регистрации изменится содержание верхнего правого угла. Это показано на изображении 7


<details>
  <summary>Показать изображение 7</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk10.png)


</details>

- кликните `Типы телефона` и убедитесь, что `z@gmail.com`-пользователь не имеет прав. Это показано на изображении 8

<details>
  <summary>Показать изображение 8</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk11.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk12.png)

</details>

### Выход из приложения
- Кликните шестеренку в верхнем правом углу страницы и выберите язык "Регистрация". Это показано на изображении 9

<details>
  <summary>Показать изображение 9</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk13.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk14.png)

</details>

- Появится блок диалога для подтверждения операции. Это показано на изображении 10
  - кликните `OK`

<details>
  <summary>Показать изображение 10</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk15.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk16.png)

</details>


### Войти как Admin
- **Замечание:** В приложении создаются два пользователя
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
  - `Guest@gmail.com` с паролем `5Guest@gmail.com`
- Войдите в приложение как пользователь `Admin@gmail.com` с паролем `5Admin@gmail.com`. Для этого кликните шестеренку в верхнем правом углу и выберите "Войти". Это показано на изображении 11

<details>
  <summary>Показать изображение 11</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk17.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk18.png)

</details>

- появится форма для входа в систему
  - Введите `Admin@gmail.com` и пароль `5Admin@gmail.com`
  - Это показано на изображении 12
<details>
  <summary>Показать изображение 12</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk19.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk20.png)

</details>


### После входа как Admin
- Убедитесь, что `Admin@gmail.com`(`5Admin@gmail.com`) имеет все права на все ресурсы. Это показано на изображении 13

<details>
  <summary>Показать изображение 13</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk21.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk22.png)

</details>

### После входа как Guest
- **Замечание:** В приложении создаются два пользователя
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
  - `Guest@gmail.com` с паролем `5Guest@gmail.com`
- Войдите в приложение как пользователь `Guest@gmail.com` с паролем `5Guest@gmail.com`.
- Убедитесь, что `Guest@gmail.com`(`5Guest@gmail.com`) имеет права только на просмотр ресурсов. Это показано на изображении 14


<details>
  <summary>Показать изображение 14</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk23.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk24.png)

</details>


- Убедитесь, что `Guest@gmail.com`(`5Guest@gmail.com`) не имеет прав на пункты меню `Администратор`. Это показано на изображении 15

<details>
  <summary>Показать изображение 15</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk25.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk26.png)

</details>

### Навигация от Master к Detail
- войдите в приложение одним из пользователей
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
  - `Guest@gmail.com` с паролем `5Guest@gmail.com`
- Убедитесь, что навигация работает
  - Предприятия-Подразделения. Это показано на изображении 16


<details>
  <summary>Показать изображение 16</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk27.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk28.png)

</details>


- Убедитесь, что навигация работает
  - Подразделения-Сотрудники. Это показано на изображении 17


<details>
  <summary>Показать изображение 17</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk29.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk30.png)

</details>


- Убедитесь, что навигация работает
  - Сотрудники-Телефоны. Это показано на изображении 18


<details>
  <summary>Показать изображение 18</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk31.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk32.png)

</details>

- Убедитесь, что навигация заканчивается на телефонах. Это показано на изображении 19


<details>
  <summary>Показать изображение 19</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk33.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk34.png)

</details>


### Один ко многим
- войдите в приложение одним из пользователей
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
  - `Guest@gmail.com` с паролем `5Guest@gmail.com`

- Убедитесь, что работает `Один ко многим`. Это показано на изображении 20

<details>
  <summary>Показать изображение 20</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk35.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk36.png)

</details>


### Один ко многим при редактировании
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `телефоны`
- кликните `Добавить элемент`
  - Это показано на изображении 21

<details>
  <summary>Показать изображение 21</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk37.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk38.png)

</details>

- Откроется Форма `Добавить телефон`
  - кликните кнопку `выбрать предприятие`
  - Это показано на изображении 22

<details>
  <summary>Показать изображение 22</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk39.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk40.png)

</details>


- Откроется диалог `Выбрать предприятие`
  - Выберите первое и нажмите `Ok`
  - Это показано на изображении 23

<details>
  <summary>Показать изображение 23</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk41.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk42.png)

</details>


- Вы вернетесь на форму `Добавить телефон`
  - Поле `Предприятие` уже заполнено данными
  - кликните кнопку `выбрать подразделение`
  - Это показано на изображении 24


<details>
  <summary>Показать изображение 24</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk43.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk44.png)

</details>



- Откроется диалог `Выбрать подразделение`
  - Убедитесь, что доступны только подразделения, которые принадлежат выбранному предприятию
  - Выберите первое и нажмите `Ok`
  - Это показано на изображении 25

<details>
  <summary>Показать изображение 25</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk45.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk46.png)

</details>



- Вы вернетесь на форму `Добавить телефон`
  - Поле `Предприятие` уже заполнено данными
  - Поле `Подразделение` уже заполнено данными
  - кликните кнопку `выбрать сотрудника`
  - Это показано на изображении 26

<details>
  <summary>Показать изображение 26</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk47.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk48.png)

</details>


- Откроется диалог `Выбрать сотрудника`
  - Убедитесь, что доступны только сотрудники, которые принадлежат выбранному подразделению
  - Выберите первого и нажмите `Ok`
  - Это показано на изображении 27

<details>
  <summary>Показать изображение 27</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk49.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk50.png)

</details>


### Валидация

- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `телефоны`
- кликните `Добавить элемент`
  - Это показано на изображении 28

<details>
  <summary>Показать изображение 28</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk37.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk38.png)

</details>

- Откроется Форма `Добавить телефон`
  - кликните кнопку `Ok`
  - убедитесь, что валидация активировалась
  - Это показано на изображении 29


<details>
  <summary>Показать изображение 29</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk51.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk52.png)

</details>


### Автозаполнение
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `Сотрудники`
- Выберите `Телефоны` в combobox
- В нижнем пенале выберите `Добавить сотрудника` в combobox
  - Это показано на изображении 30

<details>
  <summary>Показать изображение 30</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk53.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk54.png)

</details>

- В нижнем пенале появится форма `Добавить телефон`
- Убедитесь, что поля следующие поля **уже заполнены** и находятся в режиме `Только чтение`
  - `Сотрудник`
  - `Подразделение`
  - `Предприятие `
  - Это показано на изображении 31


<details>
  <summary>Показать изображение 31</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk55.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk56.png)

</details>

### Добавить роль пользователю
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `Пользователи`
- Выберите `Роли пользователя`
- В верхнем пенале выберите `z@gmail.com`
- В нижнем пенале выберите команду `Добавить элемент`
  - Это показано на изображении 32


<details>
  <summary>Показать изображение 32</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk57.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk58.png)

</details>

- В нижнем пенале появится форма `Добавьте роль пользователя`
- Выберите `GuestRole`
- Кликните `Ok`
- Это показано на изображении 33

<details>
  <summary>Показать изображение 33</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk59.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk60.png)

</details>

- Войдите в приложение пользоватем `z@gmail.com`(`5Z@gmail.com`) 
  - Убедитесь, что пользователь имеет права на просмотр данных
- Это показано на изображении 34

<details>
  <summary>Показать изображение 34</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk61.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk62.png)

</details>

### Фильтрация с использованием Ресурсов поиска
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `Сотрудники`
- В поле `Фамилия` начните печатать `Pete`
- Это показано на изображении 35

<details>
  <summary>Показать изображение 35</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk63.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk64.png)

</details>


- Выберите из списка `Peterson21`
- Кликните `Применить фильтр`
- Это показано на изображении 36

<details>
  <summary>Показать изображение 36</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk65.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk66.png)

</details>



- Получим результат
- Это показано на изображении 37

<details>
  <summary>Показать изображение 37</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk67.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk68.png)

</details>


### Фильтрация Full Scan
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- кликните `Сотрудники`
- Выберите `Полное сканирование`
- Это показано на изображении 38

<details>
  <summary>Показать изображение 38</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk69.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk70.png)

</details>


- Пенал для фильтра изменится
- Это показано на изображении 39

<details>
  <summary>Показать изображение 39</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk71.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk72.png)

</details>

- Выберите Поле фильтрации, оператор, и введите значение фильтра
- Это показано на изображении 40

<details>
  <summary>Показать изображение 40</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk73.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk74.png)

</details>



- Результат применения фильтра
- Это показано на изображении 41

<details>
  <summary>Показать изображение 41</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk75.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk76.png)

</details>

### Features
- Feature позволяет разместить на странице более одной таблицы
- войдите в приложение как Admin
  - `Admin@gmail.com` с паролем `5Admin@gmail.com`
- Кликните `образец функций`
- Это показано на изображении 42

<details>
  <summary>Показать изображение 42</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk77.png)

- или

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/PhBk78.png)

</details>



## Как быстро понять структуру и компоненты Angular проекта
- Проект состоит из трех папок: components, services и shared. (Это показано на изображении 38).
<details>
  <summary>Показать изображение 38</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn38.png)
  
</details>

#### Папка shared
Структура показана на изображении 39
<details>
  <summary>Показать изображение 39</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn39.png)
  
</details>

- Папка shared содержит 
  - [services](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/services)
    - глоабальный [сервис настроект](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/shared/services/app-glbl-settings.service.ts). Это все настройки приложения.
    - логин сервис [сервис настроект](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/shared/services/app-glbl-login.service.ts). Публикует запросы для вход, выход, изменить пароль, регистрация
  - [interceptors](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/interceptors)
    - [http interceptor](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/shared/interceptors/app-glbl.interceptor.ts). Interceptor подставляет JwtBearer токен (если такой имеется) в заголовок каждого http к WebApi.
  - [components](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components)
    - Формы Login, Logout, ChangePassword, Register, Home, PageNotfound
    - [Форма](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/column-selector) и [диалог](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/column-selector-dlg) для выбора столбцов которые показывать в таблице
    - [Диалог](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/message-dialog) текстовых сообщений приложения с кнопками "Да" и "Нет"
    - [web-service-filter](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/web-service-filter). Об этой компоненте мы поговорим отдельно в следующем параграфе
   
##### Компонента WebServiceFilter
- Каждая табличная форма содержит [WebServiceFilter](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/web-service-filter) см. изображение 40
  - [WebServiceFilter](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/shared/components/web-service-filter) позволяет задать один или несколько атрибутов для фильтрации см. изображение 40
  - Данная компонента получает на вход **перечень полей для фильтрации**, **перечень операторов** для применения к полям фильтрации
  - Важным параметром для понимания является **hiddenFilter**. Если табличная форма используется в качестве **один-ко-многим Ditail** формы, то на вход такой таблицы мы должны подать первичный ключ **master**-таблицы. Так вот, **hiddenFilter** - это первичный ключ мастер таблицы.
  - Если задан **hiddenFilter**, то компонента не отображает в **перечене полей для фильтрации** поля перечисленные в коллекции **hiddenFilter**.
<details>
  <summary>Показать изображение 40</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn40.png)
  
</details>

- Существует **следующий феномен**: программист изучил всех все функции и параметры какой-либо компоненты и вес равно не понял как этой компонентой пользоваться. **Второй аспект этого феномена** состоит в том, что спустся некоторое время (это 30 дней) программист обязательно забудет, что он читал. Для борьбы с этим феноменом используется прием примера использования той или другой компоненты. Программист заглядывает в рабочий пример и у него все всплывает в памяти, включая информацию по атрибутам и функциям компоненты. Именно рабочий пример и запоминается. Сказанное выше можно переформулировать следующим образом: фраза "повторение -- мать учения" не является верной, но верной является фраза "применение -- мать учения". 
  - Чтобы посмотеть на **рабочий пример использования WebServiceFilter** и быстро схватить суть откройте любую **sform**-компоненту (search-form)
    - или [sform для aspnetmodel](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/aspnetmodel-view/sform)
    - или [sform для employee](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/phbk-employee-view/sform)
    - или [sform для phone](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/phbk-phone-view/sform)

#### Папки components и services
- Папки **components** и **services** имеют одинаковую вложенную структуру (см. изображение 41) и соответствуют всем прикладным компонета приложения.
  - **services** содержит сервисы достура к WebApi и Datasource
  - **components** содержит UI компоненты приложения.
<details>
  <summary>Показать изображение 41</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn41.png)
  
</details>

#### Категория ViewModel
- В терминах сетевого трафика. **ViewModel** - это стрруктура которую WebApi-сервис принимает на вход и отсылает клиенту. Производная структура - это коллекция ViewModel
- В терминах EntityFramework. **ViewModel** для заданной Entity - это подмножество полей данной Entity и подмножество полей прямых и непрямых мастер Entities.
  - Что такое прямой и непрямой мастер. Пусть таблица **T1** имеет foreign key на таблицу **T2**. Пусть таблица **T2** имеет foreign key на таблицу **T3**. Будем говорить, что таблица **T2** является **прямым мастером** для таблицы **T1**. Будем говорить, что таблица **T3** является **непрямым мастером** для таблицы **T1**.
- В терминах Sql. **ViewModel** для заданной таблицы - это подмножество полей данной таблицы и подмножество полей прямых и непрямых мастер таблиц. Т.е. **ViewModel** - это частный случай **Sql View** для заданной таблицы и мастер таблиц (прямых и непрямых), которые можно получить по **foreign key**-цепочкам.
- Все объявленные в приложении для первого WebApi-подпроекта
  - [ViewModel-классы телефонного справочника](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkViews/PhBk)
  - [ViewModel-классы прав доступа](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkViews/Auth)
  - [ViewModel-классы регистрации и входа в приложение](https://github.com/chempkovsky/PhonebookSolution/tree/master/PhBkViews/AspNetReg)
- Все объявленные в приложении для второго WebApi-подпроекта
  - [ViewModel-классы Lookup ресурса](https://github.com/chempkovsky/PhonebookSolution/tree/master/LpPhBkViews/PhBk)
- Все объявленные в приложении ViewModel-интерфейсы Angular-проекты
  - [components/aspnetrole-view/interfaces](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/aspnetrole-view/interfaces)
  - [components/aspnetrole-view/interfaces](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/aspnetrole-view/interfaces)
  - ...
  - [components/phbk-phone-view/interfaces/](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/phbk-phone-view/interfaces)

##### Сервисы для ViewModel
- Заглянем в файл 
  - [services/aspnetmodel-view/aspnetmodel-view.service.ts](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/aspnetmodel-view/aspnetmodel-view.service.ts)
  - [services/aspnetrole-view/aspnetrole-view.service.ts](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/aspnetrole-view/aspnetrole-view.service.ts)
  - ...
  - [services/phbk-phone-view/phbk-phone-view.service.ts](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/phbk-phone-view/phbk-phone-view.service.ts)
  
 - Каждый сервис реализует методы, котрые говорят сами за себя
   - getwithfilter
   - getone
   - addone
   - updateone
   - deleteone
 - Каждый Сервис содержит служебную информацию и методы которые помогают реализовать [**master-detail**-функционал на уровне конролей](#Один-ко-многим-на-уровне-контролей-форм-редактирования) для форм добавить, удалить, обновить, и просмотреть

##### DataSource для ViewModel
- Заглянем в файл 
  - [services/aspnetmodel-view/aspnetmodel-view-datasource.class.ts](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/aspnetmodel-view/aspnetmodel-view-datasource.class.ts)
  - [services/aspnetrole-view/aspnetrole-view-datasource.class.ts](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/aspnetrole-view/aspnetrole-view-datasource.class.ts)
  - ...
  - [services/phbk-phone-view/phbk-phone-view-datasource.class.ts ](https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/services/phbk-phone-view/phbk-phone-view-datasource.class.ts)
- DataSource помогет реализовать [**master-detail**-функционал на уровне конролей](#Один-ко-многим-на-уровне-контролей-форм-редактирования) для форм добавить, удалить, обновить, и просмотреть

##### Sform для ViewModel
- Sform - это search форма
- Заглянем в папку
  - [components/aspnetmodel-view/sform](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/aspnetmodel-view/sform)
  - [components/aspnetrole-view/sform](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/aspnetrole-view/sform)
  - ...
  - [components/phbk-phone-view/sform](https://github.com/chempkovsky/AngularPhonebook/tree/master/src/app/components/phbk-phone-view/sform)
- Каждая Sform 
  - отображает фильтр поиска и таблицу результатов. 
  - Sform умееет посылать запрос к WebApi на получение списка по фильтру с заданной сортировкой. 
  - поддерживает постраничное листание.
  - открывает пункты меню **уровня одной записи**, которые ей придут на вход (как правило, это View, Update, Delete, Перейти к Detail)
  - открывает пункты меню **уровня таблицы**, которые ей придут на вход  (как правило, это Add, Изменить список отображаемых столбцов, пакетная операция)
  - получает на вход **hiddenFilter**, если он необходим
- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют Sform :
  - sdlg 
  - rlist
  - rdlg
 
##### sdlg для ViewModel
- **sdlg** - это **Sform** отображаемая в виде блока диалога. **sdlg** содержит две дополнительных кнопки "Ok" и "Cancel". Предназначение **sdlg** - это дать возможность пользователю выбрать одну мастер запись, когда активна **AddOne(UpdateOne)** форма, для данной ViewModel. Формы DeleteOne и VieweOne не требуют такого функционала.
- Для иллюстрации см изображение 42 и 43 и 44.
  - Oткрываем форму добавить телефон (см изображение 42) и кликаем на кнопку выбрать предприятие
  - Выбираме предприятие И нажимаем Ok (см изображение 43)
  - получаем результат (см изображение 44)

<details>
  <summary>Показать изображение 42</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn42.png)
  
</details>

<details>
  <summary>Показать изображение 43</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn43.png)
  
</details>

<details>
  <summary>Показать изображение 44</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn44.png)
  
</details>

##### vform для ViewModel
- vform (View One Item Form) позволяет просмотреть ранее созданную запись в отдельной форме.
  - vform не имеет элементов общего управления (Кнопки Ok или кнопка Back).
  - делает getone-запрос к WebApi-сервису и отрисовывает полученные данные на форме
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют vform:
  - vdlg
  - rvform

##### vdlg для ViewModel
- vdlg (View One Item dialog) - это блок диалога, который отображает vform
- vdlg имеет две кнопки общего управления (Ok и Cancel)
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют vdlg:
  - rdlist
- Для иллюстрации см изображение 45 и 46.
  - Переходим к пункту меню "Телефоны Dlg", и выбираем "View Item"-пункт меню (см изображение 45)
  - Появляется (см изображение 45)


<details>
  <summary>Показать изображение 45</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn45.png)
  
</details>

<details>
  <summary>Показать изображение 46</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn46.png)
  
</details>

##### rvform для ViewModel
- rvform (Routed View One Item form) - это компонента, которая отображает vform и поддерживает навигацию Angular.
- rvform имеет кнопку общего управления (back)
- если для данной ViewModel в проекте созданы Detail-ViewModel, то данная компонента отбражает combo-box для выбора Detail-ViewModel
  - если выбрана Detail-ViewModel, то отбражается табличная форма для Detail
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют rvform:
  - rlist
- Для иллюстрации см изображение 47 и 48 и 49.


  - Переходим к пункту меню "Сотрудники", и выбираем "View Item"-пункт меню (см изображение 47)
  - Появляется rvform. В combo выбираем Телефоны (см изображение 48)
  - Появляеются телефоны данного сотрудника (см изображение 49)


<details>
  <summary>Показать изображение 47</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn47.png)
  
</details>

<details>
  <summary>Показать изображение 48</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn48.png)
  
</details>

<details>
  <summary>Показать изображение 49</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn49.png)
  
</details>

##### aform для ViewModel
- aform (Add One Item Form) позволяет создать новую запись в отдельной форме.
  - aform не имеет элементов общего управления (Кнопки Ok или кнопка Back).
  - делает addone-запрос к WebApi-сервису 
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют aform:
  - adlg
  - avform
##### adlg для ViewModel
- adlg (Add One Item dialog) - это блок диалога, который отображает aform
- adlg имеет две кнопки общего управления (Ok и Cancel)
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют adlg:
  - rdlist
##### raform для ViewModel
- raform (Routed Add One Item form) - это компонента, которая отображает aform и поддерживает навигацию Angular.
- avform имеет две кнопки общего управления (Ok и Canceel)
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют rvform:
  - rlist

##### uform для ViewModel
- uform (Update One Item Form) позволяет отредактировать существующую запись в отдельной форме.
  - uform не имеет элементов общего управления (Кнопки Ok или кнопка Back).
  - делает getone-запрос к WebApi-сервису и отрисовывает
  - делает updateone-запрос к WebApi-сервису 
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют uform:
  - udlg
  - uvform
##### udlg для ViewModel
- udlg (Update One Item dialog) - это блок диалога, который отображает aform
- udlg имеет две кнопки общего управления (Ok и Cancel)
- Вспоминая **феномин рабочего примера использования**, приводим список компонент которые используют udlg:
  - rdlist
##### ruform для ViewModel
- ruform (Routed Update One Item form) - это компонента, которая отображает uform и поддерживает навигацию Angular.
- ruform имеет две кнопки общего управления (Ok и Canceel)
- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют ruform:
  - rlist


##### dform для ViewModel
- dform (Delete One Item Form) позволяет отредактировать существующую запись в отдельной форме.
  - dform не имеет элементов общего управления (Кнопки Ok или кнопка Back).
  - делает getone-запрос к WebApi-сервису и отрисовывает
  - делает deleteone-запрос к WebApi-сервису 
- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют dform:
  - ddlg
  - uvform
##### ddlg для ViewModel
- ddlg (Delete One Item dialog) - это блок диалога, который отображает dform
- ddlg имеет две кнопки общего управления (Ok и Cancel)
- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют ddlg:
  - rdlist
##### rdform для ViewModel
- rdform (Routed Delete One Item form) - это компонента, которая отображает dform и поддерживает навигацию Angular.
- rdform имеет две кнопки общего управления (Ok и Canceel)
- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют rdform:
  - rlist


##### rlist для ViewModel
- rlist (routed list form) - это sform c поддержкой навигации Angular  и дополнительные функциями Add(Update,Delete,View)-item.
- rlist использует навигацию Angular для активации функциями Add(Update,Delete,View)-item, с использованием raform(ruform, rdform, rvform)

- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют rdform:
  - для активации используется строка разметки, аналогичная показанной ниже. [см также app/app.component.html]( https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/app.component.html)
````html
 <a mat-list-item [routerLink]="['PhdctEmployeeView']" routerLinkActive="active">Сотрудники</a>
````

##### rdlist для ViewModel
- rdlist (routed list form) - это sform c поддержкой навигации Angular  и дополнительные функциями Add(Update,Delete,View)-item.
- rdlist использует диалоги adlg(udlg, ddlg, vdlg) для Add(Update,Delete,View)-item.

- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют rdform:
  - для активации используется строка разметки, аналогичная показанной ниже. [см также app/app.component.html]( https://github.com/chempkovsky/AngularPhonebook/blob/master/src/app/app.component.html)
````html
 <a mat-list-item [routerLink]="['RDLPhdctEmployeeView']" routerLinkActive="active">Сотрудники (Dlg)</a>
````

## Docker compose файл для MsSql
- создайте папку на диске 
- сохраните в паку `docker-compose.yml`-файл с содержанием как приведено ниже

<details>
  <summary>Показать docker-compose.yml</summary>

````
services:
  pbdb:
    image: "mcr.microsoft.com/mssql/server:2019-latest"
    hostname: "pbdb"
    expose:
      - "1433"
#    ports:
#      - "1433:1433"
    environment:
      ACCEPT_EULA: "Y"
      SA_PASSWORD: "myPss@wrd"
    healthcheck:
      test: /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$${SA_PASSWORD}" -Q "SELECT 1" -b -o /dev/null
      interval: 10s
      timeout: 3s
      retries: 10
      start_period: 10s
  pbrabbit:
    image: "chempkovsky/rabbitmq-phn-bk:latest"
    hostname: "pbrabbit"
    environment:
      RABBITMQ_CONFIG_FILE: '/etc/rabbitmq/rabbitmq.conf'
    expose:
      - "5672"
    healthcheck:
      test: rabbitmq-diagnostics -q ping
      interval: 30s
      timeout: 30s
      retries: 3
      start_period: 10s    
#    ports:
#      - 15672:15672
  webapiphnlkup:
    image: "chempkovsky/webapi-phn-lkup:latest"
    hostname: "webapiphnlkup"
    environment:
      ConnectionStrings:LpPhnPhBkConnection: "Data Source=pbdb;Initial Catalog=LpPhnPhBkDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      ConnectionStrings:LpEmpPhBkConnection: "Data Source=pbdb;Initial Catalog=LpEmpPhBkDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      ConnectionStrings:LpPhBkConnection: "Data Source=pbdb;Initial Catalog=LpPhBkDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      JWT:ValidAudience: "PhBkAudience" 
      JWT:ValidIssuer: "PhBkIssuer" 
      JWT:Secret": "JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr" 
      PhbkDivisionViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkDivisionViewExtForLkUpConf:Username: "admin" 
      PhbkDivisionViewExtForLkUpConf:Password: "admin" 
      PhbkDivisionViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkDivisionViewExtForLkUpConf:ClusterIpAddresses: null
      PhbkEmployeeViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkEmployeeViewExtForLkUpConf:Username: "admin" 
      PhbkEmployeeViewExtForLkUpConf:Password: "admin" 
      PhbkEmployeeViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkEmployeeViewExtForLkUpConf:ClusterIpAddresses: null
      PhbkPhoneViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkPhoneViewExtForLkUpConf:Username: "admin" 
      PhbkPhoneViewExtForLkUpConf:Password: "admin" 
      PhbkPhoneViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkPhoneViewExtForLkUpConf:ClusterIpAddresses: null
    links:
      - pbdb
      - pbrabbit
    ports:
      - 91:80
    depends_on:
      pbdb:
        condition: service_healthy
      pbrabbit:
        condition: service_healthy
  webapiphnbk:
    image: "chempkovsky/webapi-phn-bk:latest"
    hostname: "webapiphnbk"
    environment:
      ConnectionStrings:PhBkConnection: "Data Source=pbdb;Initial Catalog=PhBkDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      ConnectionStrings:AuthConnection: "Data Source=pbdb;Initial Catalog=PhBkDbAuth;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      ConnectionStrings:AspNetRegConnection: "Data Source=pbdb;Initial Catalog=PhBkAspNet;Persist Security Info=True;User ID=sa;Password=myPss@wrd" 
      JWT:ValidAudience: "PhBkAudience" 
      JWT:ValidIssuer: "PhBkIssuer" 
      JWT:Secret: "JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr" 
      PhbkDivisionViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkDivisionViewExtForLkUpConf:Username: "admin" 
      PhbkDivisionViewExtForLkUpConf:Password: "admin" 
      PhbkDivisionViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkDivisionViewExtForLkUpConf:ClusterIpAddresses: null
      PhbkEmployeeViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkEmployeeViewExtForLkUpConf:Username: "admin" 
      PhbkEmployeeViewExtForLkUpConf:Password: "admin" 
      PhbkEmployeeViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkEmployeeViewExtForLkUpConf:ClusterIpAddresses: null
      PhbkPhoneViewExtForLkUpConf:HostName: "pbrabbit" 
      PhbkPhoneViewExtForLkUpConf:Username: "admin" 
      PhbkPhoneViewExtForLkUpConf:Password: "admin" 
      PhbkPhoneViewExtForLkUpConf:VirtualHostName: "phbkhost" 
      PhbkPhoneViewExtForLkUpConf:ClusterIpAddresses: null
    links:
      - pbdb
      - pbrabbit
    ports:
      - 92:80
    depends_on:
      pbdb:
        condition: service_healthy
      pbrabbit:
        condition: service_healthy
      webapiphnlkup:
        condition: service_started
  angularphnbk:
    image: "chempkovsky/angular-phn-bk:latest"
    environment:
      PHNLP_URL: "http://localhost:91/"
      EMPLP_URL: "http://localhost:91/"
      DIVLP_URL: "http://localhost:91/"
      WA_URL: "http://localhost:92/" 
      SEC_URL: "http://localhost:92/" 
      PERM_URL: "http://localhost:92/" 
    ports:
      - 93:80
    depends_on:
      pbdb:
        condition: service_healthy
      pbrabbit:
        condition: service_healthy
      webapiphnlkup:
        condition: service_started
      webapiphnbk:
        condition: service_started

````
</details>

- Запустите `Command Prompt` и сделайте вашу папку текущей
- Выполните команду для старта приложения:

````
docker-compose -f "docker-compose.yml" up -d
````

В браузере перейдите к URL=`http://localhost:93/`

- Выполните команду для удаления приложения

````
docker-compose -f "docker-compose.yml" down
````

После **САМОГО первого входа** как Admin и перехода к пунктам меню `Предприятий, Сотрудников, ...` возможно вы получите сообщение

````
Доступ запрещен
````

- Это связано с тем, что при первом запросе к вебсервисам предметной области начинают создаваться и **наполняться** Базы данных:
  - Оснавная
  - Три базы Ресурсов поиска
  - AspNet
  - База `Управления правами пользователя`

- Покликайте пункты меню, с промежутком в 5-10 секунд:
  - `Телефоны` 
  - потом `Телефоны DLg`
  - опять `Телефоны` 


## Proxy и Балансировщик нагрузки
- В данном Demo все WebApi сервисы "смотрят" наружу, т.е. решение имеет больше одного открытого порта.
- Мы продемонстрировали один из возможных вариантов решения этой проблемы
  - читайте нашу статью с пошаговыми инструкциями [270 Nginx as load balancer and reverse proxy in Docker](https://github.com/chempkovsky/CS82ANGULAR/wiki/270-Nginx-as-load-balancer-and-reverse-proxy-in-Docker)
