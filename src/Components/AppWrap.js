import NavigationDots from "./NavigationDots"

// Higher-Order-Component to wrap other components inside of.
const AppWrap = (Component, idName) => function HOC() {
    return (
        <div id={idName} className={`app__container`}>
            <div className="customize">
                <Component />
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap