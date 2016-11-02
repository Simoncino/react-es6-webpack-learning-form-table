import React from 'react';
import AddHero from './AddHero.jsx';


let eroes = [
	{key:1,nome:'Emphysema', classe:'Mago', razza:'Gnomo', attacco:8, difesa:4, vita:8}
];

const GridSima = React.createClass({

	getInitialState: function(){
		return {
			list: eroes,
			listFiltered: eroes,
			showAdd: false
		};
	},

	deleteHero(heroKey){
		if(!confirm('Sicuro di voler eliminare l\'eroe?'))
			return false;

		let eroesNew = eroes.filter(function(item){
			if(item.key !== heroKey){
				return item;
			}
		});
		eroes = eroesNew;
		this.setState({list: eroesNew});
		this.setState({listFiltered: eroesNew});
	},

	toggleHero(){
		if(this.state.showAdd)
			this.setState({showAdd: false});
		else
			this.setState({showAdd: true});

	},

	addHero(hero){
		console.log(hero)
		let newHeroes = this.state.list;
		if(this.state.list && this.state.list.length){
			hero.key = newHeroes[newHeroes.length-1].key+1;
		}
		else {
			hero.key = 1;
		}
		newHeroes.push(hero);

		this.setState({list:newHeroes});
		this.setState({listFiltered:newHeroes});
		this.setState({showAdd:false});

	},

	filterByProp(type, searchWord){

		if(!searchWord){
			this.setState({listFiltered:this.state.list});
			return false;
		}

		let _this = this;
		let filtered = this.state.list.filter(function(item){
			switch(type){
				case 'nome':
					if(item.nome.toUpperCase().indexOf(searchWord.toUpperCase()) !== -1){
						return item;
					}
					break;
				case 'classe':
					if(item.classe.toUpperCase().indexOf(searchWord.toUpperCase()) !== -1){
						return item;
					}
					break;
				case 'razza':
					if(item.razza.toUpperCase().indexOf(searchWord.toUpperCase()) !== -1){
						return item;
					}
					break;
				case 'attacco':
					if(item.attacco == _this.refs.attacco.value){
						return item;
					}
					break;
				case 'difesa':
					if(item.difesa == _this.refs.difesa.value){
						return item;
					}
					break;
				case 'vita':
					if(item.vita == _this.refs.vita.value){
						return item;
					}
					break;
			}
		});

		this.setState({listFiltered:filtered});
	},

	render : function(){
		let _this = this;
		return (<div className="text-center">
				<button className="button radius default" onClick={this.toggleHero}>Crea</button>
				<AddHero {...this.state} show={this.state.showAdd}
					addHero={this.addHero} />
				<table>
					<tbody>
						<tr>
							<th>Nome <input ref="nome" type="text" 		onChange={() => _this.filterByProp('nome', this.refs.nome.value)} /></th>
							<th>Classe <input ref="classe" type="text" 	onChange={() => _this.filterByProp('classe', this.refs.classe.value)} /></th>
							<th>Razza <input ref="razza" type="text" 	onChange={() => _this.filterByProp('razza', this.refs.razza.value)} /></th>
							<th>Attacco <input ref="attacco" type="text" onChange={() => _this.filterByProp('attacco', this.refs.attacco.value)} /></th>
							<th>Difesa <input ref="difesa" type="text"	onChange={() => _this.filterByProp('difesa', this.refs.difesa.value)} /></th>
							<th>Vita <input ref="vita" type="text" 		onChange={() => _this.filterByProp('vita', this.refs.vita.value)} /></th>
							<th>Azioni</th>
						</tr>
						{this.state.listFiltered.map(function(item){
							return (
								<tr key={item.key}>
									<td>{item.nome}</td>
									<td>{item.classe}</td>
									<td>{item.razza}</td>
									<td>{item.attacco}</td>
									<td>{item.difesa}</td>
									<td>{item.vita}</td>
									<td> 
										<button className="button radius alert" 
											onClick={() => _this.deleteHero(item.key)} > - </button>
									</td>
								</tr>
								)
						})}
						
					</tbody>
						
				</table>

			</div>);
	}

});

export default GridSima;

