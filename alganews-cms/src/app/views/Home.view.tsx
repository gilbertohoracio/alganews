import usePageTitle from "../../core/hooks/usePageTitle"

export default function HomeView() {
    usePageTitle('Home')
    return <div>
        <h1>
            Home
        </h1>
    </div>
}