import React from "react";
import jsforce from "jsforce"

export default async function Page() {
    // const jsforce = require("jsforce");
    const conn = new jsforce.Connection({
        // loginUrl: ""
    });

    const userInfo = await conn.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
    )

    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    return(
        <div>
            Usename-Password
        </div>
    )
}