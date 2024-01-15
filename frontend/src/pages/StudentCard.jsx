import ListGroup from "../components/ListGroup";

export default function StudentCard(){

    const subjects = [ "ENGLISH","ROMANIAN","MATH","INFORMATICS","HISTORY"];
          const   grade = [9,8,7,8,9];
         const   teacher = ["Matei","Mihai","Radu","Ana","Irina"];
       
        
   
    return(
        <div className="container xl">
        <h1>
            David's student card
        </h1>
        <ListGroup 
        firstTitle={"Student"}
        secondTitle={"Grade"}
        thirdTitle={"Teacher"}
        firstElements={subjects}
        secondElements={grade}
        thirdElements={teacher}
        />
    </div>
    )
}