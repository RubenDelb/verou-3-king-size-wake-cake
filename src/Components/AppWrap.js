import NavigationDots from "./NavigationDots"

// Higher-Order-Component to wrap other components inside of.
const AppWrap = (Component, idName) => function HOC() {
    return (
        <div id={idName} className={`app__container`}>
            <Component />
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap