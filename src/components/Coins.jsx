import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../main'
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'

const Coins = (n) => {

  const[coins, setCoins] = useState([])
  const[loading, setLoading] = useState(true)
  const[error, setError] = useState(false)
  const[page, setPage] = useState(1)
  const[currency, setCurrency] = useState("inr")

  const currencySymbol = 
      currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"


    useEffect(()=> {

      const fetchCoins = async() => {

        try{
          
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page${page}`)
            setCoins(data)
            setLoading(false)

        } catch(error) {

          setError(true)
          setLoading(false)

        }

        }
        fetchCoins()
    }, [currency, page])

  if (error) return <ErrorComponent message={"error while fetching API"}/>


  return (
    <Container maxW={'container.xl'}>

      {loading ? <Loader /> : <>

      <HStack wrap={"wrap"}>

        

          {
            coins.map((i)=>{
              return (
                <CoinCard 
                  key = {i.id}
                  id= {i.id}
                  name ={i.name} 
                  price= {i.current_price}
                  img = {i.image}
                  symbol = {i.symbol}
                  currencySymbol={currencySymbol}
                  />
              )
            })
          }

      </HStack>
     </>}

    </Container>
  )
}





export default Coins

