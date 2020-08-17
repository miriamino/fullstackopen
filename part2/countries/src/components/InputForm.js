import React from 'react'

const InputForm = ({inputValue, handleChange}) =>
<>
    <form>find countries <input value={inputValue} onChange={handleChange}>
      </input>
    </form>
    </>

export default InputForm