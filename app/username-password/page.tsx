// revisit later need to fix api implementation 
import jsforce from "jsforce"

export default async function Page() {
    // const jsforce = require("jsforce");
    const conn = new jsforce.Connection({
        // loginUrl: "https://orgfarm-0ac5dd05e7-dev-ed.develop.my.salesforce.com"
    });

    // const userInfo = await conn.login(
    // process.env.USERNAME!,
    // process.env.PASSWORD!
    // )

    const userInfo = await conn.login('nascorporate10.2e32e0e97767@agentforce.com', '@NasCog2002#eRtlNDUJtYjpVIYW35WHmm70')
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    return(
        <div>
            Usename-Password
            userInfo: {JSON.stringify(userInfo)}
        </div>
    )
}