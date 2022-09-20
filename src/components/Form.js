import { useState } from 'react'
import { checkType } from './Util'



const Form = () => {

    //const userDetails = [{}]
    const [details, setDetails] = useState({})
    
    const valueHandler = (e) => {
        //details[e.target.name] = [e.target.name]
        setDetails({...details, [e.target.name]:e.target.value})

        // let _details = [...details]
        // _details.push({name:e.target.name, value:e.target.value})
        // setDetails(_details)
    }
    const onSubmit = (e) => {
		e.preventDefault()
		console.log(details)
	}

    // sample data array of objects
    const data = [
        {
            type: "text",
            name: "text",
            onChange: valueHandler,
            //id: "",
            class: "input",
            flex: true,
            value: details.text,
        },
        {
            type: "email",
            name: "email",
            onChange:valueHandler,
            //id: "",
            class: "input",
            flex: true,
            value: details.email,
        },
        {
            type: "password",
            name: "password",
            onChange:valueHandler,
            class: "input",
            flex: true,
            value: details.password,
        },
        {
            type: "textarea",
            name: "textarea",
            onChange:valueHandler,
            class: "input",
            flex: true,
        },
        {
            type: "textarea",
            name: "textarea1",
            onChange:valueHandler,
            class: "input",
            flex: true,
        },
        {
            type: "radio",
            name: "radio1",
            id: "radio1",
            value: "male",
            onChange:valueHandler,
            title: "Male",
        },
        {
            type: "radio",
            name: "radio1",
            id: "radio2",
            value: "female",
            onChange:valueHandler,
            title: "Female",
        },
        {
            type: "select",
            name: "select1",
            onChange:valueHandler,
            //id: "",
            options: [
                { value: "v1", title: "value 1" },
                { value: "v2", title: "value 2" },
            ],
        },
        {
            type: "button",
            value: "btn",
            title: "Click Me",
            btnType: "submit",
            //id: "",
            onClick: () => console.log(details),
        },
    ]

  return (
    <form className='container' onSubmit={onSubmit}>
      {data.map((item, index)=> checkType(item, index))}
    </form>
  )
}

export default Form
