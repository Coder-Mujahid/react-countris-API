import './App.css'
import LoadData from './cmponent/LoadData'

function App() {
  const h2 ='md:text-5xl text-2xl font-bold text-center py-5 uppercase text-slate-700';
  return (

    <>
    <h2 className={`${h2}`}>REst api data</h2>
     <LoadData></LoadData>
    </>
  )
}

export default App
