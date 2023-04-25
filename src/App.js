import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

const App  = ()=> {

  const date = new Date();

  const datesReference = {
    currentDay: date.getDay(),
    currentMonth: date.getMonth() + 1,
    currentYear: date.getFullYear()
  }

  const [formData, setformData] = useState({
      userDay: null,
      userMonth: null,
      userYear: null
  })

  const [outputData, setOutputData] = useState({
      outputDay: null,
      outputMonth: null,
      outputYear: null
  })

  const handleFormChange = e => {
      setformData(prevFormData => {
          return {
              ...prevFormData,
              [e.target.name]: Number(e.target.value)
          }
      })
  }
  console.log(datesReference.currentMonth);

  const yearsOld = ()=> {
    let localYear = 0;
    for(let i=formData.userYear; i < datesReference.currentYear; i++) {
        localYear += 1;
      }
      setOutputData(prev => ({...prev, outputYear: localYear}))
  }

  const monthOld = ()=> {/* una funzione che ritorna quanti mesi sono passati dall'ultimo compleanno */
    const localmonths = new Array(12).fill(0).map((_, i) => i + 1);
    let userMonthDate= localmonths[formData.userMonth - 1] ;
    let count = 0;
   
    console.log(count);
  }

  console.log(monthOld());

  return (
    <div className="App">
      <div className="w-5/6 md:w-2/5 lg:w-2/5 bg-green-500 p-5 rounded rounded-br-lg overflow-hidden">
        <Form 
          formData={formData}
          datesReference={datesReference}
          handleChange={handleFormChange}
        />
        <div className="flex items-center my-3"> {/* separator div */}
          <div className="h-0.5 bg-gray-500 w-full"></div>
          <svg role="button" onClick={()=> monthOld()} className="p-2 rounded-full bg-violet-600 cursor-pointer hover:bg-black transition duration-200" xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </div>
        <Results 
          datesReference={datesReference}
          formData={formData}
          outputData={outputData}
        />
      </div>
    </div>
  );
}

export default App
