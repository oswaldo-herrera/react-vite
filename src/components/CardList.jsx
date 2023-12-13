import Card from "./Card"

export default function CardList() {
    return(
        <main className="card-list">
            <Card image="💡" titulo="Instant Server Start" parrafo="On demand file serving over native ESM, no bundling required!"/>
            <Card image="⚡️" titulo="Lightning Fast HMR" parrafo="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
            <Card image="🛠️" titulo="Rich Features" parrafo="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
            <Card image="📦" titulo="Optimized Build" parrafo="Pre-configured Rollup build with multi-page and library mode support."/>
            <Card image="🔩" titulo="Universal Plugins" parrafo="Rollup-superset plugin interface shared between dev and build."/>
            <Card image="🔑" titulo="Fully Typed APIs" parrafo="Flexible programmatic APIs with full TypeScript typing."/>
        </main>
    )
}