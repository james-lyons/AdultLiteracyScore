import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {

   state = {
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
      q50: false,
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
         '37. Developed a early sleep schedule (asleep before 12pm)',
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
      ]

      const handleBoxCheck = (e) => {
         const { name, value } = e.target;

         if(value==='true') {
            return this.setState({
               [name]: false
            });
         } else {
            return this.setState({
               [name]: true
            });
         };
      };

      const getKey = (questionString) => {
         const key = questionString.slice(0, 2);
         return key;
      };

      const populateQuestions = (questions) => {
         const questionArray = questions.map((question) => 
            <>
               <label>
                  { question }
                  <input
                     name={`q${ getKey(question) }`}
                     type='checkbox'
                     value={ this.state.q1 }
                     onClick={ (e) => handleBoxCheck(e) }
                  />
               </label>
               <br/>
            </>
         );
         return questionArray
      };

      const calculateScore = () => {
         const questions = this.state;
         let score = 0;

         for (let [key, value] of Object.entries(questions)) {
            if(value===true) {
               score=score+2;
            };
         };

         if (score <= 20) {
            alert(`You are ${ score }% adult. Here, take a juicebox and go back to doing your homework.`);

         } else if (score <= 40 ) {
            alert(`You are ${ score }% adult. You're becoming a big boy / girl, yay!!.`);

         } else if (score <= 60 ) {
            alert(`You are ${ score }% adult. You're on your way to becoming a real adult! Fantastic.`);

         } else if (score <= 80 ) {
            alert(`You are ${ score }% adult. You're almost a full-fledged adult! So much for you to still not do.`);

         } else {
            alert(`You are ${ score }% adult. Congratz!! All that's left for you to do is Die.`);
         };
      };

      return (
         <>
            <div style={{ padding: '3rem' }}>
               <h1 style={{ padding: '0 3rem' }}>
                  Adult Literacy Test: How much of an adult are you? Find out now!
               </h1>

               <form id="question-box">
                  { populateQuestions(questions) }
               </form>
            </div>

            <div style={{ padding: '0 6rem 6rem 6rem' }}>
               <button style={{ padding: '1rem' }} onClick={ () => calculateScore() }>Calculate Adult Literacy Score</button>
            </div>
         </>
      );
   };
};

export default App;
