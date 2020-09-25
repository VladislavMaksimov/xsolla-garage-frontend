import React, { useEffect } from 'react'
import styles from './TagsStyles.module.css'

const Tags = props => {
  const [input, setInput] = React.useState('')
  const [tags, setTags] = React.useState(props.tags)

  useEffect(() => {
    console.log(props.magicTag)
    if (typeof props.magicTag !== 'undefined' && props.magicTag !== '')
      setTags([...tags, props.magicTag])
      props.setAllTags(tags)
  }, [props.magicTag])
  
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = event => {
    event.preventDefault()
    if (input !== '') {
      setTags([...tags, input])
    //props.selectedTags([...tags, input]) зачем это вообще здесь?
      event.target.reset()
      setInput("")
    }
  }

  return (
    <div className={styles.tagsInput}>
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tagTitle}>{tag}</span>
            <span className={styles.tagRemoveIcon} onClick={() => removeTags(index)}>x</span>
            {props.setAllTags(tags) /*здесь теги передаются в родительский компонент*/}
          </li>
        ))}
        <form className={styles.addTag} onSubmit={event => addTags(event)}>
          <button className={styles.addTagButton} type={'submit'}>+</button>
          <input type="text" maxLength="30" placeholder="Добавьте тег" onChange={e => setInput(e.target.value)}/>
        </form>
      </ul>
    </div>
  )
}

export default Tags
