import { currentView } from "../public/types/interfaces"

export default function HeaderNav({ view, setView }: currentView) {
    const views = ['Home', 'About', 'Photography', 'Videos']
    const displayLink = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setView(target.id)

    }
    return (

        <nav className="navBar">

            {views.map((v) => {
                if (v === view) {
                    return (
                        <div id={v} onClick={displayLink} className="navBar__item navBar__selected">
                            <span className="navBar__text">{v}</span>
                        </div>
                    )
                } else {
                    return (
                        <div id={v} onClick={displayLink} className="navBar__item">
                            <span className="navBar__text">{v}</span>
                        </div>
                    )
                }
            })}
        </nav>

    )
}