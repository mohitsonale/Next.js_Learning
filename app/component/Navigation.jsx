import Link from "next/link";

function Navigation(){

    return(
        <header className="grid grid-cols-2 font-work-sans">

        <div>

            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/clientcomponent">ClientComponent</Link>
                </li>
                <li>
                    <Link href="/servercomponent">ServerComponent</Link>
                </li>
                <li>
                    <Link href="/signup">Sign up</Link>
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