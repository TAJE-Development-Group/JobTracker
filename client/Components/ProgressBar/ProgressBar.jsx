import React, { useState, useContext } from 'react';
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
// import 'react-step-progress/dist/index.css';
import './progressBarStyles.css';
// import { context } from '.../Context/context.js'
 

// setup the step content
const step1Content = <h1>Resume Submitted</h1>;
const step2Content = <h1>Contacted/Interview Scheduled</h1>;
const step3Content = <h1>Initial Interview</h1>;
const step4Content = <h1>Further Interviews</h1>;
const step5Content = <h1>Offer</h1>;
const step6Content = <h1>Negotiations</h1>;
const step7Content = <h1>Accepted</h1>;

// setup step validators, will be called before proceeding to the next step
function Validator() {
  return true
}

function step3Validator() {
  // return a boolean
}

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}

// render the progress bar
export default function ProgressBar ({props}) {
  // const { globalState, setGlobalState } = useContext(context)
  // const [progress, setProgress] = useState(globalState[index][step])
  const { progress } = props;

  
  return(
    <div>
            <StepProgressBar
            startingStep={progress}
            onSubmit={onFormSubmit}
            steps={[
              {
                label: 'Resume Submitted',
                // subtitle: '10%',
                // name: 'step 1',
                // content: step1Content
                },
                {
                label: 'Contacted/Interview Scheduled',
                // subtitle: '50%',
                // name: 'step 2',
                // content: step2Content,
                // validator: Validator
                },
                {
                label: 'Initial Interview',
                // subtitle: '100%',
                // name: 'step 3',
                // content: step3Content,
                // validator: Validator
                },
                {
                  label: 'Further Interviews',
                  // subtitle: '50%',
                  // name: 'step 4',
                  // content: step4Content,
                  // validator: Validator
                },
                {
                  label: 'Offer',
                  // subtitle: '50%',
                  // name: 'step 5',
                  // content: step5Content,
                  // validator: Validator
                },
                {
                  label: 'Negotiations',
                  // subtitle: '50%',
                  // name: 'step 6',
                  // content: step6Content,
                  // validator: Validator
                },
                {
                  label: 'Accepted',
                  // subtitle: '50%',
                  // name: 'step 7',
                  // content: step7Content,
                  // validator: Validator
                },
            ]}
            />
        </div>
    )
}