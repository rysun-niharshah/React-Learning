export default function Events() {

    return (
        <>
            <div draggable onDrag={() => console.log("Dragging")} style={{ display: "inline-block", background: "#f0f0f0", padding: "10px", borderRadius: "5px", cursor: "grab", marginBottom: "0" }}>
                Drag me!
            </div>
            <div
                onDrop={() => alert("Dropped!")}
                onDragOver={(e) => e.preventDefault()}
                className="mt-4 p-4 border border-dashed border-gray-300 rounded"
            >
                Drop here!
            </div>

            <img
                src="../src/assets/hero.png"
                onLoad={() => {
                    console.log("Loaded");
                    console.log("Image loaded successfully");
                }}
                onError={() => console.log("Image failed to load")}
            />
        </>
    );
}
