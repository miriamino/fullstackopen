import React from 'react'

const PersonForm = ({onSubmit, nameValue, numberValue, nameChange, numberChange}) =>
    <>
        <form onSubmit={onSubmit}>
            <div>
                name: <input
                    value={nameValue}
                    onChange={nameChange}
                />
            </div>
            <div>
                number: <input
                    value={numberValue}
                    onChange={numberChange}
                />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    </>


export default PersonForm