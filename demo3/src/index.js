console.log('噢噢噢')
import React from 'react'
import ReactDOM from 'react-dom'

var num=89;
const mydiv1=<div id="dd">啊哈哈哈数量多少积分
<h2 id="tt">标题</h2>
<div>{num}</div>
<label>{num+num}</label>
</div>
ReactDOM.render(mydiv1, document.getElementById('app'))