<ul class="lists">
	{{each dataLists}}
	<li class="text-center">
		<p>{{$index}}</p>
		{{each $value as row i}}
			<span>{{row.name}}:{{i}}</span>
		{{/each}}
	</li>
		
	{{/each}}
</ul>
