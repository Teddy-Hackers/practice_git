# Использование сокращений

Для того, чтобы упростить опыт работы с командами git существует механизм команд-синонимов,
с помощью которых часто используемым командам можно дать сокращенные имена.

Словарь сокращений можно вносить в файл `~/.gitconfig` со следующим синтаксисом:

```
[alias]
    br=branch
    st=status
    co=checkout
```

Тогда вместо команды `git checkout master` достаточно писать `git co master`.
А для проверки изменённызх файлов, `git st` вместо `git status`.

Более сложные команды имеют следующий синтаксис:

```
[alias]
    gr="!sh -c 'git log --all --decorate --graph'"
```
Тогда команда `git gr` покажет вам красивую визуализацию графа истории проекта в консоли:

```
* commit 468524da7bc0d10d75c02619c485f29da6035587 (another_branch)
| Author: Dmitry Kurtaev <dmitry.kurtaev+github@gmail.com>
| Date:   Wed Aug 12 15:01:45 2020 +0300
| 
|     another commit
|   
| * commit aac8153cb3043af4cf5c78967f3d65b9a90e6ea3 (HEAD -> aliases)
|/  Author: Dmitry Kurtaev <dmitry.kurtaev+github@gmail.com>
|   Date:   Wed Aug 12 14:57:50 2020 +0300
|   
|       Add aliases guide
| 
* commit 104b12f116a2794f8d9e326ab552d46410a9bbf5 (origin/master, origin/HEAD, master)
| Author: Dmitry Kurtaev <dmitry.kurtaev+github@gmail.com>
| Date:   Sun Aug 9 19:36:31 2020 +0300
| 
|     Add pull request openning task (#3)
| 
```
