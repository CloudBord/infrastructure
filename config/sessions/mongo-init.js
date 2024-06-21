db.createUser(
        {
            user: "cloudbord",
            pwd: "admin",
            roles: [
                {
                    role: "readWrite",
                    db: "boardcontents"
                }
            ]
        }
);