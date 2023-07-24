import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-start bg-slate-700 p-5">
      <Link className="text-white font-bold text-lg" href = '/'>Crud App</Link>
      <Link className="text-slate-700 bg-white font-semibold px-3 py-2 text-sm " href = '/add'>Add topic</Link>
    </nav>
  )
}

export default Navbar
