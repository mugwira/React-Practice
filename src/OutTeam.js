import OurTeamList from "./OurTeamList"

const OurTeam = () => {
    return ( 
        <div className="our-team bg-gray-200 shadow-md rounded-lg mx-auto ">
             <h1 className="text-center font-semibold text-2xl py-4">Our Team</h1>
             <div className="team-card md:grid grid-cols-3">
             <div className="team-info opacity-50 hover:opacity-100">
               
               <OurTeamList profile={"./assets/profile.jpg"} name={"Claire Matsveru"} position={"Software Engineer"}
               description={"lorem  babba gga a glorem ceeddd gaggaggagg ttsyysf cccsdaddad"}
                />
           </div>
           <div className="team-info opacity-50 hover:opacity-100">
               <OurTeamList profile={"./assets/profile.jpg"} name={"Claire Matsveru"} position={"Software Engineer"}
               description={"nnnammam annnannam akaajja kakkak"}
                />
           </div>
           <div className="team-info opacity-75 hover:opacity-100 ">
               
               <OurTeamList profile={"./assets/profile.jpg"} name={"Claire Matsveru"} position={"Software Engineer"}
               description={"lorem  babba gga a glorem ceeddd gaggaggagg ttsyysf cccsdaddad lorem  babba gga a glorem ceeddd gaggaggagg ttsyysf cccsdaddad"}
                />
           </div>
             </div>
            
        </div>
     );
}
 
export default OurTeam;