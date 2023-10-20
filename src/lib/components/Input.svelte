<script>
	// @ts-nocheck

	export let value = '';
	export let placeholder = '';
	export let type = 'text';
	export let id;
	export let label;
	export let disabled = false;
	export let required = false;
	export let readonly = false;
	export let autocomplete = 'off';
</script>

<div class="form-control w-full max-w-lg mb-2">
	<label for={id} class="block mb-2 text-sm font-medium text-white dark:text-white">{label}</label>
	<input
		class="bg-gray-700 border border-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hidden sm:block"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
		{autocomplete}
		{readonly}
	/>
</div>
