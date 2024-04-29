import { ComponentC } from "./c";


export function ComponentB() {
	return <div class=":uno: border-(1px dashed black)">
		I'm component B!
		<ComponentC />
	</div>
}