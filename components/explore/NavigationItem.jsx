import { useRouter } from "next/router";
import Link from "next/link";

const NavItem = (props) => {
  const router = useRouter();

  const isActive = router.pathname === props.href

  const activeBorder = (
    <div
      className={`border border-twitter-blue pb-1 mt-2 rounded-md bg-twitter-blue`}
    ></div>
  );

  return (
    <>
      <Link href={props.href} className={isActive ? "dark:text-white font-medium text-black" : ""}>
        {props.children}
      </Link>
      {isActive && activeBorder}
    </>
  );
};

export default NavItem;
