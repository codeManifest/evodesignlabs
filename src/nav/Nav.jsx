import { NavLink } from "react-router-dom"
export default function Nav() {
    return(
        <>
        <header className="flex justify-between px-4 py-3 absolute w-full top-0 bg-slate-50 z-20">
            <div className="logo"><span className="font-bold text-slate-500">Evo</span> Design Labs</div>
            <nav className="max-sm:hidden">
                <NavLink  className="px-4" to="/" >Home </NavLink>
                <NavLink  className="px-4"to="/contact" >Contact </NavLink>
                <NavLink className="px-4" to="/about" >About  </NavLink>
                <NavLink  className="px-4"to="/terms" >Terms </NavLink>

            </nav>
        </header>
        
        </>
    )
    
}