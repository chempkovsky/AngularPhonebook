# AngularPhonebook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## AngularPhonebook
- Тестовая задача - **телефонный справочник**
  - [docker compose файл для mssql](#Docker-compose-используя-Docker-hub)
  - [docker compose файл для Postgres](#Docker-compose-для-Postgres)
  - [docker compose файл для MySql](#Docker-compose-для-MySql)
  - [Замечание по поводу Mongodb](#mongodb). Проект не реализован, т.к. тредует создания генераторов WebApi и полного перепроектирования интерфейса пользователя. (Mongodb нереляционная БД с хранения ненормализованных данных, что является "нативным"(естественным) для данного продукта). Вместо этого был реализован проект под MySql.
  - [Замечание по поводу Production](#Замечание-для-Production)
  - [ Что не сделано ](#Что-не-сделано)


### [ Модули ](#Модули)
### [ Функциональные части решения ](#Функциональные-части-решения)
- #### [ Замечание о пользователях и сотрудниках ](#Замечание-о-пользователях-и-сотрудниках)
### [ Базы данных приложения ](#Базы-данных-приложения)
### [ Интерфейс пользователя ](#Интерфейс-пользователя)
- #### [ Стоимость производства ](#Стоимость-производства)
### [ Ленивая загрузка ](#Ленивая-загрузка)
### [ Стартовая страница приложения ](#Стартовая-страница-приложения)
- #### [ Несанкционированный доступ ](#Несанкционированный-доступ)
- #### [ Вход или Регистрация ](#Вход-или-Регистрация)
- #### [ После входа или регистрации ](#После-входа-или-регистрации)
- #### [ Почему новый пользователь уже имеет права ](#Почему-новый-пользователь-уже-имеет-права)
### [ Изменение настроек по умолчанию после развертывания приложения ](#Изменение-настроек-по-умолчанию-после-развертывания-приложения)
### [ Навигация и один ко многим ](#Навигация-и-один-ко-многим)
### [ Один ко многим на одной странице ](#Один-ко-многим-на-одной-странице)
### [ Пакетные операции ](#Пакетные-операции)
### [ Редактирование записей ](#Редактирование-записей)
### [ Один ко многим на уровне контролей форм редактирования ](#Один-ко-многим-на-уровне-контролей-форм-редактирования)
### [ Навигация и редактирование ](#Навигация-и-редактирование)
### [ Фильтрация ](#Фильтрация)
### [ Сортировка ](#Сортировка)

### [ Работа с проектом ](#Работа-с-проектом)
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
### [ Docker для Angular модуля ](#Docker-для-Angular-модуля)
- #### [ Быстрый способ создания Docker образа  ](#Быстрый-способ-создания-Docker-образа)
- #### [ Медленный способ создания Docker образа ](#Медленный-способ-создания-Docker-образа)
### [ Docker для WebApi модуля ](#Docker-для-WebApi-модуля)
- #### [ Cоздание Docker образа  ](#Cоздание-Docker-образа)
- #### [ Запуск Docker образа  ](#Запуск-Docker-образа)
### [ Docker для MsSql ](#Docker-для-MsSql)
### [ Docker в результате ](#Docker-в-результате)
### [ Docker compose ](#Docker-compose)
- #### [ Запуск docker compose ](#Запуск-docker-compose)
- #### [ Важное напоминание ](#Важное-напоминание)
### [ Образы проекта на Docker hub ](#Образы-проекта-на-Docker-hub)
### [ Docker compose используя Docker hub ](#Docker-compose-используя-Docker-hub)

### [ Postgres ](#Postgres)
- #### [ Postgres в виртуальной машине ](#Postgres-в-виртуальной-машине)
- #### [ WebApi над Postgres ](#WebApi-над-Postgres)
  - #### [ launchSettings ](#launchSettings)
- #### [ Тестирование Angualr и WebApi над Postgres ](#Тестирование-Angualr-и-WebApi-над-Postgres)
- #### [ Docker образ для Postgres ](#Docker-образ-для-Postgres)
- #### [ Postgres server под управлением Docker ](#Postgres-server-под-управлением-Docker)
- #### [ Docker образ для PhdctPstGsWebApp ](#Docker-образ-для-PhdctPstGsWebApp)
- #### [ Docker compose для Postgres ](#Docker-compose-для-Postgres)

### [ Файл конфигурации nginx ](#Файл-конфигурации-nginx)

### [ mongodb ](#mongodb)
- #### [ mongodb в виртуальной машине ](#mongodb-в-виртуальной-машине)
- #### [ Entity Framework и mongodb ](#Entity-Framework-и-mongodb)

### [ MySql ](#MySql)
- #### [ Docker образ для PhdctMySqlWebApp ](#Docker-образ-для-PhdctMySqlWebApp)
- #### [ Docker compose для MySql ](#Docker-compose-для-MySql)

### [ Замечание для Production ](#Замечание-для-Production)

## Модули
- FrontEnd модуль
  - Это данный модуль 
  - реализован под **Angular 13**
- BackEnd модуль
  - Находится в отдельном зепозитории [PhoneDictionary](https://github.com/chempkovsky/PhoneDictionary)
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
- [телефонный справочник](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/PhDct/PhdctDbContext.cs)
- [Identity](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/AspNetRegistration/AspNetRegistrationDbContext.cs)
   - Pеализации AspNet Identity 
   - Безопасность на серверрной стороне (Role-based security). Защита сервисов от несанкционированного использования.
- [Управление правами пользователя](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/Auth/aspnetchckdbcontext.cs)
  - Реализация безопасности на клиетской стороне (Angular модуль)
  - Запрещение или разрешение доступа к Web-страницам
   - Реализация "безопасности" на клиентской стороне, носит косметический характер и только для удобства пользователя
   - **Удобство пользователя означает:** страница открылась, а данных на странице нету, т.к. сервер отказал в данных. Чтобы такого не происходило, ссылки на страницы с запрещенными данными недоступны.

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
- **LazyLoading** решает эту проблему. В нашем случа именно этот подход и используется [см. главный модуль]( https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/app-routing.module.ts) и [см. один из дополнительных модулей](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/components/phdct-employee-view/phdct-employee-view-rl.routing.module.ts). 
- Вообще говоря, данный подход позволяет строить не просто большие, но позволяет строить **огромные** приложения, которые по функционалу не уступают Decktop-приложениям.
- **В сухом остатке**: В данном приложении каждая страница открывается очень быстро, вне зависимости от того, сколько этих страниц реализовано в приложении (или десять или сто или тысячи). А вот данные на страницу могут приходить с задержкой. Это зависит от того как загружен SQL-сервер, который находится позади WebApi-сервер. В нашем случае, это [BackEnd модуль](#Модули). 

## Стартовая страница приложения
- при запуске приложения открывается главная страца приложения с пунктами меню разделенными на две ргуппы. Пункты меню предметной области и пункты меню администратора. Это показано на изображении 3.
<details>
  <summary>Показать изображение 3</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn003.png)
</details>

- Каждый пункт меню предъявляется парой [Как упоминалось выше, решение содержит два приложения](#Интерфейс-пользователя)

### Несанкционированный доступ
- При попытке активировать меню без входа в приложение, выдается сообщение. Это показано на изображении 4

<details>
  <summary>Показать изображение 4</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn004.png)
</details>

### Вход или Регистрация
- Чтобы войти или зарегистрироваться в системе необходимо воспользоваться пунктами меню в верхнем правом углу. Это показано на изображении 5
<details>
  <summary>Показать изображение 5</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn005.png)
</details>

- К примеру на изображении 6 показана форма регистрации нового пользователя в системе
<details>
  <summary>Показать изображение 6</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn006.png)
</details>

### После входа или регистрации
- После входа или регистрации в верхнем правом углу появится имя пользователя и некоторые пункты меню станут доступными (см. изображение 7)
<details>
  <summary>Показать изображение 7</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn007.png)
</details>

### Почему новый пользователь уже имеет права
- Администратор еще не присвоил никаких прав для вновь созданного пользователя и тем не менее он(пользователь) уже получил доступ к системным ресурсам. 
- Чтобы ответить на данный вопрос необходимо обратиться к исходному коду [см. Register-метод](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/Controllers/accountcontroller.cs)
 - Вновь созданному пользователю присваивается **"GuestRole"**-роль 
 - Теперь перейдем к коду [aspnetchckdbcontext.cs](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/Auth/aspnetchckdbcontext.cs)
   - При создании БД таблицы наполняются данными
   - Добавляется перечень всех ресурусов приложения
   - Добавляются две роли **"GuestRole"** и **"AdminRole"**
   - И ролям добавляются права на ресурсы
  
## Изменение настроек по умолчанию после развертывания приложения
#### После развертывания приложения настройки можно поменять. 
- Можно изменить перечень ресурсов приложения (см. изображение 8, изображение 9, изображение 10)
<details>
  <summary>Показать изображение 8</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn008.png)
</details>

<details>
  <summary>Показать изображение 9</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn009.png)
</details>


<details>
  <summary>Показать изображение 10</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn010.png)
</details>

- Можно изменить перечень ролей приложения и прав ролям (см. изображение 11, изображение 12, изображение 13, изображение 14, изображение 15)

<details>
  <summary>Показать изображение 11</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn011.png)
