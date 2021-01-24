import {InstructorWrapper, Emoji, Name, GoToGithub} from "./styles.js";

const InstructorTag = (props) => {
    <InstructorWrapper onClick={() => window.open(props.instructor.gitHubLink)}
        >
          <Emoji>{props.instructor.emoji}</Emoji>
          <Name>{props.instructor.name}</Name>
          <GoToGithub>Go to GitHub</GoToGithub>
    </InstructorWrapper>

  // return InstructorTag;
};

export default InstructorTag;
