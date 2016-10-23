import React from 'react';

class TableSima extends React.Component {
	
	constructor(props){
		super(props);
		this.addValue = this.addValue.bind(this);
		this.subValue = this.subValue.bind(this);
		/*this.setState({rows: props.rows});*/
	}

	addValue(row){
		this.props.rows.map(function(item){
			if(item === row){
				row.value++;
			}
		});
		/*console.log('addValue row', row);*/
		/*this.setState({rows: this.props.rows});*/
	}

	subValue(row){
		this.props.rows.map(function(item){
			if(item === row){
				row.value--;
			}
		});
		/*console.log('subValue row', row);	*/
		/*this.setState({rows: this.props.rows});*/
	}

	render(){
		let _thisAddSub = this;
		return (
			<table cellPadding="5" cellSpacing="3" className="tabellaCSS" >
				<tbody>
					{this.props.rows.map(function(row, i){


							return (
									<tr key={i} > 
										<td>{row.nome}</td>
										<td>{row.value}</td>
										<td>
											<button onClick={() => _thisAddSub.addValue(row)}>+</button>
											&nbsp;
											<button onClick={() => _thisAddSub.subValue(row)}>-</button>
										</td>
									</tr>
								)
							}
						)
					}
				</tbody>
			</table>
		)
	} 

}

TableSima.propTypes = {
  rows: React.PropTypes.array
}


export default TableSima;