</details>

<details>
  <summary>Показать изображение 12</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn012.png)
</details>


<details>
  <summary>Показать изображение 13</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn013.png)
</details>

<details>
  <summary>Показать изображение 14</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn014.png)
</details>

<details>
  <summary>Показать изображение 15</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn015.png)
</details>

- Присоединить роль к пользователю или убрать роль  (см. изображение 16, изображение 17)

<details>
  <summary>Показать изображение 16</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn016.png)
</details>

<details>
  <summary>Показать изображение 17</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn017.png)
</details>

<details>
  <summary>Показать изображение 18</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn018.png)
</details>


## Навигация и один ко многим
### Все формы поддерживают навигацию от мастер записи к "детаил"-записям
- К примеру, стартуем с пункта меню "Предприятия", выбираем запись и активируем пункт меню "Подразделения" (см. изображение 19)
<details>
  <summary>Показать изображение 19</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn019.png)
</details>

- получив список Подразделений. Выбираем подразделение для получения списка сотрудников по подразделению (см. изображение 20)
<details>
  <summary>Показать изображение 20</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn020.png)
</details>

- получив список сотрудников. Выбираем сотрудника для получения списка телефонов (см. изображение 21)

<details>
  <summary>Показать изображение 21</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn021.png)
</details>

- По сотруднику список телефонов (см. изображение 22)
<details>
  <summary>Показать изображение 22</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn022.png)
</details>

## Один ко многим на одной странице
### Все табличные формы поддерживают один-ко-многим функционал
К примеру "Предприятия" (см. изображение 23 и 24 и 25)

<details>
  <summary>Показать изображение 23, 24, 25</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn023.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn024.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn025.png)
</details>


## Пакетные операции
### Все табличные формы поддерживают удаление нескольких записей сразу

К примеру "Телефоны" (см. изображение 26 и 27)

<details>
  <summary>Показать изображение 26, 27</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn026.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn027.png)
  
</details>

## Редактирование записей
### Все табличные формы поддерживают добавление, удаление, изменение записей
К примеру "Телефоны" (см. изображение 28 и 29)

<details>
  <summary>Показать изображение 28, 29</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn028.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn029.png)
  
</details>

### Один ко многим на уровне контролей форм редактирования
#### Все формы редактирования поддерживают Один ко многим на уровне контролей
К примеру "Телефоны" (см. изображение 30 и 31). Подразделения по первому предприятию и потом подразделения по второму предприяти. 

<details>
  <summary>Показать изображение 30, 31</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn30.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn31.png)
</details>

- **Замечание**: При изменении данных в мастер контроли, данные в детаил контролях сбрасываются. 
-  **Замечание**: Формы не позволяют ввести некорректные данные. К примеру, нельзя задать предприятие 1, подразделение из предприятия 2, а сотрудника из подразделения третьего предприятия. Формы предоставляют данные с фильтрацией по мастер записям.

## Навигация и редактирование
Если перейти от табличной мастер формы к табличной детаил форме и добавлять запись, то контроли соответствующие мастер форме автоматически заполняются и переходят в режим **только чтение**

Например: перейдем от сотрудника к телефонам и попытаемся добавить телефон

<details>
  <summary>Показать изображение 32, 33</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn32.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn33.png)
  
</details>

На рисунке видно, что ФИО, подразделение и предприятие уже заполнены и недоступны для редактирования

<details>
  <summary>Показать изображение 34</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn34.png)

</details>

## Фильтрация
Все формы поддерживают фильтрацию по заданным на этапе разработки полям. см 35 и 36. Фильтрация осуществляется на сервере.
<details>
  <summary>Показать изображение 35, 36</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn35.png)
  
  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn36.png)
  
</details>

## Сортировка
Все формы поддерживают сортировку по заданным на этапе разработки полям. см 37. Сортировка осуществляется на сервере.
<details>
  <summary>Показать изображение 37</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn37.png)
  
</details>


## Работа с проектом
### Angular часть
```java
      ng new AngularPhoneDictionary
```
потом
```java
      cd AngularPhoneDictionary
```
потом
```java
      ng add @angular/material
```
потом
```java
      npm i -s @angular/flex-layout @angular/cdk
```
потом
Забрать данный проект c git и положить в папку src.
Должно заработать.

