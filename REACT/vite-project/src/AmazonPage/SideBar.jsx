import FilterList from './FilterList';
function SideBar()
 { return (
     <div
      style={{ display: 'flex', 
        width: '400px', 
        flexDirection:'column', }} > 
        <FilterList /> 
        </div> );
         }
 export default SideBar;
