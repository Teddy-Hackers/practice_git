# Коммиты

<p style='text-align: right;'>
<i>In case of fire<br>
git add &ast;<br>
git commit<br>
git push<br></i>
</p>


Каждое состояние кода, которое разработчик считает логически завершенным фиксируется
добавлением измененных файлов в коммит (**commit**).

### Задание 1

* Откройте файл `main.cpp`, который находится в корневой папке практики.
* Замените строку `"Hello, World!"` на `"Hello, Nizhny Novgorod!"` (выберете свой город по желанию).
* Выполните команду `git status` чтобы увидеть, какие файлы изменились

  ```
  On branch pull_request
  Your branch and 'origin/pull_request' have diverged,
  and have 2 and 1 different commits each, respectively.
    (use "git pull" to merge the remote branch into yours)

  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

          modified:   main.cpp

  no changes added to commit (use "git add" and/or "git commit -a")
  ```

* Также, можно посмотреть, какие именно изменения были сделаны командой `git diff`:

  ```patch
  diff --git a/main.cpp b/main.cpp
  index 1e6cba2..5a3666a 100644
  --- a/main.cpp
  +++ b/main.cpp
  @@ -1,6 +1,6 @@
   #include <iostream>

   int main(int argc, char** argv) {
  -  std::cout << "Hello, World!" << std::endl;
  +  std::cout << "Hello, Nizhny Novgorod!" << std::endl;
     return 0;
   }
  ```

* Выполните команду `git add main.cpp`, чтобы добавить измененный файл к списку готовых файлов (редактирование после `git add` потребует повторого добавления):
* Создайте коммит, добавив произвольное текстовое сопровождение:

  ```bash
  git commit -m "Replaced a greeting"
  ```

* На данный момент изменения сохранены в локальном репозитории на вашем компьютере.
Чтобы они появились в репозитории на GitHub - выполните команду **push**:

  ```bash
  git push origin my_new_branch
  ```
