import './App.css'

import projectInfo from './ProjectInfo.json'
import Square from 'src/components/Square';
import 'src/components/Square.css'


export default
function App() 
{
  return (
    <div className="App">

      {/* Import .JSON to set up characteristics. Way more easier than modifly index.html */}
      <link rel='icon' href={projectInfo.BrowseTabPic}/>
      <title>{projectInfo.BrowseTabName}</title>

      <Square/>
    </div>
  );
}
