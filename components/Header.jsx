import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Image src="/images/logo.jpg" alt="logo" width={200} height={200} />
      {/* Home
Books
About Author
Blog
Contact
 */}
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/">Books</Link>
          <Link href="/">About Author</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
