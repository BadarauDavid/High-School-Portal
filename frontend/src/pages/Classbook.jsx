import ListGroup from "../components/ListGroup";
export default function Classbook(){

    const   names = ["Matei","Mihai","Radu","Ana","Irina"];
    const grades = ["3,5","10","7,6","7,3","4,6"];
return(
    <div className="container xl">
    <h1>
        Classbook for "9B"
    </h1>



        <ListGroup 
        firstTitle={"Name"}
        secondTitle={"Grades"}
        thirdTitle={"Add newGrade"}
        firstElements={names}
        secondElements={grades}
        thirdElements={null}
        />
    </div>
)
}