Какие флаги при создании проекта необходимы можно посмотреть [вот тут](https://github.com/chempkovsky/CS2ANGULAR/wiki/04-CREATING-PROJECTS-TO-START-DEVELOPMENT-for-(Material-UI)-or-(NG-BOOTSTRAP-and-Material-design-icons)-or-(NG-BOOTSTRAP-and-Awesome--icons))


### C# часть
Забрать проект с помощью VS2022 [вот тут](https://github.com/chempkovsky/PhoneDictionary).
Обязательно поравить файл  https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/appsettings.json

### Чтобы согласовать оба проекта
Чтобы согласовать http Angular и C# проектов необходимо заглянуть в [файл](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/shared/services/app-glbl-settings.service.ts) глобального сервиса и поменять в трех методах URL.

````java
 public getWebApiPrefix(vwNm: string): string {
        let reslt: string = '';
        if(!(vwNm === null)) {
            if(!(vwNm === null)) {
                //
                // here: defining url by ViewName
                //
                reslt = 'https://localhost:7229/';
            }
        }
        return reslt;
    } 
    public getSecurityWebApiPrefix(): string {
        return 'https://localhost:7229/';
    } 
    public getPermissionWebApiPrefix(): string {
        return 'https://localhost:7229/';
    }
````

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
  - [services](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/services)
    - глоабальный [сервис настроект](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/shared/services/app-glbl-settings.service.ts). Это все настройки приложения.
    - логин сервис [сервис настроект](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/shared/services/app-glbl-login.service.ts). Публикует запросы для вход, выход, изменить пароль, регистрация
  - [interceptors](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/interceptors)
    - [http interceptor](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/shared/interceptors/app-glbl.interceptor.ts). Interceptor подставляет JwtBearer токен (если такой имеется) в заголовок каждого http к WebApi.
  - [components](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components)
    - Формы Login, Logout, ChangePassword, Register, Home, PageNotfound
    - [Форма](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/column-selector) и [диалог](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/column-selector-dlg) для выбора столбцов которые показывать в таблице
    - [Диалог](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/message-dialog) текстовых сообщений приложения с кнопками "Да" и "Нет"
    - [web-service-filter](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/web-service-filter). Об этой компоненте мы поговорим отдельно в следующем параграфе
   
##### Компонента WebServiceFilter
- Каждая табличная форма содержит [WebServiceFilter](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/web-service-filter) см. изображение 40
  - [WebServiceFilter](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/shared/components/web-service-filter) позволяет задать один или несколько атрибутов для фильтрации см. изображение 40
  - Данная компонента получает на вход **перечень полей для фильтрации**, **перечень операторов** для применения к полям фильтрации
  - Важным параметром для понимания является **hiddenFilter**. Если табличная форма используется в качестве **один-ко-многим Ditail** формы, то на вход такой таблицы мы должны подать первичный ключ **master**-таблицы. Так вот, **hiddenFilter** - это первичный ключ мастер таблицы.
  - Если задан **hiddenFilter**, то компонента не отображает в **перечене полей для фильтрации** поля перечисленные в коллекции **hiddenFilter**.
<details>
  <summary>Показать изображение 40</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn40.png)
  
</details>

- Существует **следующий феномен**: программист изучил всех все функции и параметры какой-либо компоненты и вес равно не понял как этой компонентой пользоваться. **Второй аспект этого феномена** состоит в том, что спустся некоторое время (это 30 дней) программист обязательно забудет, что он читал. Для борьбы с этим феноменом используется прием примера использования той или другой компоненты. Программист заглядывает в рабочий пример и у него все всплывает в памяти, включая информацию по атрибутам и функциям компоненты. Именно рабочий пример и запоминается. Сказанное выше можно переформулировать следующим образом: фраза "повторение -- мать учения" не является верной, но верной является фраза "применение -- мать учения". 
  - Чтобы посмотеть на **рабочий пример использования WebServiceFilter** и быстро схватить суть откройте любую **sform**-компоненту (search-form)
    - или [sform для aspnetmodel](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/aspnetmodel-view/sform)
    - или [sform для employee](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/phdct-employee-view/sform)
    - или [sform для phone](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/phdct-phone-view/sform)

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
- Все объявленные в приложении [ViewModel-классы](https://github.com/chempkovsky/PhoneDictionary/tree/master/PhdctView) WebApi-проекта
- Все объявленные в приложении ViewModel-интерфейсы Angular-проекты
  - [components/aspnetrole-view/interfaces](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/aspnetrole-view/interfaces)
  - [components/aspnetrole-view/interfaces](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/aspnetrole-view/interfaces)
  - ...
  - [components/phdct-phone-view/interfaces/](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/phdct-phone-view/interfaces)

##### Сервисы для ViewModel
- Заглянем в файл 
  - [services/aspnetmodel-view/aspnetmodel-view.service.ts](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/aspnetmodel-view/aspnetmodel-view.service.ts)
  - [services/aspnetrole-view/aspnetrole-view.service.ts](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/aspnetrole-view/aspnetrole-view.service.ts)
  - ...
  - [services/phdct-phone-view/phdct-phone-view.service.ts](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/phdct-phone-view/phdct-phone-view.service.ts)
  
 - Каждый сервис реализует методы, котрые говорят сами за себя
   - getwithfilter
   - getone
   - addone
   - updateone
   - deleteone
 - Каждый Сервис содержит служебную информацию и методы которые помогают реализовать [**master-detail**-функционал на уровне конролей](#Один-ко-многим-на-уровне-контролей-форм-редактирования) для форм добавить, удалить, обновить, и просмотреть

##### DataSource для ViewModel
- Заглянем в файл 
  - [services/aspnetmodel-view/aspnetmodel-view-datasource.class.ts](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/aspnetmodel-view/aspnetmodel-view-datasource.class.ts)
  - [services/aspnetrole-view/aspnetrole-view-datasource.class.ts](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/aspnetrole-view/aspnetrole-view-datasource.class.ts)
  - ...
  - [services/phdct-phone-view/phdct-phone-view-datasource.class.ts ](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/services/phdct-phone-view/phdct-phone-view-datasource.class.ts)
- DataSource помогет реализовать [**master-detail**-функционал на уровне конролей](#Один-ко-многим-на-уровне-контролей-форм-редактирования) для форм добавить, удалить, обновить, и просмотреть

##### Sform для ViewModel
- Sform - это search форма
- Заглянем в папку
  - [components/aspnetmodel-view/sform](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/aspnetmodel-view/sform)
  - [components/aspnetrole-view/sform](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/aspnetrole-view/sform)
  - ...
  - [components/phdct-phone-view/sform](https://github.com/chempkovsky/AngularPhoneDictionary/tree/master/src/app/components/phdct-phone-view/sform)
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
  - для активации используется строка разметки, аналогичная показанной ниже. [см также app/app.component.html]( https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/app.component.html)
````html
 <a mat-list-item [routerLink]="['PhdctEmployeeView']" routerLinkActive="active">Сотрудники</a>
````

##### rdlist для ViewModel
- rdlist (routed list form) - это sform c поддержкой навигации Angular  и дополнительные функциями Add(Update,Delete,View)-item.
- rdlist использует диалоги adlg(udlg, ddlg, vdlg) для Add(Update,Delete,View)-item.

- Вспоминая **феномен рабочего примера использования**, приводим список компонент которые используют rdform:
  - для активации используется строка разметки, аналогичная показанной ниже. [см также app/app.component.html]( https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/app/app.component.html)
````html
 <a mat-list-item [routerLink]="['RDLPhdctEmployeeView']" routerLinkActive="active">Сотрудники (Dlg)</a>
````

## Docker для Angular модуля
- Прежде всего необходимо заглянуть в [Dockerfile](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/Dockerfile). В вашем распоряжении два сценария для создания Docker-образа: быстрый и медленный
#### Быстрый способ создания Docker образа
- Данный способ предполагает, что Node.js Cli и Angular Cli уже установлены на вашем компьютере. 

- **Шаг 1**
  - В командной строке (или в терминале) войдите в папку с проектом и выполните комманду
 ````
 ng build
 ````
 
 - В результате в папке **src** будет создана папка **dist**
   - В папке **dist** будет создана папка **angular-phone-dictionary**
     - В папке **angular-phone-dictionary** будут размещены все **js**-файлы проекта
     - 
- **Шаг 2**
  - В папке **src** откройте **Dockerfile**-файл и поместите в него только приведенные ниже две строки. (Все остальное должно быть удалено)
````
FROM nginx:latest 
COPY /dist /usr/share/nginx/html
````

- **Шаг 3**
  - В командной строке (или в терминале) выполните приведенную ниже команду. 
````
docker build . -f Dockerfile -t angular-phone-dictionary
````

Данная команда создаст Docker образ вашего проекта с именем **angular-phone-dictionary** и поместит в Docker

- **Шаг 4**
  - В командной строке (или в терминале) выполните приведенную ниже команду. 
````
docker run -d -p 90:80 -e WA_URL="https://localhost:7229/" -e SEC_URL="https://localhost:7229/" -e PERM_URL="https://localhost:7229/" angular-phone-dictionary:latest
````

Данная команда запустит приложение в контейнере Docker.

- Переменные WA_URL, SEC_URL, PERM_URL должны содержать **префиксы(!!!)** IP-адресов следующих сервисов
  - WA_URL - [телефонный справочник](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/PhDct/PhdctDbContext.cs)
  - SEC_URL - [Identity](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/AspNetRegistration/AspNetRegistrationDbContext.cs)
  - PERM_URL - [Управление правами пользователя](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/Auth/aspnetchckdbcontext.cs)

- **Важно заметить**, что WA_URL, SEC_URL, PERM_URL содержат только **префиксы(!!!)**
  - К примеру, полный адрес сервиса регистрации новых пользователей имеет вид: ````https://localhost:7229/api/account/register````. А вот префикс имеет вид ````https://localhost:7229/````. Замыкающий  ````/```` слэш в префиксе является обязательным.

#### Медленный способ создания Docker образа
- Данный способ предполагает наличие Docker на вашем компьютере. (Он **не требует устанновки** на вашем комьютере Node.js Cli и Angular Cli)
- 
- **Шаг 1**
  - просто убедитесь, что **Dockefile** имеет следующее содержание

<details>
  <summary>Показать содержание</summary>

````
 ################################################################
# Build the app in the separate image which is node:latest
################################################################
FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################################################################
# Copy form node:latest image into  nginx:latest and exec "CMD"
################################################################
FROM nginx:latest
COPY --from=build /dist /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/app-config.template.json > /usr/share/nginx/html/assets/app-config.json && exec nginx -g 'daemon off;'"]

################################################################
## step 1
## in the terminal run the command
## -------------------------------
## docker build . -f Dockerfile -t angular-phone-dictionary
## -------------------------------
## it creates the image in the local docker instance
################################################################
## Step 2
## ---------------------
## docker run -d -p 90:80 -e WA_URL="https://localhost:7229/" -e SEC_URL="https://localhost:7229/" -e PERM_URL="https://localhost:7229/" angular-phone-dictionary:latest
## ---------------------
## where WA_URL, SEC_URL, PERM_URL should reference correct URL of the WebApi services
## WA_URL is a url of phone WebApi
## SEC_URL is a url of security WebApi
## PERM_URL is a url of permission WebApi
################################################################





#############################################################################################################
## Second approach (which is faster, but require angular and Node.js to be installed on the local machine):##
#############################################################################################################
##
## step 1
## in the terminal run the command
## -------------------------------
## ng boild
## -------------------------------
## it creates "dist" folder 
##
## step 2
## Create Dockerfile with the content
## -------------------------------
## FROM nginx:latest 
## COPY /dist /usr/share/nginx/html
## -------------------------------
##
## step 3
## in the terminal run the command
## -------------------------------
## docker build . -f Dockerfile -t angular-phone-dictionary
## -------------------------------
## it creates the image i the local docker instance
##
## step 4
## Run app
## -------------------------------
## docker run -d -p 90:80 -e WA_URL="https://localhost:7229/" -e SEC_URL="https://localhost:7229/" -e PERM_URL="https://localhost:7229/" angular-phone-dictionary:latest
## -------------------------------
## where WA_URL, SEC_URL, PERM_URL should reference correct URL of the WebApi services
## WA_URL is a url of phone WebApi
## SEC_URL is a url of security WebApi
## PERM_URL is a url of permission WebApi
#############################################################################################################
````
</details>
  
- **Шаг 2**
  - В командной строке (или в терминале) выполните приведенную ниже команду. 
````
docker build . -f Dockerfile -t angular-phone-dictionary
````

Данная команда создаст Docker образ вашего проекта с именем **angular-phone-dictionary** и поместит в Docker. 
- Приведенный выше скрипт 
  - содает временный образ **node:latest**, устанавливает Angula Cli, 
  - помещает в него файлы вашего проекта, выполняет **ng build**, 
  - содает **nginx:latest** образ (это уже второй образ). 
  - копиррует из **node:latest** в **nginx:latest** результаты **ng build**
  - копирует **nginx:latest** в Docker.

(При тестировании данного сценария вентиляторы моего домашнего датацентра начинали бешено вращаться и темепература Xeon приближалась к критической).

- **Шаг 3**
  - В командной строке (или в терминале) выполните приведенную ниже команду. 
````
docker run -d -p 90:80 ^
  --name angular-phone-dictionary ^
  -e WA_URL="http://localhost:91/" ^
  -e SEC_URL="http://localhost:91/" ^
  -e PERM_URL="http://localhost:91/" ^
  angular-phone-dictionary:latest
````

Данная команда запустит приложение в контейнере Docker.

- Переменные WA_URL, SEC_URL, PERM_URL должны содержать **префиксы(!!!)** IP-адресов следующих сервисов
  - WA_URL - [телефонный справочник](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/PhDct/PhdctDbContext.cs)
  - SEC_URL - [Identity](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/AspNetRegistration/AspNetRegistrationDbContext.cs)
  - PERM_URL - [Управление правами пользователя](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictContext/Auth/aspnetchckdbcontext.cs)

- **Важно заметить**, что WA_URL, SEC_URL, PERM_URL содержат только **префиксы(!!!)**
  - К примеру, полный адрес сервиса регистрации новых пользователей имеет вид: ````https://localhost:7229/api/account/register````. А вот префикс имеет вид ````https://localhost:7229/````. Замыкающий  ````/```` слэш в префиксе является обязательным.

## Docker для WebApi модуля
### Cоздание Docker образа
- **Шаг 1** Создать Dockerfile
  - Начинаем с создания **Dockerfile** в проекте [PhdctMsWebApp](https://github.com/chempkovsky/PhoneDictionary/tree/master/PhdctMsWebApp), который реализует WebApi-сервисы. Dockerfile-файл можно создать автоматически [см. как это сделать](https://docs.microsoft.com/en-us/visualstudio/containers/overview?view=vs-2022). Ниже приводится листинг файла.
  
<details>
  <summary>Показать содержание Dockerfile</summary>
  
````
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["PhdctMsWebApp/PhdctMsWebApp.csproj", "PhdctMsWebApp/"]
COPY ["PhdctView/PhdctView.csproj", "PhdctView/"]
COPY ["PhDictEntity/PhDictEntity.csproj", "PhDictEntity/"]
COPY ["PhDictContext/PhDictContext.csproj", "PhDictContext/"]
RUN dotnet restore "PhdctMsWebApp/PhdctMsWebApp.csproj"
COPY . .
WORKDIR "/src/PhdctMsWebApp"
RUN dotnet build "PhdctMsWebApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PhdctMsWebApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PhdctMsWebApp.dll"]  
````
</details>

- **Шаг 2** Создать Docker образ.
  - Запустить комманду
````
docker build . -f PhdctMsWebApp\Dockerfile -t webapi-phone-dictionary  
````
Сразу встает вопрос: зачам использовать **PhdctMsWebApp** в команде, приведенной выше. Дело в том, что **docker build** не работает, если команду запускать из папки проекта "PhdctMsWebApp". Но нужно запускать из родительской папки проекта (т.е. на один уровень выше).

### Запуск Docker образа  
- **Шаг 1** Чтобы запустить на выполнение созданный образ, необходимо выполнить команду
````
docker run -d -p 91:80 ^
--name webapi-phone-dictionary ^
-e "ConnectionStrings:DefaultConnection"="Data Source=SVR2016SQL2017;Initial Catalog=PhdctDbDef;Persist Security Info=True;User ID=sa;Password=ТУТ_ПАРОЛЬ1" ^
-e "ConnectionStrings:AuthConnection"="Data Source=SVR2016SQL2017;Initial Catalog=PhdctDbAuth;Persist Security Info=True;User ID=sa;Password=ТУТ_ПАРОЛЬ2" ^
-e "ConnectionStrings:AspNetRegistrationConnection"="Data Source=SVR2016SQL2017;Initial Catalog=PhdctDbReg;Persist Security Info=True;User ID=sa;Password=ТУТ_ПАРОЛЬ3" ^
-e "JWT:ValidAudience"="PhoneDictionatyAudience" ^
-e "JWT:ValidIssuer"="PhoneDictionatyIssuer" ^
-e "JWT:Secret"="JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr" ^
webapi-phone-dictionary 
````
- **Замечание 1:** Символ ````^```` используем для многострочной команды в терминале Windows. 
- **Замечание 2:** Нотация **"ConnectionStrings:AuthConnection"="..."** для переопределения значений в файле [appsettings.json](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/appsettings.json)
- **Замечание 3:** Https для тестовой задачи будет отключена, т.к. необходимы валидные сертификаты (за деньги) и доменное имя (опять за деньги).
  

### Docker для MsSql
- **Шаг 1** [получичим образ MsSql](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-cmd). Для этого выполним комманду в терминале Windows
````
docker pull mcr.microsoft.com/mssql/server:2019-latest
````
  
- **Шаг 2** Определим имя компьютера, на котором установлен Docker. Для этого выполним комманду
````
hostname
````
В нашем случае, **HyperW10** - это имя компьютера
  
- **Шаг 3**  Для запуска Docker образа выполним комманду
````
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=myPss@wrd" ^
   -p 1433:1433 --name sql-phone-dictionary --hostname HyperW10 ^
   -d mcr.microsoft.com/mssql/server:2019-latest  
````
- Важными являются:
  - Пароль: **myPss@wrd**,
  - Имя экземпляра Mssql: **HyperW10**
  - И порт: **1433**
  
  
## Docker в результате
  
<details>
  <summary>Показать список приложений</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn50.png)
  
</details>

<details>
  <summary>Показать список образов</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn51.png)
  
</details>
    

## Docker compose
- Приведем простейший листин **docker-compose.yml**
  
<details>
  <summary>Показать листинг</summary>
  
````
version: "3.9"
services:
  web:
    image: "angular-phone-dictionary:latest"
    ports:
      - "90:80"
    environment:
      WA_URL: "http://localhost:91/" 
      SEC_URL: "http://localhost:91/" 
      PERM_URL: "http://localhost:91/"
  webapi:
    image: "webapi-phone-dictionary:latest"
    ports:
      - "91:80"
    environment:
      ConnectionStrings:DefaultConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      ConnectionStrings:AuthConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbAuth;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      ConnectionStrings:AspNetRegistrationConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbReg;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      JWT:ValidAudience: "PhoneDictionatyAudience"
      JWT:ValidIssuer: "PhoneDictionatyIssuer"
      JWT:Secret: JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr"
  db:
    image: "mcr.microsoft.com/mssql/server:2019-latest"
    ports:
      - "1433:1433"
    hostname: HyperW10
    environment:
      ACCEPT_EULA: "Y"
      SA_PASSWORD: "myPss@wrd"
````
</details>
  
- **Замечание 1:** Данный скрипт прдполагает, что ниже приведенный список образов уже зарегистрирован локальной версией Docker. 
  - **angular-phone-dictionary**
  - **webapi-phone-dictionary**
  - **mcr.microsoft.com/mssql/server**
- **Замечание 2:** Если ранее были были выполнены команды **Docker run ...**, то необходимо остановить приложения и удалить их. Это можно сделать через пользовательский интерфейс **Docker** (см изображение 51)

<details>
  <summary>Показать изображение 52</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn52.png)
</details>

### Запуск docker compose
- **Шаг 1** сохраните **docker-compose.yml** в любую папку на вашем компьютерре
- **Шаг 2** запустите терминал windows и перейдите в папку **шага 1** (в папку, содержащую docker-compose.yml)
- **Шаг 3** выполнните команду
````
docker-compose -f "docker-compose.yml" up -d --build
````
Ниже приведен отклик
````
E:\Development>docker-compose -f "docker-compose.yml" up -d --build
[+] Running 4/4
 - Network development_default     Created                                                                         0.2s
 - Container development-db-1      Started                                                                         5.0s
 - Container development-web-1     Started                                                                         5.2s
 - Container development-webapi-1  Started                                                                         5.1s

E:\Development>  
````
- Кликните на кнопку показанную на изображение изображение 53, чтобы поднять приложение в броузере. Или откройте броузер и напечатайте URL=````http://localhost:90/````
<details>
  <summary>Показать изображение 53</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn53.png)
</details>
  
### Важное напоминание
- [см. Register-метод](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMsWebApp/Controllers/accountcontroller.cs)
````
[HttpPost]
        [Route("api/[controller]/register")]
        public async Task<IActionResult> Register([FromBody] registerbindingmodel model)
        {
            await CreateAdminAndGuest(); <===============!!!!
            ....
````  
- Сразу после развертывания выполните попытку **зарегистрироваться** в системе новым пользователем (К примеру, новый пользователь=```me@gmail.com``` и пароль=**123456** ). См. изображение 54 и 55
<details>
  <summary>Показать изображение 54</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn54.png)
</details>

<details>
  <summary>Показать изображение 55</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn55.png)
