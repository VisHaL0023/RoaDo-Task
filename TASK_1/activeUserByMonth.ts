interface UserSession {
    userId: string;
    logged_in: Date;
    logged_out: Date;
    lastSeenAt: Date;
}

function getMonthlySession(
    users: UserSession[]
): { active: number; month: string; logged_in: number }[] {
    const monthlySession: {
        month: string;
        logged_in: number;
        active: number;
    }[] = [];

    const monthlySessionMap: Map<string, Set<string>> = new Map(); // Map for tracking active user per month
    const monthlyLoggedInMap: Map<string, Set<string>> = new Map(); //Map for storing loggedIn users each month

    for (const user of users) {
        const monthYear = `${
            user.logged_in.getMonth() + 1
        } - ${user.logged_in.getFullYear()}`;

        // Update monthly logged in users
        monthlySessionMap.set(
            monthYear,
            new Set([...(monthlyLoggedInMap.get(monthYear) || []), user.userId])
        );

        // Check for active user
        if (
            user.logged_in <= user.lastSeenAt &&
            user.lastSeenAt <= user.logged_out
        ) {
            monthlySessionMap.set(
                monthYear,
                new Set([
                    ...(monthlySessionMap.get(monthYear) || []),
                    user.userId,
                ])
            );
        }
    }

    // Convert maps to array of objects
    for (const [monthYear, activeUsers] of monthlySessionMap) {
        monthlySession.push({
            month: monthYear,
            logged_in: monthlyLoggedInMap.get(monthYear)?.size || 0,
            active: activeUsers.size,
        });
    }

    return monthlySession;
}

// Example usage
const users: UserSession[] = [
    {
        userId: "user1",
        logged_in: new Date("2024-01-05"),
        logged_out: new Date("2024-01-10"),
        lastSeenAt: new Date("2024-01-08"),
    },
    {
        userId: "user2",
        logged_in: new Date("2024-01-15"),
        logged_out: new Date("2024-01-20"),
        lastSeenAt: new Date("2024-01-18"),
    },
    {
        userId: "user1",
        logged_in: new Date("2024-02-05"),
        logged_out: new Date("2024-02-10"),
        lastSeenAt: new Date("2024-02-08"),
    },
    {
        userId: "user3",
        logged_in: new Date("2024-02-15"),
        logged_out: new Date("2024-02-20"),
        lastSeenAt: new Date("2024-02-18"),
    },
    // Add more user activity data here
];

const monthlyActivity = getMonthlySession(users);
console.log(monthlyActivity);
