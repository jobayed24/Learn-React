
function MangosTree(){

  return(
   <>
     <Mango mango={1} />
    <Mango mango={2} />
    <Mango mango={3} />
   </>

  )
}

function Mango(props){
let mango=props.mango;
  return(
    <p>
      mango serial is: {mango}
    </p>
  )
}

function App() {

  
  return (
    <>
    <MangosTree />
    </>
  )
}

export default App

