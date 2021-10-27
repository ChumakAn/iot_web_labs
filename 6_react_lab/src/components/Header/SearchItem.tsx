import styles from "./SearchItem.module.scss";


export const SearchItem = () =>{
   return(
       <div className={styles.search}>
          <input type="text" placeholder="What are you looking for?"/>
           <button className={styles.button} type="submit"> Search </button>
       </div>

   )
}