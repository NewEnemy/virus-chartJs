import React, { Component} from 'react';
import Chart from 'chart.js';

export default class TestGraph extends Component {
    constructor(props){
        super(props)
        this.state = {
            singleRecord :props.oneRecord,
            count : props.count,
            labels:[],
            id:props.id,
            label:props.label,
            dataPoint:props.dataPoint,
            barColor:props.barColor
        }
    }

drawChart(){
    var ctx = document.getElementById(this.state.id);
    this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:[],
            datasets: [{
                label: this.state.label,
                
                
                backgroundColor: this.state.barColor,
                    

                borderColor:'rgba(255, 0, 0, 1)',
                    
                borderWidth: 1
            },]
        },
        
        options: {
            
            legend:{
            
                labels:{
                    fontSize:10,
                    fontColor:'black'
                }
            },
            scales: {
                xAxes:[{
                    ticks:{
                        fontSize:10,
                        fontColor:'black'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor:'black',
                        fontSize:10,
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}
clearChart(){
    this.myChart.data.datasets.forEach((dataset) => {
        dataset.data =[]
       
    });
    this.myChart.update(0)
}

initChart(){
    var newData = this.state.singleRecord;
    this.myChart.data.datasets.forEach((dataset)=>{
        newData.map((item)=>{
            if(item.gmina !== 'RAZEM'){
                dataset.data.push(item[this.state.dataPoint])
                this.myChart.data.labels.push(item.gmina)
            }
            return null
        })
    })
    this.myChart.update(0)
}

updateChart(){
    this.clearChart(0)
   var newData = this.state.singleRecord;
    this.myChart.data.datasets.forEach((dataset)=>{
        newData.map((item)=>{
            if(item.gmina !== 'RAZEM'){
                dataset.data.push(item[this.state.dataPoint])
            }
            return null
        })
    })
    this.myChart.update(0)
}


    componentDidMount(){
       this.drawChart()
       this.initChart()
    }

    shouldComponentUpdate(nextProps){
        return nextProps.count !== this.state.count
    }

    componentDidUpdate(props){
        this.setState({singleRecord:this.props.oneRecord})   
        this.setState({count:this.props.count})   
        this.updateChart()
    }

  render() {
    return (

      <div>
<div style={{minWidth:'300px',width:"10vw"}}>
<canvas id={this.state.id} width="400" height="400"></canvas>
</div>
      </div>
    );
  }
}
