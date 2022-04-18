import './Input.css'
const Input = ({placeholder, handleChange}) => {
    const handleOnChange = (e) => {
        //console.log(e.target.value)
        if (handleChange) {
            handleChange(e.target.value);
        }


    }
    return (
        <input className={'input'}
        placeholder={placeholder}
        onChange={handleOnChange}

        />
    )

}
export default Input