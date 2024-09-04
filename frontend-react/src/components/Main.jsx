import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>
            This stock prediction application utilizes machine learning
            techniques, specifically Keras, and LSTM nodel, integrated within
            the Django framework. It forecasts future stock prices by analyzing
            100-day and 200-day moving averages, essential indicators widely
            used by stock analists to inform trading and investment decisions.
          </p>
          <Button text='Explore Now' cls='btn-outline-warning' url='/dashboard' />
        </div>
      </div>
    </>
  )
}

export default Main
