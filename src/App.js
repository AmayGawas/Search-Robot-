import Cardlist from "./cardlist";
import Searchbox from "./searchbox";

const App =()=>{
    return(
        <div className="tc">

        <h1>Search for Robot</h1>
         <Searchbox/>
        <Cardlist/>
        </div>
    );
}
export default App;