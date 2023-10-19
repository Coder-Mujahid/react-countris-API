import { useEffect, useState } from "react";

function LoadData() {
  const [country, setcountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountry(data);
      });
  }, []);
  return (
    <div className=" w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <Details></Details>
      {country.map((item) => (
        <DisplayData data={item}></DisplayData>
      ))}
    </div>
  );
}

function DisplayData(props) {
  const { name, flags,ccn3 } = props.data;
  

  return (
    
    <div className=" bg-slate-300 flex flex-col rounded-lg overflow-hidden border-2 shadow-black shadow-lg border-slate-200">
        <div className="bg-black ">
            <img className="w-full sm:h-60 h-48" src={flags.png} alt='img' />
        </div>

        <div className="p-4 basis-1/2">
            <h2 className="text-2xl font-bold capitalize pb-2 text-orange-700">{name.common}</h2>
            <p className="pb-2 text-base font-semibold">if you want see more details follow the button</p>
            <button onClick={Details(`${ccn3}`)} className="btn btn-primary w-full">Details</button>
        </div>
    </div>
  )
}

function Details(props) {
    const [data, setdata] = useState([]);

    fetch(`https://restcountries.com/v3.1/alpha/${props}`)
    .then((res) => res.json())
    .then(data =>setdata(data[0]))
    return(
        <div>
        <h2>mujahid</h2>
        {data.map((item) => (
        <Displaydetails data={item}></Displaydetails>
      ))}
        </div>
    )
}



function Displaydetails(props) {
    const { name, flags,ccn3 } = props.data;

return(
    <div>
        <h2>{name.common}</h2>
    </div>
)
    
}
export default LoadData;
