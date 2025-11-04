import Link from "next/link";

export default function Home({} : PageProps<'/'>) {
  return (
    <>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}
