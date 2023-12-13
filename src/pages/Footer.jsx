import Nav from "../nav/Nav";
const tags=[
    {    "id":1,
        "name": "Web Devlopment"},
    {    "id":2,
        "name": "Graphics"},
    {    "id":3,
        "name": "Logo Design"},
    {    "id":4,
        "name": "Arts & Drawings"},
    {    "id":5,
        "name": "UI/UX"},
    {    "id":6,
        "name": "Digital Marketing"},
    {    "id":7,
        "name": "Video Editing"},
    
]


export default function Footer(props){
    const tagNames=(lists,index)=>{
        return lists.map(list => <span key={list.id} className="m-3  p-2 bg-slate-300 rounded-md text-slate-500 cursor-pointer">{list.name}</span>) 
    }
    

    return( 
        
        
        
    
    <footer className="h-96 bg-slate-800 text-slate-100 max-sm:h-min   ">
        <div className="h-96 m-auto max-sm:h-min">

        
        <div className="flex justify-around items-center max-sm:flex-col" >
            <div className="card p-4 w-1/5 max-sm:w-auto max-sm:text-center">
                <h2 className="text-xl py-4 font-bold  text-center">Evo Design Labs</h2>
                <p>Elevate your digital presence with our expert services—web development, graphic design, video editing, and logo creation. Transforming ideas into impactful realities.</p>

            </div>
            <div className="card w-4/12 p-4  ">
                <div className="flex items-center justify-center">

                <span className="material-icons text-slate-50 m-4 cursor-pointer">facebook</span>
                <span className="material-icons text-slate-50 m-4 cursor-pointer">mail</span>
                <span className="material-icons text-slate-50 m-4 cursor-pointer">phone</span>

                </div>
            </div>
            <div className="card p-4  h-60 w-4/12 max-sm:hidden">
            <h2 className="text-xl py-4 font-bold text-center ">Services</h2>
            <div className=" flex flex-wrap">
            
             {tagNames(tags)}   
            
            
            </div>
                

            </div>
        </div>
        <p className="text-center mt-20">all Rights are reserved by &copy; <span className="font-bold">Evo Design Labs</span></p>
        </div>

    </footer>
    
    
    )

}