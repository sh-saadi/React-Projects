
const App = () => {
  const user = {
        username:'Saad ur Rahman',
         age:26,
      }
      localStorage.setItem('user',JSON.stringify(user))
      const users = JSON.parse(localStorage.getItem('user'))
      console.log(users);
      
  return (
    <div>
    App
    </div>
  )
}

export default App
