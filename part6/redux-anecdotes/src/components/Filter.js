
import React from 'react'
import { useDispatch } from 'react-redux'
import { filterVisibility } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        dispatch(filterVisibility(event.target.value))
    }
    return (
        <div>
            filter <input name='filter' onChange={handleChange} />
        </div>
    )
}

export default Filter