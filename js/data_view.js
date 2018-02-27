
var datas={
	rs:{
		tit:"设备数",
		data:{"在线":[71,"#10b0ec"],"离线":[29,"#f5ba5d"]}
	}
};

xrzb('syscadr-yuan',datas.rs.data,datas.rs.tit);
window.onresize=function(){xrzb('syscadr-yuan',datas.rs.data,datas.rs.tit);}  

function xrzb(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b}: {d}%"
			},
			
			series: [
				{
					name:tit,
					type:'pie',
					//radius: ['60%','65%'],
					radius: '65%',
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '50%'],
					itemStyle:{normal:{
					}},
					label:{normal:{textStyle:{fontSize:14},show:true,formatter: '{b}:{d}%'}},
					labelLine:{normal:{smooth:false,length:12,length2:8,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

	
	