</details>
  
- С таким паролем пользователь не будет зарегистрирован в приложении и будет выдана ошибка по поводу пароля не удовлетворяющего требованиям (необходимы буквы в верхнемт и нижнеи регистре, необходима цифра в пароле, и необходим небуквенный символ. К примеру, ```@```). Но важно не это. При попытке заригистрироваться будут созданы два базовых пользователя, **если они еще не созданы**:
  - ```Admin@gmail.com``` с паролем ```5Admin@gmail.com```
  - ```Guest@gmail.com``` с паролем ```5Guest@gmail.com```

                                               
- После первой неудачной попытки, зарегистрироваться войдите в приложение пользователем ```Admin@gmail.com / 5Admin@gmail.com``` или пользователем ```Guest@gmail.com  / 5Guest@gmail.com``` или зарегистрируйтесь как новый с паролем, удовлетворяющим требованиям упомянутыми чуть выше. 
- Вашему новому пользователю будет будет присвоена роль **GuestRole**.

- **Замечание:** Самая первая попытка войти или пользователем ```Admin@gmail.com / 5Admin@gmail.com``` или пользователем ```Guest@gmail.com  / 5Guest@gmail.com``` может оказаться нейдачной, т.к. базы данных на Sql сервере создаются по требованию. И при самом первом запросе данные могу быть недоступны. Это выяснилось при тестировании. Вторая попытка войти всегда удачна.

