/* @refresh reload */
import 'virtual:uno.css'

import { render } from 'solid-js/web'
import { ComponentA } from './a'
import { ComponentB } from './b'

function App() {
	return (
		<div text-center>
			<ComponentA />
			<ComponentB />
		</div>
	)
}

render(() => <App />, document.body)


