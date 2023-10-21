import './App.css'
import Alldetais from './cmponent/Detalis'
import LoadData from './cmponent/LoadData'

function App() {
  return (
    <>
    <h2 className='md:text-5xl text-2xl font-bold text-center py-5 uppercase text-orange-700'>REst api data</h2>
     <LoadData></LoadData>
    {/* <Alldetais></Alldetais> */}
    </>
  )
}

export default App
