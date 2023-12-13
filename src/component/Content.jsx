import Button from "./Button"
export default function Content(props){
    let {desc,title}=props
    return(

         <div className="w-2/4 px-5 text-xl max-sm:w-auto">
            <h2 className="text-red-600 font-bold text-4xl my-5">{title}</h2>
            <p  className="text-blue-800 py-2">{desc}</p>
            <div className="flex justify-center m-5">
            <Button btn="Hire Us" />

            </div>

         </div>
         
         )}