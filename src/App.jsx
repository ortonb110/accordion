import Accordion from './Components/Accordion';
import data from './Components/Data';


function App() {
 
  return (
    <main className='bg-white w-[50rem] rounded-md shadow-md py-[1.8rem] px-[1.5rem] space-y-[1rem]'>
      {data.map((items)=> {
        return <Accordion key={items.id} questions={items}/>
      })}
    </main>
  );
}

export default App;
