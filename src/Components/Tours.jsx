import Card from "./Card";
import data from "../data.jsx";


function Tours({tours, removeTour, add}) {

    return(
        <div className="container">
       <div>
        <h1 className="title">Plan with Anjali</h1>
       </div>
       <div>
      {
         tours.map( (tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
         })
      }
       </div>
      </div>
    )

}
export default Tours;