import { Navbar } from "./Navbar"

export const Header = () => {

   const links = [
     { title: "Home", url: "/" },
     { title: "About", url: "/about" },
     { title: "Contact", url: "/contact" },
     { title: "Products", url: "/products" },
   ];
   console.log(links);
 
  return (
  
    <header>
      <Navbar links={links}/>
    </header>
  
  );
}
