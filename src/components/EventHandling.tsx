const EventHandling = () => {

    const handleMouse =(e: React.MouseEvent<HTMLDivElement>) => {
        console.log("mouse entered", e.currentTarget);
    }

    const handleClick =(e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("button clicked", e.currentTarget);
    }
    return (
    <div onMouseEnter={handleMouse}>
        <button onClick={handleClick}>click Me!!!</button>
    </div>
  )
}

export default EventHandling