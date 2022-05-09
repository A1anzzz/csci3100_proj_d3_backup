import * as React from 'react';

class PotatoCount extends React.Component {
  public render() {
    return (
      <div className="Component" id="PotatoCount">
        PotatoCount
      </div>
    );
  }
}
export default PotatoCount;

// 省略代码
class TotalCount ******* export ****
class MissionCount ***** export ****


import TotalCount from './TotalCount';
import PotatoCount from './PotatoCount';
import MissionCount from './MissionCount';

class Statistics extends React.Component {
  constructor() {
    super(props);
    this.state = {
      render: ''
    }
  }
  
 ShowComponent(name:string){
    this.setState({render:name})
  }
  
 renderComponent =()=>{
    switch (this.state.render) {
      case 'showHideTotalCount': return <TotalCount/>
      case 'showHidePotatoCount': return <PotatoCount/>
      case 'showHideMission': return <MissionCount/>
      default: return <TotalCount/>
    }
  }
  
public render() {
    return (
      <div>
          <ul>
            <li onClick={()=>{this.ShowComponent('showHideTotalCount')}}>统计</li>
            <li onClick={()=>{this.ShowComponent('showHidePotatoCount')}}>番茄历史</li>
            <li onClick={()=>{this.ShowComponent('showHideMission')}}>累计完成11个任务
            </li>
          </ul>
      
           <div>
             {this.renderComponent()}
           </div>
        </div>   
    }

