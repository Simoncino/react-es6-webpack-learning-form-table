import React from 'react';
import AddHero from './AddHero.jsx';


let eroes = [
	{key:1,nome:'Emphysema', classe:'Mago', razza:'Gnomo', attacco:8, difesa:4, vita:8}
	,{key:2,nome:'Red Sara', classe:'Guerriero', razza:'Elfo', attacco:7, difesa:9, vita:10}
	,{key:3,nome:'Papera', classe:'Guaritore', razza:'Umano', attacco:2, difesa:2, vita:6}
	,{key:4,nome:'Ottava', classe:'Mago', razza:'Nano', attacco:12, difesa:3, vita:4}
	,{key:5,nome:'Bix', classe:'Ladro', razza:'Umano', attacco:10, difesa:3, vita:7}
];

const GridSima = React.createClass({

	getInitialState: function(){
		return {
			list: eroes,
			showAdd: false,
			newHero: {}
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
		/*this.setState({list: eroesNew});*/
	},

	addHero(){
		if(this.state.showAdd)
			this.setState({showAdd: false});
		else
			this.setState({showAdd: true});

	},

	creaHero(hero){
		console.log('creaHero(hero)', hero);
		let newHeroes = this.state.list;
		hero.key = newHeroes[newHeroes.length-1].key+1;
		newHeroes.push(hero);

		this.setState({list:newHeroes});
		this.setState({newHero:{}});
		this.setState({showAdd:false});

		/*let newHeroes = this.state.list;
		let hero = this.state.newHero;

		hero.attacco = Math.floor((Math.random() * 10) + 1);
		hero.difesa = Math.floor((Math.random() * 10) + 1);
		hero.vita = Math.floor((Math.random() * 10) + 1);
		hero.key = newHeroes[newHeroes.length-1].key+1;
		newHeroes.push(hero);

		this.setState({list:newHeroes});
		this.setState({newHero:{}});
		this.setState({showAdd:false});*/
	},

	render : function(){
		let _this = this;
		return (<div className="text-center">
				<button className="button radius default" onClick={this.addHero}>Crea</button>
				<AddHero {...this.state} show={this.state.showAdd}
					creaHero={this.creaHero} />
				<table>
					<tbody>
						<tr>
							<th>Nome</th>
							<th>Classe</th>
							<th>Razza</th>
							<th>Attacco</th>
							<th>Difesa</th>
							<th>Vita</th>
							<th>Azioni</th>
						</tr>
						{this.state.list.map(function(item){
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

