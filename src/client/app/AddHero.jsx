import React from 'react';

class AddHero extends React.Component {

	constructor(props){
		super(props);
		/*this.addHero = this.addHero.bind(this);*/
	}

	addHero(){

		let hero = {
			nome : this.refs.nome.value,
			razza : this.refs.razza.value,
			classe : this.refs.classe.value,
			attacco : Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1),
			difesa : Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1),
			vita : Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)
		}

		this.props.addHero(hero);
		this.refs.nome.value = '';
		this.refs.razza.value = '';
		this.refs.classe.value = '';

	}

	render(){
		let styleTable = {width:'50%',margin: '0 auto'};
		let displayBlock = {display:'block', padding:'1em'};
		let displayNone = {display:'none', padding:'1em'};
		return (
			<div style={this.props.show?displayBlock:displayNone}>
			<h4>Personaggio</h4>
				<table style={styleTable}>
					<tbody>
					<tr>
						<td>Nome</td>
						<td> <input type="text" ref="nome"  /> </td>
					</tr>
					<tr>
						<td>Razza</td>
						<td> <input type="text" ref="razza" /> </td>
					</tr>
					<tr>
						<td>Classe</td>
						<td> <input type="text" ref="classe" /> </td>
					</tr>
					<tr>
						<td colSpan="2">
							<button className="button round success small" onClick={this.addHero.bind(this)}>Crea</button>
						</td>
					</tr>
					</tbody>
				</table>
			</div>

		)
	}

};

export default AddHero;