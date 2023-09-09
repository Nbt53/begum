import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import { currentView } from "../public/types/interfaces"

export default function Header({ view, setView }: currentView) {
    setView
    return (
        <div className="header">
            <HeaderTitle />
            <HeaderNav view={view} setView={setView} />
        </div>
    )
}