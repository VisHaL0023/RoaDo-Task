interface Trip {
    from: string;
    to: string;
}

interface Shipment {
    pickups: string[];
    dropoffs: string[];
}

function isValidTrips(trips: Trip[], shipment: Shipment): boolean {
    const visitedPoints: Set<string> = new Set(); // Track visited points
    let currentPoint: string | undefined = shipment.pickups[0]; // Start at first pickup point

    for (const trip of trips) {
        // Ensure the trip starts from the current point or is a valid pickup point
        if (
            trip.from !== currentPoint &&
            !shipment.pickups.includes(trip.from)
        ) {
            return false; // Invalid trip
        }

        // Move to the next point
        currentPoint = trip.to;

        // Mark the destination point as visited
        visitedPoints.add(trip.to);

        // Check if the trip ends at a drop-off point
        if (shipment.dropoffs.includes(trip.to)) {
            // If not all pickups have been visited before this drop-off, it's an invalid trip
            if (
                !shipment.pickups.every((pickup) => visitedPoints.has(pickup))
            ) {
                return false;
            }
        }
    }

    // Check if all pickups and drop-offs have been visited
    return (
        shipment.pickups.every((pickup) => visitedPoints.has(pickup)) &&
        shipment.dropoffs.every((dropoff) => visitedPoints.has(dropoff))
    );
}

// Example usage
const shipment: Shipment = {
    pickups: ["A", "B"],
    dropoffs: ["C", "D"],
};

const trips1: Trip[] = [
    { from: "A", to: "W" },
    { from: "B", to: "W" },
    { from: "W", to: "C" },
    { from: "W", to: "D" },
];

const trips2: Trip[] = [
    { from: "A", to: "W" },
    { from: "B", to: "W" },
    { from: "W", to: "C" },
    { from: "W", to: "D" },
    { from: "W", to: "E" }, // Additional trip to an invalid destination
];

console.log(isValidTrips(trips1, shipment)); // Output: true (valid set of trips)
console.log(isValidTrips(trips2, shipment)); // Output: false (invalid set of trips)
