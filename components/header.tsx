import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className="text-center my-10">
        <p className="text-3xl">Trending</p>
        <p>See what the Github community is most excited about today.</p>
      </div>

      <div className="card p-3">
        <div className="btn-group flex cursor-pointer">
          <Link href="/repositories">
            <a
              className={`py-2 px-6 rounded-l-lg ${
                router.pathname === "/repositories" ? "bg-blue-500" : ""
              }`}
            >
              Repositories
            </a>
          </Link>

          <Link href="/developers">
            <a
              className={`py-2 px-6 rounded-r-lg ${
                router.pathname === "/developers" ? "bg-blue-500" : ""
              }`}
            >
              Developers
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
