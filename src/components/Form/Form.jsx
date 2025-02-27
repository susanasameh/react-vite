import styles from './Form.module.css'

export const Form = () => {
  return (
    <form className={styles.form}>
      <h1>Form</h1>
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        className={styles.input}
        placeholder="Please enter your email"
      />

      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        name="password"
        className={styles.input}
        placeholder="Please enter your password"
      />

      <button type="submit">Login</button>
    </form>
  );
}
