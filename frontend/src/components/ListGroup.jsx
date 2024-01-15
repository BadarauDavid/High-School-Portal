export default function ListGroup({firstTitle,secondTitle,thirdTitle,firstElements,secondElements,thirdElements}){
    return(
        <div>
                    <ul className="list-group list-group-horizontal ">
  <li className="list-group-item container-xl ">{firstTitle}</li>
  <li className="list-group-item container-xl">{secondTitle}</li>
  <li className="list-group-item container-xl">{thirdTitle}</li>

</ul>
{firstElements && firstElements.map((el,index)=>(
    <ul key={index} className="list-group list-group-horizontal ">
      <li key={firstElements[index]} className="list-group-item container-xl">{firstElements[index]}</li>
      <li key={secondElements[index]} className="list-group-item container-xl">{secondElements[index]}</li>
      {thirdElements === null ?(
              <li key={index} className="list-group-item container-xl">
              <input type="number"   min="1" max="10" />
              <button type="button" className="btn btn-primary btn-sm mx-5">Send</button>
              </li>
      ):(<li key={thirdElements[index]} className=" list-group-item container-xl">{thirdElements[index]}</li>)}
      
 </ul>
))}
        </div>
    )
 
}