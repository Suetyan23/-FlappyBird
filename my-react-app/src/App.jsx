import Card from "./Card.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ReusableList  from "./ReusableList.jsx"
import Button from "./Button.jsx"
import MyComponent from "./MyComponent.jsx"
import OnChange from "./OnChange.jsx"
import ToDoList from "./ToDoList/ToDoList.jsx"
import DigitalClock from "./DigitalClock.jsx"
import Stopwatch from "./Stopwatch.jsx"



function App() {

const fruits =[{id:1, name:"orange", calories:95},
                {id:2, name:"banana", calories:45},
                {id:3, name:"apple", calories:55},
                {id:4, name:"durian", calories:85}];

const vegetables =[{id:5, name:"potato", calories:95},
                    {id:6, name:"broccoli", calories:45},
                    {id:7, name:"brinjal", calories:55},
                    {id:8, name:"pumpkin", calories:85}];
                 


  return (
    <>
     <Card/>
     <Student name="Sponge" age={15} isStudent={true}/>
     <Student name="Bob" age={45} isStudent={false}/>
     <Student/>
     <UserGreeting isLoggedIn ={true} username="Yan"/>
     <UserGreeting/>
     <List/>

    <ReusableList items={fruits} category="Fruits"/>
    <ReusableList items={vegetables} category="Vegetables"/>

    <Button/>
    <MyComponent/>
    <OnChange/>
    <ToDoList/>
    <DigitalClock/>
    <Stopwatch/>
    </>
  )
}

export default App
