import './App.css';

const App=() =>{
  const arr = ['kiran', 'nabin', 'aone','niraj','diwas','Nibbi']
  const filterPerson= arr.filter((item,index)=>{
    if(item!='nabin'){
      return item;
    }
  })

  
  
  
  return (

    <div className="App">

    
    {filterPerson.map((item,index)=>{
      return <li>{item}</li>
    })} 

    </div> 
  );
}

export default App;