const Checkbox = ({ item, onCheck, checkedId }) => {
  const { name, value } = item

  const isCurrentChecked = item.id === checkedId

  return (
    <fieldset>
      <label htmlFor={value}>{name}</label>
      <input
        type="checkbox"
        id={value}
        name={value}
        value={value}
        checked={isCurrentChecked}
        onChange={() => onCheck(item.id)}
      />
    </fieldset>
  )
}

export default Checkbox
