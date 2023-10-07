import Link from "next/link";

const routes = [
    { label: "Draw", route: "draw" },
    { label: "Notes", route: "notes" },
    { label: "Canvas Note", route: "notes/canvas" },
];
const CentralNavigation = ({ ...props }) => {
    return (
        <nav>
            <ul>
                {routes.map((e: { label: string; route: string }, i) => (
                    <li key={`${i}-element-nav-central`}>
                        <Link href={e.route}>{e.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default CentralNavigation;
