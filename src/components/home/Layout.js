import React from "react";

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		console.log("Component mounting")
	}

	render() {
		return (
			<div>
				<hr />
				<ul className="flex list-items"> {this.props.todos.map((todo, key) => {
					return <li className="md-3-line" key={key} onClick={(event) => {
						this.props.markComplete(todo)
					}
					} className={["list-item", todo.done === true ? "done-true" : "done-false"].join(" ")}>{todo.text}
					</li>
				})
				}</ul>
				<button className="md-raised md-primary md-button md-ink-ripple md-default-theme" id="click" onClick={() => {
					this.props.newItem("Hey, originated from React, but appeared from Angular")
				}
				}>Click to make Angular Alert!!</button>
			</div>
		);
	}
}