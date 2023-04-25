import React from "react"

const Form = ({handleChange, formData, datesReference})=> {

    const {userDay, userMonth, userYear} = formData
    const {currenttDay, currentMonth, currentYear} = datesReference

    return(
        <form className="flex justify-between items-center gap-4 ">
            <div className="flex flex-col items-start">
                <label>Day</label>
                <input 
                    type="text"
                    placeholder="DD"
                    onChange={handleChange}
                    name="usetDay"
                    className={userDay > currenttDay ? "h-10 w-full outline-red-500" :"h-10 w-full"  }                            	
                    required
                />
            </div>
            <div className="flex flex-col items-start">
                <label>Month</label>
                <input 
                    type="text"
                    placeholder="MM"
                    onChange={handleChange}
                    name="userMonth"
                    className="h-10 w-full"
                    required
                />
            </div>
            <div className="flex flex-col items-start">
                <label>Year</label>
                <input 
                    type="text"
                    placeholder="YY"
                    onChange={handleChange}
                    name="userYear"
                    className="h-10 w-full"
                    required
                />
            </div>
        </form>
    )
}

export default Form