### Образы проекта на Docker hub  
- На момент написания данной записки Docker образы проекта размещены на Docker hub
  - [angular-phone-dictionary](https://hub.docker.com/r/chempkovsky/angular-phone-dictionary)
  - [webapi-phone-dictionary](https://hub.docker.com/r/chempkovsky/webapi-phone-dictionary)
- потому забрать их можно с помощью комманд
````
docker pull chempkovsky/webapi-phone-dictionary
docker pull chempkovsky/angular-phone-dictionary
````

## Docker compose используя Docker hub  
Учитывая сказанное в параграфе [ Образы проекта на Docker hub ](#Образы-проекта-на-Docker-hub) можем модифицировать [docker-compose.yml](#Docker-compose). Создайте новый файл с именем **docker-compose01.yml** b и листингом приведенным ниже.

<details>
  <summary>Показать docker-compose01.yml</summary>
  
````
version: "3.9"
services:
  web:
    image: "chempkovsky/angular-phone-dictionary:latest"
    ports:
      - "90:80"
    environment:
      WA_URL: "http://localhost:91/" 
      SEC_URL: "http://localhost:91/" 
      PERM_URL: "http://localhost:91/"
  webapi:
    image: "chempkovsky/webapi-phone-dictionary:latest"
    ports:
      - "91:80"
    environment:
      ConnectionStrings:DefaultConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbDef;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      ConnectionStrings:AuthConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbAuth;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      ConnectionStrings:AspNetRegistrationConnection: "Data Source=HyperW10;Initial Catalog=PhdctDbReg;Persist Security Info=True;User ID=sa;Password=myPss@wrd"
      JWT:ValidAudience: "PhoneDictionatyAudience"
      JWT:ValidIssuer: "PhoneDictionatyIssuer"
      JWT:Secret: JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr"
  db:
    image: "mcr.microsoft.com/mssql/server:2019-latest"
    ports:
      - "1433:1433"
    hostname: HyperW10
    environment:
      ACCEPT_EULA: "Y"
      SA_PASSWORD: "myPss@wrd"
````
</details>
  
### Шаги развертывания
- Убедитесь, что порты 90, 91 и 1433 не заняты на компьютере с установленным Docker. Если вы следовали шагам парагррафа [Запуск docker compose](#Запуск-docker-compose), то удалите в Docker приложение и образы. Нет необходимости использовать команды Docker, но можно воспользоваться пользовательским интерфейсом Docker.
- Откройте окно командной строки Windows 
  - перейдите в папку с файлом **docker-compose01.yml**
  - выполните команду
````
docker-compose -f "docker-compose01.yml" up -d --build  
````  
  
- Oткройте броузер и напечатайте URL=````http://localhost:90/````
- перечитайте [ Важное-напоминание ](#Важное-напоминание)

  ## Postgres
  
  ### Postgres в виртуальной машине
  Чтобы эмулировать сетевое окружение в первом приближении желательно PostgresSql развернуть на выделенном сетевом ресурсе. Это может быть выделенный компьютер или виртуальная машина со своим IP адресом. Мы обсудим кратенько обсудим развертывание и настройку Postgres для создания стенда тестирования.
- **Шаг 1** Перейти на официальную страницу [Postgres](https://www.postgresql.org/), с которой перейдем на страницу [download](https://www.postgresql.org/download/) и далее на страницу с операционной системой. Мы выбрали [windows](https://www.postgresql.org/download/windows/).
- **Шаг 2** При установке замечаем, что основной порт сервера = **5432**. Если вы оставили данный порт по умолчанию, то конфигурирование firewall осуществляется из **Powershell**, запущенной от имени администратора следующей командой:
  ````
  netsh advfirewall firewall add rule name="Postgre Port" dir=in action=allow protocol=TCP localport=5432
  ````
- **Шаг 3** Postgres реализует собственный аналог firewall, который настраивается в файле ````C:\Program Files\PostgreSQL\14\data\pg_hba.conf````. Откройте этот файл и найдите строки, которые приведены ниже.
    - **Замечание** В результате вашей установки хвост строки (в нашем случае это **scram-sha-256**) может быть иным.
    - Задублируйте вторую строку и поменяйте **127.0.0.1/32** на **all**
````
...  
  
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
  
...
````
  
В результате получаем фрагмент файла как ниже. Хвосты строк в вашем случае могит быть другими (в нашем случае это **scram-sha-256**)
````  
...  
  
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
host    all             all             all                 	scram-sha-256  
  
...
````
- **Шаг 4**   Сохраняем **pg_hba.conf**-файл и перезапускаем Postgres сервис или перезапускаем виртуальную машину. 
- **Замечание:** При процессе установки **Postgres** установщик запросит пароль для DBA-пользователя. Имя DBA-пользователя = **postgres**. Замечание состоит в том, что пароль желательно запомнить, т.к. он нам еще понадобится.

### WebApi над Postgres
- WebApi над Postgres реализованы в проекте [PhdctPstGsWebApp](https://github.com/chempkovsky/PhoneDictionary/tree/master/PhdctPstGsWebApp). Перед запуском проекта на выполнение необходимо отредактировать [appsettings.json файл](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctPstGsWebApp/appsettings.json). Фрагмент приведен ниже
````
"ConnectionStrings": {
    "DefaultConnection": "Server=192.168.100.8;Port=5432;Database=PhdctDbDef;User Id=postgres;Password=myPss@wrd",
    "AuthConnection": "Server=192.168.100.8;Port=5432;Database=PhdctDbAuth;User Id=postgres;Password=myPss@wrd",
    "AspNetRegistrationConnection": "Server=192.168.100.8;Port=5432;Database=PhdctDbReg;User Id=postgres;Password=myPss@wrd"
  },  
````
  
- Вы должны заменить **Server, User Id и Password** в трех строках выше вашими значениями.

#### launchSettings
- Важно заметить, что URL WebApi над Postgres задается в файле [launchSettings.json](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctPstGsWebApp/Properties/launchSettings.json) Это нам понадобится для настройки Angualr проекта.

### Angualr над Postgres
Перейдите в файл [assets/app-config.json](https://github.com/chempkovsky/AngularPhoneDictionary/blob/master/src/assets/app-config.json) Angualr проекта и установите URL из файла [launchSettings.json](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctPstGsWebApp/Properties/launchSettings.json)
````
{
    "webApiUrl": "https://localhost:7229/",
    "securityUrl": "https://localhost:7229/",
    "permissionWebApi": "https://localhost:7229/"
}  
````

### Тестирование Angualr и WebApi над Postgres
- cредствами Visual Studion 2022 Запустите [PhdctPstGsWebApp](https://github.com/chempkovsky/PhoneDictionary/tree/master/PhdctPstGsWebApp) на выполнение, 
- командой ````ns serve -o ```` запустите [AngularPhoneDictionary](https://github.com/chempkovsky/AngularPhoneDictionary) на выполнение
- перечитайте мантру [ Важное напоминание ](#Важное-напоминание). Все должно развернуться на Postgres (см изображение 56).
  
  <details>
  <summary>Показать изображение 56</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn56.png)
</details>

- **Замечание:** Важно отметить, что WebApi и PostgreSql должны находиться **на разных сетевых ресурсах** при тестировании. 

### Docker образ для Postgres
- официальный [Postgres образ](https://hub.docker.com/_/postgres)
  - из командной строки (или терминала Windows) запускаем на выполнение
````
docker pull postgres  
````  


### Postgres server под управлением Docker
- получить разного рода рекомендации можно из [README.md](https://github.com/docker-library/docs/blob/master/postgres/README.md)
  - нас дожна интересовать возможность удаленного доступа к экземпляру Postgres [см. Database Configuration](https://github.com/docker-library/docs/blob/master/postgres/README.md#database-configuration)
````
docker run --name my-postgres -e POSTGRES_PASSWORD=myPss@wrd -d postgres
````
  
- выполним команды
````  
docker ps
docker exec -it my-postgres /bin/bash
cd /var/lib/postgresql/data
ls
cat pg_hba.conf
exit  
ipconfig  
````  
  
<details>
  <summary>Показать отклик</summary>
  
````
C:\Users\yury>docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS      NAMES
448bce495e98   postgres   "docker-entrypoint.s…"   42 minutes ago   Up 42 minutes   5432/tcp   my-postgres

C:\Users\yury>docker exec -it my-postgres /bin/bash
root@448bce495e98:/# cd /var/lib/postgresql/data
root@448bce495e98:/var/lib/postgresql/data# ls
base          pg_hba.conf    pg_notify     pg_stat      pg_twophase  postgresql.auto.conf
global        pg_ident.conf  pg_replslot   pg_stat_tmp  PG_VERSION   postgresql.conf
pg_commit_ts  pg_logical     pg_serial     pg_subtrans  pg_wal       postmaster.opts
pg_dynshmem   pg_multixact   pg_snapshots  pg_tblspc    pg_xact      postmaster.pid
root@448bce495e98:/var/lib/postgresql/data# cat pg_hba.conf
# PostgreSQL Client Authentication Configuration File
# ===================================================
#
# Refer to the "Client Authentication" section in the PostgreSQL
# documentation for a complete description of this file.  A short
# synopsis follows.
#
# This file controls: which hosts are allowed to connect, how clients
# are authenticated, which PostgreSQL user names they can use, which
# databases they can access.  Records take one of these forms:
#
# local         DATABASE  USER  METHOD  [OPTIONS]
# host          DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostssl       DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostnossl     DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostgssenc    DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostnogssenc  DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
#
# (The uppercase items must be replaced by actual values.)
#
# The first field is the connection type:
# - "local" is a Unix-domain socket
# - "host" is a TCP/IP socket (encrypted or not)
# - "hostssl" is a TCP/IP socket that is SSL-encrypted
# - "hostnossl" is a TCP/IP socket that is not SSL-encrypted
# - "hostgssenc" is a TCP/IP socket that is GSSAPI-encrypted
# - "hostnogssenc" is a TCP/IP socket that is not GSSAPI-encrypted
#
# DATABASE can be "all", "sameuser", "samerole", "replication", a
# database name, or a comma-separated list thereof. The "all"
# keyword does not match "replication". Access to replication
# must be enabled in a separate record (see example below).
#
# USER can be "all", a user name, a group name prefixed with "+", or a
# comma-separated list thereof.  In both the DATABASE and USER fields
# you can also write a file name prefixed with "@" to include names
# from a separate file.
#
# ADDRESS specifies the set of hosts the record matches.  It can be a
# host name, or it is made up of an IP address and a CIDR mask that is
# an integer (between 0 and 32 (IPv4) or 128 (IPv6) inclusive) that
# specifies the number of significant bits in the mask.  A host name
# that starts with a dot (.) matches a suffix of the actual host name.
# Alternatively, you can write an IP address and netmask in separate
# columns to specify the set of hosts.  Instead of a CIDR-address, you
# can write "samehost" to match any of the server's own IP addresses,
# or "samenet" to match any address in any subnet that the server is
# directly connected to.
#
# METHOD can be "trust", "reject", "md5", "password", "scram-sha-256",
# "gss", "sspi", "ident", "peer", "pam", "ldap", "radius" or "cert".
# Note that "password" sends passwords in clear text; "md5" or
# "scram-sha-256" are preferred since they send encrypted passwords.
#
# OPTIONS are a set of options for the authentication in the format
# NAME=VALUE.  The available options depend on the different
# authentication methods -- refer to the "Client Authentication"
# section in the documentation for a list of which options are
# available for which authentication methods.
#
# Database and user names containing spaces, commas, quotes and other
# special characters must be quoted.  Quoting one of the keywords
# "all", "sameuser", "samerole" or "replication" makes the name lose
# its special character, and just match a database or username with
# that name.
#
# This file is read on server startup and when the server receives a
# SIGHUP signal.  If you edit the file on a running system, you have to
# SIGHUP the server for the changes to take effect, run "pg_ctl reload",
# or execute "SELECT pg_reload_conf()".
#
# Put your actual configuration here
# ----------------------------------
#
# If you want to allow non-local connections, you need to add more
# "host" records.  In that case you will also need to make PostgreSQL
# listen on a non-local interface via the listen_addresses
# configuration parameter, or via the -i or -h command line switches.

# CAUTION: Configuring the system for local "trust" authentication
# allows any local user to connect as any PostgreSQL user, including
# the database superuser.  If you do not trust all your local users,
# use another authentication method.


# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# IPv6 local connections:
host    all             all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust

host all all all scram-sha-256
root@448bce495e98:/var/lib/postgresql/data# exit
exit
C:\Users\yury>ipconfig

Windows IP Configuration


Ethernet adapter vEthernet (Intel82579V):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::7807:3f6e:885e:5079%3
   IPv4 Address. . . . . . . . . . . : 192.168.100.6
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::1%3
                                       192.168.100.1

Ethernet adapter vEthernet (Default Switch):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::90a9:24b4:1659:c2d%19
   IPv4 Address. . . . . . . . . . . : 172.28.176.1
   Subnet Mask . . . . . . . . . . . : 255.255.240.0
   Default Gateway . . . . . . . . . :

Ethernet adapter vEthernet (WSL):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::7457:5bc2:2b56:3bc8%36
   IPv4 Address. . . . . . . . . . . : 172.28.112.1
   Subnet Mask . . . . . . . . . . . : 255.255.240.0
   Default Gateway . . . . . . . . . :

C:\Users\yury>
  
  
````  
</details>  
  
Файл pg_hba.conf содержит строку ````host all all all scram-sha-256````. Наверное можно удаленно подсоединиться.
  
- Удалим контейнер и повторно создадим включая публикацию порта сервера (```-p 5432:5432```)
````  
docker run --name my-postgres -e POSTGRES_PASSWORD=myPss@wrd -p 5432:5432 -d postgres  
````
  
- Подключимся удаленно из виртуальной машины, которая упоминалась выше (см изображение 57). 
<details>
  <summary>Показать изображение 57</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn57.png)
</details>

- Все предварительные проверки проведены и мы можем приступать к созданию compose.yml  

 ### Docker образ для PhdctPstGsWebApp
- Выполнять скрипты в родительской папке проекта PhdctPstGsWebApp (т.е. в папке Solution). В противном случае работать не будет.
````
docker build . -f PhdctPstGsWebApp\Dockerfile -t webapi-pstgs-phone-dictionary  
docker tag webapi-pstgs-phone-dictionary chempkovsky/webapi-pstgs-phone-dictionary
docker push chempkovsky/webapi-pstgs-phone-dictionary:latest
````

### Docker compose для Postgres
- создайте и сохраните файл с именем ````docker-pstgs-compose.yml``` и содержанием
  
<details>
  <summary>Показать содержание</summary>
  
````
version: "3.9"
services:
  web:
    image: "chempkovsky/angular-phone-dictionary:latest"
    ports:
      - "90:80"
    environment:
      WA_URL: "http://localhost:91/" 
      SEC_URL: "http://localhost:91/" 
      PERM_URL: "http://localhost:91/"
  webapi:
    image: "chempkovsky/webapi-pstgs-phone-dictionary:latest"
    ports:
      - "91:80"
    environment:
      ConnectionStrings:DefaultConnection: "Server=HyperW10;Port=5432;Database=PhdctDbDef;User Id=postgres;Password=myPss@wrd"
      ConnectionStrings:AuthConnection: "Server=HyperW10;Port=5432;Database=PhdctDbAuth;User Id=postgres;Password=myPss@wrd"
      ConnectionStrings:AspNetRegistrationConnection: "Server=HyperW10;Port=5432;Database=PhdctDbReg;User Id=postgres;Password=myPss@wrd"
      JWT:ValidAudience: "PhoneDictionatyAudience"
      JWT:ValidIssuer: "PhoneDictionatyIssuer"
      JWT:Secret: JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr"
  db:
    image: "postgres"
    ports:
      - "5432:5432"
    environment:
    hostname: HyperW10
      POSTGRES_PASSWORD: "myPss@wrd"
````  
</details>  
  
- в приведенном скрипте измените **HyperW10** на имя компьютера, на котором установлен Docker. (**localhost** не заработал на нашем стенде!!!)
- выполните команду из папки, где находится ваш файл
````  
docker-compose -f "docker-pstgs-compose.yml" up -d --build    
````  

- в броузере перейдите к адресу
  ````
  http://localhost:90/
  ````
- Попытка использовать ```http://localhost:90/home``` при старте приложения выдает сообщение "Page not found". (Какая-то неточность в настройках. Вне Docker все работает, правда там не используется nginx) 
  - **Замечание:** Данный недостаток уже [устранен](#Файл-конфигурации-nginx)
- перечитайте [ Важное напоминание ](#Важное-напоминание)

  
## Файл конфигурации nginx
- При создании Docker образа Angular модуля без дополнительного конфигурирования nginx получаем следующую ошибку. В рамках нашего **Docker-compose.yml** наше приложение доступно по адресу ```http://localhost:90/``` из броузера. Приложение поднимается и переписывает текущий URL на ```http://localhost:90/home``` (см. изображение 59). 

<details>
  <summary>Показать изображение 1</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn59.png)
</details>
  
- Но как только, мы пытаемся выполнить **Refresh** средствами броузера, получаем 404 ошибку (см. изображение 60). 
  
<details>
  <summary>Показать изображение 60</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn60.png)
</details>
  
- Последнее требует дополнительного конфигурирования **nginx**-сервера. Если конкретнее, то должен присутствовать фрагмент
````  
...  
server {
  
    ...
  
    location / {
        try_files $uri $uri/ /index.html;
    }
  
    ...
  
}  
...
````
  
- **Шаг 1** получим **nginx.conf**-файл, из контейнера. Для этого выполним команды
  
````
docker ps  
docker exec -it angularphonedictionary-web-1 /bin/bash
cat /etc/nginx/nginx.conf
cat /etc/nginx/conf.d/default.conf  
exit
````  
  

<details>
  <summary>Показать отклик</summary>
  
````
D:\dev\PhoneDictionary\AngularPhoneDictionary>docker ps
CONTAINER ID   IMAGE                                         COMMAND                  CREATED          STATUS          PORTS                         NAMES
499f4bbad281   chempkovsky/angular-phone-dictionary:latest   "/docker-entrypoint.…"   57 minutes ago   Up 57 minutes   0.0.0.0:90->80/tcp            angularphonedictionary-web-1
1e0f13c52bcb   mcr.microsoft.com/mssql/server:2019-latest    "/opt/mssql/bin/perm…"   57 minutes ago   Up 57 minutes   0.0.0.0:1433->1433/tcp        angularphonedictionary-db-1
1c4a2aacb9d1   chempkovsky/webapi-phone-dictionary:latest    "dotnet PhdctMsWebAp…"   57 minutes ago   Up 57 minutes   443/tcp, 0.0.0.0:91->80/tcp   angularphonedictionary-webapi-1

D:\dev\PhoneDictionary\AngularPhoneDictionary>docker exec -it angularphonedictionary-web-1 /bin/bash
root@499f4bbad281:/# cat /etc/nginx/nginx.conf

user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}

root@499f4bbad281:/# cat /etc/nginx/conf.d/default.conf
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
  
root@499f4bbad281:/# exit
exit

D:\dev\PhoneDictionary\AngularPhoneDictionary>  
````
</details>
  
таким образом наша копия **/etc/nginx/conf.d/default.conf**-файла будет иметь вид. 
  
  
<details>
  <summary>Показать default</summary>
  
````
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}  
````
</details>  
  
- Разместим нашу копию  **nginxdefault.conf** в корневой проекта **AngularPhoneDictionary**. Создадим новый **Dockerfile01** в этой же папке

<details>
  <summary>Показать Dockerfile01</summary>
  
````
FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

FROM nginx:latest
COPY --from=build /dist /usr/share/nginx/html
COPY nginxdefault.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/app-config.template.json > /usr/share/nginx/html/assets/app-config.json && exec nginx -g 'daemon off;'"]
  
````  
</details>

- В окне командной строки перейдем перейдем в папку **AngularPhoneDictionary** проекта и выполним
````
docker build . -f Dockerfile01 -t angular-phone-dictionary
````  
- и далее  
````
docker tag angular-phone-dictionary chempkovsky/angular-phone-dictionary
docker push chempkovsky/angular-phone-dictionary:latest  
````
  
## mongodb
### mongodb в виртуальной машине
  Чтобы эмулировать сетевое окружение в первом приближении желательно PostgresSql развернуть на выделенном сетевом ресурсе. Это может быть выделенный компьютер или виртуальная машина со своим IP адресом. Мы обсудим кратенько обсудим развертывание и настройку Postgres для создания стенда тестирования.
- **Шаг 1** Перейти на официальную страницу [mongodb](https://www.mongodb.com/docs/guides/server/install/), с которой перейдем на страницу [download](https://www.postgresql.org/download/) и далее на страницу для выбора нужной нам [платформы](https://www.mongodb.com/try#production). Мы выбрали **on premises** и далее **Download MongoDB Community Server** и кликаем **Download**. При установке следуем инструкциям.
  
- **Шаг 2**  Перед запуском экземпляра откроем ```C:\Program Files\MongoDB\Server\5.0\bin\mongod.cfg```- файл, чтобы определить порт сервиса
````
# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1
````  
  
- **Шаг 3**  Запуск экземпляра
  - перейдем в папку ```C:\Program Files\MongoDB\Server\5.0\bin``` и выполним команду
  ````
  mongod.exe --config mongod.cfg
  ````
  
- **Шаг 4**  Запуск **MongoDB GUI**- средства администрирования (**MongoDBCompass**)
  - После установки **MongoDB**, пиктограмма **MongoDBCompass** должна быть на вашем рабочем столе.
  - Запускаем **Compass** и подключаемся на порт **27017**
  
<details>
  <summary>Показать изображение 58</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn58.png)
</details>

- **Шаг 5** Откроем порт для доступа к **MongoDB**
  - замечаем, что основной порт сервера = 27017. Если вы оставили данный порт по умолчанию, то конфигурирование firewall осуществляется из Powershell, запущенной от имени администратора следующей командой:  
````
netsh advfirewall firewall add rule name="MongoDB Port" dir=in action=allow protocol=TCP localport=27017
````  
  
### Entity Framework и mongodb
- Провайдер для mongodb не числится в официальном [списке провайдеров баз данных](https://docs.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli). 
  - В силу сказанного выше, EF не является инструментом, который обеспечит доступ к данным.

## MySql
### WebApi над MySql
- Прежде всего проводим тесты с Mysql, развернутым в виртуальной машине.
- WebApi над MySql реализованы в проекте [PhdctMySqlWebApp](https://github.com/chempkovsky/PhoneDictionary/tree/master/PhdctMySqlWebApp). Перед запуском проекта на выполнение необходимо отредактировать [appsettings.json файл](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMySqlWebApp/appsettings.json). Фрагмент приведен ниже
````
  "ConnectionStrings": {
    "DefaultConnection": "Server=192.168.100.8;Port=3306;Database=PhdctDbDef;User Id=rt;Password=myPss@wrd",
    "AuthConnection": "Server=192.168.100.8;Port=3306;Database=PhdctDbAuth;User Id=rt;Password=myPss@wrd",
    "AspNetRegistrationConnection": "Server=192.168.100.8;Port=3306;Database=PhdctDbReg;User Id=rt;Password=myPss@wrd"
  },
````
- В настройках фигурирует странный **rt**-пользователь. Дело в том что, при развертывании MySql **root**-пользователь принимает запросы приходящие только от **localhost**. Чтобы преодолеть данной ограничение был создан новый пользователь следующим скриптом
````
CREATE USER 'rt'@'%' IDENTIFIED BY '*********';
GRANT ALL PRIVILEGES ON *.* TO 'rt'@'%' WITH GRANT OPTION;
````
- существенным является  ````'rt'@'%'````. (см. изображение 61)
  
<details>
  <summary>Показать изображение 61</summary>

  ![picture](https://github.com/chempkovsky/AngularPhonebook/blob/master/Img/Phn61.png)
</details>
  
- После проведения тестов в виртуальной среде, все готово для создания docker образов.
  - [Dockerfile](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhdctMySqlWebApp/Dockerfile) подготовлен с использованием Visual Studion
  
### Docker образ для PhdctMySqlWebApp  
- Выполнять скрипты в родительской папке проекта PhdctPstGsWebApp (т.е. в папке Solution). В противном случае работать не будет.
````
docker build . -f PhdctMySqlWebApp\Dockerfile -t webapi-mysql-phone-dictionary
docker tag webapi-mysql-phone-dictionary chempkovsky/webapi-mysql-phone-dictionary
docker push chempkovsky/webapi-mysql-phone-dictionary:latest
````
  
### Docker compose для MySql
- создайте и сохраните файл с именем ```docker-mysql-compose.yml``` и содержанием
  
<details>
  <summary>Показать содержание</summary>
  
````
version: "3.9"
services:
  web:
    image: "chempkovsky/angular-phone-dictionary:latest"
    ports:
      - "90:80"
    environment:
      WA_URL: "http://localhost:91/" 
      SEC_URL: "http://localhost:91/" 
      PERM_URL: "http://localhost:91/"
  webapi:
    image: "chempkovsky/webapi-mysql-phone-dictionary:latest"
    ports:
      - "91:80"
    environment:
      ConnectionStrings:DefaultConnection: "Server=HyperW10;Port=3306;Database=PhdctDbDef;User Id=root;Password=myPss@wrd"
      ConnectionStrings:AuthConnection: "Server=HyperW10;Port=3306;Database=PhdctDbAuth;User Id=root;Password=myPss@wrd"
      ConnectionStrings:AspNetRegistrationConnection: "Server=HyperW10;Port=3306;Database=PhdctDbReg;User Id=root;Password=myPss@wrd"
      JWT:ValidAudience: "PhoneDictionatyAudience"
      JWT:ValidIssuer: "PhoneDictionatyIssuer"
      JWT:Secret: JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr"
  db:
    image: "mysql"
    ports:
      - "3306:3306"
    hostname: HyperW10
    environment:
      MYSQL_ROOT_PASSWORD: "myPss@wrd"
````  
  
</details>  

- в приведенном скрипте измените **HyperW10** на имя компьютера, на котором установлен Docker. (**localhost** не заработал на нашем стенде!!!)
- выполните команду из папки, где находится ваш файл
````  
docker-compose -f "docker-mysql-compose.yml" up -d --build    
````  

- в броузере перейдите к адресу
  ````
  http://localhost:90/
  ````
- Попытка использовать ```http://localhost:90/home``` при старте приложения выдает сообщение "Page not found". (Какая-то неточность в настройках. Вне Docker все работает, правда там не используется nginx) 
  - **Замечание:** Данный недостаток уже [устранен](#Файл-конфигурации-nginx)
- перечитайте [ Важное напоминание ](#Важное-напоминание)
  
## Замечание для Production
- если использовать продукт как он есть,
  - в **docker-compose** необходимо добавить [volume-флаг](https://docs.docker.com/storage/volumes/) для ноды базы данных или вообще использовать выделенный SQL-сервер.
- если предполагается высокая нагрузка на приложение, то количество полей для сортировки и поиска должно быть сильно ограничено (К примеру, только ФИО и ID записи, для формы **Сотрдники**, только телефон и ID записи для формы **телефоны**). Навигацию с формы "Типы телефонов" на форму **Телефоны** убрать вообще, т.к. селективность индекса очень низкая.
- если предполагается более высокая нагрузка, то
  - то SQL-сервер заменить на SQL + несколько standBy с балансировщиком нагрузки
  - файлы контролеров WebApi разрезать на два. В одном Add/Update/Delete, в другом файле getOne, getwithfilter, чтобы подавать в конструктор соответствующие контексты (write-сервер и readonly-сервер).
- если предполагается высоконагруженное приложение, то
  - добавить поисковый ресурс (половинка many-to-many конструкции): 
    - **таблица 1** с *полями* [Фамилия, Имя, Отчество, ID записи]
    - **таблица 1** с *уникальным нидексом* на полях (Фамилия, Имя, Отчество) и первичным индексом на  ID
    - **таблица 2** с *полями* [ID записи таблицы 1, ID записи сотрудника]
  - данные поставлять в этот русурс через очередь (к примеру RabitMq) при изменении, вставке, удалении сотрудника. Изменения в поисковом ресурсе будут касаться только **таблицы 2**(!!!!). **Tаблица 1** используется только для вставки данных(!!!!).
  - Форма поиска будет состоять из двух пеналов
    - в первом пенале результаты поиска из таблицы **таблица 1**
    - во втором пенале сотрудники полученные с использованием ID записей сотрудников из таблицы **таблица 2**
    - контролеры уже реализованных сервисов принимают на вход перечень первичных ключей. Ниже приведен фрагмент кода (```[FromQuery] System.Int32?[] phoneId```):
````
        [HttpGet]
        [Route("[controller]/getwithfilter")]
        public async Task<ActionResult<PhdctPhoneViewPage>> getwithfilter(                
            [FromQuery] System.Int32?[] phoneId, 
            [FromQuery] string[] phoneIdOprtr,
                
            [FromQuery] System.String[] phone, 
            [FromQuery] string[] phoneOprtr,
                
            [FromQuery] System.Int32?[] phoneTypeIdRef, 
            [FromQuery] string[] phoneTypeIdRefOprtr,
                
            [FromQuery] System.Int32?[] employeeIdRef, 
            [FromQuery] string[] employeeIdRefOprtr,
                
            [FromQuery] System.String[] pPhoneTypeName, 
            [FromQuery] string[] pPhoneTypeNameOprtr,
                
            [FromQuery] System.String[] eEmpLastName, 
            [FromQuery] string[] eEmpLastNameOprtr,
                 
            [FromQuery] string[] orderby = null, 
            [FromQuery] int? page =null, 
            [FromQuery] int? pagesize = null)
        {  ... }
````  
  - добавить аналогичный поисковый ресурс для телефонов.
  - добавить два пункта меню: "Искать телефон" и "Искать сотрудника"
  
- Было ли промышленное внедрение такого подхода автором? Да, в шести банках РБ (Инструкция нацбанка 41. Работало под Oracle).
- Было ли промышленные внедрение такого подхода кем-либо еще? Да, библиотека конгресса США, mark-формат аж в 70-х годах. Да и, любая поисковая система, построена на этом подходе.

## Что не сделано
### Деградация постраничного листания 
- Для Postgres и MySql наблюдается деградация отклика при постраничном листании данных. Каждая страница данных с более высокм номером возвращается медленнее страницы с более низким номером. Самая быстрая - это страница с номером 1. (Oracle и MsSql этим не болеют). 
  - Это требует косметического изменения SQL-запросов в **getwithfilter**-методах контролеров. (Виноват, руки не дошли)
### Локализация
- Наименования столбцов, заголовки форм и т.п. приводятся на английском языке. Все наименования выхватываются генераторами кода из **Display**-атрибутов для Entity. К примеру, фрагмент кода [aspnetmodel.cs](https://github.com/chempkovsky/PhoneDictionary/blob/master/PhDictEntity/Auth/aspnetmodel.cs)
````
        ...
        [Display(Description = "Model Id", Name = "Model Id", Prompt = "Enter Model Id", ShortName = "Id")]
        ...
        public int ModelPk { get; set; }  
        ...
````
- Вариантов решения два:
  - **Простой способ:** Наполнить **Display** атрибуты русскими наименованиями и генерировать код. (Что не есть очень правильно)
  - **Правильный подход:** Использовать английский и потом применять [i18n](https://angular.io/guide/i18n-overview) для создания приложения с поддержкой множества языков перевода. 
- Не ясно, что лучше, т.к. [i18n](https://angular.io/guide/i18n-overview) имеет свои недостатки. 
  - В частности он не вставляет в xliff файл данные о переводе переменных , объявленных в typescript-коде, к примеру ```myvar: string = $localize`here is a text to translate`;``` будет проигнорировано. 
  - автоматический перевод может и не начать работать, если использовать nginx. До тщательной проверки не дошли руки.
