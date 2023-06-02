// Отримання елементів DOM
    const form = document.querySelector('form');
    const addUserBtn = document.querySelector('#addUser');
    const editUserBtn = document.querySelector('#editUser');
    const tableBody = document.querySelector('tbody');

    // Масив користувачів
    const users = [];

    // Функція додавання користувача
    function addUser() {
      // Отримання даних з полів форми
      const loginInput = document.querySelector('#firstName');
      const passwordInput = document.querySelector('#password');
      const emailInput = document.querySelector('#email');

     
      // Створення об'єкта користувача
      const user = {
        login: loginInput.value,
        password: passwordInput.value,
        email: emailInput.value,
      };
      
      // Валідація полів форми
      if (!validateLogin(loginInput.value)) {
        alert('Invalid login');
        return;
      }
      if (!validatePassword(passwordInput.value)) {
        alert('Invalid password');
        return;
      }
      if (!validateEmail(emailInput.value)) {
        alert('Invalid email');
        return;
      }

      // Додавання користувача до масиву
      users.push(user);

      // Очищення полів форми
      loginInput.value = '';
      passwordInput.value = '';
      emailInput.value = '';

 

      // Перегенерація таблиці
      renderTable();
    }

    // Функція видалення користувача
    function deleteUser(index) {
      // Видалення користувача з масиву за індексом
      users.splice(index, 1);

      // Перегенерація таблиці
      renderTable();
    }

    // Функція редагування користувача
    function editUser(index) {
      // Отримання об'єкта користувача за індексом
      const user = users[index];

      // Заповнення полів форми даними користувача
      document.querySelector('#firstName').value = user.login;
      document.querySelector('#password').value = user.password;
      document.querySelector('#email').value = user.email;

      // Запам'ятовування індексу користувача
      editUserBtn.dataset.index = index;

      // Показуємо кнопку Edit user і приховуємо Add user
      editUserBtn.style.display = 'block';
      addUserBtn.style.display = 'none';
    }

    // Функція збереження редагованого користувача
    function saveEditUser() {
      // Отримання індексу редагованого користувача
      const index = editUserBtn.dataset.index;

      // Отримання даних з полів форми
      const loginInput = document.querySelector('#firstName');
      const passwordInput = document.querySelector('#password');
      const emailInput = document.querySelector('#email');

      // Валідація полів форми
      if (!validateLogin(loginInput.value)) {
        alert('Invalid login');
        return;
      }
      if (!validatePassword(passwordInput.value)) {
        alert('Invalid password');
        return;
      }
      if (!validateEmail(emailInput.value)) {
        alert('Invalid email');
        return;
      }

      // Оновлення даних редагованого користувача в масиві
      users[index].login = loginInput.value;
      users[index].password = passwordInput.value;
      users[index].email = emailInput.value;

      // Очищення полів форми
      loginInput.value = '';
      passwordInput.value = '';
      emailInput.value = '';

      // Приховування кнопки Edit user і показ кнопки Add user
      editUserBtn.style.display = 'none';
      addUserBtn.style.display = 'block';

      // Перегенерація таблиці
      renderTable();
    }

    // Функція генерації таблиці
    function renderTable() {
      // Очищення таблиці
      tableBody.innerHTML = '';

      // Генерація рядків таблиці на основі масиву користувачів
      users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.classList.add('trBody');

        // Номер рядка
        const numberCell = document.createElement('td');
        numberCell.textContent = index + 1;
        row.appendChild(numberCell);

        // Логін
        const loginCell = document.createElement('td');
        loginCell.textContent = user.login;
        row.appendChild(loginCell);

        // Пароль
        const passwordCell = document.createElement('td');
        passwordCell.textContent = user.password;
        row.appendChild(passwordCell);

        // Email
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        // Кнопка Edit
        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.classList.add('btnEdit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
          editUser(index);
        });
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        // Кнопка Delete
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btnDelete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteUser(index);
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        // Додавання рядка до таблиці
        tableBody.appendChild(row);
      });
    }

    // Валідація логіна
    function validateLogin(login) {
      // Реалізація валідації логіна
     const loginRegex = /^[a-zA-Z]{4,16}$/;
  return loginRegex.test(login);
    }

    // Валідація пароля
    function validatePassword(password) {
      // Реалізація валідації пароля
      const passwordRegex = /^[a-zA-Z0-9_.-]{4,16}$/;
  return passwordRegex.test(password);
    }

    // Валідація електронної пошти
    function validateEmail(email) {
      // Реалізація валідації електронної пошти
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }

    // Обробка події подачі форми
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addUser();
    });

    // Обробка події кліку на кнопку Edit user
    editUserBtn.addEventListener('click', (e) => {
      e.preventDefault();
      saveEditUser();
    });

    // Початкова генерація таблиці
renderTable();
    
