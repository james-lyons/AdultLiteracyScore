import React, { PureComponent } from 'react';
import { Checkbox, List, Button, Modal, Image } from 'semantic-ui-react'
import './App.css';
import babyIcon from './files/babyIcon.svg'
import kidsIcon from './files/kidsIcon.svg'
import youngAdultIcon from './files/youngAdultIcon.svg'
import adultTeacherIcon from './files/adultTeacherIcon.svg'
import oldPersonsIcon from './files/oldPersonsIcon.svg'

class App extends PureComponent {

   state = {
      questions: {
         q01: false,
         q02: false,
         q03: false,
         q04: false,
         q05: false,
         q06: false,
         q07: false,
         q08: false,
         q09: false,
         q10: false,
         q11: false,
         q12: false,
         q13: false,
         q14: false,
         q15: false,
         q16: false,
         q17: false,
         q18: false,
         q19: false,
         q20: false,
         q21: false,
         q22: false,
         q23: false,
         q24: false,
         q25: false,
         q26: false,
         q27: false,
         q28: false,
         q29: false,
         q30: false,
         q31: false,
         q32: false,
         q33: false,
         q34: false,
         q35: false,
         q36: false,
         q37: false,
         q38: false,
         q39: false,
         q40: false,
         q41: false,
         q42: false,
         q43: false,
         q44: false,
         q45: false,
         q46: false,
         q47: false,
         q48: false,
         q49: false,
         q50: false
      },
      showModal: false,
      score: 0,
   };

