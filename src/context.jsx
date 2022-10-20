import React, {useState, useContext, useEffect } from 'react';

const AppContext = React.createContext()

import axios from 'axios'
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


const AppProvider = ({children}) => {

const [days, setDays] = useState([])

  const fetchDays = async (url) => {
    try {
      const {data} = await axios.get(url)
      if (data.days) {
        setDays(data.days)
      } else {
        setDays([])
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchDays(url)
  },[])
  
  return <AppContext.Provider
           value={{days}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}



export {AppContext, AppProvider}