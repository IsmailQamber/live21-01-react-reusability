
import InstructorTag from "./components/InstructorTag.js";
import {AppWrapper} from "./styles.js";

const App = () => {

  const instructors = [
    {
        id : 1,
        emoji : "🌚",
        name : "Hamza",
        gitHubLink : "https://github.com/DarthHamza",
    },
    {
        id : 2,
        emoji : "🐥",
        name : "Laila",
        gitHubLink : "https://github.com/Lailz", 
    },
    {
        id : 3,
        emoji : "🦍",
        name : "Hasan",
        gitHubLink : "https://github.com/thehasanas",
    },
];

    const InstructorList = instructors.map((instructor) => (

        <InstructorTag key = {instructor.id} instructor = {instructor}/>
    
    ));

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
        {InstructorList}
    </AppWrapper>
  );
};

export default App;
