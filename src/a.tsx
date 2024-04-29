import { ComponentC } from "./c";


export function ComponentA() {
	return <div c-blue-200 class=":uno: hover:(c-blue-500 font-bold)">
		I'm component A!
		<ComponentC />
	</div>
}