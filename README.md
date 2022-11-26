# Toodler
## Group 9 - Guðmundur, Helgi & Kristján

### Developed for IOS 16

### Install dependencies

`npm install`

### Start program

`npm start` 

or

`npx expo start`

### How to add a board/list/task

On the left side of the toolbar on each page is a button which can be pressed
to add the corresponding element.

### How to remove a board/list/task

Long press any board/list/task.

Press the Delete button on the right side of the toolbar which should be available once any item is selected.

Multiple items can be selected for simultaneous deletion.

### How to modify an existing board/list/task

On the right side of any board/list/task is a green 'Edit' button.

Pressing the button will open an interface which allows for changing the chosen object.

### How to move a task to another list

Long press any task.

Select a list from the dropdown menu.

Press the 'Move task to list' button. The task has now been moved to the selected list.

Tasks can only be moved to lists which belong to the same board (intentional design choice). 

### Extras

All user inputs are validated when creating a board/list/task.

All user inputs are validated when modifying an existing board/list/task.

User is presented with a choice of pre-determined colors when creating a new list.

Tasks can be checked off and stay in their state for the session.