   render() {

      const questions = [
         '01. Finished primary education',
         '02. Finished secondary education',
         '03. Do your own chores / cleaning',
         '04. Do your own grocery shopping',
         '05. Do your own cooking',
         '06. Made an appointment at a bank alone',
         '07. Have a savings account',
         '08. Have a checking account',
         '09. Have invested in a retirement account',
         '10. Have a credit card',
         '11. Have checked your credit score / planned long term finances',
         '12. Balanced bank statements',
         '13. Gotten a doctor',
         '14. Made an appointment with a doctor by yourself',
         '15. Pay for medical insurance / have a job that pays for medical insurance',
         '16. Pay for utilities',
         '17. Pay for rent',
         '18. Pay for phone bill',
         '19. Gotten a drivers license',
         '20. Gotten a passport',
         '21. Traveled a significant distance alone (i.e. outside of home area)',
         '22. Gotten a job (for any paid work)',
         '23. Gotten a full time job (32+ hrs a week)',
         '24. Gotten a career (could continue until retirement)',
         '25. Commute without assistance',
         '26. Paid taxes',
         '27. Moved out of parents / guardians house',
         '28. Purchased a house / individual apartment (i.e. living without dependence on others)',
         '29. Pay for home insurance',
         '30. Purchased a car',
         '31. Pay for car insurance',
         '32. Gotten into a relationship',
         '33. No longer dependent financially on parents / guardians',
         '34. No longer completely socially dependent on an individual friend, family member, partner',
         '35. Gotten into a serious relationship',
         '36. Considered a long-term committed relationship (marriage / alternative partnership)',
         '37. Developed a early sleep schedule (asleep before 12am)',
         '38. Declined invitations for a night out',
         '39. Tried learning different skills (i.e. musical instruments, how to cook, etc.)',
         '40. Paid for luxuries (i.e. expenses beyond basic necessities such as rent or mortgage, food, utilities, transportation; a vacation, an expensive personal project, etc.)',
         '41. Have invested time in exploring art, culture, local attactions or landmarks, i.e. anything new and beyond your normal scope of lived experience',
         '42. Learned how to own a home (i.e. know how take of minor issues, like how to install a dishwasher, replace a light fixture, unclog a drain, etc.)',
         '43. Spend more time doing light leisure activities (i.e. reading, gardening, etc) than socializing outside the home',
         '44. Developed a general schedule and have it written down, such as through the use of a calendar',
         '45. Know how to recycle properly (if you haven’t thought about it you probably don’t)',
         '46. Watch the news / read the paper',
         '47. Developed a personal view on politics (thoughts besides what you’ve heard from friends /family)',
         '48. Had kids',
         '49. Learned how to raise kids (i.e. know how to change a diaper, remember doctors names and contact info, have school drop-off and playdate schedules)',
         '50. Wrote a will, prepared for the eventuality of death'
      ];

      const handleBoxCheck = (e, data) => {
         const { questions } = this.state;
         const { name, checked } = data;

         if(checked===true) {
            return this.setState({
               questions: { ...questions, [name]: true }
            })
         } else {
            return this.setState({
               questions: { ...questions, [name]: false }
            });
         }
      };

      const getKey = (questionString) => {
         const key = questionString.slice(0, 2);
         return key;
      };

      const populateQuestions = (questions) => {
         const questionArray = questions.map((question) => 
               <List.Item
                  className='list-items'
                  key={`q${ getKey(question) }`}
               >
                  <Checkbox
                     className='checkbox-items'
                     label={ question }
                     name={`q${ getKey(question) }`}
                     type='checkbox'
                     defaultValue={ false }
                     onClick={ (e, data) => handleBoxCheck(e, data) }
                  />
               </List.Item>
         );
         return questionArray
      };

      const scoreModal = () => {
         const { score } = this.state;
         const baby = `You are ${ score }% adult. You're still a baby. Go play with some blocks or somethin...`;
         const child = `You are ${ score }% adult. You're becoming a big boy / girl, yay!!. Here, take a juicebox and go back to doing your homework.`;
         const youngAdult = `You are ${ score }% adult. You're on your way to becoming a real adult! Fantastic. Bills! Taxes! Have fun! `;
         const adult = `You are ${ score }% adult. You're almost a full-fledged adult! So much for you to still not do. It's all downhill from here`;
         const grandPerson = `You are ${ score }% adult. Congratz!! All that's left for you to do is die.`;

         if (score < 20) {
            return (
               <Modal.Content image>
                  <Image size='medium' src={ babyIcon } wrapped />
                  <Modal.Description>
                     <h1>Adult Literacy Score: { this.state.score } &#37;</h1>
                     <h3>{ baby }</h3>
                  </Modal.Description>
               </Modal.Content>
            );
         } else if (score < 40) {
            return (
               <Modal.Content image>
                  <Image size='medium' src={ kidsIcon } wrapped />
                  <Modal.Description>
                     <h1>Adult Literacy Score: { this.state.score } &#37;</h1>
                     <h3><h3>{ child }</h3></h3>
                  </Modal.Description>
               </Modal.Content>
            );
         } else if (score < 60) {
            return (
               <Modal.Content image>
                  <Image size='medium' src={ youngAdultIcon } wrapped />
                  <Modal.Description>
                     <h1>Adult Literacy Score: { this.state.score } &#37;</h1>
                     <h3><h3>{ youngAdult }</h3></h3>
                  </Modal.Description>
               </Modal.Content>
            );
         } else if (score < 80) {
            return (
               <Modal.Content image>
                  <Image size='medium' src={ adultTeacherIcon } wrapped />
                  <Modal.Description>
                     <h1>Adult Literacy Score: { this.state.score } &#37;</h1>
                     <h3><h3>{ adult }</h3></h3>
                  </Modal.Description>
               </Modal.Content>
            );
         } else {
            return (
               <Modal.Content image>
                  <Image size='medium' src={ oldPersonsIcon } wrapped />
                  <Modal.Description>
                     <h1>Adult Literacy Score: { this.state.score } &#37;</h1>
                     <h3><h3>{ grandPerson }</h3></h3>
                  </Modal.Description>
               </Modal.Content>
            );
         };
      };

      const calcScore = (questions) => {
         let score = 0;

         for (let [key, value] of Object.entries(questions)) {
            if(value===true) {
               score=score+2;
            };
         };

         this.setState({ score })
      };

      const calculateScore = async () => {
         const questions = this.state.questions;
         await calcScore(questions);
      };

      const handleModal = (modalSetting) => {
         this.setState({ showModal: modalSetting });
         calculateScore();
      };

      const { showModal } = this.state;

      return (
         <>
            <div id='container'>
               <h1 id="header">
                  Adult Literacy Test: How much of an adult are you? Find out now!
               </h1>

               <div id='sub-container'>
                     <form id="question-box">
                        <List as='ol'>
                           { populateQuestions(questions) }
                        </List>
                     </form>

                  <div id="button-container">
                     <Modal
                        onOpen={ () => {
                           handleModal(true);
                        }}
                        onClose={ () => handleModal(false) }
                        showModal={ showModal }
                        trigger={<Button id='button' primary>Calculate Adult Literacy Score</Button>}
                     >
                        {  this.state.showModal && scoreModal() }
                     </Modal>
                  </div>
               </div>
            </div>
         </>
      );
   };
};

export default App;
