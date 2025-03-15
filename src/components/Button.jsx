


// export const Button = (props) => {
//   return (
//       <button type="button" className="bg-indigo-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded m-5" onClick={props.onClick}>{props.text}</button>
//   )
// }

//we can use props or =>Destructuring{name of the props} like {text, onClick,}



//using children to pass html element as props like span in the button
//we use span instead of text props

export const Button = ({ type,onClick, children }) => {
   
  return (
    <button
      type={type}
      className="bg-indigo-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded m-5 w-4/12 mx-auto"
      onClick={onClick}
    >
      {children}
    </button>
  );
};