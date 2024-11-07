document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const inputBox = document.getElementById('inputBox');
    const todoList = document.getElementById('todo-list');

    // Görev ekleme fonksiyonu
    function addTask() {
      const taskText = inputBox.value.trim();
  
      // Eğer görev kutusu boşsa, uyarı gösteriyoruz
      if (taskText === "") {
        alert("Lütfen bir görev ekleyin!");
        return; // Görevi eklemeyi durdur
      }
  
      // Görev öğesi oluşturma
      const taskItem = document.createElement('div');
      taskItem.classList.add('todo-item');
  
      // Görev içeriği
      const taskContent = document.createElement('div');
      taskContent.textContent = taskText;
      taskItem.appendChild(taskContent);
  
      // Düzenleme ve silme butonları
      const deleteButton = document.createElement('i');
      deleteButton.classList.add('fa-solid', 'fa-trash');
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });
  
      const editButton = document.createElement('i');
      editButton.classList.add('fa-solid', 'fa-pen');
      editButton.addEventListener('click', function() {
        const newTask = prompt('Edit your task:', taskContent.textContent);
        if (newTask !== null) {
          taskContent.textContent = newTask;
        }
      });
  
      // Butonları göreve ekleme
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('todo-icons');
      iconContainer.appendChild(deleteButton);
      iconContainer.appendChild(editButton);
  
      taskItem.appendChild(iconContainer);
  
      // Görevi listeye ekleme
      todoList.appendChild(taskItem);
  
      // Görev kutusunu temizleme
      inputBox.value = "";
    }

    // "Add" butonuna tıklayınca görev ekleme
    addButton.addEventListener('click', addTask);
  
    // Enter tuşu ile görev ekleme
    inputBox.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
});