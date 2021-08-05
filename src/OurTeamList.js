import OurTeam from "./OutTeam";
const OurTeamList = (props) => {
    return ( 
        <div className="team-list mx-12">
            <div className="content bg-gray-50 w-full h-80 my-4 rounded-lg shadow-md px-8 py-4">
                <img className="w-24 h-24 rounded-full py-2" src={props.profile} alt="" />
                <h2 className="font-bold text-gray-600">{props.name}</h2>
                <h6 className="font-semibold text-sm italic py-2 text-gray-500">{props.position}</h6>
                <p className="text-xs text-gray-500">{props.description}</p>
            </div>
        </div>
     );
}
 
export default OurTeamList;