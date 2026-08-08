import Link from "next/link";

function Navigation(){

    return(
        <header className="grid grid-cols-2">

        <div>

            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>
            </ul>
        </div>
        </header>
    )
}

export default Navigation;