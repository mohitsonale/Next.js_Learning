"use client";

import { useFormStatus } from "react-dom";
import contactAction from "./contact.action";
import { useActionState } from "react";

// export const metadata={

//     title:"Contact Page",                                           // metadata is not be write in client component because it will give error because metadata is only be write in server component
//     description:"THis is my contact page",
//     authors:[{name:"Mohit"},{name:"Rahul",url:"https://rahul.com"}],
//     keywords:["reactjs","nextjs","nodejs","javascript"]
// }


// const contactAction = async (formData)=>{
//     const {name,email,message}=Object.fromEntries(formData.entries());

//     console.log(name,email,message);
// }



const ContactForm = () => {

  const [state, formAction, isPending] = useActionState(contactAction, null);
  return (
    <>
      <form className="max-w-lg mx-auto p-6 mt-20 bg-white/50 rounded-xl shadow-md space-y-5" action={formAction} >

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Submit />
 
      </form>

      <section>
        {
          state && (
            <div className={`max-w-lg mx-auto p-4 mt-4 rounded-lg ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {state.message}
            </div>
          )
        }
      </section>

    </>
  );
};

const Submit=()=>{

  const {pending,data,method,action}=useFormStatus();

  return(
    <>

     <button
          type="submit"
          disabled={pending}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {
            pending ? "Submitting..." : "Submit"
          }
        </button>
    </>
  )
}

export default ContactForm;