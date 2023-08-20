window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listEl = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value.trim();

		if (task !== "") {
			const taskEl = document.createElement('div');
			taskEl.classList.add('task');

			const taskContentEl = document.createElement('div');
			taskContentEl.classList.add('content');
			taskEl.appendChild(taskContentEl);

			const taskInputEl = document.createElement('input');
			taskInputEl.classList.add('text');
			taskInputEl.type = 'text';
			taskInputEl.value = task;
			taskInputEl.setAttribute('readonly', 'readonly');
			taskContentEl.appendChild(taskInputEl);

			const taskActionsEl = document.createElement('div');
			taskActionsEl.classList.add('actions');
			taskEl.appendChild(taskActionsEl);

			const taskEditEl = document.createElement('button');
			taskEditEl.classList.add('edit');
			taskEditEl.innerText = 'Edit the task ';
			taskActionsEl.appendChild(taskEditEl);

			const taskDeleteEl = document.createElement('button');
			taskDeleteEl.classList.add('delete');
			taskDeleteEl.innerText = 'Delete the task ';
			taskActionsEl.appendChild(taskDeleteEl);

			listEl.appendChild(taskEl);

			input.value = '';
		}
	});

	listEl.addEventListener('click', (e) => {
		if (e.target.classList.contains('edit')) {
			const taskEl = e.target.closest('.task');
			const taskInputEl = taskEl.querySelector('.text');
			if (e.target.innerText.toLowerCase() === "edit") {
				e.target.innerText = "Save";
				taskInputEl.removeAttribute("readonly");
				taskInputEl.focus();
			} else {
				e.target.innerText = "Edit";
				taskInputEl.setAttribute("readonly", "readonly");
			}
		} else if (e.target.classList.contains('delete')) {
			const taskEl = e.target.closest('.task');
			listEl.removeChild(taskEl);
		}
	});
});
